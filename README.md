## Vim for Light Table

A thin wrapper around CodeMirror's vim mode that integrates it into Light Table.

## Setup

First, install the `Vim` plugin using the Plugin Manager.

Then, add the following to your `user.behaviors` (Ctrl-Space -> Settings: User behaviors) in the `:editor` section

    (:lt.plugins.vim/activate-vim)

Vim keybindings only take effect on new files. Existing files will need to be reopened.

## For Committers

Upgrade `vim.js` with the following where `$VERSION` is a version number tag:

    curl https://raw.githubusercontent.com/codemirror/CodeMirror/$VERSION/keymap/vim.js > vim.js

### License

Copyright (C) 2013 Kodowa Inc.

Distributed under the GPLv3, see license.md for the full text.
