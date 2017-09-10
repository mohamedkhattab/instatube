// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e35874){if((e35874 instanceof Error)){
var e = e35874;
return "Error: Unable to stringify";
} else {
throw e35874;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35877 = arguments.length;
switch (G__35877) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35875_SHARP_){
if(typeof p1__35875_SHARP_ === 'string'){
return p1__35875_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35875_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35880 = arguments.length;
var i__29159__auto___35881 = (0);
while(true){
if((i__29159__auto___35881 < len__29158__auto___35880)){
args__29165__auto__.push((arguments[i__29159__auto___35881]));

var G__35882 = (i__29159__auto___35881 + (1));
i__29159__auto___35881 = G__35882;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35879){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35879));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29165__auto__ = [];
var len__29158__auto___35884 = arguments.length;
var i__29159__auto___35885 = (0);
while(true){
if((i__29159__auto___35885 < len__29158__auto___35884)){
args__29165__auto__.push((arguments[i__29159__auto___35885]));

var G__35886 = (i__29159__auto___35885 + (1));
i__29159__auto___35885 = G__35886;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35883){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35883));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35887){
var map__35888 = p__35887;
var map__35888__$1 = ((((!((map__35888 == null)))?((((map__35888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35888):map__35888);
var message = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35888__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27989__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27977__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27977__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27977__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30926__auto___35967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___35967,ch){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___35967,ch){
return (function (state_35939){
var state_val_35940 = (state_35939[(1)]);
if((state_val_35940 === (7))){
var inst_35935 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
var statearr_35941_35968 = state_35939__$1;
(statearr_35941_35968[(2)] = inst_35935);

(statearr_35941_35968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (1))){
var state_35939__$1 = state_35939;
var statearr_35942_35969 = state_35939__$1;
(statearr_35942_35969[(2)] = null);

(statearr_35942_35969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (4))){
var inst_35892 = (state_35939[(7)]);
var inst_35892__$1 = (state_35939[(2)]);
var state_35939__$1 = (function (){var statearr_35943 = state_35939;
(statearr_35943[(7)] = inst_35892__$1);

return statearr_35943;
})();
if(cljs.core.truth_(inst_35892__$1)){
var statearr_35944_35970 = state_35939__$1;
(statearr_35944_35970[(1)] = (5));

} else {
var statearr_35945_35971 = state_35939__$1;
(statearr_35945_35971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (15))){
var inst_35899 = (state_35939[(8)]);
var inst_35914 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35899);
var inst_35915 = cljs.core.first.call(null,inst_35914);
var inst_35916 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35915);
var inst_35917 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35916)].join('');
var inst_35918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35917);
var state_35939__$1 = state_35939;
var statearr_35946_35972 = state_35939__$1;
(statearr_35946_35972[(2)] = inst_35918);

(statearr_35946_35972[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (13))){
var inst_35923 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
var statearr_35947_35973 = state_35939__$1;
(statearr_35947_35973[(2)] = inst_35923);

(statearr_35947_35973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (6))){
var state_35939__$1 = state_35939;
var statearr_35948_35974 = state_35939__$1;
(statearr_35948_35974[(2)] = null);

(statearr_35948_35974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (17))){
var inst_35921 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
var statearr_35949_35975 = state_35939__$1;
(statearr_35949_35975[(2)] = inst_35921);

(statearr_35949_35975[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (3))){
var inst_35937 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35939__$1,inst_35937);
} else {
if((state_val_35940 === (12))){
var inst_35898 = (state_35939[(9)]);
var inst_35912 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35898,opts);
var state_35939__$1 = state_35939;
if(cljs.core.truth_(inst_35912)){
var statearr_35950_35976 = state_35939__$1;
(statearr_35950_35976[(1)] = (15));

} else {
var statearr_35951_35977 = state_35939__$1;
(statearr_35951_35977[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (2))){
var state_35939__$1 = state_35939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35939__$1,(4),ch);
} else {
if((state_val_35940 === (11))){
var inst_35899 = (state_35939[(8)]);
var inst_35904 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35905 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35899);
var inst_35906 = cljs.core.async.timeout.call(null,(1000));
var inst_35907 = [inst_35905,inst_35906];
var inst_35908 = (new cljs.core.PersistentVector(null,2,(5),inst_35904,inst_35907,null));
var state_35939__$1 = state_35939;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35939__$1,(14),inst_35908);
} else {
if((state_val_35940 === (9))){
var inst_35899 = (state_35939[(8)]);
var inst_35925 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35926 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35899);
var inst_35927 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35926);
var inst_35928 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35927)].join('');
var inst_35929 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35928);
var state_35939__$1 = (function (){var statearr_35952 = state_35939;
(statearr_35952[(10)] = inst_35925);

return statearr_35952;
})();
var statearr_35953_35978 = state_35939__$1;
(statearr_35953_35978[(2)] = inst_35929);

(statearr_35953_35978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (5))){
var inst_35892 = (state_35939[(7)]);
var inst_35894 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35895 = (new cljs.core.PersistentArrayMap(null,2,inst_35894,null));
var inst_35896 = (new cljs.core.PersistentHashSet(null,inst_35895,null));
var inst_35897 = figwheel.client.focus_msgs.call(null,inst_35896,inst_35892);
var inst_35898 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35897);
var inst_35899 = cljs.core.first.call(null,inst_35897);
var inst_35900 = figwheel.client.autoload_QMARK_.call(null);
var state_35939__$1 = (function (){var statearr_35954 = state_35939;
(statearr_35954[(9)] = inst_35898);

(statearr_35954[(8)] = inst_35899);

return statearr_35954;
})();
if(cljs.core.truth_(inst_35900)){
var statearr_35955_35979 = state_35939__$1;
(statearr_35955_35979[(1)] = (8));

} else {
var statearr_35956_35980 = state_35939__$1;
(statearr_35956_35980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (14))){
var inst_35910 = (state_35939[(2)]);
var state_35939__$1 = state_35939;
var statearr_35957_35981 = state_35939__$1;
(statearr_35957_35981[(2)] = inst_35910);

(statearr_35957_35981[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (16))){
var state_35939__$1 = state_35939;
var statearr_35958_35982 = state_35939__$1;
(statearr_35958_35982[(2)] = null);

(statearr_35958_35982[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (10))){
var inst_35931 = (state_35939[(2)]);
var state_35939__$1 = (function (){var statearr_35959 = state_35939;
(statearr_35959[(11)] = inst_35931);

return statearr_35959;
})();
var statearr_35960_35983 = state_35939__$1;
(statearr_35960_35983[(2)] = null);

(statearr_35960_35983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35940 === (8))){
var inst_35898 = (state_35939[(9)]);
var inst_35902 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35898,opts);
var state_35939__$1 = state_35939;
if(cljs.core.truth_(inst_35902)){
var statearr_35961_35984 = state_35939__$1;
(statearr_35961_35984[(1)] = (11));

} else {
var statearr_35962_35985 = state_35939__$1;
(statearr_35962_35985[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30926__auto___35967,ch))
;
return ((function (switch__30838__auto__,c__30926__auto___35967,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30839__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30839__auto____0 = (function (){
var statearr_35963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35963[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30839__auto__);

(statearr_35963[(1)] = (1));

return statearr_35963;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30839__auto____1 = (function (state_35939){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_35939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e35964){if((e35964 instanceof Object)){
var ex__30842__auto__ = e35964;
var statearr_35965_35986 = state_35939;
(statearr_35965_35986[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35987 = state_35939;
state_35939 = G__35987;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30839__auto__ = function(state_35939){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30839__auto____1.call(this,state_35939);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30839__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30839__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___35967,ch))
})();
var state__30928__auto__ = (function (){var statearr_35966 = f__30927__auto__.call(null);
(statearr_35966[(6)] = c__30926__auto___35967);

return statearr_35966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___35967,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35988_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35988_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35990 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35990){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35989){if((e35989 instanceof Error)){
var e = e35989;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35990], null));
} else {
var e = e35989;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35990))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35991){
var map__35992 = p__35991;
var map__35992__$1 = ((((!((map__35992 == null)))?((((map__35992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35992):map__35992);
var opts = map__35992__$1;
var build_id = cljs.core.get.call(null,map__35992__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35992,map__35992__$1,opts,build_id){
return (function (p__35994){
var vec__35995 = p__35994;
var seq__35996 = cljs.core.seq.call(null,vec__35995);
var first__35997 = cljs.core.first.call(null,seq__35996);
var seq__35996__$1 = cljs.core.next.call(null,seq__35996);
var map__35998 = first__35997;
var map__35998__$1 = ((((!((map__35998 == null)))?((((map__35998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35998):map__35998);
var msg = map__35998__$1;
var msg_name = cljs.core.get.call(null,map__35998__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35996__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35995,seq__35996,first__35997,seq__35996__$1,map__35998,map__35998__$1,msg,msg_name,_,map__35992,map__35992__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35995,seq__35996,first__35997,seq__35996__$1,map__35998,map__35998__$1,msg,msg_name,_,map__35992,map__35992__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35992,map__35992__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36000){
var vec__36001 = p__36000;
var seq__36002 = cljs.core.seq.call(null,vec__36001);
var first__36003 = cljs.core.first.call(null,seq__36002);
var seq__36002__$1 = cljs.core.next.call(null,seq__36002);
var map__36004 = first__36003;
var map__36004__$1 = ((((!((map__36004 == null)))?((((map__36004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36004.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36004):map__36004);
var msg = map__36004__$1;
var msg_name = cljs.core.get.call(null,map__36004__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36002__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36006){
var map__36007 = p__36006;
var map__36007__$1 = ((((!((map__36007 == null)))?((((map__36007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36007):map__36007);
var on_compile_warning = cljs.core.get.call(null,map__36007__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36007__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36007,map__36007__$1,on_compile_warning,on_compile_fail){
return (function (p__36009){
var vec__36010 = p__36009;
var seq__36011 = cljs.core.seq.call(null,vec__36010);
var first__36012 = cljs.core.first.call(null,seq__36011);
var seq__36011__$1 = cljs.core.next.call(null,seq__36011);
var map__36013 = first__36012;
var map__36013__$1 = ((((!((map__36013 == null)))?((((map__36013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36013.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36013):map__36013);
var msg = map__36013__$1;
var msg_name = cljs.core.get.call(null,map__36013__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36011__$1;
var pred__36015 = cljs.core._EQ_;
var expr__36016 = msg_name;
if(cljs.core.truth_(pred__36015.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36016))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36015.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36016))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36007,map__36007__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__,msg_hist,msg_names,msg){
return (function (state_36105){
var state_val_36106 = (state_36105[(1)]);
if((state_val_36106 === (7))){
var inst_36025 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36025)){
var statearr_36107_36154 = state_36105__$1;
(statearr_36107_36154[(1)] = (8));

} else {
var statearr_36108_36155 = state_36105__$1;
(statearr_36108_36155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (20))){
var inst_36099 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36109_36156 = state_36105__$1;
(statearr_36109_36156[(2)] = inst_36099);

(statearr_36109_36156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (27))){
var inst_36095 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36110_36157 = state_36105__$1;
(statearr_36110_36157[(2)] = inst_36095);

(statearr_36110_36157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (1))){
var inst_36018 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36018)){
var statearr_36111_36158 = state_36105__$1;
(statearr_36111_36158[(1)] = (2));

} else {
var statearr_36112_36159 = state_36105__$1;
(statearr_36112_36159[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (24))){
var inst_36097 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36113_36160 = state_36105__$1;
(statearr_36113_36160[(2)] = inst_36097);

(statearr_36113_36160[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (4))){
var inst_36103 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36105__$1,inst_36103);
} else {
if((state_val_36106 === (15))){
var inst_36101 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36114_36161 = state_36105__$1;
(statearr_36114_36161[(2)] = inst_36101);

(statearr_36114_36161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (21))){
var inst_36054 = (state_36105[(2)]);
var inst_36055 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36056 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36055);
var state_36105__$1 = (function (){var statearr_36115 = state_36105;
(statearr_36115[(7)] = inst_36054);

return statearr_36115;
})();
var statearr_36116_36162 = state_36105__$1;
(statearr_36116_36162[(2)] = inst_36056);

(statearr_36116_36162[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (31))){
var inst_36084 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36084)){
var statearr_36117_36163 = state_36105__$1;
(statearr_36117_36163[(1)] = (34));

} else {
var statearr_36118_36164 = state_36105__$1;
(statearr_36118_36164[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (32))){
var inst_36093 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36119_36165 = state_36105__$1;
(statearr_36119_36165[(2)] = inst_36093);

(statearr_36119_36165[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (33))){
var inst_36080 = (state_36105[(2)]);
var inst_36081 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36082 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36081);
var state_36105__$1 = (function (){var statearr_36120 = state_36105;
(statearr_36120[(8)] = inst_36080);

return statearr_36120;
})();
var statearr_36121_36166 = state_36105__$1;
(statearr_36121_36166[(2)] = inst_36082);

(statearr_36121_36166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (13))){
var inst_36039 = figwheel.client.heads_up.clear.call(null);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(16),inst_36039);
} else {
if((state_val_36106 === (22))){
var inst_36060 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36061 = figwheel.client.heads_up.append_warning_message.call(null,inst_36060);
var state_36105__$1 = state_36105;
var statearr_36122_36167 = state_36105__$1;
(statearr_36122_36167[(2)] = inst_36061);

(statearr_36122_36167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (36))){
var inst_36091 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36123_36168 = state_36105__$1;
(statearr_36123_36168[(2)] = inst_36091);

(statearr_36123_36168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (29))){
var inst_36071 = (state_36105[(2)]);
var inst_36072 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36073 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36072);
var state_36105__$1 = (function (){var statearr_36124 = state_36105;
(statearr_36124[(9)] = inst_36071);

return statearr_36124;
})();
var statearr_36125_36169 = state_36105__$1;
(statearr_36125_36169[(2)] = inst_36073);

(statearr_36125_36169[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (6))){
var inst_36020 = (state_36105[(10)]);
var state_36105__$1 = state_36105;
var statearr_36126_36170 = state_36105__$1;
(statearr_36126_36170[(2)] = inst_36020);

(statearr_36126_36170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (28))){
var inst_36067 = (state_36105[(2)]);
var inst_36068 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36069 = figwheel.client.heads_up.display_warning.call(null,inst_36068);
var state_36105__$1 = (function (){var statearr_36127 = state_36105;
(statearr_36127[(11)] = inst_36067);

return statearr_36127;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(29),inst_36069);
} else {
if((state_val_36106 === (25))){
var inst_36065 = figwheel.client.heads_up.clear.call(null);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(28),inst_36065);
} else {
if((state_val_36106 === (34))){
var inst_36086 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(37),inst_36086);
} else {
if((state_val_36106 === (17))){
var inst_36045 = (state_36105[(2)]);
var inst_36046 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36047 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36046);
var state_36105__$1 = (function (){var statearr_36128 = state_36105;
(statearr_36128[(12)] = inst_36045);

return statearr_36128;
})();
var statearr_36129_36171 = state_36105__$1;
(statearr_36129_36171[(2)] = inst_36047);

(statearr_36129_36171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (3))){
var inst_36037 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36037)){
var statearr_36130_36172 = state_36105__$1;
(statearr_36130_36172[(1)] = (13));

} else {
var statearr_36131_36173 = state_36105__$1;
(statearr_36131_36173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (12))){
var inst_36033 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36132_36174 = state_36105__$1;
(statearr_36132_36174[(2)] = inst_36033);

(statearr_36132_36174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (2))){
var inst_36020 = (state_36105[(10)]);
var inst_36020__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36105__$1 = (function (){var statearr_36133 = state_36105;
(statearr_36133[(10)] = inst_36020__$1);

return statearr_36133;
})();
if(cljs.core.truth_(inst_36020__$1)){
var statearr_36134_36175 = state_36105__$1;
(statearr_36134_36175[(1)] = (5));

} else {
var statearr_36135_36176 = state_36105__$1;
(statearr_36135_36176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (23))){
var inst_36063 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36063)){
var statearr_36136_36177 = state_36105__$1;
(statearr_36136_36177[(1)] = (25));

} else {
var statearr_36137_36178 = state_36105__$1;
(statearr_36137_36178[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (35))){
var state_36105__$1 = state_36105;
var statearr_36138_36179 = state_36105__$1;
(statearr_36138_36179[(2)] = null);

(statearr_36138_36179[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (19))){
var inst_36058 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36058)){
var statearr_36139_36180 = state_36105__$1;
(statearr_36139_36180[(1)] = (22));

} else {
var statearr_36140_36181 = state_36105__$1;
(statearr_36140_36181[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (11))){
var inst_36029 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36141_36182 = state_36105__$1;
(statearr_36141_36182[(2)] = inst_36029);

(statearr_36141_36182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (9))){
var inst_36031 = figwheel.client.heads_up.clear.call(null);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(12),inst_36031);
} else {
if((state_val_36106 === (5))){
var inst_36022 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36105__$1 = state_36105;
var statearr_36142_36183 = state_36105__$1;
(statearr_36142_36183[(2)] = inst_36022);

(statearr_36142_36183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (14))){
var inst_36049 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36049)){
var statearr_36143_36184 = state_36105__$1;
(statearr_36143_36184[(1)] = (18));

} else {
var statearr_36144_36185 = state_36105__$1;
(statearr_36144_36185[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (26))){
var inst_36075 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36105__$1 = state_36105;
if(cljs.core.truth_(inst_36075)){
var statearr_36145_36186 = state_36105__$1;
(statearr_36145_36186[(1)] = (30));

} else {
var statearr_36146_36187 = state_36105__$1;
(statearr_36146_36187[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (16))){
var inst_36041 = (state_36105[(2)]);
var inst_36042 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36043 = figwheel.client.heads_up.display_exception.call(null,inst_36042);
var state_36105__$1 = (function (){var statearr_36147 = state_36105;
(statearr_36147[(13)] = inst_36041);

return statearr_36147;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(17),inst_36043);
} else {
if((state_val_36106 === (30))){
var inst_36077 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36078 = figwheel.client.heads_up.display_warning.call(null,inst_36077);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(33),inst_36078);
} else {
if((state_val_36106 === (10))){
var inst_36035 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36148_36188 = state_36105__$1;
(statearr_36148_36188[(2)] = inst_36035);

(statearr_36148_36188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (18))){
var inst_36051 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36052 = figwheel.client.heads_up.display_exception.call(null,inst_36051);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(21),inst_36052);
} else {
if((state_val_36106 === (37))){
var inst_36088 = (state_36105[(2)]);
var state_36105__$1 = state_36105;
var statearr_36149_36189 = state_36105__$1;
(statearr_36149_36189[(2)] = inst_36088);

(statearr_36149_36189[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36106 === (8))){
var inst_36027 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36105__$1 = state_36105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36105__$1,(11),inst_36027);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30926__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30838__auto__,c__30926__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto____0 = (function (){
var statearr_36150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36150[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto__);

(statearr_36150[(1)] = (1));

return statearr_36150;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto____1 = (function (state_36105){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_36105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e36151){if((e36151 instanceof Object)){
var ex__30842__auto__ = e36151;
var statearr_36152_36190 = state_36105;
(statearr_36152_36190[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36191 = state_36105;
state_36105 = G__36191;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto__ = function(state_36105){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto____1.call(this,state_36105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__,msg_hist,msg_names,msg))
})();
var state__30928__auto__ = (function (){var statearr_36153 = f__30927__auto__.call(null);
(statearr_36153[(6)] = c__30926__auto__);

return statearr_36153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__,msg_hist,msg_names,msg))
);

return c__30926__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30926__auto___36220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___36220,ch){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___36220,ch){
return (function (state_36206){
var state_val_36207 = (state_36206[(1)]);
if((state_val_36207 === (1))){
var state_36206__$1 = state_36206;
var statearr_36208_36221 = state_36206__$1;
(statearr_36208_36221[(2)] = null);

(statearr_36208_36221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (2))){
var state_36206__$1 = state_36206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36206__$1,(4),ch);
} else {
if((state_val_36207 === (3))){
var inst_36204 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36206__$1,inst_36204);
} else {
if((state_val_36207 === (4))){
var inst_36194 = (state_36206[(7)]);
var inst_36194__$1 = (state_36206[(2)]);
var state_36206__$1 = (function (){var statearr_36209 = state_36206;
(statearr_36209[(7)] = inst_36194__$1);

return statearr_36209;
})();
if(cljs.core.truth_(inst_36194__$1)){
var statearr_36210_36222 = state_36206__$1;
(statearr_36210_36222[(1)] = (5));

} else {
var statearr_36211_36223 = state_36206__$1;
(statearr_36211_36223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (5))){
var inst_36194 = (state_36206[(7)]);
var inst_36196 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36194);
var state_36206__$1 = state_36206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36206__$1,(8),inst_36196);
} else {
if((state_val_36207 === (6))){
var state_36206__$1 = state_36206;
var statearr_36212_36224 = state_36206__$1;
(statearr_36212_36224[(2)] = null);

(statearr_36212_36224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (7))){
var inst_36202 = (state_36206[(2)]);
var state_36206__$1 = state_36206;
var statearr_36213_36225 = state_36206__$1;
(statearr_36213_36225[(2)] = inst_36202);

(statearr_36213_36225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36207 === (8))){
var inst_36198 = (state_36206[(2)]);
var state_36206__$1 = (function (){var statearr_36214 = state_36206;
(statearr_36214[(8)] = inst_36198);

return statearr_36214;
})();
var statearr_36215_36226 = state_36206__$1;
(statearr_36215_36226[(2)] = null);

(statearr_36215_36226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30926__auto___36220,ch))
;
return ((function (switch__30838__auto__,c__30926__auto___36220,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30839__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30839__auto____0 = (function (){
var statearr_36216 = [null,null,null,null,null,null,null,null,null];
(statearr_36216[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30839__auto__);

(statearr_36216[(1)] = (1));

return statearr_36216;
});
var figwheel$client$heads_up_plugin_$_state_machine__30839__auto____1 = (function (state_36206){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_36206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e36217){if((e36217 instanceof Object)){
var ex__30842__auto__ = e36217;
var statearr_36218_36227 = state_36206;
(statearr_36218_36227[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36228 = state_36206;
state_36206 = G__36228;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30839__auto__ = function(state_36206){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30839__auto____1.call(this,state_36206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30839__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30839__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___36220,ch))
})();
var state__30928__auto__ = (function (){var statearr_36219 = f__30927__auto__.call(null);
(statearr_36219[(6)] = c__30926__auto___36220);

return statearr_36219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___36220,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__){
return (function (state_36234){
var state_val_36235 = (state_36234[(1)]);
if((state_val_36235 === (1))){
var inst_36229 = cljs.core.async.timeout.call(null,(3000));
var state_36234__$1 = state_36234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36234__$1,(2),inst_36229);
} else {
if((state_val_36235 === (2))){
var inst_36231 = (state_36234[(2)]);
var inst_36232 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36234__$1 = (function (){var statearr_36236 = state_36234;
(statearr_36236[(7)] = inst_36231);

return statearr_36236;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36234__$1,inst_36232);
} else {
return null;
}
}
});})(c__30926__auto__))
;
return ((function (switch__30838__auto__,c__30926__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30839__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30839__auto____0 = (function (){
var statearr_36237 = [null,null,null,null,null,null,null,null];
(statearr_36237[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30839__auto__);

(statearr_36237[(1)] = (1));

return statearr_36237;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30839__auto____1 = (function (state_36234){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_36234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e36238){if((e36238 instanceof Object)){
var ex__30842__auto__ = e36238;
var statearr_36239_36241 = state_36234;
(statearr_36239_36241[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36242 = state_36234;
state_36234 = G__36242;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30839__auto__ = function(state_36234){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30839__auto____1.call(this,state_36234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30839__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30839__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__))
})();
var state__30928__auto__ = (function (){var statearr_36240 = f__30927__auto__.call(null);
(statearr_36240[(6)] = c__30926__auto__);

return statearr_36240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__))
);

return c__30926__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36249){
var state_val_36250 = (state_36249[(1)]);
if((state_val_36250 === (1))){
var inst_36243 = cljs.core.async.timeout.call(null,(2000));
var state_36249__$1 = state_36249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36249__$1,(2),inst_36243);
} else {
if((state_val_36250 === (2))){
var inst_36245 = (state_36249[(2)]);
var inst_36246 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36247 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36246);
var state_36249__$1 = (function (){var statearr_36251 = state_36249;
(statearr_36251[(7)] = inst_36245);

return statearr_36251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36249__$1,inst_36247);
} else {
return null;
}
}
});})(c__30926__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30838__auto__,c__30926__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto____0 = (function (){
var statearr_36252 = [null,null,null,null,null,null,null,null];
(statearr_36252[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto__);

(statearr_36252[(1)] = (1));

return statearr_36252;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto____1 = (function (state_36249){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_36249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e36253){if((e36253 instanceof Object)){
var ex__30842__auto__ = e36253;
var statearr_36254_36256 = state_36249;
(statearr_36254_36256[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36257 = state_36249;
state_36249 = G__36257;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto__ = function(state_36249){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto____1.call(this,state_36249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30928__auto__ = (function (){var statearr_36255 = f__30927__auto__.call(null);
(statearr_36255[(6)] = c__30926__auto__);

return statearr_36255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__,figwheel_version,temp__4657__auto__))
);

return c__30926__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36258){
var map__36259 = p__36258;
var map__36259__$1 = ((((!((map__36259 == null)))?((((map__36259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36259):map__36259);
var file = cljs.core.get.call(null,map__36259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36259__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36261 = "";
var G__36261__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36261),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36261);
var G__36261__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36261__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36261__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = line;
if(cljs.core.truth_(and__27977__auto__)){
return column;
} else {
return and__27977__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36261__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36261__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36262){
var map__36263 = p__36262;
var map__36263__$1 = ((((!((map__36263 == null)))?((((map__36263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36263):map__36263);
var ed = map__36263__$1;
var formatted_exception = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36263__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36265_36269 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36266_36270 = null;
var count__36267_36271 = (0);
var i__36268_36272 = (0);
while(true){
if((i__36268_36272 < count__36267_36271)){
var msg_36273 = cljs.core._nth.call(null,chunk__36266_36270,i__36268_36272);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36273);

var G__36274 = seq__36265_36269;
var G__36275 = chunk__36266_36270;
var G__36276 = count__36267_36271;
var G__36277 = (i__36268_36272 + (1));
seq__36265_36269 = G__36274;
chunk__36266_36270 = G__36275;
count__36267_36271 = G__36276;
i__36268_36272 = G__36277;
continue;
} else {
var temp__4657__auto___36278 = cljs.core.seq.call(null,seq__36265_36269);
if(temp__4657__auto___36278){
var seq__36265_36279__$1 = temp__4657__auto___36278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36265_36279__$1)){
var c__28828__auto___36280 = cljs.core.chunk_first.call(null,seq__36265_36279__$1);
var G__36281 = cljs.core.chunk_rest.call(null,seq__36265_36279__$1);
var G__36282 = c__28828__auto___36280;
var G__36283 = cljs.core.count.call(null,c__28828__auto___36280);
var G__36284 = (0);
seq__36265_36269 = G__36281;
chunk__36266_36270 = G__36282;
count__36267_36271 = G__36283;
i__36268_36272 = G__36284;
continue;
} else {
var msg_36285 = cljs.core.first.call(null,seq__36265_36279__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36285);

var G__36286 = cljs.core.next.call(null,seq__36265_36279__$1);
var G__36287 = null;
var G__36288 = (0);
var G__36289 = (0);
seq__36265_36269 = G__36286;
chunk__36266_36270 = G__36287;
count__36267_36271 = G__36288;
i__36268_36272 = G__36289;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36290){
var map__36291 = p__36290;
var map__36291__$1 = ((((!((map__36291 == null)))?((((map__36291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36291):map__36291);
var w = map__36291__$1;
var message = cljs.core.get.call(null,map__36291__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/cljs-dev/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/cljs-dev/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27977__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27977__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27977__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36293 = cljs.core.seq.call(null,plugins);
var chunk__36294 = null;
var count__36295 = (0);
var i__36296 = (0);
while(true){
if((i__36296 < count__36295)){
var vec__36297 = cljs.core._nth.call(null,chunk__36294,i__36296);
var k = cljs.core.nth.call(null,vec__36297,(0),null);
var plugin = cljs.core.nth.call(null,vec__36297,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36303 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36293,chunk__36294,count__36295,i__36296,pl_36303,vec__36297,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36303.call(null,msg_hist);
});})(seq__36293,chunk__36294,count__36295,i__36296,pl_36303,vec__36297,k,plugin))
);
} else {
}

var G__36304 = seq__36293;
var G__36305 = chunk__36294;
var G__36306 = count__36295;
var G__36307 = (i__36296 + (1));
seq__36293 = G__36304;
chunk__36294 = G__36305;
count__36295 = G__36306;
i__36296 = G__36307;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36293);
if(temp__4657__auto__){
var seq__36293__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36293__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__36293__$1);
var G__36308 = cljs.core.chunk_rest.call(null,seq__36293__$1);
var G__36309 = c__28828__auto__;
var G__36310 = cljs.core.count.call(null,c__28828__auto__);
var G__36311 = (0);
seq__36293 = G__36308;
chunk__36294 = G__36309;
count__36295 = G__36310;
i__36296 = G__36311;
continue;
} else {
var vec__36300 = cljs.core.first.call(null,seq__36293__$1);
var k = cljs.core.nth.call(null,vec__36300,(0),null);
var plugin = cljs.core.nth.call(null,vec__36300,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36312 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36293,chunk__36294,count__36295,i__36296,pl_36312,vec__36300,k,plugin,seq__36293__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36312.call(null,msg_hist);
});})(seq__36293,chunk__36294,count__36295,i__36296,pl_36312,vec__36300,k,plugin,seq__36293__$1,temp__4657__auto__))
);
} else {
}

var G__36313 = cljs.core.next.call(null,seq__36293__$1);
var G__36314 = null;
var G__36315 = (0);
var G__36316 = (0);
seq__36293 = G__36313;
chunk__36294 = G__36314;
count__36295 = G__36315;
i__36296 = G__36316;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__36318 = arguments.length;
switch (G__36318) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36319_36324 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36320_36325 = null;
var count__36321_36326 = (0);
var i__36322_36327 = (0);
while(true){
if((i__36322_36327 < count__36321_36326)){
var msg_36328 = cljs.core._nth.call(null,chunk__36320_36325,i__36322_36327);
figwheel.client.socket.handle_incoming_message.call(null,msg_36328);

var G__36329 = seq__36319_36324;
var G__36330 = chunk__36320_36325;
var G__36331 = count__36321_36326;
var G__36332 = (i__36322_36327 + (1));
seq__36319_36324 = G__36329;
chunk__36320_36325 = G__36330;
count__36321_36326 = G__36331;
i__36322_36327 = G__36332;
continue;
} else {
var temp__4657__auto___36333 = cljs.core.seq.call(null,seq__36319_36324);
if(temp__4657__auto___36333){
var seq__36319_36334__$1 = temp__4657__auto___36333;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36319_36334__$1)){
var c__28828__auto___36335 = cljs.core.chunk_first.call(null,seq__36319_36334__$1);
var G__36336 = cljs.core.chunk_rest.call(null,seq__36319_36334__$1);
var G__36337 = c__28828__auto___36335;
var G__36338 = cljs.core.count.call(null,c__28828__auto___36335);
var G__36339 = (0);
seq__36319_36324 = G__36336;
chunk__36320_36325 = G__36337;
count__36321_36326 = G__36338;
i__36322_36327 = G__36339;
continue;
} else {
var msg_36340 = cljs.core.first.call(null,seq__36319_36334__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36340);

var G__36341 = cljs.core.next.call(null,seq__36319_36334__$1);
var G__36342 = null;
var G__36343 = (0);
var G__36344 = (0);
seq__36319_36324 = G__36341;
chunk__36320_36325 = G__36342;
count__36321_36326 = G__36343;
i__36322_36327 = G__36344;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29165__auto__ = [];
var len__29158__auto___36349 = arguments.length;
var i__29159__auto___36350 = (0);
while(true){
if((i__29159__auto___36350 < len__29158__auto___36349)){
args__29165__auto__.push((arguments[i__29159__auto___36350]));

var G__36351 = (i__29159__auto___36350 + (1));
i__29159__auto___36350 = G__36351;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((0) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29166__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36346){
var map__36347 = p__36346;
var map__36347__$1 = ((((!((map__36347 == null)))?((((map__36347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36347):map__36347);
var opts = map__36347__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36345){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36345));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36352){if((e36352 instanceof Error)){
var e = e36352;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36352;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36353){
var map__36354 = p__36353;
var map__36354__$1 = ((((!((map__36354 == null)))?((((map__36354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36354):map__36354);
var msg_name = cljs.core.get.call(null,map__36354__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504959336816
