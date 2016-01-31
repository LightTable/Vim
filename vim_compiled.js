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
lt.plugins.vim.__BEH__map_keys = (function __BEH__map_keys(this$,ks){lt.objs.console.error.call(null,[cljs.core.str(new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346)),cljs.core.str(" is deprecated and will be removed in 0.3.0. Instead define these keys in a keymap under the :editor.keys.vim.normal.cm tag")].join(''));
var seq__8760 = cljs.core.seq.call(null,ks);var chunk__8761 = null;var count__8762 = 0;var i__8763 = 0;while(true){
if((i__8763 < count__8762))
{var vec__8764 = cljs.core._nth.call(null,chunk__8761,i__8763);var k = cljs.core.nth.call(null,vec__8764,0,null);var v = cljs.core.nth.call(null,vec__8764,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__8822 = seq__8760;
var G__8823 = chunk__8761;
var G__8824 = count__8762;
var G__8825 = (i__8763 + 1);
seq__8760 = G__8822;
chunk__8761 = G__8823;
count__8762 = G__8824;
i__8763 = G__8825;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8760);if(temp__4092__auto__)
{var seq__8760__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8760__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__8760__$1);{
var G__8826 = cljs.core.chunk_rest.call(null,seq__8760__$1);
var G__8827 = c__5635__auto__;
var G__8828 = cljs.core.count.call(null,c__5635__auto__);
var G__8829 = 0;
seq__8760 = G__8826;
chunk__8761 = G__8827;
count__8762 = G__8828;
i__8763 = G__8829;
continue;
}
} else
{var vec__8765 = cljs.core.first.call(null,seq__8760__$1);var k = cljs.core.nth.call(null,vec__8765,0,null);var v = cljs.core.nth.call(null,vec__8765,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__8830 = cljs.core.next.call(null,seq__8760__$1);
var G__8831 = null;
var G__8832 = 0;
var G__8833 = 0;
seq__8760 = G__8830;
chunk__8761 = G__8831;
count__8762 = G__8832;
i__8763 = G__8833;
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
lt.plugins.vim.__BEH__set_options = (function __BEH__set_options(this$,ks){var seq__8772 = cljs.core.seq.call(null,ks);var chunk__8773 = null;var count__8774 = 0;var i__8775 = 0;while(true){
if((i__8775 < count__8774))
{var vec__8776 = cljs.core._nth.call(null,chunk__8773,i__8775);var k = cljs.core.nth.call(null,vec__8776,0,null);var v = cljs.core.nth.call(null,vec__8776,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__8834 = seq__8772;
var G__8835 = chunk__8773;
var G__8836 = count__8774;
var G__8837 = (i__8775 + 1);
seq__8772 = G__8834;
chunk__8773 = G__8835;
count__8774 = G__8836;
i__8775 = G__8837;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8772);if(temp__4092__auto__)
{var seq__8772__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8772__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__8772__$1);{
var G__8838 = cljs.core.chunk_rest.call(null,seq__8772__$1);
var G__8839 = c__5635__auto__;
var G__8840 = cljs.core.count.call(null,c__5635__auto__);
var G__8841 = 0;
seq__8772 = G__8838;
chunk__8773 = G__8839;
count__8774 = G__8840;
i__8775 = G__8841;
continue;
}
} else
{var vec__8777 = cljs.core.first.call(null,seq__8772__$1);var k = cljs.core.nth.call(null,vec__8777,0,null);var v = cljs.core.nth.call(null,vec__8777,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__8842 = cljs.core.next.call(null,seq__8772__$1);
var G__8843 = null;
var G__8844 = 0;
var G__8845 = 0;
seq__8772 = G__8842;
chunk__8773 = G__8843;
count__8774 = G__8844;
i__8775 = G__8845;
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
var seq__8784 = cljs.core.seq.call(null,ks);var chunk__8785 = null;var count__8786 = 0;var i__8787 = 0;while(true){
if((i__8787 < count__8786))
{var vec__8788 = cljs.core._nth.call(null,chunk__8785,i__8787);var k = cljs.core.nth.call(null,vec__8788,0,null);var v = cljs.core.nth.call(null,vec__8788,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__8846 = seq__8784;
var G__8847 = chunk__8785;
var G__8848 = count__8786;
var G__8849 = (i__8787 + 1);
seq__8784 = G__8846;
chunk__8785 = G__8847;
count__8786 = G__8848;
i__8787 = G__8849;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8784);if(temp__4092__auto__)
{var seq__8784__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8784__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__8784__$1);{
var G__8850 = cljs.core.chunk_rest.call(null,seq__8784__$1);
var G__8851 = c__5635__auto__;
var G__8852 = cljs.core.count.call(null,c__5635__auto__);
var G__8853 = 0;
seq__8784 = G__8850;
chunk__8785 = G__8851;
count__8786 = G__8852;
i__8787 = G__8853;
continue;
}
} else
{var vec__8789 = cljs.core.first.call(null,seq__8784__$1);var k = cljs.core.nth.call(null,vec__8789,0,null);var v = cljs.core.nth.call(null,vec__8789,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__8854 = cljs.core.next.call(null,seq__8784__$1);
var G__8855 = null;
var G__8856 = 0;
var G__8857 = 0;
seq__8784 = G__8854;
chunk__8785 = G__8855;
count__8786 = G__8856;
i__8787 = G__8857;
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
lt.plugins.vim.__BEH__load_cm_normal_keys = (function __BEH__load_cm_normal_keys(this$){var seq__8796 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"editor.keys.vim.normal.cm","editor.keys.vim.normal.cm",3327375638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)));var chunk__8797 = null;var count__8798 = 0;var i__8799 = 0;while(true){
if((i__8799 < count__8798))
{var vec__8800 = cljs.core._nth.call(null,chunk__8797,i__8799);var k = cljs.core.nth.call(null,vec__8800,0,null);var v = cljs.core.nth.call(null,vec__8800,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__8858 = seq__8796;
var G__8859 = chunk__8797;
var G__8860 = count__8798;
var G__8861 = (i__8799 + 1);
seq__8796 = G__8858;
chunk__8797 = G__8859;
count__8798 = G__8860;
i__8799 = G__8861;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8796);if(temp__4092__auto__)
{var seq__8796__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8796__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__8796__$1);{
var G__8862 = cljs.core.chunk_rest.call(null,seq__8796__$1);
var G__8863 = c__5635__auto__;
var G__8864 = cljs.core.count.call(null,c__5635__auto__);
var G__8865 = 0;
seq__8796 = G__8862;
chunk__8797 = G__8863;
count__8798 = G__8864;
i__8799 = G__8865;
continue;
}
} else
{var vec__8801 = cljs.core.first.call(null,seq__8796__$1);var k = cljs.core.nth.call(null,vec__8801,0,null);var v = cljs.core.nth.call(null,vec__8801,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__8866 = cljs.core.next.call(null,seq__8796__$1);
var G__8867 = null;
var G__8868 = 0;
var G__8869 = 0;
seq__8796 = G__8866;
chunk__8797 = G__8867;
count__8798 = G__8868;
i__8799 = G__8869;
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
lt.plugins.vim.__BEH__load_cm_visual_keys = (function __BEH__load_cm_visual_keys(this$){var seq__8808 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"editor.keys.vim.visual.cm","editor.keys.vim.visual.cm",1002251293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)));var chunk__8809 = null;var count__8810 = 0;var i__8811 = 0;while(true){
if((i__8811 < count__8810))
{var vec__8812 = cljs.core._nth.call(null,chunk__8809,i__8811);var k = cljs.core.nth.call(null,vec__8812,0,null);var v = cljs.core.nth.call(null,vec__8812,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_visual_key "),cljs.core.str(k)].join('')),"visual");
{
var G__8870 = seq__8808;
var G__8871 = chunk__8809;
var G__8872 = count__8810;
var G__8873 = (i__8811 + 1);
seq__8808 = G__8870;
chunk__8809 = G__8871;
count__8810 = G__8872;
i__8811 = G__8873;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8808);if(temp__4092__auto__)
{var seq__8808__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8808__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__8808__$1);{
var G__8874 = cljs.core.chunk_rest.call(null,seq__8808__$1);
var G__8875 = c__5635__auto__;
var G__8876 = cljs.core.count.call(null,c__5635__auto__);
var G__8877 = 0;
seq__8808 = G__8874;
chunk__8809 = G__8875;
count__8810 = G__8876;
i__8811 = G__8877;
continue;
}
} else
{var vec__8813 = cljs.core.first.call(null,seq__8808__$1);var k = cljs.core.nth.call(null,vec__8813,0,null);var v = cljs.core.nth.call(null,vec__8813,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_visual_key "),cljs.core.str(k)].join('')),"visual");
{
var G__8878 = cljs.core.next.call(null,seq__8808__$1);
var G__8879 = null;
var G__8880 = 0;
var G__8881 = 0;
seq__8808 = G__8878;
chunk__8809 = G__8879;
count__8810 = G__8880;
i__8811 = G__8881;
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
lt.plugins.vim.run_commands = (function run_commands(cmds){var seq__8818 = cljs.core.seq.call(null,cmds);var chunk__8819 = null;var count__8820 = 0;var i__8821 = 0;while(true){
if((i__8821 < count__8820))
{var cmd = cljs.core._nth.call(null,chunk__8819,i__8821);if(cljs.core.sequential_QMARK_.call(null,cmd))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd);
} else
{lt.objs.command.exec_BANG_.call(null,cmd);
}
{
var G__8882 = seq__8818;
var G__8883 = chunk__8819;
var G__8884 = count__8820;
var G__8885 = (i__8821 + 1);
seq__8818 = G__8882;
chunk__8819 = G__8883;
count__8820 = G__8884;
i__8821 = G__8885;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8818);if(temp__4092__auto__)
{var seq__8818__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8818__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__8818__$1);{
var G__8886 = cljs.core.chunk_rest.call(null,seq__8818__$1);
var G__8887 = c__5635__auto__;
var G__8888 = cljs.core.count.call(null,c__5635__auto__);
var G__8889 = 0;
seq__8818 = G__8886;
chunk__8819 = G__8887;
count__8820 = G__8888;
i__8821 = G__8889;
continue;
}
} else
{var cmd = cljs.core.first.call(null,seq__8818__$1);if(cljs.core.sequential_QMARK_.call(null,cmd))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd);
} else
{lt.objs.command.exec_BANG_.call(null,cmd);
}
{
var G__8890 = cljs.core.next.call(null,seq__8818__$1);
var G__8891 = null;
var G__8892 = 0;
var G__8893 = 0;
seq__8818 = G__8890;
chunk__8819 = G__8891;
count__8820 = G__8892;
i__8821 = G__8893;
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