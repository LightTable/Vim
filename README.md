## Added kj as ESC
Apparently CodeMirror doesn't currently allow for multi-key bindings like kj, jk, ii, etc. which many Vim
users map to ESC to decrease repetitive strain (and annoyance). 

I've added in a hack (thanks @cgag for the first version) that does a decent job of simulating this functionality, though it's almost certainly not the best way to do it.

For now though, it makes LT usable for those of us that can't live without our ESC shortcuts. Enjoy!

## Installation
If you need a sequence other than kj to be ESC, edit the vim.js file in this repo starting at line 4041.

Then just replace the vim.js file in your LT plugins folder (on Mac it's in ~/Library/Application Support/LightTable/plugins/Vim but not sure for other OSes) with the new version. You may then need to reload LT.

## Known Issue
Though this version of vim.js does work for macro recording, the hack to bind kj to ESC currently leaves
k characters littered throughout your macro if you use kj to escape from insert mode.

If you know how to fix this (I assume it has to do with adding the right arguments to the cm.replaceRange call.),
please let me know. Until then, I'm just using the actually ESC key when recording macros.

## Vim for Light Table

A thin wrapper around CodeMirror's vim mode that integrates it into Light Table.

## Setup

Add the following to your `user.behaviors` (Ctrl-Space -> Settings: User behaviors) in the `:editor` section

    (:lt.plugins.vim/activate-vim)

### License

Copyright (C) 2013 Kodowa Inc.

Distributed under the GPLv3, see license.md for the full text.
