if(!lt.util.load.provided_QMARK_('lt.plugins.vim')) {
goog.provide('lt.plugins.vim');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.util.load');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.keyboard');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.keyboard');
lt.plugins.vim.mode_tags = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"all","all",1014000915),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"editor.keys.vim.ex","editor.keys.vim.ex",3150672050),null,new cljs.core.Keyword(null,"editor.keys.vim.insert","editor.keys.vim.insert",2571573304),null,new cljs.core.Keyword(null,"editor.keys.normal","editor.keys.normal",2927389330),null,new cljs.core.Keyword(null,"editor.keys.vim.visual","editor.keys.vim.visual",2939149503),null,new cljs.core.Keyword(null,"editor.keys.vim.normal","editor.keys.vim.normal",2715619942),null], null), null),new cljs.core.Keyword(null,"normal-editor","normal-editor",1599127685),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.keys.normal","editor.keys.normal",2927389330),null], null), null),new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.keys.vim.normal","editor.keys.vim.normal",2715619942),null], null), null),new cljs.core.Keyword(null,"insert","insert",4125079083),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.keys.vim.insert","editor.keys.vim.insert",2571573304),null,new cljs.core.Keyword(null,"editor.keys.normal","editor.keys.normal",2927389330),null], null), null),new cljs.core.Keyword(null,"visual","visual",4492655282),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.keys.vim.visual","editor.keys.vim.visual",2939149503),null,new cljs.core.Keyword(null,"editor.keys.vim.normal","editor.keys.vim.normal",2715619942),null], null), null),new cljs.core.Keyword(null,"ex","ex",1013907493),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.keys.vim.ex","editor.keys.vim.ex",3150672050),null], null), null)], null);
lt.plugins.vim.mode_change_listener = (function mode_change_listener(ed){return (function (info){return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"mode-change","mode-change",1871227532),info.mode);
});
});
lt.plugins.vim.make_vim_editor = (function make_vim_editor(ed){lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",4174180847),"vim"], null));
lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.keys.vim","editor.keys.vim",1440863219)], null));
lt.objs.editor.on.call(null,ed,"vim-mode-change",lt.plugins.vim.mode_change_listener.call(null,ed));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"mode-change","mode-change",1871227532),"normal");
});
lt.plugins.vim.make_normal_editor = (function make_normal_editor(ed){lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyMap","keyMap",4174180847),"default"], null));
lt.object.remove_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.keys.vim","editor.keys.vim",1440863219)], null));
lt.objs.editor.off.call(null,ed,"vim-mode-change",lt.plugins.vim.mode_change_listener.call(null,ed));
return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"mode-change","mode-change",1871227532),"normal-editor");
});
lt.plugins.vim.__BEH__mode_change = (function __BEH__mode_change(this$,mode){lt.object.remove_tags.call(null,this$,new cljs.core.Keyword(null,"all","all",1014000915).cljs$core$IFn$_invoke$arity$1(lt.plugins.vim.mode_tags));
return lt.object.add_tags.call(null,this$,lt.plugins.vim.mode_tags.call(null,cljs.core.keyword.call(null,mode)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","mode-change","lt.plugins.vim/mode-change",1966479747),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__mode_change,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode-change","mode-change",1871227532),null], null), null));
lt.plugins.vim.__BEH__find_bar_inactive = (function __BEH__find_bar_inactive(this$){if(cljs.core.truth_(lt.objs.context.in_QMARK_.call(null,new cljs.core.Keyword(null,"find-bar.vim","find-bar.vim",1877536541))))
{lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"hide-find","hide-find",1820993238));
return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"find-bar.vim","find-bar.vim",1877536541));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","find-bar-inactive","lt.plugins.vim/find-bar-inactive",4377718566),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__find_bar_inactive,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inactive","inactive",1038569437),null], null), null));
lt.plugins.vim.__BEH__map_keys = (function __BEH__map_keys(this$,ks){lt.objs.console.error.call(null,[cljs.core.str(new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346)),cljs.core.str(" is deprecated and will be removed in 0.3.0. Instead define these keys under the :editor.keys.vim.normal.cm tag")].join(''));
var seq__6498 = cljs.core.seq.call(null,ks);var chunk__6499 = null;var count__6500 = 0;var i__6501 = 0;while(true){
if((i__6501 < count__6500))
{var vec__6502 = cljs.core._nth.call(null,chunk__6499,i__6501);var k = cljs.core.nth.call(null,vec__6502,0,null);var v = cljs.core.nth.call(null,vec__6502,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__6544 = seq__6498;
var G__6545 = chunk__6499;
var G__6546 = count__6500;
var G__6547 = (i__6501 + 1);
seq__6498 = G__6544;
chunk__6499 = G__6545;
count__6500 = G__6546;
i__6501 = G__6547;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6498);if(temp__4092__auto__)
{var seq__6498__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6498__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6498__$1);{
var G__6548 = cljs.core.chunk_rest.call(null,seq__6498__$1);
var G__6549 = c__5635__auto__;
var G__6550 = cljs.core.count.call(null,c__5635__auto__);
var G__6551 = 0;
seq__6498 = G__6548;
chunk__6499 = G__6549;
count__6500 = G__6550;
i__6501 = G__6551;
continue;
}
} else
{var vec__6503 = cljs.core.first.call(null,seq__6498__$1);var k = cljs.core.nth.call(null,vec__6503,0,null);var v = cljs.core.nth.call(null,vec__6503,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__6552 = cljs.core.next.call(null,seq__6498__$1);
var G__6553 = null;
var G__6554 = 0;
var G__6555 = 0;
seq__6498 = G__6552;
chunk__6499 = G__6553;
count__6500 = G__6554;
i__6501 = G__6555;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__map_keys,new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: Map vim keys for normal mode",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"keys",new cljs.core.Keyword(null,"example","example",3985900764),"{\"<BS>\" \"<PageUp>\",\n \"<Space>\" \"<PageDown>\"}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.vim.__BEH__set_options = (function __BEH__set_options(this$,ks){var seq__6510 = cljs.core.seq.call(null,ks);var chunk__6511 = null;var count__6512 = 0;var i__6513 = 0;while(true){
if((i__6513 < count__6512))
{var vec__6514 = cljs.core._nth.call(null,chunk__6511,i__6513);var k = cljs.core.nth.call(null,vec__6514,0,null);var v = cljs.core.nth.call(null,vec__6514,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__6556 = seq__6510;
var G__6557 = chunk__6511;
var G__6558 = count__6512;
var G__6559 = (i__6513 + 1);
seq__6510 = G__6556;
chunk__6511 = G__6557;
count__6512 = G__6558;
i__6513 = G__6559;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6510);if(temp__4092__auto__)
{var seq__6510__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6510__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6510__$1);{
var G__6560 = cljs.core.chunk_rest.call(null,seq__6510__$1);
var G__6561 = c__5635__auto__;
var G__6562 = cljs.core.count.call(null,c__5635__auto__);
var G__6563 = 0;
seq__6510 = G__6560;
chunk__6511 = G__6561;
count__6512 = G__6562;
i__6513 = G__6563;
continue;
}
} else
{var vec__6515 = cljs.core.first.call(null,seq__6510__$1);var k = cljs.core.nth.call(null,vec__6515,0,null);var v = cljs.core.nth.call(null,vec__6515,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__6564 = cljs.core.next.call(null,seq__6510__$1);
var G__6565 = null;
var G__6566 = 0;
var G__6567 = 0;
seq__6510 = G__6564;
chunk__6511 = G__6565;
count__6512 = G__6566;
i__6513 = G__6567;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","set-options","lt.plugins.vim/set-options",1281877084),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__set_options,new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: Set codemirror vim options",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"vim options",new cljs.core.Keyword(null,"example","example",3985900764),"{\"enableInsertModeEscKeys\" true,\n \"insertModeEscKeys\" \"jk\"}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.vim.__BEH__map_keys_visual = (function __BEH__map_keys_visual(this$,ks){var seq__6522 = cljs.core.seq.call(null,ks);var chunk__6523 = null;var count__6524 = 0;var i__6525 = 0;while(true){
if((i__6525 < count__6524))
{var vec__6526 = cljs.core._nth.call(null,chunk__6523,i__6525);var k = cljs.core.nth.call(null,vec__6526,0,null);var v = cljs.core.nth.call(null,vec__6526,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__6568 = seq__6522;
var G__6569 = chunk__6523;
var G__6570 = count__6524;
var G__6571 = (i__6525 + 1);
seq__6522 = G__6568;
chunk__6523 = G__6569;
count__6524 = G__6570;
i__6525 = G__6571;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6522);if(temp__4092__auto__)
{var seq__6522__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6522__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6522__$1);{
var G__6572 = cljs.core.chunk_rest.call(null,seq__6522__$1);
var G__6573 = c__5635__auto__;
var G__6574 = cljs.core.count.call(null,c__5635__auto__);
var G__6575 = 0;
seq__6522 = G__6572;
chunk__6523 = G__6573;
count__6524 = G__6574;
i__6525 = G__6575;
continue;
}
} else
{var vec__6527 = cljs.core.first.call(null,seq__6522__$1);var k = cljs.core.nth.call(null,vec__6527,0,null);var v = cljs.core.nth.call(null,vec__6527,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__6576 = cljs.core.next.call(null,seq__6522__$1);
var G__6577 = null;
var G__6578 = 0;
var G__6579 = 0;
seq__6522 = G__6576;
chunk__6523 = G__6577;
count__6524 = G__6578;
i__6525 = G__6579;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","map-keys-visual","lt.plugins.vim/map-keys-visual",2774062709),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__map_keys_visual,new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: Map vim keys for visual mode",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"keys",new cljs.core.Keyword(null,"example","example",3985900764),"{\"<BS>\" \"<PageUp>\",\n \"<Space>\" \"<PageDown>\"}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.vim.__BEH__activate_vim = (function __BEH__activate_vim(this$){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword(null,"editor.keys.vim","editor.keys.vim",1440863219))))
{return null;
} else
{return lt.plugins.vim.make_vim_editor.call(null,this$);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","activate-vim","lt.plugins.vim/activate-vim",4199850093),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__activate_vim,new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: Activate vim mode",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.emacs","activate-emacs","lt.plugins.emacs/activate-emacs",2664292249)], null));
lt.plugins.vim.__BEH__load_cm_keys = (function __BEH__load_cm_keys(this$){var seq__6534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"editor.keys.vim.normal.cm","editor.keys.vim.normal.cm",3327375638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)));var chunk__6535 = null;var count__6536 = 0;var i__6537 = 0;while(true){
if((i__6537 < count__6536))
{var vec__6538 = cljs.core._nth.call(null,chunk__6535,i__6537);var k = cljs.core.nth.call(null,vec__6538,0,null);var v = cljs.core.nth.call(null,vec__6538,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__6580 = seq__6534;
var G__6581 = chunk__6535;
var G__6582 = count__6536;
var G__6583 = (i__6537 + 1);
seq__6534 = G__6580;
chunk__6535 = G__6581;
count__6536 = G__6582;
i__6537 = G__6583;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6534);if(temp__4092__auto__)
{var seq__6534__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6534__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6534__$1);{
var G__6584 = cljs.core.chunk_rest.call(null,seq__6534__$1);
var G__6585 = c__5635__auto__;
var G__6586 = cljs.core.count.call(null,c__5635__auto__);
var G__6587 = 0;
seq__6534 = G__6584;
chunk__6535 = G__6585;
count__6536 = G__6586;
i__6537 = G__6587;
continue;
}
} else
{var vec__6539 = cljs.core.first.call(null,seq__6534__$1);var k = cljs.core.nth.call(null,vec__6539,0,null);var v = cljs.core.nth.call(null,vec__6539,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__6588 = cljs.core.next.call(null,seq__6534__$1);
var G__6589 = null;
var G__6590 = 0;
var G__6591 = 0;
seq__6534 = G__6588;
chunk__6535 = G__6589;
count__6536 = G__6590;
i__6537 = G__6591;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","load-cm-keys","lt.plugins.vim/load-cm-keys",4144576509),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__load_cm_keys,new cljs.core.Keyword(null,"desc","desc",1016984067),"Load CodeMirror keys into vim keymap",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.keys.load","app.keys.load",3209213061),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim-save","vim-save",2371358402),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: :w",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"focus-last-editor","focus-last-editor",3007568513));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim.ex","vim.ex",4492408441),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: ex",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.sidebar.command.show_filled.call(null,"vim :",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transient?","transient?",3584270951),true,new cljs.core.Keyword(null,"force?","force?",4040082982),true], null));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim-save-quit","vim-save-quit",3006377502),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: :wq",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur = lt.objs.editor.pool.last_active.call(null);lt.object.raise.call(null,cur,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.object.raise.call(null,cur,new cljs.core.Keyword(null,"close","close",1108660586));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim-quit","vim-quit",2371317652),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: :q",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var cur = lt.objs.editor.pool.last_active.call(null);return lt.object.raise.call(null,cur,new cljs.core.Keyword(null,"close","close",1108660586));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim-nohlsearch","vim-nohlsearch",789495666),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: :nohlsearch",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.clear","find.clear",4338523466));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim-tab-next","vim-tab-next",3029896688),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: :tabn",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.next","tabs.next",3470721749));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim-tab-previous","vim-tab-previous",1484783732),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: :tabp",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"tabs.prev","tabs.prev",3470793237));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim-quit-all","vim-quit-all",2930670824),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: :qa",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"quit","quit",1017386433));
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim.find","vim.find",2371902079),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: find",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (rev_QMARK_){lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"find-bar.vim","find-bar.vim",1877536541));
if(cljs.core.truth_(rev_QMARK_))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.show","find.show",1398717828),true);
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.show","find.show",1398717828));
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim.send-key","vim.send-key",3422058848),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: Send key to vim",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (k){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return CodeMirror.Vim.handleKey(lt.objs.editor.__GT_cm_ed.call(null,ed),k);
} else
{return null;
}
})], null));
lt.plugins.vim.ex_command = (function ex_command(cmd){return CodeMirror.Vim.defineEx(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(cmd));
});
lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"ltexec",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){return cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cljs.core.keyword.call(null,cljs.core.first.call(null,info.args)),cljs.core.next.call(null,info.args));
})], null));
lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"lt_normal_key",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){var seq__6540 = cljs.core.seq.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"editor.keys.vim.normal.cm","editor.keys.vim.normal.cm",3327375638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)),info.argString.trim()));var chunk__6541 = null;var count__6542 = 0;var i__6543 = 0;while(true){
if((i__6543 < count__6542))
{var cmd_group = cljs.core._nth.call(null,chunk__6541,i__6543);if(cljs.core.sequential_QMARK_.call(null,cmd_group))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd_group);
} else
{lt.objs.command.exec_BANG_.call(null,cmd_group);
}
{
var G__6592 = seq__6540;
var G__6593 = chunk__6541;
var G__6594 = count__6542;
var G__6595 = (i__6543 + 1);
seq__6540 = G__6592;
chunk__6541 = G__6593;
count__6542 = G__6594;
i__6543 = G__6595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6540);if(temp__4092__auto__)
{var seq__6540__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6540__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6540__$1);{
var G__6596 = cljs.core.chunk_rest.call(null,seq__6540__$1);
var G__6597 = c__5635__auto__;
var G__6598 = cljs.core.count.call(null,c__5635__auto__);
var G__6599 = 0;
seq__6540 = G__6596;
chunk__6541 = G__6597;
count__6542 = G__6598;
i__6543 = G__6599;
continue;
}
} else
{var cmd_group = cljs.core.first.call(null,seq__6540__$1);if(cljs.core.sequential_QMARK_.call(null,cmd_group))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd_group);
} else
{lt.objs.command.exec_BANG_.call(null,cmd_group);
}
{
var G__6600 = cljs.core.next.call(null,seq__6540__$1);
var G__6601 = null;
var G__6602 = 0;
var G__6603 = 0;
seq__6540 = G__6600;
chunk__6541 = G__6601;
count__6542 = G__6602;
i__6543 = G__6603;
continue;
}
}
} else
{return null;
}
}
break;
}
})], null));
CodeMirror.defineExtension("openDialog",(function (template,callback,options){lt.objs.notifos.msg_STAR_.call(null,template);
return (function (){return lt.objs.notifos.msg_STAR_.call(null,"");
});
}));
}

//# sourceMappingURL=vim_compiled.js.map