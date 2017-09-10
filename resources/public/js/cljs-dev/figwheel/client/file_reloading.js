// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27989__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27989__auto__){
return or__27989__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27989__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34154_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34154_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34155 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34156 = null;
var count__34157 = (0);
var i__34158 = (0);
while(true){
if((i__34158 < count__34157)){
var n = cljs.core._nth.call(null,chunk__34156,i__34158);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34159 = seq__34155;
var G__34160 = chunk__34156;
var G__34161 = count__34157;
var G__34162 = (i__34158 + (1));
seq__34155 = G__34159;
chunk__34156 = G__34160;
count__34157 = G__34161;
i__34158 = G__34162;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34155);
if(temp__4657__auto__){
var seq__34155__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34155__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__34155__$1);
var G__34163 = cljs.core.chunk_rest.call(null,seq__34155__$1);
var G__34164 = c__28828__auto__;
var G__34165 = cljs.core.count.call(null,c__28828__auto__);
var G__34166 = (0);
seq__34155 = G__34163;
chunk__34156 = G__34164;
count__34157 = G__34165;
i__34158 = G__34166;
continue;
} else {
var n = cljs.core.first.call(null,seq__34155__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34167 = cljs.core.next.call(null,seq__34155__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__34155 = G__34167;
chunk__34156 = G__34168;
count__34157 = G__34169;
i__34158 = G__34170;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34180_34188 = cljs.core.seq.call(null,deps);
var chunk__34181_34189 = null;
var count__34182_34190 = (0);
var i__34183_34191 = (0);
while(true){
if((i__34183_34191 < count__34182_34190)){
var dep_34192 = cljs.core._nth.call(null,chunk__34181_34189,i__34183_34191);
topo_sort_helper_STAR_.call(null,dep_34192,(depth + (1)),state);

var G__34193 = seq__34180_34188;
var G__34194 = chunk__34181_34189;
var G__34195 = count__34182_34190;
var G__34196 = (i__34183_34191 + (1));
seq__34180_34188 = G__34193;
chunk__34181_34189 = G__34194;
count__34182_34190 = G__34195;
i__34183_34191 = G__34196;
continue;
} else {
var temp__4657__auto___34197 = cljs.core.seq.call(null,seq__34180_34188);
if(temp__4657__auto___34197){
var seq__34180_34198__$1 = temp__4657__auto___34197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34180_34198__$1)){
var c__28828__auto___34199 = cljs.core.chunk_first.call(null,seq__34180_34198__$1);
var G__34200 = cljs.core.chunk_rest.call(null,seq__34180_34198__$1);
var G__34201 = c__28828__auto___34199;
var G__34202 = cljs.core.count.call(null,c__28828__auto___34199);
var G__34203 = (0);
seq__34180_34188 = G__34200;
chunk__34181_34189 = G__34201;
count__34182_34190 = G__34202;
i__34183_34191 = G__34203;
continue;
} else {
var dep_34204 = cljs.core.first.call(null,seq__34180_34198__$1);
topo_sort_helper_STAR_.call(null,dep_34204,(depth + (1)),state);

var G__34205 = cljs.core.next.call(null,seq__34180_34198__$1);
var G__34206 = null;
var G__34207 = (0);
var G__34208 = (0);
seq__34180_34188 = G__34205;
chunk__34181_34189 = G__34206;
count__34182_34190 = G__34207;
i__34183_34191 = G__34208;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34184){
var vec__34185 = p__34184;
var seq__34186 = cljs.core.seq.call(null,vec__34185);
var first__34187 = cljs.core.first.call(null,seq__34186);
var seq__34186__$1 = cljs.core.next.call(null,seq__34186);
var x = first__34187;
var xs = seq__34186__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34185,seq__34186,first__34187,seq__34186__$1,x,xs,get_deps__$1){
return (function (p1__34171_SHARP_){
return clojure.set.difference.call(null,p1__34171_SHARP_,x);
});})(vec__34185,seq__34186,first__34187,seq__34186__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34209 = cljs.core.seq.call(null,provides);
var chunk__34210 = null;
var count__34211 = (0);
var i__34212 = (0);
while(true){
if((i__34212 < count__34211)){
var prov = cljs.core._nth.call(null,chunk__34210,i__34212);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34213_34221 = cljs.core.seq.call(null,requires);
var chunk__34214_34222 = null;
var count__34215_34223 = (0);
var i__34216_34224 = (0);
while(true){
if((i__34216_34224 < count__34215_34223)){
var req_34225 = cljs.core._nth.call(null,chunk__34214_34222,i__34216_34224);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34225,prov);

var G__34226 = seq__34213_34221;
var G__34227 = chunk__34214_34222;
var G__34228 = count__34215_34223;
var G__34229 = (i__34216_34224 + (1));
seq__34213_34221 = G__34226;
chunk__34214_34222 = G__34227;
count__34215_34223 = G__34228;
i__34216_34224 = G__34229;
continue;
} else {
var temp__4657__auto___34230 = cljs.core.seq.call(null,seq__34213_34221);
if(temp__4657__auto___34230){
var seq__34213_34231__$1 = temp__4657__auto___34230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34213_34231__$1)){
var c__28828__auto___34232 = cljs.core.chunk_first.call(null,seq__34213_34231__$1);
var G__34233 = cljs.core.chunk_rest.call(null,seq__34213_34231__$1);
var G__34234 = c__28828__auto___34232;
var G__34235 = cljs.core.count.call(null,c__28828__auto___34232);
var G__34236 = (0);
seq__34213_34221 = G__34233;
chunk__34214_34222 = G__34234;
count__34215_34223 = G__34235;
i__34216_34224 = G__34236;
continue;
} else {
var req_34237 = cljs.core.first.call(null,seq__34213_34231__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34237,prov);

var G__34238 = cljs.core.next.call(null,seq__34213_34231__$1);
var G__34239 = null;
var G__34240 = (0);
var G__34241 = (0);
seq__34213_34221 = G__34238;
chunk__34214_34222 = G__34239;
count__34215_34223 = G__34240;
i__34216_34224 = G__34241;
continue;
}
} else {
}
}
break;
}

var G__34242 = seq__34209;
var G__34243 = chunk__34210;
var G__34244 = count__34211;
var G__34245 = (i__34212 + (1));
seq__34209 = G__34242;
chunk__34210 = G__34243;
count__34211 = G__34244;
i__34212 = G__34245;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34209);
if(temp__4657__auto__){
var seq__34209__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34209__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__34209__$1);
var G__34246 = cljs.core.chunk_rest.call(null,seq__34209__$1);
var G__34247 = c__28828__auto__;
var G__34248 = cljs.core.count.call(null,c__28828__auto__);
var G__34249 = (0);
seq__34209 = G__34246;
chunk__34210 = G__34247;
count__34211 = G__34248;
i__34212 = G__34249;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34209__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34217_34250 = cljs.core.seq.call(null,requires);
var chunk__34218_34251 = null;
var count__34219_34252 = (0);
var i__34220_34253 = (0);
while(true){
if((i__34220_34253 < count__34219_34252)){
var req_34254 = cljs.core._nth.call(null,chunk__34218_34251,i__34220_34253);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34254,prov);

var G__34255 = seq__34217_34250;
var G__34256 = chunk__34218_34251;
var G__34257 = count__34219_34252;
var G__34258 = (i__34220_34253 + (1));
seq__34217_34250 = G__34255;
chunk__34218_34251 = G__34256;
count__34219_34252 = G__34257;
i__34220_34253 = G__34258;
continue;
} else {
var temp__4657__auto___34259__$1 = cljs.core.seq.call(null,seq__34217_34250);
if(temp__4657__auto___34259__$1){
var seq__34217_34260__$1 = temp__4657__auto___34259__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34217_34260__$1)){
var c__28828__auto___34261 = cljs.core.chunk_first.call(null,seq__34217_34260__$1);
var G__34262 = cljs.core.chunk_rest.call(null,seq__34217_34260__$1);
var G__34263 = c__28828__auto___34261;
var G__34264 = cljs.core.count.call(null,c__28828__auto___34261);
var G__34265 = (0);
seq__34217_34250 = G__34262;
chunk__34218_34251 = G__34263;
count__34219_34252 = G__34264;
i__34220_34253 = G__34265;
continue;
} else {
var req_34266 = cljs.core.first.call(null,seq__34217_34260__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34266,prov);

var G__34267 = cljs.core.next.call(null,seq__34217_34260__$1);
var G__34268 = null;
var G__34269 = (0);
var G__34270 = (0);
seq__34217_34250 = G__34267;
chunk__34218_34251 = G__34268;
count__34219_34252 = G__34269;
i__34220_34253 = G__34270;
continue;
}
} else {
}
}
break;
}

