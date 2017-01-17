(ns lt.plugins.vim
  (:require [lt.object :as object]
            [lt.objs.context :as ctx]
            [lt.objs.keyboard :as kb]
            [lt.util.load :as load]
            [lt.objs.editor.pool :as pool]
            [lt.objs.sidebar.command :as scmd]
            [lt.objs.command :as cmd :refer [command]]
            [lt.objs.editor :as editor]
            [lt.objs.console :as console]
            [lt.objs.notifos :as notifos])
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
  ;; TODO: Remove disableInput once we're on a modern version of Vim mode
  ;; See https://github.com/codemirror/CodeMirror/issues/2061
  (editor/set-options ed {:disableInput true})
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
                      (console/error (str ::map-keys " is deprecated and will be removed in 0.3.0. Instead define these keys in a keymap under the :editor.keys.vim.normal.cm tag"))
                      (doseq [[k v] ks]
                        (js/CodeMirror.Vim.map k v "normal"))))

(behavior ::set-options
          :triggers #{:object.instant}
          :desc "Vim: Set codemirror vim options"
          :params [{:label "vim options"
                    :example "{\"enableInsertModeEscKeys\" true,\n \"insertModeEscKeys\" \"jk\"}"
                    :type :clj}]
          :type :user
          :reaction (fn [this ks]
                      (doseq [[k v] ks]
                        (js/CodeMirror.Vim.setOption k v))))

(behavior ::map-keys-visual
          :triggers #{:object.instant}
          :desc "Vim: Map vim keys for visual mode"
          :params [{:label "keys"
                    :example "{\"<BS>\" \"<PageUp>\",\n \"<Space>\" \"<PageDown>\"}"
                    :type :clj}]
          :type :user
          :reaction (fn [this ks]
                      (console/error (str ::map-keys-visual " is deprecated and will be removed in 0.3.0. Instead define these keys in a keymap under the :editor.keys.vim.visual.cm tag"))
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


(behavior ::load-cm-normal-keys
          :triggers #{:app.keys.load}
          :desc "Load CodeMirror normal keys into vim keymap"
          :type :user
          :reaction (fn [this]
                      (doseq [[k v] (:editor.keys.vim.normal.cm @kb/keys)]
                        (js/CodeMirror.Vim.map k
                                               (if (string? (first v)) (first v) (str ":lt_normal_key " k))
                                               "normal"))))

(behavior ::load-cm-visual-keys
          :triggers #{:app.keys.load}
          :desc "Load CodeMirror visual keys into vim keymap"
          :type :user
          :reaction (fn [this]
                      (doseq [[k v] (:editor.keys.vim.visual.cm @kb/keys)]
                        (js/CodeMirror.Vim.map k
                                               (if (string? (first v)) (first v) (str ":lt_visual_key " k))
                                               "visual"))))

;; Ex commands
;; ===========
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

(command {:command :vim-save-quit-x
          :desc "Vim: :x"
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

(command {:command :vim-tab-next
          :desc "Vim: :tabn"
          :exec (fn []
                  (cmd/exec! :tabs.next))})

(command {:command :vim-tab-previous
          :desc "Vim: :tabp"
          :exec (fn []
                  (cmd/exec! :tabs.prev))})

(command {:command :vim-quit-all
          :desc "Vim: :qa"
          :exec (fn []
                  (cmd/exec! :quit))})

;; Other commands
;; ==============
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

(defn run-commands [cmds]
  (doseq [cmd cmds]
    (if (sequential? cmd)
      (apply cmd/exec! cmd)
      (cmd/exec! cmd))))

(ex-command {:name "lt_normal_key"
             :func (fn [cm info]
                     (run-commands (get (:editor.keys.vim.normal.cm @kb/keys) (.trim (.-argString info)))))})

(ex-command {:name "lt_visual_key"
             :func (fn [cm info]
                     (run-commands (get (:editor.keys.vim.visual.cm @kb/keys) (.trim (.-argString info)))))})

;; TODO: Add support for interactive prompt
;; Move to main LT repo once this is done
(js/CodeMirror.defineExtension
 "openDialog"
 (fn [template callback options]
   (notifos/msg* template)
   (fn [] (notifos/msg* ""))))
