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
lt.plugins.vim.__BEH__map_keys = (function __BEH__map_keys(this$,ks){var seq__8161 = cljs.core.seq.call(null,ks);var chunk__8162 = null;var count__8163 = 0;var i__8164 = 0;while(true){
if((i__8164 < count__8163))
{var vec__8165 = cljs.core._nth.call(null,chunk__8162,i__8164);var k = cljs.core.nth.call(null,vec__8165,0,null);var v = cljs.core.nth.call(null,vec__8165,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__8179 = seq__8161;
var G__8180 = chunk__8162;
var G__8181 = count__8163;
var G__8182 = (i__8164 + 1);
seq__8161 = G__8179;
chunk__8162 = G__8180;
count__8163 = G__8181;
i__8164 = G__8182;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8161);if(temp__4092__auto__)
{var seq__8161__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8161__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8161__$1);{
var G__8183 = cljs.core.chunk_rest.call(null,seq__8161__$1);
var G__8184 = c__7112__auto__;
var G__8185 = cljs.core.count.call(null,c__7112__auto__);
var G__8186 = 0;
seq__8161 = G__8183;
chunk__8162 = G__8184;
count__8163 = G__8185;
i__8164 = G__8186;
continue;
}
} else
{var vec__8166 = cljs.core.first.call(null,seq__8161__$1);var k = cljs.core.nth.call(null,vec__8166,0,null);var v = cljs.core.nth.call(null,vec__8166,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__8187 = cljs.core.next.call(null,seq__8161__$1);
var G__8188 = null;
var G__8189 = 0;
var G__8190 = 0;
seq__8161 = G__8187;
chunk__8162 = G__8188;
count__8163 = G__8189;
i__8164 = G__8190;
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
lt.plugins.vim.__BEH__map_keys_visual = (function __BEH__map_keys_visual(this$,ks){var seq__8173 = cljs.core.seq.call(null,ks);var chunk__8174 = null;var count__8175 = 0;var i__8176 = 0;while(true){
if((i__8176 < count__8175))
{var vec__8177 = cljs.core._nth.call(null,chunk__8174,i__8176);var k = cljs.core.nth.call(null,vec__8177,0,null);var v = cljs.core.nth.call(null,vec__8177,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__8191 = seq__8173;
var G__8192 = chunk__8174;
var G__8193 = count__8175;
var G__8194 = (i__8176 + 1);
seq__8173 = G__8191;
chunk__8174 = G__8192;
count__8175 = G__8193;
i__8176 = G__8194;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8173);if(temp__4092__auto__)
{var seq__8173__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8173__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8173__$1);{
var G__8195 = cljs.core.chunk_rest.call(null,seq__8173__$1);
var G__8196 = c__7112__auto__;
var G__8197 = cljs.core.count.call(null,c__7112__auto__);
var G__8198 = 0;
seq__8173 = G__8195;
chunk__8174 = G__8196;
count__8175 = G__8197;
i__8176 = G__8198;
continue;
}
} else
{var vec__8178 = cljs.core.first.call(null,seq__8173__$1);var k = cljs.core.nth.call(null,vec__8178,0,null);var v = cljs.core.nth.call(null,vec__8178,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__8199 = cljs.core.next.call(null,seq__8173__$1);
var G__8200 = null;
var G__8201 = 0;
var G__8202 = 0;
seq__8173 = G__8199;
chunk__8174 = G__8200;
count__8175 = G__8201;
i__8176 = G__8202;
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
}

//# sourceMappingURL=vim_compiled.js.map