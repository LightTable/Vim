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
lt.plugins.vim.make_vim_editor = (function make_vim_editor(ed){lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vimMode","vimMode",1474284623),true], null));
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
lt.plugins.vim.__BEH__map_keys = (function __BEH__map_keys(this$,ks){lt.objs.console.error.call(null,[cljs.core.str(new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346)),cljs.core.str(" is deprecated and will be removed in 0.3.0. Instead define these keys in a keymap under the :editor.keys.vim.normal.cm tag")].join(''));
var seq__6518 = cljs.core.seq.call(null,ks);var chunk__6519 = null;var count__6520 = 0;var i__6521 = 0;while(true){
if((i__6521 < count__6520))
{var vec__6522 = cljs.core._nth.call(null,chunk__6519,i__6521);var k = cljs.core.nth.call(null,vec__6522,0,null);var v = cljs.core.nth.call(null,vec__6522,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__6580 = seq__6518;
var G__6581 = chunk__6519;
var G__6582 = count__6520;
var G__6583 = (i__6521 + 1);
seq__6518 = G__6580;
chunk__6519 = G__6581;
count__6520 = G__6582;
i__6521 = G__6583;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6518);if(temp__4092__auto__)
{var seq__6518__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6518__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6518__$1);{
var G__6584 = cljs.core.chunk_rest.call(null,seq__6518__$1);
var G__6585 = c__5635__auto__;
var G__6586 = cljs.core.count.call(null,c__5635__auto__);
var G__6587 = 0;
seq__6518 = G__6584;
chunk__6519 = G__6585;
count__6520 = G__6586;
i__6521 = G__6587;
continue;
}
} else
{var vec__6523 = cljs.core.first.call(null,seq__6518__$1);var k = cljs.core.nth.call(null,vec__6523,0,null);var v = cljs.core.nth.call(null,vec__6523,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__6588 = cljs.core.next.call(null,seq__6518__$1);
var G__6589 = null;
var G__6590 = 0;
var G__6591 = 0;
seq__6518 = G__6588;
chunk__6519 = G__6589;
count__6520 = G__6590;
i__6521 = G__6591;
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
lt.plugins.vim.__BEH__set_options = (function __BEH__set_options(this$,ks){var seq__6530 = cljs.core.seq.call(null,ks);var chunk__6531 = null;var count__6532 = 0;var i__6533 = 0;while(true){
if((i__6533 < count__6532))
{var vec__6534 = cljs.core._nth.call(null,chunk__6531,i__6533);var k = cljs.core.nth.call(null,vec__6534,0,null);var v = cljs.core.nth.call(null,vec__6534,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__6592 = seq__6530;
var G__6593 = chunk__6531;
var G__6594 = count__6532;
var G__6595 = (i__6533 + 1);
seq__6530 = G__6592;
chunk__6531 = G__6593;
count__6532 = G__6594;
i__6533 = G__6595;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6530);if(temp__4092__auto__)
{var seq__6530__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6530__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6530__$1);{
var G__6596 = cljs.core.chunk_rest.call(null,seq__6530__$1);
var G__6597 = c__5635__auto__;
var G__6598 = cljs.core.count.call(null,c__5635__auto__);
var G__6599 = 0;
seq__6530 = G__6596;
chunk__6531 = G__6597;
count__6532 = G__6598;
i__6533 = G__6599;
continue;
}
} else
{var vec__6535 = cljs.core.first.call(null,seq__6530__$1);var k = cljs.core.nth.call(null,vec__6535,0,null);var v = cljs.core.nth.call(null,vec__6535,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__6600 = cljs.core.next.call(null,seq__6530__$1);
var G__6601 = null;
var G__6602 = 0;
var G__6603 = 0;
seq__6530 = G__6600;
chunk__6531 = G__6601;
count__6532 = G__6602;
i__6533 = G__6603;
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
lt.plugins.vim.__BEH__map_keys_visual = (function __BEH__map_keys_visual(this$,ks){lt.objs.console.error.call(null,[cljs.core.str(new cljs.core.Keyword("lt.plugins.vim","map-keys-visual","lt.plugins.vim/map-keys-visual",2774062709)),cljs.core.str(" is deprecated and will be removed in 0.3.0. Instead define these keys in a keymap under the :editor.keys.vim.visual.cm tag")].join(''));
var seq__6542 = cljs.core.seq.call(null,ks);var chunk__6543 = null;var count__6544 = 0;var i__6545 = 0;while(true){
if((i__6545 < count__6544))
{var vec__6546 = cljs.core._nth.call(null,chunk__6543,i__6545);var k = cljs.core.nth.call(null,vec__6546,0,null);var v = cljs.core.nth.call(null,vec__6546,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__6604 = seq__6542;
var G__6605 = chunk__6543;
var G__6606 = count__6544;
var G__6607 = (i__6545 + 1);
seq__6542 = G__6604;
chunk__6543 = G__6605;
count__6544 = G__6606;
i__6545 = G__6607;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6542);if(temp__4092__auto__)
{var seq__6542__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6542__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6542__$1);{
var G__6608 = cljs.core.chunk_rest.call(null,seq__6542__$1);
var G__6609 = c__5635__auto__;
var G__6610 = cljs.core.count.call(null,c__5635__auto__);
var G__6611 = 0;
seq__6542 = G__6608;
chunk__6543 = G__6609;
count__6544 = G__6610;
i__6545 = G__6611;
continue;
}
} else
{var vec__6547 = cljs.core.first.call(null,seq__6542__$1);var k = cljs.core.nth.call(null,vec__6547,0,null);var v = cljs.core.nth.call(null,vec__6547,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__6612 = cljs.core.next.call(null,seq__6542__$1);
var G__6613 = null;
var G__6614 = 0;
var G__6615 = 0;
seq__6542 = G__6612;
chunk__6543 = G__6613;
count__6544 = G__6614;
i__6545 = G__6615;
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
lt.plugins.vim.__BEH__load_cm_normal_keys = (function __BEH__load_cm_normal_keys(this$){var seq__6554 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"editor.keys.vim.normal.cm","editor.keys.vim.normal.cm",3327375638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)));var chunk__6555 = null;var count__6556 = 0;var i__6557 = 0;while(true){
if((i__6557 < count__6556))
{var vec__6558 = cljs.core._nth.call(null,chunk__6555,i__6557);var k = cljs.core.nth.call(null,vec__6558,0,null);var v = cljs.core.nth.call(null,vec__6558,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__6616 = seq__6554;
var G__6617 = chunk__6555;
var G__6618 = count__6556;
var G__6619 = (i__6557 + 1);
seq__6554 = G__6616;
chunk__6555 = G__6617;
count__6556 = G__6618;
i__6557 = G__6619;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6554);if(temp__4092__auto__)
{var seq__6554__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6554__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6554__$1);{
var G__6620 = cljs.core.chunk_rest.call(null,seq__6554__$1);
var G__6621 = c__5635__auto__;
var G__6622 = cljs.core.count.call(null,c__5635__auto__);
var G__6623 = 0;
seq__6554 = G__6620;
chunk__6555 = G__6621;
count__6556 = G__6622;
i__6557 = G__6623;
continue;
}
} else
{var vec__6559 = cljs.core.first.call(null,seq__6554__$1);var k = cljs.core.nth.call(null,vec__6559,0,null);var v = cljs.core.nth.call(null,vec__6559,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__6624 = cljs.core.next.call(null,seq__6554__$1);
var G__6625 = null;
var G__6626 = 0;
var G__6627 = 0;
seq__6554 = G__6624;
chunk__6555 = G__6625;
count__6556 = G__6626;
i__6557 = G__6627;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","load-cm-normal-keys","lt.plugins.vim/load-cm-normal-keys",4304624303),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__load_cm_normal_keys,new cljs.core.Keyword(null,"desc","desc",1016984067),"Load CodeMirror normal keys into vim keymap",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.keys.load","app.keys.load",3209213061),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
lt.plugins.vim.__BEH__load_cm_visual_keys = (function __BEH__load_cm_visual_keys(this$){var seq__6566 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"editor.keys.vim.visual.cm","editor.keys.vim.visual.cm",1002251293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)));var chunk__6567 = null;var count__6568 = 0;var i__6569 = 0;while(true){
if((i__6569 < count__6568))
{var vec__6570 = cljs.core._nth.call(null,chunk__6567,i__6569);var k = cljs.core.nth.call(null,vec__6570,0,null);var v = cljs.core.nth.call(null,vec__6570,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_visual_key "),cljs.core.str(k)].join('')),"visual");
{
var G__6628 = seq__6566;
var G__6629 = chunk__6567;
var G__6630 = count__6568;
var G__6631 = (i__6569 + 1);
seq__6566 = G__6628;
chunk__6567 = G__6629;
count__6568 = G__6630;
i__6569 = G__6631;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6566);if(temp__4092__auto__)
{var seq__6566__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6566__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6566__$1);{
var G__6632 = cljs.core.chunk_rest.call(null,seq__6566__$1);
var G__6633 = c__5635__auto__;
var G__6634 = cljs.core.count.call(null,c__5635__auto__);
var G__6635 = 0;
seq__6566 = G__6632;
chunk__6567 = G__6633;
count__6568 = G__6634;
i__6569 = G__6635;
continue;
}
} else
{var vec__6571 = cljs.core.first.call(null,seq__6566__$1);var k = cljs.core.nth.call(null,vec__6571,0,null);var v = cljs.core.nth.call(null,vec__6571,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_visual_key "),cljs.core.str(k)].join('')),"visual");
{
var G__6636 = cljs.core.next.call(null,seq__6566__$1);
var G__6637 = null;
var G__6638 = 0;
var G__6639 = 0;
seq__6566 = G__6636;
chunk__6567 = G__6637;
count__6568 = G__6638;
i__6569 = G__6639;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","load-cm-visual-keys","lt.plugins.vim/load-cm-visual-keys",1087775082),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__load_cm_visual_keys,new cljs.core.Keyword(null,"desc","desc",1016984067),"Load CodeMirror visual keys into vim keymap",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app.keys.load","app.keys.load",3209213061),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));
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
lt.plugins.vim.run_commands = (function run_commands(cmds){var seq__6576 = cljs.core.seq.call(null,cmds);var chunk__6577 = null;var count__6578 = 0;var i__6579 = 0;while(true){
if((i__6579 < count__6578))
{var cmd = cljs.core._nth.call(null,chunk__6577,i__6579);if(cljs.core.sequential_QMARK_.call(null,cmd))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd);
} else
{lt.objs.command.exec_BANG_.call(null,cmd);
}
{
var G__6640 = seq__6576;
var G__6641 = chunk__6577;
var G__6642 = count__6578;
var G__6643 = (i__6579 + 1);
seq__6576 = G__6640;
chunk__6577 = G__6641;
count__6578 = G__6642;
i__6579 = G__6643;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6576);if(temp__4092__auto__)
{var seq__6576__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6576__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6576__$1);{
var G__6644 = cljs.core.chunk_rest.call(null,seq__6576__$1);
var G__6645 = c__5635__auto__;
var G__6646 = cljs.core.count.call(null,c__5635__auto__);
var G__6647 = 0;
seq__6576 = G__6644;
chunk__6577 = G__6645;
count__6578 = G__6646;
i__6579 = G__6647;
continue;
}
} else
{var cmd = cljs.core.first.call(null,seq__6576__$1);if(cljs.core.sequential_QMARK_.call(null,cmd))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd);
} else
{lt.objs.command.exec_BANG_.call(null,cmd);
}
{
var G__6648 = cljs.core.next.call(null,seq__6576__$1);
var G__6649 = null;
var G__6650 = 0;
var G__6651 = 0;
seq__6576 = G__6648;
chunk__6577 = G__6649;
count__6578 = G__6650;
i__6579 = G__6651;
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
lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"lt_normal_key",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){return lt.plugins.vim.run_commands.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"editor.keys.vim.normal.cm","editor.keys.vim.normal.cm",3327375638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)),info.argString.trim()));
})], null));
lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"lt_visual_key",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){return lt.plugins.vim.run_commands.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"editor.keys.vim.visual.cm","editor.keys.vim.visual.cm",1002251293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)),info.argString.trim()));
})], null));
CodeMirror.defineExtension("openDialog",(function (template,callback,options){lt.objs.notifos.msg_STAR_.call(null,template);
return (function (){return lt.objs.notifos.msg_STAR_.call(null,"");
});
}));
}

//# sourceMappingURL=vim_compiled.js.map