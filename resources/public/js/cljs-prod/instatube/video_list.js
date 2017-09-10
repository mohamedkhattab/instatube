// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instatube.video_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
instatube.video_list.video_list = (function instatube$video_list$video_list(EVENTCHANNEL,videos){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"col-md-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"list-group"], null),(function (){var iter__8971__auto__ = (function instatube$video_list$video_list_$_iter__18259(s__18260){
return (new cljs.core.LazySeq(null,(function (){
var s__18260__$1 = s__18260;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18260__$1);
if(temp__4657__auto__){
var s__18260__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18260__$2)){
var c__8969__auto__ = cljs.core.chunk_first(s__18260__$2);
var size__8970__auto__ = cljs.core.count(c__8969__auto__);
var b__18262 = cljs.core.chunk_buffer(size__8970__auto__);
if((function (){var i__18261 = (0);
while(true){
if((i__18261 < size__8970__auto__)){
var video = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8969__auto__,i__18261);
cljs.core.chunk_append(b__18262,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"list-group-item",cljs.core.cst$kw$on_DASH_click,((function (i__18261,video,c__8969__auto__,size__8970__auto__,b__18262,s__18260__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_active_DASH_video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_video,video], null)], null));
});})(i__18261,video,c__8969__auto__,size__8970__auto__,b__18262,s__18260__$2,temp__4657__auto__))
,cljs.core.cst$kw$key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etag], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"video-list media"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"media-left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"media-object",cljs.core.cst$kw$alt,"",cljs.core.cst$kw$src,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snippet,cljs.core.cst$kw$thumbnails,cljs.core.cst$kw$default,cljs.core.cst$kw$url], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"media-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"media-heading"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snippet,cljs.core.cst$kw$title], null))], null)], null)], null)], null));

var G__18263 = (i__18261 + (1));
i__18261 = G__18263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18262),instatube$video_list$video_list_$_iter__18259(cljs.core.chunk_rest(s__18260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18262),null);
}
} else {
var video = cljs.core.first(s__18260__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"list-group-item",cljs.core.cst$kw$on_DASH_click,((function (video,s__18260__$2,temp__4657__auto__){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_active_DASH_video,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_video,video], null)], null));
});})(video,s__18260__$2,temp__4657__auto__))
,cljs.core.cst$kw$key,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$etag], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"video-list media"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"media-left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"media-object",cljs.core.cst$kw$alt,"",cljs.core.cst$kw$src,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snippet,cljs.core.cst$kw$thumbnails,cljs.core.cst$kw$default,cljs.core.cst$kw$url], null))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"media-body"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"media-heading"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(video,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snippet,cljs.core.cst$kw$title], null))], null)], null)], null)], null),instatube$video_list$video_list_$_iter__18259(cljs.core.rest(s__18260__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8971__auto__(videos);
})()], null)], null);
});
