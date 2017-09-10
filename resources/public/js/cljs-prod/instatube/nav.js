// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instatube.nav');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
instatube.nav.active_QMARK_ = (function instatube$nav$active_QMARK_(active_item,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_item,item)){
return true;
} else {
return false;
}
});
instatube.nav.nav_item = (function instatube$nav$nav_item(EVENTCHANNEL,content,active_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"nav-item",cljs.core.cst$kw$on_DASH_click,(function (event){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$update_DASH_active_DASH_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active_DASH_item,content], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(cljs.core.truth_(instatube.nav.active_QMARK_(content,active_item))?"nav-link active":"nav-link"),cljs.core.cst$kw$href,"#"], null),content], null)], null);
});
