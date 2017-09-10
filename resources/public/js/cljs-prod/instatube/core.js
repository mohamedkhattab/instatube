// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instatube.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('instatube.header');
goog.require('instatube.video_list');
goog.require('instatube.util');
instatube.core.YOUTUBE_API_KEY = "AIzaSyANo3bt4bOjVU_VxSGwkbZSfrLoj9VREGo";
if(typeof instatube.core.app_state !== 'undefined'){
} else {
instatube.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$active_DASH_item,"Home",cljs.core.cst$kw$term,"mom's spaghetti",cljs.core.cst$kw$videos,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$active_DASH_video,cljs.core.PersistentArrayMap.EMPTY], null));
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
instatube.core.debounced_youtube_query = instatube.util.debounce((function (term){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://www.googleapis.com/youtube/v3/search",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$q,term,cljs.core.cst$kw$maxResults,(5),cljs.core.cst$kw$part,"snippet",cljs.core.cst$kw$type,"video,playlist",cljs.core.cst$kw$key,instatube.core.YOUTUBE_API_KEY], null),cljs.core.cst$kw$handler,instatube.core.handle_youtube_resonse,cljs.core.cst$kw$response_DASH_format,(function (){var G__14579 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keywords_QMARK_,true], null);
return (ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(G__14579) : ajax.core.json_response_format.call(null,G__14579));
})()], null)], 0));
}),(300));
instatube.core.EVENTS = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$update_DASH_active_DASH_item,(function (p__14580){
var map__14581 = p__14580;
var map__14581__$1 = ((((!((map__14581 == null)))?((((map__14581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14581):map__14581);
var active_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14581__$1,cljs.core.cst$kw$active_DASH_item);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_item], null),active_item);
}),cljs.core.cst$kw$update_DASH_search_DASH_term,(function (p__14583){
var map__14584 = p__14583;
var map__14584__$1 = ((((!((map__14584 == null)))?((((map__14584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14584.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14584):map__14584);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14584__$1,cljs.core.cst$kw$term);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$term], null),term);
}),cljs.core.cst$kw$update_DASH_video_DASH_result_DASH_set,(function (p__14586){
var map__14587 = p__14586;
var map__14587__$1 = ((((!((map__14587 == null)))?((((map__14587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14587):map__14587);
var videos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14587__$1,cljs.core.cst$kw$videos);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$videos], null),videos);
}),cljs.core.cst$kw$update_DASH_active_DASH_video,(function (p__14589){
var map__14590 = p__14589;
var map__14590__$1 = ((((!((map__14590 == null)))?((((map__14590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14590):map__14590);
var active_video = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14590__$1,cljs.core.cst$kw$active_DASH_video);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_video], null),active_video);
}),cljs.core.cst$kw$query_DASH_youtube_DASH_search,(function (p__14592){
var map__14593 = p__14592;
var map__14593__$1 = ((((!((map__14593 == null)))?((((map__14593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14593):map__14593);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$term);
(instatube.core.debounced_youtube_query.cljs$core$IFn$_invoke$arity$1 ? instatube.core.debounced_youtube_query.cljs$core$IFn$_invoke$arity$1(term) : instatube.core.debounced_youtube_query.call(null,term));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$active_DASH_video], null),cljs.core.first(cljs.core.cst$kw$videos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(instatube.core.app_state))));
})], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_youtube_DASH_search,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$term,cljs.core.cst$kw$term.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(instatube.core.app_state))], null)], null));
var c__13093__auto___14626 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__13093__auto___14626){
return (function (){
var f__13094__auto__ = (function (){var switch__13031__auto__ = ((function (c__13093__auto___14626){
return (function (state_14613){
var state_val_14614 = (state_14613[(1)]);
if((state_val_14614 === (1))){
var state_14613__$1 = state_14613;
var statearr_14615_14627 = state_14613__$1;
(statearr_14615_14627[(2)] = null);

(statearr_14615_14627[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14614 === (2))){
var state_14613__$1 = state_14613;
var statearr_14616_14628 = state_14613__$1;
(statearr_14616_14628[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_14614 === (3))){
var inst_14611 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14613__$1,inst_14611);
} else {
if((state_val_14614 === (4))){
var state_14613__$1 = state_14613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14613__$1,(7),instatube.core.EVENTCHANNEL);
} else {
if((state_val_14614 === (5))){
var state_14613__$1 = state_14613;
var statearr_14618_14629 = state_14613__$1;
(statearr_14618_14629[(2)] = null);

(statearr_14618_14629[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14614 === (6))){
var inst_14609 = (state_14613[(2)]);
var state_14613__$1 = state_14613;
var statearr_14619_14630 = state_14613__$1;
(statearr_14619_14630[(2)] = inst_14609);

(statearr_14619_14630[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14614 === (7))){
var inst_14601 = (state_14613[(2)]);
var inst_14602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14601,(0),null);
var inst_14603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14601,(1),null);
var inst_14604 = (inst_14602.cljs$core$IFn$_invoke$arity$1 ? inst_14602.cljs$core$IFn$_invoke$arity$1(instatube.core.EVENTS) : inst_14602.call(null,instatube.core.EVENTS));
var inst_14605 = (inst_14604.cljs$core$IFn$_invoke$arity$1 ? inst_14604.cljs$core$IFn$_invoke$arity$1(inst_14603) : inst_14604.call(null,inst_14603));
var state_14613__$1 = (function (){var statearr_14620 = state_14613;
(statearr_14620[(7)] = inst_14605);

return statearr_14620;
})();
var statearr_14621_14631 = state_14613__$1;
(statearr_14621_14631[(2)] = null);

(statearr_14621_14631[(1)] = (2));


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
});})(c__13093__auto___14626))
;
return ((function (switch__13031__auto__,c__13093__auto___14626){
return (function() {
var instatube$core$state_machine__13032__auto__ = null;
var instatube$core$state_machine__13032__auto____0 = (function (){
var statearr_14622 = [null,null,null,null,null,null,null,null];
(statearr_14622[(0)] = instatube$core$state_machine__13032__auto__);

(statearr_14622[(1)] = (1));

return statearr_14622;
});
var instatube$core$state_machine__13032__auto____1 = (function (state_14613){
while(true){
var ret_value__13033__auto__ = (function (){try{while(true){
var result__13034__auto__ = switch__13031__auto__(state_14613);
if(cljs.core.keyword_identical_QMARK_(result__13034__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13034__auto__;
}
break;
}
}catch (e14623){if((e14623 instanceof Object)){
var ex__13035__auto__ = e14623;
var statearr_14624_14632 = state_14613;
(statearr_14624_14632[(5)] = ex__13035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14613);

return cljs.core.cst$kw$recur;
} else {
throw e14623;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13033__auto__,cljs.core.cst$kw$recur)){
var G__14633 = state_14613;
state_14613 = G__14633;
continue;
} else {
return ret_value__13033__auto__;
}
break;
}
});
instatube$core$state_machine__13032__auto__ = function(state_14613){
switch(arguments.length){
case 0:
return instatube$core$state_machine__13032__auto____0.call(this);
case 1:
return instatube$core$state_machine__13032__auto____1.call(this,state_14613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
instatube$core$state_machine__13032__auto__.cljs$core$IFn$_invoke$arity$0 = instatube$core$state_machine__13032__auto____0;
instatube$core$state_machine__13032__auto__.cljs$core$IFn$_invoke$arity$1 = instatube$core$state_machine__13032__auto____1;
return instatube$core$state_machine__13032__auto__;
})()
;})(switch__13031__auto__,c__13093__auto___14626))
})();
var state__13095__auto__ = (function (){var statearr_14625 = (f__13094__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13094__auto__.cljs$core$IFn$_invoke$arity$0() : f__13094__auto__.call(null));
(statearr_14625[(6)] = c__13093__auto___14626);

return statearr_14625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13095__auto__);
});})(c__13093__auto___14626))
);

instatube.core.video_container = (function instatube$core$video_container(videoId,title,desc){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"video-detail col-md-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"embed-responsive embed-responsive-16by9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$iframe,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"embed-responsive-item",cljs.core.cst$kw$allow_DASH_full_DASH_screen,"allowfullscreen",cljs.core.cst$kw$frame_DASH_border,(0),cljs.core.cst$kw$src,["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((videoId == null))?"SW-BU6keEUw":videoId))].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"title"], null),(((title == null))?"Eminem - \"Mom's Spaghetti\" (Music Video)":title)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"description"], null),(((desc == null))?"parody Lyric subtitles available in video options (click the CC icon)":desc)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"footer"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,cljs.core.PersistentArrayMap.EMPTY,"InstaTube by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#"], null),"Mohamed Khattab"], null)], null)], null)], null);
});
instatube.core.app = (function instatube$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.header.header,instatube.core.EVENTCHANNEL,instatube.core.app_state], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.core.video_container,instatube.core.get_video_id(instatube.core.get_active_video_BANG_()),instatube.core.get_video_title(instatube.core.get_active_video_BANG_()),instatube.core.get_video_desc(instatube.core.get_active_video_BANG_())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.video_list.video_list,instatube.core.EVENTCHANNEL,cljs.core.cst$kw$videos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(instatube.core.app_state))], null)], null)], null);
});
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.core.app], null),document.querySelector("#cljs-target"));
