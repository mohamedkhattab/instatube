// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('instatube.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.async.Debouncer');
instatube.util.debounce = (function instatube$util$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return ((function (dbnc){
return (function() { 
var G__14575__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__14575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14576__i = 0, G__14576__a = new Array(arguments.length -  0);
while (G__14576__i < G__14576__a.length) {G__14576__a[G__14576__i] = arguments[G__14576__i + 0]; ++G__14576__i;}
  args = new cljs.core.IndexedSeq(G__14576__a,0,null);
} 
return G__14575__delegate.call(this,args);};
G__14575.cljs$lang$maxFixedArity = 0;
G__14575.cljs$lang$applyTo = (function (arglist__14577){
var args = cljs.core.seq(arglist__14577);
return G__14575__delegate(args);
});
G__14575.cljs$core$IFn$_invoke$arity$variadic = G__14575__delegate;
return G__14575;
})()
;
;})(dbnc))
});
