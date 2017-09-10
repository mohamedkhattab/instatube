// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167 = (function (val,meta14168){
this.val = val;
this.meta14168 = meta14168;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14169,meta14168__$1){
var self__ = this;
var _14169__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167(self__.val,meta14168__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14169){
var self__ = this;
var _14169__$1 = this;
return self__.meta14168;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta14168], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels14167";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels14167");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels14167 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels14167(val__$1,meta14168){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167(val__$1,meta14168));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels14167(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__8846__auto__ = (((this$ == null))?null:this$);
var m__8847__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8847__auto__.call(null,this$));
} else {
var m__8847__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8847__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_14181 = self__.puts.pop();
if((putter_14181 == null)){
} else {
var put_handler_14182 = putter_14181.handler;
var val_14183 = putter_14181.val;
if(put_handler_14182.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_14184 = put_handler_14182.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_14184,put_handler_14182,val_14183,putter_14181,this$__$1){
return (function (){
return (put_cb_14184.cljs$core$IFn$_invoke$arity$1 ? put_cb_14184.cljs$core$IFn$_invoke$arity$1(true) : put_cb_14184.call(null,true));
});})(put_cb_14184,put_handler_14182,val_14183,putter_14181,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__8151__auto__ = self__.buf;
if(cljs.core.truth_(and__8151__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__8151__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__14185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__14185;
continue;
} else {
var G__14186 = takers;
takers = G__14186;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__14170_14187 = cljs.core.seq(take_cbs);
var chunk__14171_14188 = null;
var count__14172_14189 = (0);
var i__14173_14190 = (0);
while(true){
if((i__14173_14190 < count__14172_14189)){
var f_14191 = chunk__14171_14188.cljs$core$IIndexed$_nth$arity$2(null,i__14173_14190);
cljs.core.async.impl.dispatch.run(f_14191);

var G__14192 = seq__14170_14187;
var G__14193 = chunk__14171_14188;
var G__14194 = count__14172_14189;
var G__14195 = (i__14173_14190 + (1));
seq__14170_14187 = G__14192;
chunk__14171_14188 = G__14193;
count__14172_14189 = G__14194;
i__14173_14190 = G__14195;
continue;
} else {
var temp__4657__auto___14196 = cljs.core.seq(seq__14170_14187);
if(temp__4657__auto___14196){
var seq__14170_14197__$1 = temp__4657__auto___14196;
if(cljs.core.chunked_seq_QMARK_(seq__14170_14197__$1)){
var c__9002__auto___14198 = cljs.core.chunk_first(seq__14170_14197__$1);
var G__14199 = cljs.core.chunk_rest(seq__14170_14197__$1);
var G__14200 = c__9002__auto___14198;
var G__14201 = cljs.core.count(c__9002__auto___14198);
var G__14202 = (0);
seq__14170_14187 = G__14199;
chunk__14171_14188 = G__14200;
count__14172_14189 = G__14201;
i__14173_14190 = G__14202;
continue;
} else {
var f_14203 = cljs.core.first(seq__14170_14197__$1);
cljs.core.async.impl.dispatch.run(f_14203);

var G__14204 = cljs.core.next(seq__14170_14197__$1);
var G__14205 = null;
var G__14206 = (0);
var G__14207 = (0);
seq__14170_14187 = G__14204;
chunk__14171_14188 = G__14205;
count__14172_14189 = G__14206;
i__14173_14190 = G__14207;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__4655__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__4655__auto__)){
var take_cb = temp__4655__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__14174 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__8151__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__8151__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8151__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__14208 = cbs__$1;
cbs = G__14208;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14174,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14174,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__14177_14209 = cljs.core.seq(cbs);
var chunk__14178_14210 = null;
var count__14179_14211 = (0);
var i__14180_14212 = (0);
while(true){
if((i__14180_14212 < count__14179_14211)){
var cb_14213 = chunk__14178_14210.cljs$core$IIndexed$_nth$arity$2(null,i__14180_14212);
cljs.core.async.impl.dispatch.run(((function (seq__14177_14209,chunk__14178_14210,count__14179_14211,i__14180_14212,cb_14213,val,vec__14174,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return (cb_14213.cljs$core$IFn$_invoke$arity$1 ? cb_14213.cljs$core$IFn$_invoke$arity$1(true) : cb_14213.call(null,true));
});})(seq__14177_14209,chunk__14178_14210,count__14179_14211,i__14180_14212,cb_14213,val,vec__14174,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__14214 = seq__14177_14209;
var G__14215 = chunk__14178_14210;
var G__14216 = count__14179_14211;
var G__14217 = (i__14180_14212 + (1));
seq__14177_14209 = G__14214;
chunk__14178_14210 = G__14215;
count__14179_14211 = G__14216;
i__14180_14212 = G__14217;
continue;
} else {
var temp__4657__auto___14218 = cljs.core.seq(seq__14177_14209);
if(temp__4657__auto___14218){
var seq__14177_14219__$1 = temp__4657__auto___14218;
if(cljs.core.chunked_seq_QMARK_(seq__14177_14219__$1)){
var c__9002__auto___14220 = cljs.core.chunk_first(seq__14177_14219__$1);
var G__14221 = cljs.core.chunk_rest(seq__14177_14219__$1);
var G__14222 = c__9002__auto___14220;
var G__14223 = cljs.core.count(c__9002__auto___14220);
var G__14224 = (0);
seq__14177_14209 = G__14221;
chunk__14178_14210 = G__14222;
count__14179_14211 = G__14223;
i__14180_14212 = G__14224;
continue;
} else {
var cb_14225 = cljs.core.first(seq__14177_14219__$1);
cljs.core.async.impl.dispatch.run(((function (seq__14177_14209,chunk__14178_14210,count__14179_14211,i__14180_14212,cb_14225,seq__14177_14219__$1,temp__4657__auto___14218,val,vec__14174,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1){
return (function (){
return (cb_14225.cljs$core$IFn$_invoke$arity$1 ? cb_14225.cljs$core$IFn$_invoke$arity$1(true) : cb_14225.call(null,true));
});})(seq__14177_14209,chunk__14178_14210,count__14179_14211,i__14180_14212,cb_14225,seq__14177_14219__$1,temp__4657__auto___14218,val,vec__14174,done_QMARK_,cbs,take_cb,temp__4655__auto__,this$__$1))
);

var G__14226 = cljs.core.next(seq__14177_14219__$1);
var G__14227 = null;
var G__14228 = (0);
var G__14229 = (0);
seq__14177_14209 = G__14226;
chunk__14178_14210 = G__14227;
count__14179_14211 = G__14228;
i__14180_14212 = G__14229;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__8151__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__8151__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8151__auto__;
}
})())){
var has_val = (function (){var and__8151__auto__ = self__.buf;
if(cljs.core.truth_(and__8151__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8151__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__8151__auto__ = self__.buf;
if(cljs.core.truth_(and__8151__auto__)){
return (self__.puts.length === (0));
} else {
return and__8151__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_14230 = self__.takes.pop();
if((taker_14230 == null)){
} else {
if(taker_14230.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_14231 = taker_14230.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_14232 = (cljs.core.truth_((function (){var and__8151__auto__ = self__.buf;
if(cljs.core.truth_(and__8151__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8151__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_14231,val_14232,taker_14230,this$__$1){
return (function (){
return (take_cb_14231.cljs$core$IFn$_invoke$arity$1 ? take_cb_14231.cljs$core$IFn$_invoke$arity$1(val_14232) : take_cb_14231.call(null,val_14232));
});})(take_cb_14231,val_14232,taker_14230,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__14233 = (function (){var or__8163__auto__ = exh;
if(cljs.core.truth_(or__8163__auto__)){
return or__8163__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__14233.cljs$core$IFn$_invoke$arity$1 ? fexpr__14233.cljs$core$IFn$_invoke$arity$1(t) : fexpr__14233.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__14235 = arguments.length;
switch (G__14235) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__14239 = null;
var G__14239__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e14236){var t = e14236;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__14239__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e14237){var t = e14237;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__14239 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__14239__1.call(this,buf__$1);
case 2:
return G__14239__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14239.cljs$core$IFn$_invoke$arity$1 = G__14239__1;
G__14239.cljs$core$IFn$_invoke$arity$2 = G__14239__2;
return G__14239;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

