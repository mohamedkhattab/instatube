// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instatube.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('instatube.header');
goog.require('instatube.video_list');
instatube.core.YOUTUBE_API_KEY = "AIzaSyANo3bt4bOjVU_VxSGwkbZSfrLoj9VREGo";
if(typeof instatube.core.app_state !== 'undefined'){
} else {
instatube.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$active_DASH_item,"Home",cljs.core.cst$kw$term,"nirvana",cljs.core.cst$kw$videos,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$active_DASH_video,"hTWKbfoikeg"], null));
}
instatube.core.EVENTCHANNEL = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
instatube.core.handle_youtube_resonse = (function instatube$core$handle_youtube_resonse(response){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_video_DASH_result_DASH_set,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$videos,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(response)], null)], null));
});
instatube.core.get_video_id = (function instatube$core$get_video_id(video){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$id,cljs.core.cst$kw$videoId], null));
});
instatube.core.get_video_title = (function instatube$core$get_video_title(video){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snippet,cljs.core.cst$kw$title], null));
});
instatube.core.get_video_desc = (function instatube$core$get_video_desc(video){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snippet,cljs.core.cst$kw$description], null));
});
instatube.core.get_active_video_BANG_ = (function instatube$core$get_active_video_BANG_(){
return cljs.core.cst$kw$active_DASH_video.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(instatube.core.app_state));
});
instatube.core.EVENTS = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$update_DASH_active_DASH_item,(function (p__18266){
var map__18267 = p__18266;
var map__18267__$1 = ((((!((map__18267 == null)))?((((map__18267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18267):map__18267);
var active_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18267__$1,cljs.core.cst$kw$active_DASH_item);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_item], null),active_item);
}),cljs.core.cst$kw$update_DASH_search_DASH_term,(function (p__18269){
var map__18270 = p__18269;
var map__18270__$1 = ((((!((map__18270 == null)))?((((map__18270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18270):map__18270);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,cljs.core.cst$kw$term);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$term], null),term);
}),cljs.core.cst$kw$update_DASH_video_DASH_result_DASH_set,(function (p__18272){
var map__18273 = p__18272;
var map__18273__$1 = ((((!((map__18273 == null)))?((((map__18273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18273):map__18273);
var videos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18273__$1,cljs.core.cst$kw$videos);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$videos], null),videos);
}),cljs.core.cst$kw$update_DASH_active_DASH_video,(function (p__18275){
var map__18276 = p__18275;
var map__18276__$1 = ((((!((map__18276 == null)))?((((map__18276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18276):map__18276);
var active_video = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18276__$1,cljs.core.cst$kw$active_DASH_video);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_video], null),active_video);
}),cljs.core.cst$kw$query_DASH_youtube_DASH_search,(function (p__18278){
var map__18279 = p__18278;
var map__18279__$1 = ((((!((map__18279 == null)))?((((map__18279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18279):map__18279);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18279__$1,cljs.core.cst$kw$term);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://www.googleapis.com/youtube/v3/search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$q,term,cljs.core.cst$kw$maxResults,(5),cljs.core.cst$kw$part,"snippet",cljs.core.cst$kw$type,"video,playlist",cljs.core.cst$kw$key,instatube.core.YOUTUBE_API_KEY], null),cljs.core.cst$kw$handler,instatube.core.handle_youtube_resonse,cljs.core.cst$kw$response_DASH_format,(function (){var G__18281 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__18281) : ajax.core.json_response_format.call(null,G__18281));
})()], null)], 0));
})], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_youtube_DASH_search,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$term,"nirvana"], null)], null));
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_active_DASH_video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_video,cljs.core.first(cljs.core.cst$kw$videos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(instatube.core.app_state)))], null)], null));
var c__16340__auto___18313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___18313){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___18313){
return (function (state_18300){
var state_val_18301 = (state_18300[(1)]);
if((state_val_18301 === (1))){
var state_18300__$1 = state_18300;
var statearr_18302_18314 = state_18300__$1;
(statearr_18302_18314[(2)] = null);

(statearr_18302_18314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18301 === (2))){
var state_18300__$1 = state_18300;
var statearr_18303_18315 = state_18300__$1;
(statearr_18303_18315[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_18301 === (3))){
var inst_18298 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18300__$1,inst_18298);
} else {
if((state_val_18301 === (4))){
var state_18300__$1 = state_18300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18300__$1,(7),instatube.core.EVENTCHANNEL);
} else {
if((state_val_18301 === (5))){
var state_18300__$1 = state_18300;
var statearr_18305_18316 = state_18300__$1;
(statearr_18305_18316[(2)] = null);

(statearr_18305_18316[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18301 === (6))){
var inst_18296 = (state_18300[(2)]);
var state_18300__$1 = state_18300;
var statearr_18306_18317 = state_18300__$1;
(statearr_18306_18317[(2)] = inst_18296);

(statearr_18306_18317[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18301 === (7))){
var inst_18288 = (state_18300[(2)]);
var inst_18289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18288,(0),null);
var inst_18290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18288,(1),null);
var inst_18291 = (inst_18289.cljs$core$IFn$_invoke$arity$1 ? inst_18289.cljs$core$IFn$_invoke$arity$1(instatube.core.EVENTS) : inst_18289.call(null,instatube.core.EVENTS));
var inst_18292 = (inst_18291.cljs$core$IFn$_invoke$arity$1 ? inst_18291.cljs$core$IFn$_invoke$arity$1(inst_18290) : inst_18291.call(null,inst_18290));
var state_18300__$1 = (function (){var statearr_18307 = state_18300;
(statearr_18307[(7)] = inst_18292);

return statearr_18307;
})();
var statearr_18308_18318 = state_18300__$1;
(statearr_18308_18318[(2)] = null);

(statearr_18308_18318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16340__auto___18313))
;
return ((function (switch__16240__auto__,c__16340__auto___18313){
return (function() {
var instatube$core$state_machine__16241__auto__ = null;
var instatube$core$state_machine__16241__auto____0 = (function (){
var statearr_18309 = [null,null,null,null,null,null,null,null];
(statearr_18309[(0)] = instatube$core$state_machine__16241__auto__);

(statearr_18309[(1)] = (1));

return statearr_18309;
});
var instatube$core$state_machine__16241__auto____1 = (function (state_18300){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_18300);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e18310){if((e18310 instanceof Object)){
var ex__16244__auto__ = e18310;
var statearr_18311_18319 = state_18300;
(statearr_18311_18319[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18300);

return cljs.core.cst$kw$recur;
} else {
throw e18310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__18320 = state_18300;
state_18300 = G__18320;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
instatube$core$state_machine__16241__auto__ = function(state_18300){
switch(arguments.length){
case 0:
return instatube$core$state_machine__16241__auto____0.call(this);
case 1:
return instatube$core$state_machine__16241__auto____1.call(this,state_18300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
instatube$core$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = instatube$core$state_machine__16241__auto____0;
instatube$core$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = instatube$core$state_machine__16241__auto____1;
return instatube$core$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___18313))
})();
var state__16342__auto__ = (function (){var statearr_18312 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_18312[(6)] = c__16340__auto___18313);

return statearr_18312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___18313))
);

instatube.core.video_container = (function instatube$core$video_container(videoId,title,desc){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"video-detail col-md-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"embed-responsive embed-responsive-16by9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"embed-responsive-item",cljs.core.cst$kw$allow_DASH_full_DASH_screen,"allowfullscreen",cljs.core.cst$kw$frame_DASH_border,(0),cljs.core.cst$kw$src,["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(videoId)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"title"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"description"], null),desc], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"footer"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.PersistentArrayMap.EMPTY,"created by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"Mohamed Khattab"], null)], null)], null)], null);
});
instatube.core.app = (function instatube$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.header.header,instatube.core.EVENTCHANNEL,instatube.core.app_state], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.core.video_container,instatube.core.get_video_id(instatube.core.get_active_video_BANG_()),instatube.core.get_video_title(instatube.core.get_active_video_BANG_()),instatube.core.get_video_desc(instatube.core.get_active_video_BANG_())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.video_list.video_list,instatube.core.EVENTCHANNEL,cljs.core.cst$kw$videos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(instatube.core.app_state))], null)], null)], null);
});
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.core.app], null),document.querySelector("#cljs-target"));