var G__34271 = cljs.core.next.call(null,seq__34209__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__34209 = G__34271;
chunk__34210 = G__34272;
count__34211 = G__34273;
i__34212 = G__34274;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34275_34279 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34276_34280 = null;
var count__34277_34281 = (0);
var i__34278_34282 = (0);
while(true){
if((i__34278_34282 < count__34277_34281)){
var ns_34283 = cljs.core._nth.call(null,chunk__34276_34280,i__34278_34282);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34283);

var G__34284 = seq__34275_34279;
var G__34285 = chunk__34276_34280;
var G__34286 = count__34277_34281;
var G__34287 = (i__34278_34282 + (1));
seq__34275_34279 = G__34284;
chunk__34276_34280 = G__34285;
count__34277_34281 = G__34286;
i__34278_34282 = G__34287;
continue;
} else {
var temp__4657__auto___34288 = cljs.core.seq.call(null,seq__34275_34279);
if(temp__4657__auto___34288){
var seq__34275_34289__$1 = temp__4657__auto___34288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34275_34289__$1)){
var c__28828__auto___34290 = cljs.core.chunk_first.call(null,seq__34275_34289__$1);
var G__34291 = cljs.core.chunk_rest.call(null,seq__34275_34289__$1);
var G__34292 = c__28828__auto___34290;
var G__34293 = cljs.core.count.call(null,c__28828__auto___34290);
var G__34294 = (0);
seq__34275_34279 = G__34291;
chunk__34276_34280 = G__34292;
count__34277_34281 = G__34293;
i__34278_34282 = G__34294;
continue;
} else {
var ns_34295 = cljs.core.first.call(null,seq__34275_34289__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34295);

var G__34296 = cljs.core.next.call(null,seq__34275_34289__$1);
var G__34297 = null;
var G__34298 = (0);
var G__34299 = (0);
seq__34275_34279 = G__34296;
chunk__34276_34280 = G__34297;
count__34277_34281 = G__34298;
i__34278_34282 = G__34299;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27989__auto__ = goog.require__;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34300__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34301__i = 0, G__34301__a = new Array(arguments.length -  0);
while (G__34301__i < G__34301__a.length) {G__34301__a[G__34301__i] = arguments[G__34301__i + 0]; ++G__34301__i;}
  args = new cljs.core.IndexedSeq(G__34301__a,0,null);
} 
return G__34300__delegate.call(this,args);};
G__34300.cljs$lang$maxFixedArity = 0;
G__34300.cljs$lang$applyTo = (function (arglist__34302){
var args = cljs.core.seq(arglist__34302);
return G__34300__delegate(args);
});
G__34300.cljs$core$IFn$_invoke$arity$variadic = G__34300__delegate;
return G__34300;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__34303_SHARP_,p2__34304_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34303_SHARP_)].join('')),p2__34304_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__34305_SHARP_,p2__34306_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34305_SHARP_)].join(''),p2__34306_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34307 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34307.addCallback(((function (G__34307){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34307))
);

G__34307.addErrback(((function (G__34307){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34307))
);

return G__34307;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34308 = cljs.core._EQ_;
var expr__34309 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34308.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34309))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34308,expr__34309){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34308,expr__34309))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34308,expr__34309){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34311){if((e34311 instanceof Error)){
var e = e34311;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34311;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34308,expr__34309))
} else {
if(cljs.core.truth_(pred__34308.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34309))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34308.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34309))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34308.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34309))){
return ((function (pred__34308,expr__34309){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34312){if((e34312 instanceof Error)){
var e = e34312;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34312;

}
}})());
});
;})(pred__34308,expr__34309))
} else {
return ((function (pred__34308,expr__34309){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34308,expr__34309))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34313,callback){
var map__34314 = p__34313;
var map__34314__$1 = ((((!((map__34314 == null)))?((((map__34314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34314):map__34314);
var file_msg = map__34314__$1;
var request_url = cljs.core.get.call(null,map__34314__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34314,map__34314__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34314,map__34314__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__){
return (function (state_34338){
var state_val_34339 = (state_34338[(1)]);
if((state_val_34339 === (7))){
var inst_34334 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
var statearr_34340_34357 = state_34338__$1;
(statearr_34340_34357[(2)] = inst_34334);

(statearr_34340_34357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (1))){
var state_34338__$1 = state_34338;
var statearr_34341_34358 = state_34338__$1;
(statearr_34341_34358[(2)] = null);

(statearr_34341_34358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (4))){
var inst_34318 = (state_34338[(7)]);
var inst_34318__$1 = (state_34338[(2)]);
var state_34338__$1 = (function (){var statearr_34342 = state_34338;
(statearr_34342[(7)] = inst_34318__$1);

return statearr_34342;
})();
if(cljs.core.truth_(inst_34318__$1)){
var statearr_34343_34359 = state_34338__$1;
(statearr_34343_34359[(1)] = (5));

} else {
var statearr_34344_34360 = state_34338__$1;
(statearr_34344_34360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (6))){
var state_34338__$1 = state_34338;
var statearr_34345_34361 = state_34338__$1;
(statearr_34345_34361[(2)] = null);

(statearr_34345_34361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (3))){
var inst_34336 = (state_34338[(2)]);
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34338__$1,inst_34336);
} else {
if((state_val_34339 === (2))){
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34338__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34339 === (11))){
var inst_34330 = (state_34338[(2)]);
var state_34338__$1 = (function (){var statearr_34346 = state_34338;
(statearr_34346[(8)] = inst_34330);

return statearr_34346;
})();
var statearr_34347_34362 = state_34338__$1;
(statearr_34347_34362[(2)] = null);

(statearr_34347_34362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (9))){
var inst_34324 = (state_34338[(9)]);
var inst_34322 = (state_34338[(10)]);
var inst_34326 = inst_34324.call(null,inst_34322);
var state_34338__$1 = state_34338;
var statearr_34348_34363 = state_34338__$1;
(statearr_34348_34363[(2)] = inst_34326);

(statearr_34348_34363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (5))){
var inst_34318 = (state_34338[(7)]);
var inst_34320 = figwheel.client.file_reloading.blocking_load.call(null,inst_34318);
var state_34338__$1 = state_34338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34338__$1,(8),inst_34320);
} else {
if((state_val_34339 === (10))){
var inst_34322 = (state_34338[(10)]);
var inst_34328 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34322);
var state_34338__$1 = state_34338;
var statearr_34349_34364 = state_34338__$1;
(statearr_34349_34364[(2)] = inst_34328);

(statearr_34349_34364[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34339 === (8))){
var inst_34318 = (state_34338[(7)]);
var inst_34324 = (state_34338[(9)]);
var inst_34322 = (state_34338[(2)]);
var inst_34323 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34324__$1 = cljs.core.get.call(null,inst_34323,inst_34318);
var state_34338__$1 = (function (){var statearr_34350 = state_34338;
(statearr_34350[(9)] = inst_34324__$1);

(statearr_34350[(10)] = inst_34322);

return statearr_34350;
})();
if(cljs.core.truth_(inst_34324__$1)){
var statearr_34351_34365 = state_34338__$1;
(statearr_34351_34365[(1)] = (9));

} else {
var statearr_34352_34366 = state_34338__$1;
(statearr_34352_34366[(1)] = (10));

}

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
}
}
}
}
});})(c__30926__auto__))
;
return ((function (switch__30838__auto__,c__30926__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30839__auto__ = null;
var figwheel$client$file_reloading$state_machine__30839__auto____0 = (function (){
var statearr_34353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34353[(0)] = figwheel$client$file_reloading$state_machine__30839__auto__);

(statearr_34353[(1)] = (1));

return statearr_34353;
});
var figwheel$client$file_reloading$state_machine__30839__auto____1 = (function (state_34338){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_34338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e34354){if((e34354 instanceof Object)){
var ex__30842__auto__ = e34354;
var statearr_34355_34367 = state_34338;
(statearr_34355_34367[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34368 = state_34338;
state_34338 = G__34368;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30839__auto__ = function(state_34338){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30839__auto____1.call(this,state_34338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30839__auto____0;
figwheel$client$file_reloading$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30839__auto____1;
return figwheel$client$file_reloading$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__))
})();
var state__30928__auto__ = (function (){var statearr_34356 = f__30927__auto__.call(null);
(statearr_34356[(6)] = c__30926__auto__);

return statearr_34356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__))
);

return c__30926__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34369,callback){
var map__34370 = p__34369;
var map__34370__$1 = ((((!((map__34370 == null)))?((((map__34370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34370):map__34370);
var file_msg = map__34370__$1;
var namespace = cljs.core.get.call(null,map__34370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34370,map__34370__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34370,map__34370__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34372){
var map__34373 = p__34372;
var map__34373__$1 = ((((!((map__34373 == null)))?((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34373):map__34373);
var file_msg = map__34373__$1;
var namespace = cljs.core.get.call(null,map__34373__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34375){
var map__34376 = p__34375;
var map__34376__$1 = ((((!((map__34376 == null)))?((((map__34376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34376.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34376):map__34376);
var file_msg = map__34376__$1;
var namespace = cljs.core.get.call(null,map__34376__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27977__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27977__auto__){
var or__27989__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27977__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34378,callback){
var map__34379 = p__34378;
var map__34379__$1 = ((((!((map__34379 == null)))?((((map__34379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34379):map__34379);
var file_msg = map__34379__$1;
var request_url = cljs.core.get.call(null,map__34379__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34379__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30926__auto___34429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___34429,out){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___34429,out){
return (function (state_34414){
var state_val_34415 = (state_34414[(1)]);
if((state_val_34415 === (1))){
var inst_34388 = cljs.core.seq.call(null,files);
var inst_34389 = cljs.core.first.call(null,inst_34388);
var inst_34390 = cljs.core.next.call(null,inst_34388);
var inst_34391 = files;
var state_34414__$1 = (function (){var statearr_34416 = state_34414;
(statearr_34416[(7)] = inst_34389);

(statearr_34416[(8)] = inst_34391);

(statearr_34416[(9)] = inst_34390);

return statearr_34416;
})();
var statearr_34417_34430 = state_34414__$1;
(statearr_34417_34430[(2)] = null);

(statearr_34417_34430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (2))){
var inst_34391 = (state_34414[(8)]);
var inst_34397 = (state_34414[(10)]);
var inst_34396 = cljs.core.seq.call(null,inst_34391);
var inst_34397__$1 = cljs.core.first.call(null,inst_34396);
var inst_34398 = cljs.core.next.call(null,inst_34396);
var inst_34399 = (inst_34397__$1 == null);
var inst_34400 = cljs.core.not.call(null,inst_34399);
var state_34414__$1 = (function (){var statearr_34418 = state_34414;
(statearr_34418[(11)] = inst_34398);

(statearr_34418[(10)] = inst_34397__$1);

return statearr_34418;
})();
if(inst_34400){
var statearr_34419_34431 = state_34414__$1;
(statearr_34419_34431[(1)] = (4));

} else {
var statearr_34420_34432 = state_34414__$1;
(statearr_34420_34432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (3))){
var inst_34412 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34414__$1,inst_34412);
} else {
if((state_val_34415 === (4))){
var inst_34397 = (state_34414[(10)]);
var inst_34402 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34397);
var state_34414__$1 = state_34414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34414__$1,(7),inst_34402);
} else {
if((state_val_34415 === (5))){
var inst_34408 = cljs.core.async.close_BANG_.call(null,out);
var state_34414__$1 = state_34414;
var statearr_34421_34433 = state_34414__$1;
(statearr_34421_34433[(2)] = inst_34408);

(statearr_34421_34433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (6))){
var inst_34410 = (state_34414[(2)]);
var state_34414__$1 = state_34414;
var statearr_34422_34434 = state_34414__$1;
(statearr_34422_34434[(2)] = inst_34410);

(statearr_34422_34434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34415 === (7))){
var inst_34398 = (state_34414[(11)]);
var inst_34404 = (state_34414[(2)]);
var inst_34405 = cljs.core.async.put_BANG_.call(null,out,inst_34404);
var inst_34391 = inst_34398;
var state_34414__$1 = (function (){var statearr_34423 = state_34414;
(statearr_34423[(8)] = inst_34391);

(statearr_34423[(12)] = inst_34405);

return statearr_34423;
})();
var statearr_34424_34435 = state_34414__$1;
(statearr_34424_34435[(2)] = null);

(statearr_34424_34435[(1)] = (2));


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
});})(c__30926__auto___34429,out))
;
return ((function (switch__30838__auto__,c__30926__auto___34429,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto____0 = (function (){
var statearr_34425 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34425[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto__);

(statearr_34425[(1)] = (1));

return statearr_34425;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto____1 = (function (state_34414){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_34414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e34426){if((e34426 instanceof Object)){
var ex__30842__auto__ = e34426;
var statearr_34427_34436 = state_34414;
(statearr_34427_34436[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34437 = state_34414;
state_34414 = G__34437;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto__ = function(state_34414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto____1.call(this,state_34414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___34429,out))
})();
var state__30928__auto__ = (function (){var statearr_34428 = f__30927__auto__.call(null);
(statearr_34428[(6)] = c__30926__auto___34429);

return statearr_34428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___34429,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34438,opts){
var map__34439 = p__34438;
var map__34439__$1 = ((((!((map__34439 == null)))?((((map__34439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34439):map__34439);
var eval_body = cljs.core.get.call(null,map__34439__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34439__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27977__auto__ = eval_body;
if(cljs.core.truth_(and__27977__auto__)){
return typeof eval_body === 'string';
} else {
return and__27977__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34441){var e = e34441;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34442_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34442_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34443){
var vec__34444 = p__34443;
var k = cljs.core.nth.call(null,vec__34444,(0),null);
var v = cljs.core.nth.call(null,vec__34444,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34447){
var vec__34448 = p__34447;
var k = cljs.core.nth.call(null,vec__34448,(0),null);
var v = cljs.core.nth.call(null,vec__34448,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34454,p__34455){
var map__34456 = p__34454;
var map__34456__$1 = ((((!((map__34456 == null)))?((((map__34456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34456):map__34456);
var opts = map__34456__$1;
var before_jsload = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34456__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34457 = p__34455;
var map__34457__$1 = ((((!((map__34457 == null)))?((((map__34457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34457):map__34457);
var msg = map__34457__$1;
var files = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34611){
var state_val_34612 = (state_34611[(1)]);
if((state_val_34612 === (7))){
var inst_34471 = (state_34611[(7)]);
var inst_34473 = (state_34611[(8)]);
var inst_34472 = (state_34611[(9)]);
var inst_34474 = (state_34611[(10)]);
var inst_34479 = cljs.core._nth.call(null,inst_34472,inst_34474);
var inst_34480 = figwheel.client.file_reloading.eval_body.call(null,inst_34479,opts);
var inst_34481 = (inst_34474 + (1));
var tmp34613 = inst_34471;
var tmp34614 = inst_34473;
var tmp34615 = inst_34472;
var inst_34471__$1 = tmp34613;
var inst_34472__$1 = tmp34615;
var inst_34473__$1 = tmp34614;
var inst_34474__$1 = inst_34481;
var state_34611__$1 = (function (){var statearr_34616 = state_34611;
(statearr_34616[(7)] = inst_34471__$1);

(statearr_34616[(8)] = inst_34473__$1);

(statearr_34616[(9)] = inst_34472__$1);

(statearr_34616[(10)] = inst_34474__$1);

(statearr_34616[(11)] = inst_34480);

return statearr_34616;
})();
var statearr_34617_34700 = state_34611__$1;
(statearr_34617_34700[(2)] = null);

(statearr_34617_34700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (20))){
var inst_34514 = (state_34611[(12)]);
var inst_34522 = figwheel.client.file_reloading.sort_files.call(null,inst_34514);
var state_34611__$1 = state_34611;
var statearr_34618_34701 = state_34611__$1;
(statearr_34618_34701[(2)] = inst_34522);

(statearr_34618_34701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (27))){
var state_34611__$1 = state_34611;
var statearr_34619_34702 = state_34611__$1;
(statearr_34619_34702[(2)] = null);

(statearr_34619_34702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (1))){
var inst_34463 = (state_34611[(13)]);
var inst_34460 = before_jsload.call(null,files);
var inst_34461 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34462 = (function (){return ((function (inst_34463,inst_34460,inst_34461,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34451_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34451_SHARP_);
});
;})(inst_34463,inst_34460,inst_34461,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34463__$1 = cljs.core.filter.call(null,inst_34462,files);
var inst_34464 = cljs.core.not_empty.call(null,inst_34463__$1);
var state_34611__$1 = (function (){var statearr_34620 = state_34611;
(statearr_34620[(14)] = inst_34461);

(statearr_34620[(13)] = inst_34463__$1);

(statearr_34620[(15)] = inst_34460);

return statearr_34620;
})();
if(cljs.core.truth_(inst_34464)){
var statearr_34621_34703 = state_34611__$1;
(statearr_34621_34703[(1)] = (2));

} else {
var statearr_34622_34704 = state_34611__$1;
(statearr_34622_34704[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (24))){
var state_34611__$1 = state_34611;
var statearr_34623_34705 = state_34611__$1;
(statearr_34623_34705[(2)] = null);

(statearr_34623_34705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (39))){
var inst_34564 = (state_34611[(16)]);
var state_34611__$1 = state_34611;
var statearr_34624_34706 = state_34611__$1;
(statearr_34624_34706[(2)] = inst_34564);

(statearr_34624_34706[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (46))){
var inst_34606 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34625_34707 = state_34611__$1;
(statearr_34625_34707[(2)] = inst_34606);

(statearr_34625_34707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (4))){
var inst_34508 = (state_34611[(2)]);
var inst_34509 = cljs.core.List.EMPTY;
var inst_34510 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34509);
var inst_34511 = (function (){return ((function (inst_34508,inst_34509,inst_34510,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34452_SHARP_){
var and__27977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34452_SHARP_);
if(cljs.core.truth_(and__27977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34452_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34452_SHARP_)));
} else {
return and__27977__auto__;
}
});
;})(inst_34508,inst_34509,inst_34510,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34512 = cljs.core.filter.call(null,inst_34511,files);
var inst_34513 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34514 = cljs.core.concat.call(null,inst_34512,inst_34513);
var state_34611__$1 = (function (){var statearr_34626 = state_34611;
(statearr_34626[(12)] = inst_34514);

(statearr_34626[(17)] = inst_34510);

(statearr_34626[(18)] = inst_34508);

return statearr_34626;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34627_34708 = state_34611__$1;
(statearr_34627_34708[(1)] = (16));

} else {
var statearr_34628_34709 = state_34611__$1;
(statearr_34628_34709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (15))){
var inst_34498 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34629_34710 = state_34611__$1;
(statearr_34629_34710[(2)] = inst_34498);

(statearr_34629_34710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (21))){
var inst_34524 = (state_34611[(19)]);
var inst_34524__$1 = (state_34611[(2)]);
var inst_34525 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34524__$1);
var state_34611__$1 = (function (){var statearr_34630 = state_34611;
(statearr_34630[(19)] = inst_34524__$1);

return statearr_34630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34611__$1,(22),inst_34525);
} else {
if((state_val_34612 === (31))){
var inst_34609 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34611__$1,inst_34609);
} else {
if((state_val_34612 === (32))){
var inst_34564 = (state_34611[(16)]);
var inst_34569 = inst_34564.cljs$lang$protocol_mask$partition0$;
var inst_34570 = (inst_34569 & (64));
var inst_34571 = inst_34564.cljs$core$ISeq$;
var inst_34572 = (cljs.core.PROTOCOL_SENTINEL === inst_34571);
var inst_34573 = (inst_34570) || (inst_34572);
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34573)){
var statearr_34631_34711 = state_34611__$1;
(statearr_34631_34711[(1)] = (35));

} else {
var statearr_34632_34712 = state_34611__$1;
(statearr_34632_34712[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (40))){
var inst_34586 = (state_34611[(20)]);
var inst_34585 = (state_34611[(2)]);
var inst_34586__$1 = cljs.core.get.call(null,inst_34585,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34587 = cljs.core.get.call(null,inst_34585,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34588 = cljs.core.not_empty.call(null,inst_34586__$1);
var state_34611__$1 = (function (){var statearr_34633 = state_34611;
(statearr_34633[(20)] = inst_34586__$1);

(statearr_34633[(21)] = inst_34587);

return statearr_34633;
})();
if(cljs.core.truth_(inst_34588)){
var statearr_34634_34713 = state_34611__$1;
(statearr_34634_34713[(1)] = (41));

} else {
var statearr_34635_34714 = state_34611__$1;
(statearr_34635_34714[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (33))){
var state_34611__$1 = state_34611;
var statearr_34636_34715 = state_34611__$1;
(statearr_34636_34715[(2)] = false);

(statearr_34636_34715[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (13))){
var inst_34484 = (state_34611[(22)]);
var inst_34488 = cljs.core.chunk_first.call(null,inst_34484);
var inst_34489 = cljs.core.chunk_rest.call(null,inst_34484);
var inst_34490 = cljs.core.count.call(null,inst_34488);
var inst_34471 = inst_34489;
var inst_34472 = inst_34488;
var inst_34473 = inst_34490;
var inst_34474 = (0);
var state_34611__$1 = (function (){var statearr_34637 = state_34611;
(statearr_34637[(7)] = inst_34471);

(statearr_34637[(8)] = inst_34473);

(statearr_34637[(9)] = inst_34472);

(statearr_34637[(10)] = inst_34474);

return statearr_34637;
})();
var statearr_34638_34716 = state_34611__$1;
(statearr_34638_34716[(2)] = null);

(statearr_34638_34716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (22))){
var inst_34524 = (state_34611[(19)]);
var inst_34527 = (state_34611[(23)]);
var inst_34528 = (state_34611[(24)]);
var inst_34532 = (state_34611[(25)]);
var inst_34527__$1 = (state_34611[(2)]);
var inst_34528__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34527__$1);
var inst_34529 = (function (){var all_files = inst_34524;
var res_SINGLEQUOTE_ = inst_34527__$1;
var res = inst_34528__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34524,inst_34527,inst_34528,inst_34532,inst_34527__$1,inst_34528__$1,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34453_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34453_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34524,inst_34527,inst_34528,inst_34532,inst_34527__$1,inst_34528__$1,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34530 = cljs.core.filter.call(null,inst_34529,inst_34527__$1);
var inst_34531 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34532__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34531);
var inst_34533 = cljs.core.not_empty.call(null,inst_34532__$1);
var state_34611__$1 = (function (){var statearr_34639 = state_34611;
(statearr_34639[(23)] = inst_34527__$1);

(statearr_34639[(24)] = inst_34528__$1);

(statearr_34639[(25)] = inst_34532__$1);

(statearr_34639[(26)] = inst_34530);

return statearr_34639;
})();
if(cljs.core.truth_(inst_34533)){
var statearr_34640_34717 = state_34611__$1;
(statearr_34640_34717[(1)] = (23));

} else {
var statearr_34641_34718 = state_34611__$1;
(statearr_34641_34718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (36))){
var state_34611__$1 = state_34611;
var statearr_34642_34719 = state_34611__$1;
(statearr_34642_34719[(2)] = false);

(statearr_34642_34719[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (41))){
var inst_34586 = (state_34611[(20)]);
var inst_34590 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34591 = cljs.core.map.call(null,inst_34590,inst_34586);
var inst_34592 = cljs.core.pr_str.call(null,inst_34591);
var inst_34593 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34592)].join('');
var inst_34594 = figwheel.client.utils.log.call(null,inst_34593);
var state_34611__$1 = state_34611;
var statearr_34643_34720 = state_34611__$1;
(statearr_34643_34720[(2)] = inst_34594);

(statearr_34643_34720[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (43))){
var inst_34587 = (state_34611[(21)]);
var inst_34597 = (state_34611[(2)]);
var inst_34598 = cljs.core.not_empty.call(null,inst_34587);
var state_34611__$1 = (function (){var statearr_34644 = state_34611;
(statearr_34644[(27)] = inst_34597);

return statearr_34644;
})();
if(cljs.core.truth_(inst_34598)){
var statearr_34645_34721 = state_34611__$1;
(statearr_34645_34721[(1)] = (44));

} else {
var statearr_34646_34722 = state_34611__$1;
(statearr_34646_34722[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (29))){
var inst_34524 = (state_34611[(19)]);
var inst_34527 = (state_34611[(23)]);
var inst_34564 = (state_34611[(16)]);
var inst_34528 = (state_34611[(24)]);
var inst_34532 = (state_34611[(25)]);
var inst_34530 = (state_34611[(26)]);
var inst_34560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34563 = (function (){var all_files = inst_34524;
var res_SINGLEQUOTE_ = inst_34527;
var res = inst_34528;
var files_not_loaded = inst_34530;
var dependencies_that_loaded = inst_34532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34564,inst_34528,inst_34532,inst_34530,inst_34560,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34562){
var map__34647 = p__34562;
var map__34647__$1 = ((((!((map__34647 == null)))?((((map__34647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34647):map__34647);
var namespace = cljs.core.get.call(null,map__34647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34564,inst_34528,inst_34532,inst_34530,inst_34560,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34564__$1 = cljs.core.group_by.call(null,inst_34563,inst_34530);
var inst_34566 = (inst_34564__$1 == null);
var inst_34567 = cljs.core.not.call(null,inst_34566);
var state_34611__$1 = (function (){var statearr_34649 = state_34611;
(statearr_34649[(28)] = inst_34560);

(statearr_34649[(16)] = inst_34564__$1);

return statearr_34649;
})();
if(inst_34567){
var statearr_34650_34723 = state_34611__$1;
(statearr_34650_34723[(1)] = (32));

} else {
var statearr_34651_34724 = state_34611__$1;
(statearr_34651_34724[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (44))){
var inst_34587 = (state_34611[(21)]);
var inst_34600 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34587);
var inst_34601 = cljs.core.pr_str.call(null,inst_34600);
var inst_34602 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34601)].join('');
var inst_34603 = figwheel.client.utils.log.call(null,inst_34602);
var state_34611__$1 = state_34611;
var statearr_34652_34725 = state_34611__$1;
(statearr_34652_34725[(2)] = inst_34603);

(statearr_34652_34725[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (6))){
var inst_34505 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34653_34726 = state_34611__$1;
(statearr_34653_34726[(2)] = inst_34505);

(statearr_34653_34726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (28))){
var inst_34530 = (state_34611[(26)]);
var inst_34557 = (state_34611[(2)]);
var inst_34558 = cljs.core.not_empty.call(null,inst_34530);
var state_34611__$1 = (function (){var statearr_34654 = state_34611;
(statearr_34654[(29)] = inst_34557);

return statearr_34654;
})();
if(cljs.core.truth_(inst_34558)){
var statearr_34655_34727 = state_34611__$1;
(statearr_34655_34727[(1)] = (29));

} else {
var statearr_34656_34728 = state_34611__$1;
(statearr_34656_34728[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (25))){
var inst_34528 = (state_34611[(24)]);
var inst_34544 = (state_34611[(2)]);
var inst_34545 = cljs.core.not_empty.call(null,inst_34528);
var state_34611__$1 = (function (){var statearr_34657 = state_34611;
(statearr_34657[(30)] = inst_34544);

return statearr_34657;
})();
if(cljs.core.truth_(inst_34545)){
var statearr_34658_34729 = state_34611__$1;
(statearr_34658_34729[(1)] = (26));

} else {
var statearr_34659_34730 = state_34611__$1;
(statearr_34659_34730[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (34))){
var inst_34580 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34580)){
var statearr_34660_34731 = state_34611__$1;
(statearr_34660_34731[(1)] = (38));

} else {
var statearr_34661_34732 = state_34611__$1;
(statearr_34661_34732[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (17))){
var state_34611__$1 = state_34611;
var statearr_34662_34733 = state_34611__$1;
(statearr_34662_34733[(2)] = recompile_dependents);

(statearr_34662_34733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (3))){
var state_34611__$1 = state_34611;
var statearr_34663_34734 = state_34611__$1;
(statearr_34663_34734[(2)] = null);

(statearr_34663_34734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (12))){
var inst_34501 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34664_34735 = state_34611__$1;
(statearr_34664_34735[(2)] = inst_34501);

(statearr_34664_34735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (2))){
var inst_34463 = (state_34611[(13)]);
var inst_34470 = cljs.core.seq.call(null,inst_34463);
var inst_34471 = inst_34470;
var inst_34472 = null;
var inst_34473 = (0);
var inst_34474 = (0);
var state_34611__$1 = (function (){var statearr_34665 = state_34611;
(statearr_34665[(7)] = inst_34471);

(statearr_34665[(8)] = inst_34473);

(statearr_34665[(9)] = inst_34472);

(statearr_34665[(10)] = inst_34474);

return statearr_34665;
})();
var statearr_34666_34736 = state_34611__$1;
(statearr_34666_34736[(2)] = null);

(statearr_34666_34736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (23))){
var inst_34524 = (state_34611[(19)]);
var inst_34527 = (state_34611[(23)]);
var inst_34528 = (state_34611[(24)]);
var inst_34532 = (state_34611[(25)]);
var inst_34530 = (state_34611[(26)]);
var inst_34535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34537 = (function (){var all_files = inst_34524;
var res_SINGLEQUOTE_ = inst_34527;
var res = inst_34528;
var files_not_loaded = inst_34530;
var dependencies_that_loaded = inst_34532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34528,inst_34532,inst_34530,inst_34535,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34536){
var map__34667 = p__34536;
var map__34667__$1 = ((((!((map__34667 == null)))?((((map__34667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34667):map__34667);
var request_url = cljs.core.get.call(null,map__34667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34528,inst_34532,inst_34530,inst_34535,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34538 = cljs.core.reverse.call(null,inst_34532);
var inst_34539 = cljs.core.map.call(null,inst_34537,inst_34538);
var inst_34540 = cljs.core.pr_str.call(null,inst_34539);
var inst_34541 = figwheel.client.utils.log.call(null,inst_34540);
var state_34611__$1 = (function (){var statearr_34669 = state_34611;
(statearr_34669[(31)] = inst_34535);

return statearr_34669;
})();
var statearr_34670_34737 = state_34611__$1;
(statearr_34670_34737[(2)] = inst_34541);

(statearr_34670_34737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (35))){
var state_34611__$1 = state_34611;
var statearr_34671_34738 = state_34611__$1;
(statearr_34671_34738[(2)] = true);

(statearr_34671_34738[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (19))){
var inst_34514 = (state_34611[(12)]);
var inst_34520 = figwheel.client.file_reloading.expand_files.call(null,inst_34514);
var state_34611__$1 = state_34611;
var statearr_34672_34739 = state_34611__$1;
(statearr_34672_34739[(2)] = inst_34520);

(statearr_34672_34739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (11))){
var state_34611__$1 = state_34611;
var statearr_34673_34740 = state_34611__$1;
(statearr_34673_34740[(2)] = null);

(statearr_34673_34740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (9))){
var inst_34503 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34674_34741 = state_34611__$1;
(statearr_34674_34741[(2)] = inst_34503);

(statearr_34674_34741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (5))){
var inst_34473 = (state_34611[(8)]);
var inst_34474 = (state_34611[(10)]);
var inst_34476 = (inst_34474 < inst_34473);
var inst_34477 = inst_34476;
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34477)){
var statearr_34675_34742 = state_34611__$1;
(statearr_34675_34742[(1)] = (7));

} else {
var statearr_34676_34743 = state_34611__$1;
(statearr_34676_34743[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (14))){
var inst_34484 = (state_34611[(22)]);
var inst_34493 = cljs.core.first.call(null,inst_34484);
var inst_34494 = figwheel.client.file_reloading.eval_body.call(null,inst_34493,opts);
var inst_34495 = cljs.core.next.call(null,inst_34484);
var inst_34471 = inst_34495;
var inst_34472 = null;
var inst_34473 = (0);
var inst_34474 = (0);
var state_34611__$1 = (function (){var statearr_34677 = state_34611;
(statearr_34677[(7)] = inst_34471);

(statearr_34677[(32)] = inst_34494);

(statearr_34677[(8)] = inst_34473);

(statearr_34677[(9)] = inst_34472);

(statearr_34677[(10)] = inst_34474);

return statearr_34677;
})();
var statearr_34678_34744 = state_34611__$1;
(statearr_34678_34744[(2)] = null);

(statearr_34678_34744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (45))){
var state_34611__$1 = state_34611;
var statearr_34679_34745 = state_34611__$1;
(statearr_34679_34745[(2)] = null);

(statearr_34679_34745[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (26))){
var inst_34524 = (state_34611[(19)]);
var inst_34527 = (state_34611[(23)]);
var inst_34528 = (state_34611[(24)]);
var inst_34532 = (state_34611[(25)]);
var inst_34530 = (state_34611[(26)]);
var inst_34547 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34549 = (function (){var all_files = inst_34524;
var res_SINGLEQUOTE_ = inst_34527;
var res = inst_34528;
var files_not_loaded = inst_34530;
var dependencies_that_loaded = inst_34532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34528,inst_34532,inst_34530,inst_34547,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34548){
var map__34680 = p__34548;
var map__34680__$1 = ((((!((map__34680 == null)))?((((map__34680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34680.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34680):map__34680);
var namespace = cljs.core.get.call(null,map__34680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34680__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34528,inst_34532,inst_34530,inst_34547,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34550 = cljs.core.map.call(null,inst_34549,inst_34528);
var inst_34551 = cljs.core.pr_str.call(null,inst_34550);
var inst_34552 = figwheel.client.utils.log.call(null,inst_34551);
var inst_34553 = (function (){var all_files = inst_34524;
var res_SINGLEQUOTE_ = inst_34527;
var res = inst_34528;
var files_not_loaded = inst_34530;
var dependencies_that_loaded = inst_34532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34528,inst_34532,inst_34530,inst_34547,inst_34549,inst_34550,inst_34551,inst_34552,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34524,inst_34527,inst_34528,inst_34532,inst_34530,inst_34547,inst_34549,inst_34550,inst_34551,inst_34552,state_val_34612,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34554 = setTimeout(inst_34553,(10));
var state_34611__$1 = (function (){var statearr_34682 = state_34611;
(statearr_34682[(33)] = inst_34552);

(statearr_34682[(34)] = inst_34547);

return statearr_34682;
})();
var statearr_34683_34746 = state_34611__$1;
(statearr_34683_34746[(2)] = inst_34554);

(statearr_34683_34746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (16))){
var state_34611__$1 = state_34611;
var statearr_34684_34747 = state_34611__$1;
(statearr_34684_34747[(2)] = reload_dependents);

(statearr_34684_34747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (38))){
var inst_34564 = (state_34611[(16)]);
var inst_34582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34564);
var state_34611__$1 = state_34611;
var statearr_34685_34748 = state_34611__$1;
(statearr_34685_34748[(2)] = inst_34582);

(statearr_34685_34748[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (30))){
var state_34611__$1 = state_34611;
var statearr_34686_34749 = state_34611__$1;
(statearr_34686_34749[(2)] = null);

(statearr_34686_34749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (10))){
var inst_34484 = (state_34611[(22)]);
var inst_34486 = cljs.core.chunked_seq_QMARK_.call(null,inst_34484);
var state_34611__$1 = state_34611;
if(inst_34486){
var statearr_34687_34750 = state_34611__$1;
(statearr_34687_34750[(1)] = (13));

} else {
var statearr_34688_34751 = state_34611__$1;
(statearr_34688_34751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (18))){
var inst_34518 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
if(cljs.core.truth_(inst_34518)){
var statearr_34689_34752 = state_34611__$1;
(statearr_34689_34752[(1)] = (19));

} else {
var statearr_34690_34753 = state_34611__$1;
(statearr_34690_34753[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (42))){
var state_34611__$1 = state_34611;
var statearr_34691_34754 = state_34611__$1;
(statearr_34691_34754[(2)] = null);

(statearr_34691_34754[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (37))){
var inst_34577 = (state_34611[(2)]);
var state_34611__$1 = state_34611;
var statearr_34692_34755 = state_34611__$1;
(statearr_34692_34755[(2)] = inst_34577);

(statearr_34692_34755[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34612 === (8))){
var inst_34471 = (state_34611[(7)]);
var inst_34484 = (state_34611[(22)]);
var inst_34484__$1 = cljs.core.seq.call(null,inst_34471);
var state_34611__$1 = (function (){var statearr_34693 = state_34611;
(statearr_34693[(22)] = inst_34484__$1);

return statearr_34693;
})();
if(inst_34484__$1){
var statearr_34694_34756 = state_34611__$1;
(statearr_34694_34756[(1)] = (10));

} else {
var statearr_34695_34757 = state_34611__$1;
(statearr_34695_34757[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30838__auto__,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto____0 = (function (){
var statearr_34696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34696[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto__);

(statearr_34696[(1)] = (1));

return statearr_34696;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto____1 = (function (state_34611){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_34611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e34697){if((e34697 instanceof Object)){
var ex__30842__auto__ = e34697;
var statearr_34698_34758 = state_34611;
(statearr_34698_34758[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34759 = state_34611;
state_34611 = G__34759;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto__ = function(state_34611){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto____1.call(this,state_34611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30928__auto__ = (function (){var statearr_34699 = f__30927__auto__.call(null);
(statearr_34699[(6)] = c__30926__auto__);

return statearr_34699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__,map__34456,map__34456__$1,opts,before_jsload,on_jsload,reload_dependents,map__34457,map__34457__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30926__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34762,link){
var map__34763 = p__34762;
var map__34763__$1 = ((((!((map__34763 == null)))?((((map__34763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34763.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34763):map__34763);
var file = cljs.core.get.call(null,map__34763__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34763,map__34763__$1,file){
return (function (p1__34760_SHARP_,p2__34761_SHARP_){
if(cljs.core._EQ_.call(null,p1__34760_SHARP_,p2__34761_SHARP_)){
return p1__34760_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34763,map__34763__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34766){
var map__34767 = p__34766;
var map__34767__$1 = ((((!((map__34767 == null)))?((((map__34767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34767):map__34767);
var match_length = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34765_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34765_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34769_SHARP_,p2__34770_SHARP_){
return cljs.core.assoc.call(null,p1__34769_SHARP_,cljs.core.get.call(null,p2__34770_SHARP_,key),p2__34770_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34771 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34771);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34771);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34772,p__34773){
var map__34774 = p__34772;
var map__34774__$1 = ((((!((map__34774 == null)))?((((map__34774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34774):map__34774);
var on_cssload = cljs.core.get.call(null,map__34774__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34775 = p__34773;
var map__34775__$1 = ((((!((map__34775 == null)))?((((map__34775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34775):map__34775);
var files_msg = map__34775__$1;
var files = cljs.core.get.call(null,map__34775__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1504959334939
