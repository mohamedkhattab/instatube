// Compiled by ClojureScript 1.9.908 {}
goog.provide('instatube.video_list');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('instatube.nav');
goog.require('instatube.core');
instatube.video_list.video_list = (function instatube$video_list$video_list(EVENTCHANNEL,videos,active_video){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-md-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group"], null),(function (){var iter__28931__auto__ = (function instatube$video_list$video_list_$_iter__32053(s__32054){
return (new cljs.core.LazySeq(null,(function (){
var s__32054__$1 = s__32054;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32054__$1);
if(temp__4657__auto__){
var s__32054__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32054__$2)){
var c__28929__auto__ = cljs.core.chunk_first.call(null,s__32054__$2);
var size__28930__auto__ = cljs.core.count.call(null,c__28929__auto__);
var b__32056 = cljs.core.chunk_buffer.call(null,size__28930__auto__);
if((function (){var i__32055 = (0);
while(true){
if((i__32055 < size__28930__auto__)){
var video = cljs.core._nth.call(null,c__28929__auto__,i__32055);
cljs.core.chunk_append.call(null,b__32056,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(instatube.nav.active_QMARK_.call(null,instatube.core.get_video_id.call(null,video),instatube.core.get_video_id.call(null,active_video)))?"list-group-item active":"list-group-item"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32055,video,c__28929__auto__,size__28930__auto__,b__32056,s__32054__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-video","update-active-video",-961682917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-video","active-video",1432388175),video], null)], null));
});})(i__32055,video,c__28929__auto__,size__28930__auto__,b__32056,s__32054__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"etag","etag",-329255476)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"video-list media"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-object",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"url","url",276297046)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-heading"], null),cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null)], null)], null));

var G__32057 = (i__32055 + (1));
i__32055 = G__32057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32056),instatube$video_list$video_list_$_iter__32053.call(null,cljs.core.chunk_rest.call(null,s__32054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32056),null);
}
} else {
var video = cljs.core.first.call(null,s__32054__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(instatube.nav.active_QMARK_.call(null,instatube.core.get_video_id.call(null,video),instatube.core.get_video_id.call(null,active_video)))?"list-group-item active":"list-group-item"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (video,s__32054__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-video","update-active-video",-961682917),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-video","active-video",1432388175),video], null)], null));
});})(video,s__32054__$2,temp__4657__auto__))
,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"etag","etag",-329255476)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"video-list media"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-object",new cljs.core.Keyword(null,"alt","alt",-3214426),"",new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"url","url",276297046)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"media-heading"], null),cljs.core.get_in.call(null,video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snippet","snippet",953581994),new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null)], null)], null),instatube$video_list$video_list_$_iter__32053.call(null,cljs.core.rest.call(null,s__32054__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28931__auto__.call(null,videos);
})()], null)], null);
});

//# sourceMappingURL=video_list.js.map?rel=1505048291211
