// Compiled by ClojureScript 1.9.908 {}
goog.provide('instatube.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
instatube.nav.active_QMARK_ = (function instatube$nav$active_QMARK_(active_item,item){
if(cljs.core._EQ_.call(null,active_item,item)){
return true;
} else {
return false;
}
});
instatube.nav.nav_item = (function instatube$nav$nav_item(EVENTCHANNEL,content,active_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"nav-item",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-active-item","update-active-item",1027410113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-item","active-item",-1265645988),content], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(instatube.nav.active_QMARK_.call(null,content,active_item))?"nav-link active":"nav-link"),new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),content], null)], null);
});

//# sourceMappingURL=nav.js.map?rel=1504960895730
