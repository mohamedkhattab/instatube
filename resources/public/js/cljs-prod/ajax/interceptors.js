// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8803__auto__,k__8804__auto__){
var self__ = this;
var this__8803__auto____$1 = this;
return this__8803__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8804__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8805__auto__,k14446,else__8806__auto__){
var self__ = this;
var this__8805__auto____$1 = this;
var G__14450 = k14446;
var G__14450__$1 = (((G__14450 instanceof cljs.core.Keyword))?G__14450.fqn:null);
switch (G__14450__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14446,else__8806__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__14451,opts){
var self__ = this;
var map__14452 = p__14451;
var map__14452__$1 = ((((!((map__14452 == null)))?((((map__14452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14452.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14452):map__14452);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14452__$1,cljs.core.cst$kw$request);
var map__14454 = this;
var map__14454__$1 = ((((!((map__14454 == null)))?((((map__14454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14454):map__14454);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14454__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__14456,xhrio){
var self__ = this;
var map__14457 = p__14456;
var map__14457__$1 = ((((!((map__14457 == null)))?((((map__14457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14457):map__14457);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14457__$1,cljs.core.cst$kw$response);
var map__14459 = this;
var map__14459__$1 = ((((!((map__14459 == null)))?((((map__14459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14459):map__14459);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14459__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8817__auto__,writer__8818__auto__,opts__8819__auto__){
var self__ = this;
var this__8817__auto____$1 = this;
var pr_pair__8820__auto__ = ((function (this__8817__auto____$1){
return (function (keyval__8821__auto__){
return cljs.core.pr_sequential_writer(writer__8818__auto__,cljs.core.pr_writer,""," ","",opts__8819__auto__,keyval__8821__auto__);
});})(this__8817__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8818__auto__,pr_pair__8820__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__8819__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14445){
var self__ = this;
var G__14445__$1 = this;
return (new cljs.core.RecordIter((0),G__14445__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8801__auto__){
var self__ = this;
var this__8801__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8798__auto__){
var self__ = this;
var this__8798__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8807__auto__){
var self__ = this;
var this__8807__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8799__auto__){
var self__ = this;
var this__8799__auto____$1 = this;
var h__8617__auto__ = self__.__hash;
if(!((h__8617__auto__ == null))){
return h__8617__auto__;
} else {
var h__8617__auto____$1 = (function (){var fexpr__14461 = ((function (h__8617__auto__,this__8799__auto____$1){
return (function (coll__8800__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__8800__auto__));
});})(h__8617__auto__,this__8799__auto____$1))
;
return fexpr__14461(this__8799__auto____$1);
})();
self__.__hash = h__8617__auto____$1;

return h__8617__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14447,other14448){
var self__ = this;
var this14447__$1 = this;
return (!((other14448 == null))) && ((this14447__$1.constructor === other14448.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14447__$1.name,other14448.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14447__$1.request,other14448.request)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14447__$1.response,other14448.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14447__$1.__extmap,other14448.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8812__auto__,k__8813__auto__){
var self__ = this;
var this__8812__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__8813__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8812__auto____$1),self__.__meta),k__8813__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8813__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8810__auto__,k__8811__auto__,G__14445){
var self__ = this;
var this__8810__auto____$1 = this;
var pred__14462 = cljs.core.keyword_identical_QMARK_;
var expr__14463 = k__8811__auto__;
if(cljs.core.truth_((function (){var G__14465 = cljs.core.cst$kw$name;
var G__14466 = expr__14463;
return (pred__14462.cljs$core$IFn$_invoke$arity$2 ? pred__14462.cljs$core$IFn$_invoke$arity$2(G__14465,G__14466) : pred__14462.call(null,G__14465,G__14466));
})())){
return (new ajax.interceptors.StandardInterceptor(G__14445,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14467 = cljs.core.cst$kw$request;
var G__14468 = expr__14463;
return (pred__14462.cljs$core$IFn$_invoke$arity$2 ? pred__14462.cljs$core$IFn$_invoke$arity$2(G__14467,G__14468) : pred__14462.call(null,G__14467,G__14468));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__14445,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14469 = cljs.core.cst$kw$response;
var G__14470 = expr__14463;
return (pred__14462.cljs$core$IFn$_invoke$arity$2 ? pred__14462.cljs$core$IFn$_invoke$arity$2(G__14469,G__14470) : pred__14462.call(null,G__14469,G__14470));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__14445,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8811__auto__,G__14445),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8815__auto__){
var self__ = this;
var this__8815__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8802__auto__,G__14445){
var self__ = this;
var this__8802__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__14445,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8808__auto__,entry__8809__auto__){
var self__ = this;
var this__8808__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8809__auto__)){
return this__8808__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8808__auto____$1,entry__8809__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__8839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__8839__auto__,writer__8840__auto__){
return cljs.core._write(writer__8840__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__14449){
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__14449),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__14449),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__14449),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14449,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__14472,xhrio){
var map__14473 = p__14472;
var map__14473__$1 = ((((!((map__14473 == null)))?((((map__14473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14473):map__14473);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14473__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14479 = arguments.length;
var i__9333__auto___14480 = (0);
while(true){
if((i__9333__auto___14480 < len__9332__auto___14479)){
args__9339__auto__.push((arguments[i__9333__auto___14480]));

var G__14481 = (i__9333__auto___14480 + (1));
i__9333__auto___14480 = G__14481;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((3) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9340__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq14475){
var G__14476 = cljs.core.first(seq14475);
var seq14475__$1 = cljs.core.next(seq14475);
var G__14477 = cljs.core.first(seq14475__$1);
var seq14475__$2 = cljs.core.next(seq14475__$1);
var G__14478 = cljs.core.first(seq14475__$2);
var seq14475__$3 = cljs.core.next(seq14475__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__14476,G__14477,G__14478,seq14475__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8803__auto__,k__8804__auto__){
var self__ = this;
var this__8803__auto____$1 = this;
return this__8803__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8804__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8805__auto__,k14484,else__8806__auto__){
var self__ = this;
var this__8805__auto____$1 = this;
var G__14488 = k14484;
var G__14488__$1 = (((G__14488 instanceof cljs.core.Keyword))?G__14488.fqn:null);
switch (G__14488__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14484,else__8806__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__14489,request){
var self__ = this;
var map__14490 = p__14489;
var map__14490__$1 = ((((!((map__14490 == null)))?((((map__14490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14490):map__14490);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14490__$1,cljs.core.cst$kw$content_DASH_type);
var map__14492 = this;
var map__14492__$1 = ((((!((map__14492 == null)))?((((map__14492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14492):map__14492);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14492__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__14492,map__14492__$1,content_type__$2,map__14490,map__14490__$1,content_type__$1){
return (function (p1__14482_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__8163__auto__ = p1__14482_SHARP_;
if(cljs.core.truth_(or__8163__auto__)){
return or__8163__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__14492,map__14492__$1,content_type__$2,map__14490,map__14490__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__14494,xhrio){
var self__ = this;
var map__14495 = p__14494;
var map__14495__$1 = ((((!((map__14495 == null)))?((((map__14495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14495):map__14495);
var format = map__14495__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14495__$1,cljs.core.cst$kw$read);
var map__14497 = this;
var map__14497__$1 = ((((!((map__14497 == null)))?((((map__14497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14497):map__14497);
var format__$1 = map__14497__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14497__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__14500 = status;
switch (G__14500) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__14501 = "Request failed.";
var G__14502 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__14501,G__14502) : fail.call(null,G__14501,G__14502));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__14503 = "Request aborted by client.";
var G__14504 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__14503,G__14504) : fail.call(null,G__14503,G__14504));
} else {
var G__14505 = "Request timed out.";
var G__14506 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__14505,G__14506) : fail.call(null,G__14505,G__14506));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__14508 = ajax.protocols._status_text(xhrio);
var G__14509 = cljs.core.cst$kw$error;
var G__14510 = cljs.core.cst$kw$response;
var G__14511 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__14508,G__14509,G__14510,G__14511) : fail.call(null,G__14508,G__14509,G__14510,G__14511));
}
}catch (e14507){if((e14507 instanceof Object)){
var e = e14507;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e14507;

}
}
}
}catch (e14499){if((e14499 instanceof Object)){
var e = e14499;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e14499;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8817__auto__,writer__8818__auto__,opts__8819__auto__){
var self__ = this;
var this__8817__auto____$1 = this;
var pr_pair__8820__auto__ = ((function (this__8817__auto____$1){
return (function (keyval__8821__auto__){
return cljs.core.pr_sequential_writer(writer__8818__auto__,cljs.core.pr_writer,""," ","",opts__8819__auto__,keyval__8821__auto__);
});})(this__8817__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8818__auto__,pr_pair__8820__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__8819__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14483){
var self__ = this;
var G__14483__$1 = this;
return (new cljs.core.RecordIter((0),G__14483__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8801__auto__){
var self__ = this;
var this__8801__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8798__auto__){
var self__ = this;
var this__8798__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8807__auto__){
var self__ = this;
var this__8807__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8799__auto__){
var self__ = this;
var this__8799__auto____$1 = this;
var h__8617__auto__ = self__.__hash;
if(!((h__8617__auto__ == null))){
return h__8617__auto__;
} else {
var h__8617__auto____$1 = (function (){var fexpr__14512 = ((function (h__8617__auto__,this__8799__auto____$1){
return (function (coll__8800__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__8800__auto__));
});})(h__8617__auto__,this__8799__auto____$1))
;
return fexpr__14512(this__8799__auto____$1);
})();
self__.__hash = h__8617__auto____$1;

return h__8617__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14485,other14486){
var self__ = this;
var this14485__$1 = this;
return (!((other14486 == null))) && ((this14485__$1.constructor === other14486.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14485__$1.read,other14486.read)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14485__$1.description,other14486.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14485__$1.content_type,other14486.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14485__$1.__extmap,other14486.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8812__auto__,k__8813__auto__){
var self__ = this;
var this__8812__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__8813__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8812__auto____$1),self__.__meta),k__8813__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8813__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8810__auto__,k__8811__auto__,G__14483){
var self__ = this;
var this__8810__auto____$1 = this;
var pred__14513 = cljs.core.keyword_identical_QMARK_;
var expr__14514 = k__8811__auto__;
if(cljs.core.truth_((function (){var G__14516 = cljs.core.cst$kw$read;
var G__14517 = expr__14514;
return (pred__14513.cljs$core$IFn$_invoke$arity$2 ? pred__14513.cljs$core$IFn$_invoke$arity$2(G__14516,G__14517) : pred__14513.call(null,G__14516,G__14517));
})())){
return (new ajax.interceptors.ResponseFormat(G__14483,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14518 = cljs.core.cst$kw$description;
var G__14519 = expr__14514;
return (pred__14513.cljs$core$IFn$_invoke$arity$2 ? pred__14513.cljs$core$IFn$_invoke$arity$2(G__14518,G__14519) : pred__14513.call(null,G__14518,G__14519));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__14483,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14520 = cljs.core.cst$kw$content_DASH_type;
var G__14521 = expr__14514;
return (pred__14513.cljs$core$IFn$_invoke$arity$2 ? pred__14513.cljs$core$IFn$_invoke$arity$2(G__14520,G__14521) : pred__14513.call(null,G__14520,G__14521));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__14483,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8811__auto__,G__14483),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8815__auto__){
var self__ = this;
var this__8815__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8802__auto__,G__14483){
var self__ = this;
var this__8802__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__14483,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8808__auto__,entry__8809__auto__){
var self__ = this;
var this__8808__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8809__auto__)){
return this__8808__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8808__auto____$1,entry__8809__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__8839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__8839__auto__,writer__8840__auto__){
return cljs.core._write(writer__8840__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__14487){
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__14487),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__14487),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__14487),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14487,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8803__auto__,k__8804__auto__){
var self__ = this;
var this__8803__auto____$1 = this;
return this__8803__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8804__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8805__auto__,k14525,else__8806__auto__){
var self__ = this;
var this__8805__auto____$1 = this;
var G__14529 = k14525;
switch (G__14529) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14525,else__8806__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__14530){
var self__ = this;
var map__14531 = p__14530;
var map__14531__$1 = ((((!((map__14531 == null)))?((((map__14531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14531):map__14531);
var request = map__14531__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__14533 = ajax.interceptors.get_request_format(format);
var map__14533__$1 = ((((!((map__14533 == null)))?((((map__14533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14533):map__14533);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14533__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14533__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__8163__auto__ = headers;
if(cljs.core.truth_(or__8163__auto__)){
return or__8163__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8817__auto__,writer__8818__auto__,opts__8819__auto__){
var self__ = this;
var this__8817__auto____$1 = this;
var pr_pair__8820__auto__ = ((function (this__8817__auto____$1){
return (function (keyval__8821__auto__){
return cljs.core.pr_sequential_writer(writer__8818__auto__,cljs.core.pr_writer,""," ","",opts__8819__auto__,keyval__8821__auto__);
});})(this__8817__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8818__auto__,pr_pair__8820__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__8819__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14524){
var self__ = this;
var G__14524__$1 = this;
return (new cljs.core.RecordIter((0),G__14524__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8801__auto__){
var self__ = this;
var this__8801__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8798__auto__){
var self__ = this;
var this__8798__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8807__auto__){
var self__ = this;
var this__8807__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8799__auto__){
var self__ = this;
var this__8799__auto____$1 = this;
var h__8617__auto__ = self__.__hash;
if(!((h__8617__auto__ == null))){
return h__8617__auto__;
} else {
var h__8617__auto____$1 = (function (){var fexpr__14535 = ((function (h__8617__auto__,this__8799__auto____$1){
return (function (coll__8800__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__8800__auto__));
});})(h__8617__auto__,this__8799__auto____$1))
;
return fexpr__14535(this__8799__auto____$1);
})();
self__.__hash = h__8617__auto____$1;

return h__8617__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14526,other14527){
var self__ = this;
var this14526__$1 = this;
return (!((other14527 == null))) && ((this14526__$1.constructor === other14527.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14526__$1.__extmap,other14527.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8812__auto__,k__8813__auto__){
var self__ = this;
var this__8812__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8813__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8812__auto____$1),self__.__meta),k__8813__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8813__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8810__auto__,k__8811__auto__,G__14524){
var self__ = this;
var this__8810__auto____$1 = this;
var pred__14536 = cljs.core.keyword_identical_QMARK_;
var expr__14537 = k__8811__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8811__auto__,G__14524),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8815__auto__){
var self__ = this;
var this__8815__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8802__auto__,G__14524){
var self__ = this;
var this__8802__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__14524,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8808__auto__,entry__8809__auto__){
var self__ = this;
var this__8808__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8809__auto__)){
return this__8808__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8808__auto____$1,entry__8809__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__8839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__8839__auto__,writer__8840__auto__){
return cljs.core._write(writer__8840__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__14528){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__14528)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__14541 = arguments.length;
switch (G__14541) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__14542,uri){
var map__14543 = p__14542;
var map__14543__$1 = ((((!((map__14543 == null)))?((((map__14543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14543):map__14543);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14543__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14543__$1,cljs.core.cst$kw$params);

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__14545){
var map__14546 = p__14545;
var map__14546__$1 = ((((!((map__14546 == null)))?((((map__14546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14546):map__14546);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14546__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14546__$1,cljs.core.cst$kw$params);
return ((function (map__14546,map__14546__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__14546,map__14546__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8803__auto__,k__8804__auto__){
var self__ = this;
var this__8803__auto____$1 = this;
return this__8803__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8804__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8805__auto__,k14550,else__8806__auto__){
var self__ = this;
var this__8805__auto____$1 = this;
var G__14554 = k14550;
switch (G__14554) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14550,else__8806__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__14555){
var self__ = this;
var map__14556 = p__14555;
var map__14556__$1 = ((((!((map__14556 == null)))?((((map__14556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14556):map__14556);
var request = map__14556__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14556__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8817__auto__,writer__8818__auto__,opts__8819__auto__){
var self__ = this;
var this__8817__auto____$1 = this;
var pr_pair__8820__auto__ = ((function (this__8817__auto____$1){
return (function (keyval__8821__auto__){
return cljs.core.pr_sequential_writer(writer__8818__auto__,cljs.core.pr_writer,""," ","",opts__8819__auto__,keyval__8821__auto__);
});})(this__8817__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8818__auto__,pr_pair__8820__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__8819__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14549){
var self__ = this;
var G__14549__$1 = this;
return (new cljs.core.RecordIter((0),G__14549__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8801__auto__){
var self__ = this;
var this__8801__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8798__auto__){
var self__ = this;
var this__8798__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8807__auto__){
var self__ = this;
var this__8807__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8799__auto__){
var self__ = this;
var this__8799__auto____$1 = this;
var h__8617__auto__ = self__.__hash;
if(!((h__8617__auto__ == null))){
return h__8617__auto__;
} else {
var h__8617__auto____$1 = (function (){var fexpr__14558 = ((function (h__8617__auto__,this__8799__auto____$1){
return (function (coll__8800__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll(coll__8800__auto__));
});})(h__8617__auto__,this__8799__auto____$1))
;
return fexpr__14558(this__8799__auto____$1);
})();
self__.__hash = h__8617__auto____$1;

return h__8617__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14551,other14552){
var self__ = this;
var this14551__$1 = this;
return (!((other14552 == null))) && ((this14551__$1.constructor === other14552.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14551__$1.__extmap,other14552.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8812__auto__,k__8813__auto__){
var self__ = this;
var this__8812__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8813__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8812__auto____$1),self__.__meta),k__8813__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8813__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8810__auto__,k__8811__auto__,G__14549){
var self__ = this;
var this__8810__auto____$1 = this;
var pred__14559 = cljs.core.keyword_identical_QMARK_;
var expr__14560 = k__8811__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8811__auto__,G__14549),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8815__auto__){
var self__ = this;
var this__8815__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8802__auto__,G__14549){
var self__ = this;
var this__8802__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__14549,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8808__auto__,entry__8809__auto__){
var self__ = this;
var this__8808__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8809__auto__)){
return this__8808__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8808__auto____$1,entry__8809__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__8839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__8839__auto__,writer__8840__auto__){
return cljs.core._write(writer__8840__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__14553){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__14553)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8803__auto__,k__8804__auto__){
var self__ = this;
var this__8803__auto____$1 = this;
return this__8803__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8804__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8805__auto__,k14564,else__8806__auto__){
var self__ = this;
var this__8805__auto____$1 = this;
var G__14568 = k14564;
switch (G__14568) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14564,else__8806__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__14569){
var self__ = this;
var map__14570 = p__14569;
var map__14570__$1 = ((((!((map__14570 == null)))?((((map__14570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14570):map__14570);
var request = map__14570__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14570__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8817__auto__,writer__8818__auto__,opts__8819__auto__){
var self__ = this;
var this__8817__auto____$1 = this;
var pr_pair__8820__auto__ = ((function (this__8817__auto____$1){
return (function (keyval__8821__auto__){
return cljs.core.pr_sequential_writer(writer__8818__auto__,cljs.core.pr_writer,""," ","",opts__8819__auto__,keyval__8821__auto__);
});})(this__8817__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8818__auto__,pr_pair__8820__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__8819__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14563){
var self__ = this;
var G__14563__$1 = this;
return (new cljs.core.RecordIter((0),G__14563__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8801__auto__){
var self__ = this;
var this__8801__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8798__auto__){
var self__ = this;
var this__8798__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8807__auto__){
var self__ = this;
var this__8807__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8799__auto__){
var self__ = this;
var this__8799__auto____$1 = this;
var h__8617__auto__ = self__.__hash;
if(!((h__8617__auto__ == null))){
return h__8617__auto__;
} else {
var h__8617__auto____$1 = (function (){var fexpr__14572 = ((function (h__8617__auto__,this__8799__auto____$1){
return (function (coll__8800__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__8800__auto__));
});})(h__8617__auto__,this__8799__auto____$1))
;
return fexpr__14572(this__8799__auto____$1);
})();
self__.__hash = h__8617__auto____$1;

return h__8617__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14565,other14566){
var self__ = this;
var this14565__$1 = this;
return (!((other14566 == null))) && ((this14565__$1.constructor === other14566.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14565__$1.__extmap,other14566.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8812__auto__,k__8813__auto__){
var self__ = this;
var this__8812__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8813__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8812__auto____$1),self__.__meta),k__8813__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8813__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8810__auto__,k__8811__auto__,G__14563){
var self__ = this;
var this__8810__auto____$1 = this;
var pred__14573 = cljs.core.keyword_identical_QMARK_;
var expr__14574 = k__8811__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8811__auto__,G__14563),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8815__auto__){
var self__ = this;
var this__8815__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8802__auto__,G__14563){
var self__ = this;
var this__8802__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__14563,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8808__auto__,entry__8809__auto__){
var self__ = this;
var this__8808__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8809__auto__)){
return this__8808__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8809__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8808__auto____$1,entry__8809__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__8839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__8839__auto__,writer__8840__auto__){
return cljs.core._write(writer__8840__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__14567){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__14567)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__14577){
var map__14578 = p__14577;
var map__14578__$1 = ((((!((map__14578 == null)))?((((map__14578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14578):map__14578);
var opts = map__14578__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14578__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_(response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
