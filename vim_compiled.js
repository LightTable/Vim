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
lt.objs.editor.set_options.call(null,ed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disableInput","disableInput",4302489908),true], null));
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
var seq__6368 = cljs.core.seq.call(null,ks);var chunk__6369 = null;var count__6370 = 0;var i__6371 = 0;while(true){
if((i__6371 < count__6370))
{var vec__6372 = cljs.core._nth.call(null,chunk__6369,i__6371);var k = cljs.core.nth.call(null,vec__6372,0,null);var v = cljs.core.nth.call(null,vec__6372,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__6440 = seq__6368;
var G__6441 = chunk__6369;
var G__6442 = count__6370;
var G__6443 = (i__6371 + 1);
seq__6368 = G__6440;
chunk__6369 = G__6441;
count__6370 = G__6442;
i__6371 = G__6443;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6368);if(temp__4092__auto__)
{var seq__6368__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6368__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6368__$1);{
var G__6444 = cljs.core.chunk_rest.call(null,seq__6368__$1);
var G__6445 = c__5635__auto__;
var G__6446 = cljs.core.count.call(null,c__5635__auto__);
var G__6447 = 0;
seq__6368 = G__6444;
chunk__6369 = G__6445;
count__6370 = G__6446;
i__6371 = G__6447;
continue;
}
} else
{var vec__6373 = cljs.core.first.call(null,seq__6368__$1);var k = cljs.core.nth.call(null,vec__6373,0,null);var v = cljs.core.nth.call(null,vec__6373,1,null);CodeMirror.Vim.map(k,v,"normal");
{
var G__6448 = cljs.core.next.call(null,seq__6368__$1);
var G__6449 = null;
var G__6450 = 0;
var G__6451 = 0;
seq__6368 = G__6448;
chunk__6369 = G__6449;
count__6370 = G__6450;
i__6371 = G__6451;
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
lt.plugins.vim.__BEH__set_options = (function __BEH__set_options(this$,ks){var seq__6380 = cljs.core.seq.call(null,ks);var chunk__6381 = null;var count__6382 = 0;var i__6383 = 0;while(true){
if((i__6383 < count__6382))
{var vec__6384 = cljs.core._nth.call(null,chunk__6381,i__6383);var k = cljs.core.nth.call(null,vec__6384,0,null);var v = cljs.core.nth.call(null,vec__6384,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__6452 = seq__6380;
var G__6453 = chunk__6381;
var G__6454 = count__6382;
var G__6455 = (i__6383 + 1);
seq__6380 = G__6452;
chunk__6381 = G__6453;
count__6382 = G__6454;
i__6383 = G__6455;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6380);if(temp__4092__auto__)
{var seq__6380__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6380__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6380__$1);{
var G__6456 = cljs.core.chunk_rest.call(null,seq__6380__$1);
var G__6457 = c__5635__auto__;
var G__6458 = cljs.core.count.call(null,c__5635__auto__);
var G__6459 = 0;
seq__6380 = G__6456;
chunk__6381 = G__6457;
count__6382 = G__6458;
i__6383 = G__6459;
continue;
}
} else
{var vec__6385 = cljs.core.first.call(null,seq__6380__$1);var k = cljs.core.nth.call(null,vec__6385,0,null);var v = cljs.core.nth.call(null,vec__6385,1,null);CodeMirror.Vim.setOption(k,v);
{
var G__6460 = cljs.core.next.call(null,seq__6380__$1);
var G__6461 = null;
var G__6462 = 0;
var G__6463 = 0;
seq__6380 = G__6460;
chunk__6381 = G__6461;
count__6382 = G__6462;
i__6383 = G__6463;
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
var seq__6392 = cljs.core.seq.call(null,ks);var chunk__6393 = null;var count__6394 = 0;var i__6395 = 0;while(true){
if((i__6395 < count__6394))
{var vec__6396 = cljs.core._nth.call(null,chunk__6393,i__6395);var k = cljs.core.nth.call(null,vec__6396,0,null);var v = cljs.core.nth.call(null,vec__6396,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__6464 = seq__6392;
var G__6465 = chunk__6393;
var G__6466 = count__6394;
var G__6467 = (i__6395 + 1);
seq__6392 = G__6464;
chunk__6393 = G__6465;
count__6394 = G__6466;
i__6395 = G__6467;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6392);if(temp__4092__auto__)
{var seq__6392__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6392__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6392__$1);{
var G__6468 = cljs.core.chunk_rest.call(null,seq__6392__$1);
var G__6469 = c__5635__auto__;
var G__6470 = cljs.core.count.call(null,c__5635__auto__);
var G__6471 = 0;
seq__6392 = G__6468;
chunk__6393 = G__6469;
count__6394 = G__6470;
i__6395 = G__6471;
continue;
}
} else
{var vec__6397 = cljs.core.first.call(null,seq__6392__$1);var k = cljs.core.nth.call(null,vec__6397,0,null);var v = cljs.core.nth.call(null,vec__6397,1,null);CodeMirror.Vim.map(k,v,"visual");
{
var G__6472 = cljs.core.next.call(null,seq__6392__$1);
var G__6473 = null;
var G__6474 = 0;
var G__6475 = 0;
seq__6392 = G__6472;
chunk__6393 = G__6473;
count__6394 = G__6474;
i__6395 = G__6475;
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
lt.plugins.vim.__BEH__load_cm_normal_keys = (function __BEH__load_cm_normal_keys(this$){var seq__6404 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"editor.keys.vim.normal.cm","editor.keys.vim.normal.cm",3327375638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)));var chunk__6405 = null;var count__6406 = 0;var i__6407 = 0;while(true){
if((i__6407 < count__6406))
{var vec__6408 = cljs.core._nth.call(null,chunk__6405,i__6407);var k = cljs.core.nth.call(null,vec__6408,0,null);var v = cljs.core.nth.call(null,vec__6408,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__6476 = seq__6404;
var G__6477 = chunk__6405;
var G__6478 = count__6406;
var G__6479 = (i__6407 + 1);
seq__6404 = G__6476;
chunk__6405 = G__6477;
count__6406 = G__6478;
i__6407 = G__6479;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6404);if(temp__4092__auto__)
{var seq__6404__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6404__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6404__$1);{
var G__6480 = cljs.core.chunk_rest.call(null,seq__6404__$1);
var G__6481 = c__5635__auto__;
var G__6482 = cljs.core.count.call(null,c__5635__auto__);
var G__6483 = 0;
seq__6404 = G__6480;
chunk__6405 = G__6481;
count__6406 = G__6482;
i__6407 = G__6483;
continue;
}
} else
{var vec__6409 = cljs.core.first.call(null,seq__6404__$1);var k = cljs.core.nth.call(null,vec__6409,0,null);var v = cljs.core.nth.call(null,vec__6409,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_normal_key "),cljs.core.str(k)].join('')),"normal");
{
var G__6484 = cljs.core.next.call(null,seq__6404__$1);
var G__6485 = null;
var G__6486 = 0;
var G__6487 = 0;
seq__6404 = G__6484;
chunk__6405 = G__6485;
count__6406 = G__6486;
i__6407 = G__6487;
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
lt.plugins.vim.__BEH__load_cm_visual_keys = (function __BEH__load_cm_visual_keys(this$){var seq__6416 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"editor.keys.vim.visual.cm","editor.keys.vim.visual.cm",1002251293).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.keyboard.keys)));var chunk__6417 = null;var count__6418 = 0;var i__6419 = 0;while(true){
if((i__6419 < count__6418))
{var vec__6420 = cljs.core._nth.call(null,chunk__6417,i__6419);var k = cljs.core.nth.call(null,vec__6420,0,null);var v = cljs.core.nth.call(null,vec__6420,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_visual_key "),cljs.core.str(k)].join('')),"visual");
{
var G__6488 = seq__6416;
var G__6489 = chunk__6417;
var G__6490 = count__6418;
var G__6491 = (i__6419 + 1);
seq__6416 = G__6488;
chunk__6417 = G__6489;
count__6418 = G__6490;
i__6419 = G__6491;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6416);if(temp__4092__auto__)
{var seq__6416__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6416__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6416__$1);{
var G__6492 = cljs.core.chunk_rest.call(null,seq__6416__$1);
var G__6493 = c__5635__auto__;
var G__6494 = cljs.core.count.call(null,c__5635__auto__);
var G__6495 = 0;
seq__6416 = G__6492;
chunk__6417 = G__6493;
count__6418 = G__6494;
i__6419 = G__6495;
continue;
}
} else
{var vec__6421 = cljs.core.first.call(null,seq__6416__$1);var k = cljs.core.nth.call(null,vec__6421,0,null);var v = cljs.core.nth.call(null,vec__6421,1,null);CodeMirror.Vim.map(k,((typeof cljs.core.first.call(null,v) === 'string')?cljs.core.first.call(null,v):[cljs.core.str(":lt_visual_key "),cljs.core.str(k)].join('')),"visual");
{
var G__6496 = cljs.core.next.call(null,seq__6416__$1);
var G__6497 = null;
var G__6498 = 0;
var G__6499 = 0;
seq__6416 = G__6496;
chunk__6417 = G__6497;
count__6418 = G__6498;
i__6419 = G__6499;
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
lt.plugins.vim.run_commands = (function run_commands(cmds){var seq__6426 = cljs.core.seq.call(null,cmds);var chunk__6427 = null;var count__6428 = 0;var i__6429 = 0;while(true){
if((i__6429 < count__6428))
{var cmd = cljs.core._nth.call(null,chunk__6427,i__6429);if(cljs.core.sequential_QMARK_.call(null,cmd))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd);
} else
{lt.objs.command.exec_BANG_.call(null,cmd);
}
{
var G__6500 = seq__6426;
var G__6501 = chunk__6427;
var G__6502 = count__6428;
var G__6503 = (i__6429 + 1);
seq__6426 = G__6500;
chunk__6427 = G__6501;
count__6428 = G__6502;
i__6429 = G__6503;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__6426);if(temp__4092__auto__)
{var seq__6426__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6426__$1))
{var c__5635__auto__ = cljs.core.chunk_first.call(null,seq__6426__$1);{
var G__6504 = cljs.core.chunk_rest.call(null,seq__6426__$1);
var G__6505 = c__5635__auto__;
var G__6506 = cljs.core.count.call(null,c__5635__auto__);
var G__6507 = 0;
seq__6426 = G__6504;
chunk__6427 = G__6505;
count__6428 = G__6506;
i__6429 = G__6507;
continue;
}
} else
{var cmd = cljs.core.first.call(null,seq__6426__$1);if(cljs.core.sequential_QMARK_.call(null,cmd))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,cmd);
} else
{lt.objs.command.exec_BANG_.call(null,cmd);
}
{
var G__6508 = cljs.core.next.call(null,seq__6426__$1);
var G__6509 = null;
var G__6510 = 0;
var G__6511 = 0;
seq__6426 = G__6508;
chunk__6427 = G__6509;
count__6428 = G__6510;
i__6429 = G__6511;
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