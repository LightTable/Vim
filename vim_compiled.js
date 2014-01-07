if(!lt.util.load.provided_QMARK_('lt.plugins.vim')) {
goog.provide('lt.plugins.vim');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.context');
goog.require('lt.objs.context');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.util.load');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

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

lt.plugins.vim.__BEH__map_keys = (function __BEH__map_keys(this$,ks){var seq__7359 = cljs.core.seq.call(null,ks);var chunk__7360 = null;var count__7361 = 0;var i__7362 = 0;while(true){
if((i__7362 < count__7361))
{var vec__7363 = cljs.core._nth.call(null,chunk__7360,i__7362);var k = cljs.core.nth.call(null,vec__7363,0,null);var v = cljs.core.nth.call(null,vec__7363,1,null);CodeMirror.Vim.map(k,v);
{
var G__7365 = seq__7359;
var G__7366 = chunk__7360;
var G__7367 = count__7361;
var G__7368 = (i__7362 + 1);
seq__7359 = G__7365;
chunk__7360 = G__7366;
count__7361 = G__7367;
i__7362 = G__7368;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7359);if(temp__4092__auto__)
{var seq__7359__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7359__$1))
{var c__6528__auto__ = cljs.core.chunk_first.call(null,seq__7359__$1);{
var G__7369 = cljs.core.chunk_rest.call(null,seq__7359__$1);
var G__7370 = c__6528__auto__;
var G__7371 = cljs.core.count.call(null,c__6528__auto__);
var G__7372 = 0;
seq__7359 = G__7369;
chunk__7360 = G__7370;
count__7361 = G__7371;
i__7362 = G__7372;
continue;
}
} else
{var vec__7364 = cljs.core.first.call(null,seq__7359__$1);var k = cljs.core.nth.call(null,vec__7364,0,null);var v = cljs.core.nth.call(null,vec__7364,1,null);CodeMirror.Vim.map(k,v);
{
var G__7373 = cljs.core.next.call(null,seq__7359__$1);
var G__7374 = null;
var G__7375 = 0;
var G__7376 = 0;
seq__7359 = G__7373;
chunk__7360 = G__7374;
count__7361 = G__7375;
i__7362 = G__7376;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","map-keys","lt.plugins.vim/map-keys",2875450346),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__map_keys,new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: Map vim keys",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1116631654),"keys",new cljs.core.Keyword(null,"example","example",3985900764),"{\"<BS>\" \"<PageUp>\",\n \"<Space>\" \"<PageDown>\"}",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"clj","clj",1014002835)], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549));

lt.plugins.vim.__BEH__activate_vim = (function __BEH__activate_vim(this$){if(cljs.core.truth_(lt.object.has_tag_QMARK_.call(null,this$,new cljs.core.Keyword(null,"editor.keys.vim","editor.keys.vim",1440863219))))
{return null;
} else
{return lt.plugins.vim.make_vim_editor.call(null,this$);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","activate-vim","lt.plugins.vim/activate-vim",4199850093),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__activate_vim,new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: Activate vim mode",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.emacs","activate-emacs","lt.plugins.emacs/activate-emacs",2664292249)], null));

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

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"vim.find","vim.find",2371902079),new cljs.core.Keyword(null,"desc","desc",1016984067),"Vim: find",new cljs.core.Keyword(null,"hidden","hidden",4091384092),true,new cljs.core.Keyword(null,"exec","exec",1017031683),(function (rev_QMARK_){lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"find-bar.vim","find-bar.vim",1877536541));
if(cljs.core.truth_(rev_QMARK_))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.show","find.show",1398717828),true);
} else
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"find.show","find.show",1398717828));
}
})], null));

lt.plugins.vim.ex_command = (function ex_command(cmd){return CodeMirror.Vim.defineEx(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cmd),new cljs.core.Keyword(null,"func","func",1017058870).cljs$core$IFn$_invoke$arity$1(cmd));
});

lt.plugins.vim.__BEH__init = (function __BEH__init(this$){return lt.plugins.vim.ex_command.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"ltexec",new cljs.core.Keyword(null,"func","func",1017058870),(function (cm,info){return cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cljs.core.keyword.call(null,cljs.core.first.call(null,info.args)),cljs.core.next.call(null,info.args));
})], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.vim","init","lt.plugins.vim/init",2748163965),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.vim.__BEH__init,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));

}

//# sourceMappingURL=