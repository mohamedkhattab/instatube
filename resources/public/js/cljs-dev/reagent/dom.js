// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global.ReactDOM;
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_36747 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_36747){
return (function (){
var _STAR_always_update_STAR_36748 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36748;
}});})(_STAR_always_update_STAR_36747))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36747;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36750 = arguments.length;
switch (G__36750) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__36752_36756 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__36753_36757 = null;
var count__36754_36758 = (0);
var i__36755_36759 = (0);
while(true){
if((i__36755_36759 < count__36754_36758)){
var v_36760 = cljs.core._nth.call(null,chunk__36753_36757,i__36755_36759);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36760);

var G__36761 = seq__36752_36756;
var G__36762 = chunk__36753_36757;
var G__36763 = count__36754_36758;
var G__36764 = (i__36755_36759 + (1));
seq__36752_36756 = G__36761;
chunk__36753_36757 = G__36762;
count__36754_36758 = G__36763;
i__36755_36759 = G__36764;
continue;
} else {
var temp__4657__auto___36765 = cljs.core.seq.call(null,seq__36752_36756);
if(temp__4657__auto___36765){
var seq__36752_36766__$1 = temp__4657__auto___36765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36752_36766__$1)){
var c__28828__auto___36767 = cljs.core.chunk_first.call(null,seq__36752_36766__$1);
var G__36768 = cljs.core.chunk_rest.call(null,seq__36752_36766__$1);
var G__36769 = c__28828__auto___36767;
var G__36770 = cljs.core.count.call(null,c__28828__auto___36767);
var G__36771 = (0);
seq__36752_36756 = G__36768;
chunk__36753_36757 = G__36769;
count__36754_36758 = G__36770;
i__36755_36759 = G__36771;
continue;
} else {
var v_36772 = cljs.core.first.call(null,seq__36752_36766__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_36772);

var G__36773 = cljs.core.next.call(null,seq__36752_36766__$1);
var G__36774 = null;
var G__36775 = (0);
var G__36776 = (0);
seq__36752_36756 = G__36773;
chunk__36753_36757 = G__36774;
count__36754_36758 = G__36775;
i__36755_36759 = G__36776;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1504960512195
