// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instatube.search_bar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
instatube.search_bar.search_bar = (function instatube$search_bar$search_bar(EVENTCHANNEL,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,"form-control",cljs.core.cst$kw$id,"search-bar",cljs.core.cst$kw$placeholder,"Search YouTube Instantly...",cljs.core.cst$kw$value,value,cljs.core.cst$kw$on_DASH_change,(function (event){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_search_DASH_term,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$term,event.target.value], null)], null));

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_youtube_DASH_search,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$term,event.target.value], null)], null));
})], null)], null);
});
