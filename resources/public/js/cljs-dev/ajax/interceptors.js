// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
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
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28763__auto__,k__28764__auto__){
var self__ = this;
var this__28763__auto____$1 = this;
return this__28763__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28764__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28765__auto__,k30466,else__28766__auto__){
var self__ = this;
var this__28765__auto____$1 = this;
var G__30470 = k30466;
var G__30470__$1 = (((G__30470 instanceof cljs.core.Keyword))?G__30470.fqn:null);
switch (G__30470__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k30466,else__28766__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__30471,opts){
var self__ = this;
var map__30472 = p__30471;
var map__30472__$1 = ((((!((map__30472 == null)))?((((map__30472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30472):map__30472);
var request__$1 = cljs.core.get.call(null,map__30472__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__30474 = this;
var map__30474__$1 = ((((!((map__30474 == null)))?((((map__30474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30474):map__30474);
var request__$2 = cljs.core.get.call(null,map__30474__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__30476,xhrio){
var self__ = this;
var map__30477 = p__30476;
var map__30477__$1 = ((((!((map__30477 == null)))?((((map__30477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30477):map__30477);
var response__$1 = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__30479 = this;
var map__30479__$1 = ((((!((map__30479 == null)))?((((map__30479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479):map__30479);
var response__$2 = cljs.core.get.call(null,map__30479__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28777__auto__,writer__28778__auto__,opts__28779__auto__){
var self__ = this;
var this__28777__auto____$1 = this;
var pr_pair__28780__auto__ = ((function (this__28777__auto____$1){
return (function (keyval__28781__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,cljs.core.pr_writer,""," ","",opts__28779__auto__,keyval__28781__auto__);
});})(this__28777__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,pr_pair__28780__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__28779__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30465){
var self__ = this;
var G__30465__$1 = this;
return (new cljs.core.RecordIter((0),G__30465__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28761__auto__){
var self__ = this;
var this__28761__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28758__auto__){
var self__ = this;
var this__28758__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28767__auto__){
var self__ = this;
var this__28767__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28759__auto__){
var self__ = this;
var this__28759__auto____$1 = this;
var h__28577__auto__ = self__.__hash;
if(!((h__28577__auto__ == null))){
return h__28577__auto__;
} else {
var h__28577__auto____$1 = ((function (h__28577__auto__,this__28759__auto____$1){
return (function (coll__28760__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__28760__auto__));
});})(h__28577__auto__,this__28759__auto____$1))
.call(null,this__28759__auto____$1);
self__.__hash = h__28577__auto____$1;

return h__28577__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30467,other30468){
var self__ = this;
var this30467__$1 = this;
return (!((other30468 == null))) && ((this30467__$1.constructor === other30468.constructor)) && (cljs.core._EQ_.call(null,this30467__$1.name,other30468.name)) && (cljs.core._EQ_.call(null,this30467__$1.request,other30468.request)) && (cljs.core._EQ_.call(null,this30467__$1.response,other30468.response)) && (cljs.core._EQ_.call(null,this30467__$1.__extmap,other30468.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28772__auto__,k__28773__auto__){
var self__ = this;
var this__28772__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__28773__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28772__auto____$1),self__.__meta),k__28773__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28773__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28770__auto__,k__28771__auto__,G__30465){
var self__ = this;
var this__28770__auto____$1 = this;
var pred__30482 = cljs.core.keyword_identical_QMARK_;
var expr__30483 = k__28771__auto__;
if(cljs.core.truth_(pred__30482.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__30483))){
return (new ajax.interceptors.StandardInterceptor(G__30465,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30482.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__30483))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__30465,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30482.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__30483))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__30465,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28771__auto__,G__30465),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28775__auto__){
var self__ = this;
var this__28775__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28762__auto__,G__30465){
var self__ = this;
var this__28762__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__30465,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28768__auto__,entry__28769__auto__){
var self__ = this;
var this__28768__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28769__auto__)){
return this__28768__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28769__auto__,(0)),cljs.core._nth.call(null,entry__28769__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28768__auto____$1,entry__28769__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__28799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__28799__auto__,writer__28800__auto__){
return cljs.core._write.call(null,writer__28800__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__30469){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__30469),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__30469),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__30469),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30469,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__30486,xhrio){
var map__30487 = p__30486;
var map__30487__$1 = ((((!((map__30487 == null)))?((((map__30487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30487):map__30487);
var description = cljs.core.get.call(null,map__30487__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__29299__auto__ = [];
var len__29292__auto___30493 = arguments.length;
var i__29293__auto___30494 = (0);
while(true){
if((i__29293__auto___30494 < len__29292__auto___30493)){
args__29299__auto__.push((arguments[i__29293__auto___30494]));

var G__30495 = (i__29293__auto___30494 + (1));
i__29293__auto___30494 = G__30495;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((3) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29300__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq30489){
var G__30490 = cljs.core.first.call(null,seq30489);
var seq30489__$1 = cljs.core.next.call(null,seq30489);
var G__30491 = cljs.core.first.call(null,seq30489__$1);
var seq30489__$2 = cljs.core.next.call(null,seq30489__$1);
var G__30492 = cljs.core.first.call(null,seq30489__$2);
var seq30489__$3 = cljs.core.next.call(null,seq30489__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__30490,G__30491,G__30492,seq30489__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
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
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28763__auto__,k__28764__auto__){
var self__ = this;
var this__28763__auto____$1 = this;
return this__28763__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28764__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28765__auto__,k30498,else__28766__auto__){
var self__ = this;
var this__28765__auto____$1 = this;
var G__30502 = k30498;
var G__30502__$1 = (((G__30502 instanceof cljs.core.Keyword))?G__30502.fqn:null);
switch (G__30502__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k30498,else__28766__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__30503,request){
var self__ = this;
var map__30504 = p__30503;
var map__30504__$1 = ((((!((map__30504 == null)))?((((map__30504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30504):map__30504);
var content_type__$1 = cljs.core.get.call(null,map__30504__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__30506 = this;
var map__30506__$1 = ((((!((map__30506 == null)))?((((map__30506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30506):map__30506);
var content_type__$2 = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__30506,map__30506__$1,content_type__$2,map__30504,map__30504__$1,content_type__$1){
return (function (p1__30496_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__28123__auto__ = p1__30496_SHARP_;
if(cljs.core.truth_(or__28123__auto__)){
return or__28123__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__30506,map__30506__$1,content_type__$2,map__30504,map__30504__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__30508,xhrio){
var self__ = this;
var map__30509 = p__30508;
var map__30509__$1 = ((((!((map__30509 == null)))?((((map__30509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30509.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30509):map__30509);
var format = map__30509__$1;
var read__$1 = cljs.core.get.call(null,map__30509__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__30511 = this;
var map__30511__$1 = ((((!((map__30511 == null)))?((((map__30511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30511.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30511):map__30511);
var format__$1 = map__30511__$1;
var read__$2 = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__30514 = status;
switch (G__30514) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e30515){if((e30515 instanceof Object)){
var e = e30515;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e30515;

}
}
}
}catch (e30513){if((e30513 instanceof Object)){
var e = e30513;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e30513;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28777__auto__,writer__28778__auto__,opts__28779__auto__){
var self__ = this;
var this__28777__auto____$1 = this;
var pr_pair__28780__auto__ = ((function (this__28777__auto____$1){
return (function (keyval__28781__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,cljs.core.pr_writer,""," ","",opts__28779__auto__,keyval__28781__auto__);
});})(this__28777__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,pr_pair__28780__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__28779__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30497){
var self__ = this;
var G__30497__$1 = this;
return (new cljs.core.RecordIter((0),G__30497__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28761__auto__){
var self__ = this;
var this__28761__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28758__auto__){
var self__ = this;
var this__28758__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28767__auto__){
var self__ = this;
var this__28767__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28759__auto__){
var self__ = this;
var this__28759__auto____$1 = this;
var h__28577__auto__ = self__.__hash;
if(!((h__28577__auto__ == null))){
return h__28577__auto__;
} else {
var h__28577__auto____$1 = ((function (h__28577__auto__,this__28759__auto____$1){
return (function (coll__28760__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__28760__auto__));
});})(h__28577__auto__,this__28759__auto____$1))
.call(null,this__28759__auto____$1);
self__.__hash = h__28577__auto____$1;

return h__28577__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30499,other30500){
var self__ = this;
var this30499__$1 = this;
return (!((other30500 == null))) && ((this30499__$1.constructor === other30500.constructor)) && (cljs.core._EQ_.call(null,this30499__$1.read,other30500.read)) && (cljs.core._EQ_.call(null,this30499__$1.description,other30500.description)) && (cljs.core._EQ_.call(null,this30499__$1.content_type,other30500.content_type)) && (cljs.core._EQ_.call(null,this30499__$1.__extmap,other30500.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28772__auto__,k__28773__auto__){
var self__ = this;
var this__28772__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__28773__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28772__auto____$1),self__.__meta),k__28773__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28773__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28770__auto__,k__28771__auto__,G__30497){
var self__ = this;
var this__28770__auto____$1 = this;
var pred__30516 = cljs.core.keyword_identical_QMARK_;
var expr__30517 = k__28771__auto__;
if(cljs.core.truth_(pred__30516.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__30517))){
return (new ajax.interceptors.ResponseFormat(G__30497,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30516.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__30517))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__30497,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30516.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__30517))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__30497,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28771__auto__,G__30497),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28775__auto__){
var self__ = this;
var this__28775__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28762__auto__,G__30497){
var self__ = this;
var this__28762__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__30497,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28768__auto__,entry__28769__auto__){
var self__ = this;
var this__28768__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28769__auto__)){
return this__28768__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28769__auto__,(0)),cljs.core._nth.call(null,entry__28769__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28768__auto____$1,entry__28769__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__28799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__28799__auto__,writer__28800__auto__){
return cljs.core._write.call(null,writer__28800__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__30501){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__30501),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__30501),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__30501),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30501,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
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
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28763__auto__,k__28764__auto__){
var self__ = this;
var this__28763__auto____$1 = this;
return this__28763__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28764__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28765__auto__,k30522,else__28766__auto__){
var self__ = this;
var this__28765__auto____$1 = this;
var G__30526 = k30522;
switch (G__30526) {
default:
return cljs.core.get.call(null,self__.__extmap,k30522,else__28766__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__30527){
var self__ = this;
var map__30528 = p__30527;
var map__30528__$1 = ((((!((map__30528 == null)))?((((map__30528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30528):map__30528);
var request = map__30528__$1;
var uri = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__30528__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__30530 = ajax.interceptors.get_request_format.call(null,format);
var map__30530__$1 = ((((!((map__30530 == null)))?((((map__30530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30530):map__30530);
var write = cljs.core.get.call(null,map__30530__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__30530__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__28123__auto__ = headers;
if(cljs.core.truth_(or__28123__auto__)){
return or__28123__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28777__auto__,writer__28778__auto__,opts__28779__auto__){
var self__ = this;
var this__28777__auto____$1 = this;
var pr_pair__28780__auto__ = ((function (this__28777__auto____$1){
return (function (keyval__28781__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,cljs.core.pr_writer,""," ","",opts__28779__auto__,keyval__28781__auto__);
});})(this__28777__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,pr_pair__28780__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__28779__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30521){
var self__ = this;
var G__30521__$1 = this;
return (new cljs.core.RecordIter((0),G__30521__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28761__auto__){
var self__ = this;
var this__28761__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28758__auto__){
var self__ = this;
var this__28758__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28767__auto__){
var self__ = this;
var this__28767__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28759__auto__){
var self__ = this;
var this__28759__auto____$1 = this;
var h__28577__auto__ = self__.__hash;
if(!((h__28577__auto__ == null))){
return h__28577__auto__;
} else {
var h__28577__auto____$1 = ((function (h__28577__auto__,this__28759__auto____$1){
return (function (coll__28760__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__28760__auto__));
});})(h__28577__auto__,this__28759__auto____$1))
.call(null,this__28759__auto____$1);
self__.__hash = h__28577__auto____$1;

return h__28577__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30523,other30524){
var self__ = this;
var this30523__$1 = this;
return (!((other30524 == null))) && ((this30523__$1.constructor === other30524.constructor)) && (cljs.core._EQ_.call(null,this30523__$1.__extmap,other30524.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28772__auto__,k__28773__auto__){
var self__ = this;
var this__28772__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__28773__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28772__auto____$1),self__.__meta),k__28773__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28773__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28770__auto__,k__28771__auto__,G__30521){
var self__ = this;
var this__28770__auto____$1 = this;
var pred__30532 = cljs.core.keyword_identical_QMARK_;
var expr__30533 = k__28771__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28771__auto__,G__30521),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28775__auto__){
var self__ = this;
var this__28775__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28762__auto__,G__30521){
var self__ = this;
var this__28762__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__30521,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28768__auto__,entry__28769__auto__){
var self__ = this;
var this__28768__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28769__auto__)){
return this__28768__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28769__auto__,(0)),cljs.core._nth.call(null,entry__28769__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28768__auto____$1,entry__28769__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__28799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__28799__auto__,writer__28800__auto__){
return cljs.core._write.call(null,writer__28800__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__30525){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30525)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__30537 = arguments.length;
switch (G__30537) {
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

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__30538,uri){
var map__30539 = p__30538;
var map__30539__$1 = ((((!((map__30539 == null)))?((((map__30539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30539):map__30539);
var vec_strategy = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__30539__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__30541){
var map__30542 = p__30541;
var map__30542__$1 = ((((!((map__30542 == null)))?((((map__30542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30542):map__30542);
var vec_strategy = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__30542__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__30542,map__30542__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__30542,map__30542__$1,vec_strategy,params))
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
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28763__auto__,k__28764__auto__){
var self__ = this;
var this__28763__auto____$1 = this;
return this__28763__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28764__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28765__auto__,k30546,else__28766__auto__){
var self__ = this;
var this__28765__auto____$1 = this;
var G__30550 = k30546;
switch (G__30550) {
default:
return cljs.core.get.call(null,self__.__extmap,k30546,else__28766__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__30551){
var self__ = this;
var map__30552 = p__30551;
var map__30552__$1 = ((((!((map__30552 == null)))?((((map__30552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30552):map__30552);
var request = map__30552__$1;
var method = cljs.core.get.call(null,map__30552__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28777__auto__,writer__28778__auto__,opts__28779__auto__){
var self__ = this;
var this__28777__auto____$1 = this;
var pr_pair__28780__auto__ = ((function (this__28777__auto____$1){
return (function (keyval__28781__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,cljs.core.pr_writer,""," ","",opts__28779__auto__,keyval__28781__auto__);
});})(this__28777__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,pr_pair__28780__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__28779__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30545){
var self__ = this;
var G__30545__$1 = this;
return (new cljs.core.RecordIter((0),G__30545__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28761__auto__){
var self__ = this;
var this__28761__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28758__auto__){
var self__ = this;
var this__28758__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28767__auto__){
var self__ = this;
var this__28767__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28759__auto__){
var self__ = this;
var this__28759__auto____$1 = this;
var h__28577__auto__ = self__.__hash;
if(!((h__28577__auto__ == null))){
return h__28577__auto__;
} else {
var h__28577__auto____$1 = ((function (h__28577__auto__,this__28759__auto____$1){
return (function (coll__28760__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__28760__auto__));
});})(h__28577__auto__,this__28759__auto____$1))
.call(null,this__28759__auto____$1);
self__.__hash = h__28577__auto____$1;

return h__28577__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30547,other30548){
var self__ = this;
var this30547__$1 = this;
return (!((other30548 == null))) && ((this30547__$1.constructor === other30548.constructor)) && (cljs.core._EQ_.call(null,this30547__$1.__extmap,other30548.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28772__auto__,k__28773__auto__){
var self__ = this;
var this__28772__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__28773__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28772__auto____$1),self__.__meta),k__28773__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28773__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28770__auto__,k__28771__auto__,G__30545){
var self__ = this;
var this__28770__auto____$1 = this;
var pred__30554 = cljs.core.keyword_identical_QMARK_;
var expr__30555 = k__28771__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28771__auto__,G__30545),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28775__auto__){
var self__ = this;
var this__28775__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28762__auto__,G__30545){
var self__ = this;
var this__28762__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__30545,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28768__auto__,entry__28769__auto__){
var self__ = this;
var this__28768__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28769__auto__)){
return this__28768__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28769__auto__,(0)),cljs.core._nth.call(null,entry__28769__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28768__auto____$1,entry__28769__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__28799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__28799__auto__,writer__28800__auto__){
return cljs.core._write.call(null,writer__28800__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__30549){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30549)),null));
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
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__28763__auto__,k__28764__auto__){
var self__ = this;
var this__28763__auto____$1 = this;
return this__28763__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__28764__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__28765__auto__,k30559,else__28766__auto__){
var self__ = this;
var this__28765__auto____$1 = this;
var G__30563 = k30559;
switch (G__30563) {
default:
return cljs.core.get.call(null,self__.__extmap,k30559,else__28766__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__30564){
var self__ = this;
var map__30565 = p__30564;
var map__30565__$1 = ((((!((map__30565 == null)))?((((map__30565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30565):map__30565);
var request = map__30565__$1;
var body = cljs.core.get.call(null,map__30565__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__28777__auto__,writer__28778__auto__,opts__28779__auto__){
var self__ = this;
var this__28777__auto____$1 = this;
var pr_pair__28780__auto__ = ((function (this__28777__auto____$1){
return (function (keyval__28781__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,cljs.core.pr_writer,""," ","",opts__28779__auto__,keyval__28781__auto__);
});})(this__28777__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__28778__auto__,pr_pair__28780__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__28779__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30558){
var self__ = this;
var G__30558__$1 = this;
return (new cljs.core.RecordIter((0),G__30558__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__28761__auto__){
var self__ = this;
var this__28761__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__28758__auto__){
var self__ = this;
var this__28758__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__28767__auto__){
var self__ = this;
var this__28767__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__28759__auto__){
var self__ = this;
var this__28759__auto____$1 = this;
var h__28577__auto__ = self__.__hash;
if(!((h__28577__auto__ == null))){
return h__28577__auto__;
} else {
var h__28577__auto____$1 = ((function (h__28577__auto__,this__28759__auto____$1){
return (function (coll__28760__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__28760__auto__));
});})(h__28577__auto__,this__28759__auto____$1))
.call(null,this__28759__auto____$1);
self__.__hash = h__28577__auto____$1;

return h__28577__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30560,other30561){
var self__ = this;
var this30560__$1 = this;
return (!((other30561 == null))) && ((this30560__$1.constructor === other30561.constructor)) && (cljs.core._EQ_.call(null,this30560__$1.__extmap,other30561.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__28772__auto__,k__28773__auto__){
var self__ = this;
var this__28772__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__28773__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__28772__auto____$1),self__.__meta),k__28773__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__28773__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__28770__auto__,k__28771__auto__,G__30558){
var self__ = this;
var this__28770__auto____$1 = this;
var pred__30567 = cljs.core.keyword_identical_QMARK_;
var expr__30568 = k__28771__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__28771__auto__,G__30558),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__28775__auto__){
var self__ = this;
var this__28775__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__28762__auto__,G__30558){
var self__ = this;
var this__28762__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__30558,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__28768__auto__,entry__28769__auto__){
var self__ = this;
var this__28768__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__28769__auto__)){
return this__28768__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__28769__auto__,(0)),cljs.core._nth.call(null,entry__28769__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__28768__auto____$1,entry__28769__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__28799__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__28799__auto__,writer__28800__auto__){
return cljs.core._write.call(null,writer__28800__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__30562){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__30562)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__30571){
var map__30572 = p__30571;
var map__30572__$1 = ((((!((map__30572 == null)))?((((map__30572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30572):map__30572);
var opts = map__30572__$1;
var response_format = cljs.core.get.call(null,map__30572__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map?rel=1504967592018
