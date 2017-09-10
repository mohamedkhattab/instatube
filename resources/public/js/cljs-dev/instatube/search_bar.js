// Compiled by ClojureScript 1.9.908 {}
goog.provide('instatube.search_bar');
goog.require('cljs.core');
goog.require('cljs.core.async');
instatube.search_bar.search_bar = (function instatube$search_bar$search_bar(EVENTCHANNEL,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"id","id",-1388402092),"search-bar",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search YouTube Instantly...",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-search-term","update-search-term",-1725569553),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),event.target.value], null)], null));

return cljs.core.async.put_BANG_.call(null,EVENTCHANNEL,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-youtube-search","query-youtube-search",233952961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),event.target.value], null)], null));
})], null)], null);
});

//# sourceMappingURL=search_bar.js.map?rel=1504968808539
