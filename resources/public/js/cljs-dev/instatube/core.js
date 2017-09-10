// Compiled by ClojureScript 1.9.908 {}
goog.provide('instatube.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('instatube.header');
goog.require('instatube.video_list');
instatube.core.YOUTUBE_API_KEY = "AIzaSyANo3bt4bOjVU_VxSGwkbZSfrLoj9VREGo";
if(typeof instatube.core.app_state !== 'undefined'){
} else {
instatube.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),"Home",new cljs.core.Keyword(null,"term","term",-1817390416),"mom's spagetti",new cljs.core.Keyword(null,"videos","videos",254925290),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"active-video","active-video",1432388175),cljs.core.PersistentArrayMap.EMPTY], null));
}
instatube.core.EVENTCHANNEL = cljs.core.async.chan.call(null);
instatube.core.handle_youtube_resonse = (function instatube$core$handle_youtube_resonse(response){
return cljs.core.async.put_BANG_.call(null,instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-video-result-set","update-video-result-set",-1927998818),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"videos","videos",254925290),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(response)], null)], null));
});
instatube.core.get_video_id = (function instatube$core$get_video_id(video){
return cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"videoId","videoId",-1080669993)], null));
});
instatube.core.get_video_title = (function instatube$core$get_video_title(video){
return cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"title","title",636505583)], null));
});
instatube.core.get_video_desc = (function instatube$core$get_video_desc(video){
return cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"description","description",-1428560544)], null));
});
instatube.core.get_active_video_BANG_ = (function instatube$core$get_active_video_BANG_(){
return new cljs.core.Keyword(null,"active-video","active-video",1432388175).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,instatube.core.app_state));
});
instatube.core.EVENTS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),(function (p__32459){
var map__32460 = p__32459;
var map__32460__$1 = ((((!((map__32460 == null)))?((((map__32460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32460):map__32460);
var active_item = cljs.core.get.call(null,map__32460__$1,new cljs.core.Keyword(null,"active-item","active-item",-1265645988));
return cljs.core.swap_BANG_.call(null,instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988)], null),active_item);
}),new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),(function (p__32462){
var map__32463 = p__32462;
var map__32463__$1 = ((((!((map__32463 == null)))?((((map__32463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32463):map__32463);
var term = cljs.core.get.call(null,map__32463__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
return cljs.core.swap_BANG_.call(null,instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"term","term",-1817390416)], null),term);
}),new cljs.core.Keyword(null,"update-video-result-set","update-video-result-set",-1927998818),(function (p__32465){
var map__32466 = p__32465;
var map__32466__$1 = ((((!((map__32466 == null)))?((((map__32466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32466):map__32466);
var videos = cljs.core.get.call(null,map__32466__$1,new cljs.core.Keyword(null,"videos","videos",254925290));
return cljs.core.swap_BANG_.call(null,instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"videos","videos",254925290)], null),videos);
}),new cljs.core.Keyword(null,"update-active-video","update-active-video",-961682917),(function (p__32468){
var map__32469 = p__32468;
var map__32469__$1 = ((((!((map__32469 == null)))?((((map__32469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32469):map__32469);
var active_video = cljs.core.get.call(null,map__32469__$1,new cljs.core.Keyword(null,"active-video","active-video",1432388175));
return cljs.core.swap_BANG_.call(null,instatube.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-video","active-video",1432388175)], null),active_video);
}),new cljs.core.Keyword(null,"query-youtube-search","query-youtube-search",233952961),(function (p__32471){
var map__32472 = p__32471;
var map__32472__$1 = ((((!((map__32472 == null)))?((((map__32472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32472):map__32472);
var term = cljs.core.get.call(null,map__32472__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
return ajax.core.GET.call(null,"https://www.googleapis.com/youtube/v3/search",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"q","q",689001697),term,new cljs.core.Keyword(null,"maxResults","maxResults",-2049455234),(5),new cljs.core.Keyword(null,"part","part",77757738),"snippet",new cljs.core.Keyword(null,"type","type",1174270348),"video,playlist",new cljs.core.Keyword(null,"key","key",-1516042587),instatube.core.YOUTUBE_API_KEY], null),new cljs.core.Keyword(null,"handler","handler",-195596612),instatube.core.handle_youtube_resonse,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));
})], null);
cljs.core.async.put_BANG_.call(null,instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-youtube-search","query-youtube-search",233952961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,instatube.core.app_state))], null)], null));
cljs.core.async.put_BANG_.call(null,instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-video","update-active-video",-961682917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-video","active-video",1432388175),cljs.core.first.call(null,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,instatube.core.app_state)))], null)], null));
var c__30601__auto___32505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30601__auto___32505){
return (function (){
var f__30602__auto__ = (function (){var switch__30580__auto__ = ((function (c__30601__auto___32505){
return (function (state_32492){
var state_val_32493 = (state_32492[(1)]);
if((state_val_32493 === (1))){
var state_32492__$1 = state_32492;
var statearr_32494_32506 = state_32492__$1;
(statearr_32494_32506[(2)] = null);

(statearr_32494_32506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (2))){
var state_32492__$1 = state_32492;
var statearr_32495_32507 = state_32492__$1;
(statearr_32495_32507[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (3))){
var inst_32490 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32492__$1,inst_32490);
} else {
if((state_val_32493 === (4))){
var state_32492__$1 = state_32492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32492__$1,(7),instatube.core.EVENTCHANNEL);
} else {
if((state_val_32493 === (5))){
var state_32492__$1 = state_32492;
var statearr_32497_32508 = state_32492__$1;
(statearr_32497_32508[(2)] = null);

(statearr_32497_32508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (6))){
var inst_32488 = (state_32492[(2)]);
var state_32492__$1 = state_32492;
var statearr_32498_32509 = state_32492__$1;
(statearr_32498_32509[(2)] = inst_32488);

(statearr_32498_32509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32493 === (7))){
var inst_32480 = (state_32492[(2)]);
var inst_32481 = cljs.core.nth.call(null,inst_32480,(0),null);
var inst_32482 = cljs.core.nth.call(null,inst_32480,(1),null);
var inst_32483 = inst_32481.call(null,instatube.core.EVENTS);
var inst_32484 = inst_32483.call(null,inst_32482);
var state_32492__$1 = (function (){var statearr_32499 = state_32492;
(statearr_32499[(7)] = inst_32484);

return statearr_32499;
})();
var statearr_32500_32510 = state_32492__$1;
(statearr_32500_32510[(2)] = null);

(statearr_32500_32510[(1)] = (2));


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
});})(c__30601__auto___32505))
;
return ((function (switch__30580__auto__,c__30601__auto___32505){
return (function() {
var instatube$core$state_machine__30581__auto__ = null;
var instatube$core$state_machine__30581__auto____0 = (function (){
var statearr_32501 = [null,null,null,null,null,null,null,null];
(statearr_32501[(0)] = instatube$core$state_machine__30581__auto__);

(statearr_32501[(1)] = (1));

return statearr_32501;
});
var instatube$core$state_machine__30581__auto____1 = (function (state_32492){
while(true){
var ret_value__30582__auto__ = (function (){try{while(true){
var result__30583__auto__ = switch__30580__auto__.call(null,state_32492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30583__auto__;
}
break;
}
}catch (e32502){if((e32502 instanceof Object)){
var ex__30584__auto__ = e32502;
var statearr_32503_32511 = state_32492;
(statearr_32503_32511[(5)] = ex__30584__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30582__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_32492;
state_32492 = G__32512;
continue;
} else {
return ret_value__30582__auto__;
}
break;
}
});
instatube$core$state_machine__30581__auto__ = function(state_32492){
switch(arguments.length){
case 0:
return instatube$core$state_machine__30581__auto____0.call(this);
case 1:
return instatube$core$state_machine__30581__auto____1.call(this,state_32492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
instatube$core$state_machine__30581__auto__.cljs$core$IFn$_invoke$arity$0 = instatube$core$state_machine__30581__auto____0;
instatube$core$state_machine__30581__auto__.cljs$core$IFn$_invoke$arity$1 = instatube$core$state_machine__30581__auto____1;
return instatube$core$state_machine__30581__auto__;
})()
;})(switch__30580__auto__,c__30601__auto___32505))
})();
var state__30603__auto__ = (function (){var statearr_32504 = f__30602__auto__.call(null);
(statearr_32504[(6)] = c__30601__auto___32505);

return statearr_32504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30603__auto__);
});})(c__30601__auto___32505))
);

instatube.core.video_container = (function instatube$core$video_container(videoId,title,desc){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"video-detail col-md-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"embed-responsive embed-responsive-16by9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"embed-responsive-item",new cljs.core.Keyword(null,"allow-full-screen","allow-full-screen",-1219396017),"allowfullscreen",new cljs.core.Keyword(null,"frame-border","frame-border",-1868748185),(0),new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.youtube.com/embed/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(videoId)].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"details"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"desc"], null),desc], null)], null)], null);
});
instatube.core.app = (function instatube$core$app(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.header.header,instatube.core.EVENTCHANNEL,instatube.core.app_state], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.core.video_container,instatube.core.get_video_id.call(null,instatube.core.get_active_video_BANG_.call(null)),instatube.core.get_video_title.call(null,instatube.core.get_active_video_BANG_.call(null)),instatube.core.get_video_desc.call(null,instatube.core.get_active_video_BANG_.call(null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.video_list.video_list,instatube.core.EVENTCHANNEL,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,instatube.core.app_state))], null)], null)], null);
});
cljs.core.async.put_BANG_.call(null,instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-youtube-search","query-youtube-search",233952961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,instatube.core.app_state))], null)], null));

cljs.core.async.put_BANG_.call(null,instatube.core.EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-video","update-active-video",-961682917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-video","active-video",1432388175),cljs.core.first.call(null,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,instatube.core.app_state)))], null)], null));

reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [instatube.core.app], null),document.querySelector("#cljs-target"));

//# sourceMappingURL=core.js.map?rel=1505049874628
