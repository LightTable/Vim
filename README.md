## Vim for Light Table

A thin wrapper around CodeMirror's vim mode that integrates it into Light Table.

## Setup

First, install the `Vim` plugin using the Plugin Manager.

Then, add the following to your `user.behaviors` (Ctrl-Space -> Settings: User behaviors) in the `:editor` section

    (:lt.plugins.vim/activate-vim)

Vim keybindings only take effect on new files. Existing files will need to be reopened.

## Mapping Keys

To map keys to normal mode, add a `:lt.plugins.vim/map-keys` behavior under your `:app` section.
For example:

```clojurescript
  ...
  {:app [
     ...
    (:lt.plugins.vim/map-keys {"j" "gj"
                               "k" "gk"})]}
```

For a thorough example, [see this config](https://github.com/cldwalker/ltfiles/blob/bf5ce36188219622796b794f7dcf7be4d255dd36/settings/user.behaviors#L9-L120)

To map keys to visual mode, add a `:lt.plugins.vim/map-keys-visual` behavior under your `:app` section like above.

CodeMirror does not support mapping to other modes at this time.


## For Committers

Upgrade `vim.js` with the following where `$VERSION` is a version number tag:

    curl https://raw.githubusercontent.com/codemirror/CodeMirror/$VERSION/keymap/vim.js > vim.js

### License

Copyright (C) 2013 Kodowa Inc.

Distributed under the GPLv3, see license.md for the full text.
