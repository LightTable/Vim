Like with Clojure and most other big OSS projects, we have a [Contributor's Agreement](https://docs.google.com/a/kodowa.com/forms/d/1ME_PT6qLKUcALUEz1h1yerLF7vP_Rnohpb9RvMLDALg/viewform) that you have to agree to before we can merge. It's a simple adaptation of Twitter's own Contributor's Agreement and just says that by signing this you can't take the code back from us or sue us into oblivion for using it later.

## Bugs

When filing a bug, please confirm that it also occurs on CodeMirror's [vim demo](http://codemirror.net/demo/vim.html). If it does, then the bug should be reported to [CodeMirror](https://github.com/codemirror/CodeMirror/issues) instead of with us.

## Pull requests

Our vim implementation (vim.js) comes directly from CodeMirror. Please do not send pull requests modifying it. Instead, send a pull request [to CodeMirror](https://github.com/codemirror/CodeMirror). Once they release a new version of vim.js, we can upgrade it on this plugin. Thanks!
