(ns lt.plugins.vim
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.util.load :as load]
            [lt.objs.editor.pool :as pool]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.command :as cmd :refer [command]]
            [lt.objs.editor :as editor])
  (:require-macros [lt.macros :refer [behavior]]))

(def mode-tags {:all #{:editor.keys.vim.insert :editor.keys.normal
                       :editor.keys.vim.visual :editor.keys.vim.normal
                       :editor.keys.vim.ex }
                :normal-editor #{:editor.keys.normal}
                :normal #{:editor.keys.vim.normal}
                :insert #{:editor.keys.vim.insert :editor.keys.normal}
                :visual #{:editor.keys.vim.visual :editor.keys.vim.normal}
                :ex #{:editor.keys.vim.ex}})

(defn mode-change-listener [ed]
  (fn [info]
    (object/raise ed :mode-change (.-mode info))))

(defn make-vim-editor [ed]
  (editor/set-options ed {:keyMap "vim"})
  (object/add-tags ed [:editor.keys.vim])
  (editor/on ed "vim-mode-change" (mode-change-listener ed))
  (object/raise ed :mode-change "normal"))

(defn make-normal-editor [ed]
  (editor/set-options ed {:keyMap "default"})
  (object/remove-tags ed [:editor.keys.vim])
  (editor/off ed "vim-mode-change" (mode-change-listener ed))
  (object/raise ed :mode-change "normal-editor"))

(behavior ::mode-change
          :triggers #{:mode-change}
          :reaction (fn [this mode]
                      (object/remove-tags this (:all mode-tags))
                      (object/add-tags this (mode-tags (keyword mode)))))

(behavior ::find-bar-inactive
          :triggers #{:inactive}
          :reaction (fn [this]
                      (when (ctx/in? :find-bar.vim)
                        (cmd/exec! :hide-find)
                        (ctx/out! :find-bar.vim))))

(behavior ::map-keys
          :triggers #{:object.instant}
          :desc "Vim: Map vim keys for normal mode"
          :params [{:label "keys"
                    :example "{\"<BS>\" \"<PageUp>\",\n \"<Space>\" \"<PageDown>\"}"
                    :type :clj}]
          :type :user
          :reaction (fn [this ks]
                      (doseq [[k v] ks]
                        (js/CodeMirror.Vim.map k v "normal"))))

(behavior ::two-letter-escape-sequence
          :desc "Vim: Two-Letter Escape Sequence"
          :params [{:label "Enable"
                    :example "true"
                    :type :string}
                   {:label "Key Sequence"
                    :example "kj"
                    :type :string}
                   {:label "ms Between Keys"
                    :example "200"
                    :type :number}]
          :type :user
          :exclusive true
          :triggers #{:object.instant}
          :reaction  (fn [this enable esc-keys timeout]
                       (let [final {"enableInsertModeEscKeys"
                                    (if (= enable "true")
                                      true
                                      false)}
                             final (if esc-keys
                                     (assoc final "insertModeEscKeys" esc-keys)
                                     final)
                             final (if (and timeout
                                            (> timeout 0))
                                     (assoc final "insertModeEscKeysTimeout" timeout)
                                     final)]
                         (doseq [[k v] final]
                           (js/CodeMirror.Vim.setOption k v)))))

(behavior ::map-keys-visual
          :triggers #{:object.instant}
          :desc "Vim: Map vim keys for visual mode"
          :params [{:label "keys"
                    :example "{\"<BS>\" \"<PageUp>\",\n \"<Space>\" \"<PageDown>\"}"
                    :type :clj}]
          :type :user
          :reaction (fn [this ks]
                      (doseq [[k v] ks]
                        (js/CodeMirror.Vim.map k v "visual"))))

(behavior ::activate-vim
          :triggers #{:object.instant}
          :desc "Vim: Activate vim mode"
          :type :user
          :exclusive [:lt.plugins.emacs/activate-emacs]
          :reaction (fn [this]
                      (when-not (object/has-tag? this :editor.keys.vim)
                        (make-vim-editor this))))

(command {:command :vim-save
          :desc "Vim: :w"
          :exec (fn []
                  (cmd/exec! :save)
                  (cmd/exec! :focus-last-editor))})

(command {:command :vim.ex
          :desc "Vim: ex"
          :hidden true
          :exec (fn []
                  (scmd/show-filled "vim :" {:transient? true
                                             :force? true}))})

(command {:command :vim-save-quit
          :desc "Vim: :wq"
          :exec (fn []
                  (let [cur (pool/last-active)]
                    (object/raise cur :save)
                    (object/raise cur :close)))})

(command {:command :vim-quit
          :desc "Vim: :q"
          :exec (fn []
                  (let [cur (pool/last-active)]
                    (object/raise cur :close)))})

(command {:command :vim-nohlsearch
          :desc "Vim: :nohlsearch"
          :exec (fn []
                  (cmd/exec! :find.clear))})

(command {:command :vim.find
          :desc "Vim: find"
          :hidden true
          :exec (fn [rev?]
                  (ctx/in! :find-bar.vim)
                  (if rev?
                    (cmd/exec! :find.show true)
                    (cmd/exec! :find.show))
                  )})

(command {:command :vim.send-key
          :desc "Vim: Send key to vim"
          :exec (fn [k]
                  (when-let [ed (pool/last-active)]
                    (js/CodeMirror.Vim.handleKey (editor/->cm-ed ed) k)))})

(defn ex-command [cmd]
  (js/CodeMirror.Vim.defineEx (:name cmd) (:name cmd) (:func cmd)))

(ex-command {:name "ltexec"
             :func (fn [cm info]
                     (apply cmd/exec! (-> (.-args info)
                                          (first)
                                          (keyword)) (next (.-args info))))})
