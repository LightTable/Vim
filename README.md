## Vim for Light Table

A thin wrapper around CodeMirror's vim mode that integrates it into Light Table.

For additional Vim-like functionality, see [the guide for Vim Users](https://github.com/LightTable/LightTable/wiki/For-Vim-Users).

## Setup

Install the `Vim` plugin using the Plugin Manager.
Vim keybindings only take effect on new files. Existing files will need to be reopened.

## Mapping Keys

To map keys to normal mode, place them in a keymap under a
`:editor.keys.vim.normal.cm` or `:editor.keys.vim.normal` tag. These tags differ
in what key combos are available, how keys are referred to and what they can map
to. `:editor.keys.vim.normal` is for standard LightTable keybindings that support
standard modifier-key combos e.g. ctrl-Y and map to LightTable command(s). Do
_not_ use this tag to map individual keys, remap keys to other keys or bind to
non-standard key combos e.g. `<Space>ob`.

`:editor.keys.vim.normal.cm` is a tag that bypasses LightTable's normal keyhandling and
interacts directly with the [Vim CodeMirror plugin](https://github.com/LightTable/Vim/blob/master/vim.js).
This allows for the following more powerful but non-standard behavior:

* Key combinations are not limited to modifier keys e.g. `<Space>ob` or `jkl`
* Keys can be mapped to a string of keys or the standard LightTable command(s)
* An individual key can be a keybinding
* Special keys and modifier keys are referred to differently than in standard LightTable keybindings.
  For example, `down` is `<down>` and `Ctrl-x` is `<C-x>`. See the [Vim CodeMirror keymap](https://github.com/LightTable/Vim/blob/master/vim.js#L72-L353)
  for more examples.

Some examples of these two tags:

```clojurescript
;; Map a standard key combo to a command
[:editor.keys.vim.normal "alt-q" :lt.plugins.reflow/reflow]

;; Map an individual key to a LightTable command
[:editor.keys.vim.normal.cm ":" :vim.ex]

;; Remap a key to a sequence of keys
[:editor.keys.vim.normal.cm "j" "gj"]
```

For a thorough example of `:editor.keys.vim.normal.cm`, [see this config](https://github.com/cldwalker/ltfiles/blob/36dbb844a8e1b84fcc3bea64776f7b4e58138353/user.keymap#L81-L195).

To map keys to visual mode, place them in a keymap under a
`:editor.keys.vim.visual.cm` or `:editor.keys.vim.visual` tag. These have the
same behavior as their respective normal tags: `:editor.keys.vim.visual.cm`
supports powerful but non-standard keybindings while `:editor.keys.vim.visual`
supports standard LightTable keybindings.

Our current vim mode version does not support mapping to other modes at this time.


## For Committers

Upgrade `vim.js` with the following where `$VERSION` is a version number tag:

    curl https://raw.githubusercontent.com/codemirror/CodeMirror/$VERSION/keymap/vim.js > vim.js

`vim.js` is currently on CodeMirror version 4.6.0.

### License

Copyright (C) 2013 Kodowa Inc.

Distributed under the MIT license, see license.md for the full text.
