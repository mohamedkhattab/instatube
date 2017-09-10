// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30972 = arguments.length;
switch (G__30972) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30973 = (function (f,blockable,meta30974){
this.f = f;
this.blockable = blockable;
this.meta30974 = meta30974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30975,meta30974__$1){
var self__ = this;
var _30975__$1 = this;
return (new cljs.core.async.t_cljs$core$async30973(self__.f,self__.blockable,meta30974__$1));
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30975){
var self__ = this;
var _30975__$1 = this;
return self__.meta30974;
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30974","meta30974",-1776820658,null)], null);
});

cljs.core.async.t_cljs$core$async30973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30973";

cljs.core.async.t_cljs$core$async30973.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async30973");
});

cljs.core.async.__GT_t_cljs$core$async30973 = (function cljs$core$async$__GT_t_cljs$core$async30973(f__$1,blockable__$1,meta30974){
return (new cljs.core.async.t_cljs$core$async30973(f__$1,blockable__$1,meta30974));
});

}

return (new cljs.core.async.t_cljs$core$async30973(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30979 = arguments.length;
switch (G__30979) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30982 = arguments.length;
switch (G__30982) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30985 = arguments.length;
switch (G__30985) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30987 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30987);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30987,ret){
return (function (){
return fn1.call(null,val_30987);
});})(val_30987,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30989 = arguments.length;
switch (G__30989) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28934__auto___30991 = n;
var x_30992 = (0);
while(true){
if((x_30992 < n__28934__auto___30991)){
(a[x_30992] = (0));

var G__30993 = (x_30992 + (1));
x_30992 = G__30993;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30994 = (i + (1));
i = G__30994;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30995 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30995 = (function (flag,meta30996){
this.flag = flag;
this.meta30996 = meta30996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30997,meta30996__$1){
var self__ = this;
var _30997__$1 = this;
return (new cljs.core.async.t_cljs$core$async30995(self__.flag,meta30996__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30997){
var self__ = this;
var _30997__$1 = this;
return self__.meta30996;
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30996","meta30996",-263680622,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30995.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30995";

cljs.core.async.t_cljs$core$async30995.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async30995");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30995 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30995(flag__$1,meta30996){
return (new cljs.core.async.t_cljs$core$async30995(flag__$1,meta30996));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30995(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30998 = (function (flag,cb,meta30999){
this.flag = flag;
this.cb = cb;
this.meta30999 = meta30999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31000,meta30999__$1){
var self__ = this;
var _31000__$1 = this;
return (new cljs.core.async.t_cljs$core$async30998(self__.flag,self__.cb,meta30999__$1));
});

cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31000){
var self__ = this;
var _31000__$1 = this;
return self__.meta30999;
});

cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30999","meta30999",242880733,null)], null);
});

cljs.core.async.t_cljs$core$async30998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30998";

cljs.core.async.t_cljs$core$async30998.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async30998");
});

cljs.core.async.__GT_t_cljs$core$async30998 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30998(flag__$1,cb__$1,meta30999){
return (new cljs.core.async.t_cljs$core$async30998(flag__$1,cb__$1,meta30999));
});

}

return (new cljs.core.async.t_cljs$core$async30998(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31001_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31001_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31002_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31002_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27989__auto__ = wport;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31003 = (i + (1));
i = G__31003;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27989__auto__ = ret;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27977__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27977__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27977__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___31009 = arguments.length;
var i__29159__auto___31010 = (0);
while(true){
if((i__29159__auto___31010 < len__29158__auto___31009)){
args__29165__auto__.push((arguments[i__29159__auto___31010]));

var G__31011 = (i__29159__auto___31010 + (1));
i__29159__auto___31010 = G__31011;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((1) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29166__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31006){
var map__31007 = p__31006;
var map__31007__$1 = ((((!((map__31007 == null)))?((((map__31007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31007):map__31007);
var opts = map__31007__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31004){
var G__31005 = cljs.core.first.call(null,seq31004);
var seq31004__$1 = cljs.core.next.call(null,seq31004);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31005,seq31004__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31013 = arguments.length;
switch (G__31013) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30926__auto___31059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___31059){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___31059){
return (function (state_31037){
var state_val_31038 = (state_31037[(1)]);
if((state_val_31038 === (7))){
var inst_31033 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31039_31060 = state_31037__$1;
(statearr_31039_31060[(2)] = inst_31033);

(statearr_31039_31060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (1))){
var state_31037__$1 = state_31037;
var statearr_31040_31061 = state_31037__$1;
(statearr_31040_31061[(2)] = null);

(statearr_31040_31061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (4))){
var inst_31016 = (state_31037[(7)]);
var inst_31016__$1 = (state_31037[(2)]);
var inst_31017 = (inst_31016__$1 == null);
var state_31037__$1 = (function (){var statearr_31041 = state_31037;
(statearr_31041[(7)] = inst_31016__$1);

return statearr_31041;
})();
if(cljs.core.truth_(inst_31017)){
var statearr_31042_31062 = state_31037__$1;
(statearr_31042_31062[(1)] = (5));

} else {
var statearr_31043_31063 = state_31037__$1;
(statearr_31043_31063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (13))){
var state_31037__$1 = state_31037;
var statearr_31044_31064 = state_31037__$1;
(statearr_31044_31064[(2)] = null);

(statearr_31044_31064[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (6))){
var inst_31016 = (state_31037[(7)]);
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31037__$1,(11),to,inst_31016);
} else {
if((state_val_31038 === (3))){
var inst_31035 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31037__$1,inst_31035);
} else {
if((state_val_31038 === (12))){
var state_31037__$1 = state_31037;
var statearr_31045_31065 = state_31037__$1;
(statearr_31045_31065[(2)] = null);

(statearr_31045_31065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (2))){
var state_31037__$1 = state_31037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31037__$1,(4),from);
} else {
if((state_val_31038 === (11))){
var inst_31026 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
if(cljs.core.truth_(inst_31026)){
var statearr_31046_31066 = state_31037__$1;
(statearr_31046_31066[(1)] = (12));

} else {
var statearr_31047_31067 = state_31037__$1;
(statearr_31047_31067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (9))){
var state_31037__$1 = state_31037;
var statearr_31048_31068 = state_31037__$1;
(statearr_31048_31068[(2)] = null);

(statearr_31048_31068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (5))){
var state_31037__$1 = state_31037;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31049_31069 = state_31037__$1;
(statearr_31049_31069[(1)] = (8));

} else {
var statearr_31050_31070 = state_31037__$1;
(statearr_31050_31070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (14))){
var inst_31031 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31051_31071 = state_31037__$1;
(statearr_31051_31071[(2)] = inst_31031);

(statearr_31051_31071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (10))){
var inst_31023 = (state_31037[(2)]);
var state_31037__$1 = state_31037;
var statearr_31052_31072 = state_31037__$1;
(statearr_31052_31072[(2)] = inst_31023);

(statearr_31052_31072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31038 === (8))){
var inst_31020 = cljs.core.async.close_BANG_.call(null,to);
var state_31037__$1 = state_31037;
var statearr_31053_31073 = state_31037__$1;
(statearr_31053_31073[(2)] = inst_31020);

(statearr_31053_31073[(1)] = (10));


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
});})(c__30926__auto___31059))
;
return ((function (switch__30838__auto__,c__30926__auto___31059){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_31054 = [null,null,null,null,null,null,null,null];
(statearr_31054[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_31054[(1)] = (1));

return statearr_31054;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_31037){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31055){if((e31055 instanceof Object)){
var ex__30842__auto__ = e31055;
var statearr_31056_31074 = state_31037;
(statearr_31056_31074[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31075 = state_31037;
state_31037 = G__31075;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_31037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_31037);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___31059))
})();
var state__30928__auto__ = (function (){var statearr_31057 = f__30927__auto__.call(null);
(statearr_31057[(6)] = c__30926__auto___31059);

return statearr_31057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___31059))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31076){
var vec__31077 = p__31076;
var v = cljs.core.nth.call(null,vec__31077,(0),null);
var p = cljs.core.nth.call(null,vec__31077,(1),null);
var job = vec__31077;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30926__auto___31248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___31248,res,vec__31077,v,p,job,jobs,results){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___31248,res,vec__31077,v,p,job,jobs,results){
return (function (state_31084){
var state_val_31085 = (state_31084[(1)]);
if((state_val_31085 === (1))){
var state_31084__$1 = state_31084;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31084__$1,(2),res,v);
} else {
if((state_val_31085 === (2))){
var inst_31081 = (state_31084[(2)]);
var inst_31082 = cljs.core.async.close_BANG_.call(null,res);
var state_31084__$1 = (function (){var statearr_31086 = state_31084;
(statearr_31086[(7)] = inst_31081);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31084__$1,inst_31082);
} else {
return null;
}
}
});})(c__30926__auto___31248,res,vec__31077,v,p,job,jobs,results))
;
return ((function (switch__30838__auto__,c__30926__auto___31248,res,vec__31077,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0 = (function (){
var statearr_31087 = [null,null,null,null,null,null,null,null];
(statearr_31087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__);

(statearr_31087[(1)] = (1));

return statearr_31087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1 = (function (state_31084){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31088){if((e31088 instanceof Object)){
var ex__30842__auto__ = e31088;
var statearr_31089_31249 = state_31084;
(statearr_31089_31249[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31250 = state_31084;
state_31084 = G__31250;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = function(state_31084){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1.call(this,state_31084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___31248,res,vec__31077,v,p,job,jobs,results))
})();
var state__30928__auto__ = (function (){var statearr_31090 = f__30927__auto__.call(null);
(statearr_31090[(6)] = c__30926__auto___31248);

return statearr_31090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___31248,res,vec__31077,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31091){
var vec__31092 = p__31091;
var v = cljs.core.nth.call(null,vec__31092,(0),null);
var p = cljs.core.nth.call(null,vec__31092,(1),null);
var job = vec__31092;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28934__auto___31251 = n;
var __31252 = (0);
while(true){
if((__31252 < n__28934__auto___31251)){
var G__31095_31253 = type;
var G__31095_31254__$1 = (((G__31095_31253 instanceof cljs.core.Keyword))?G__31095_31253.fqn:null);
switch (G__31095_31254__$1) {
case "compute":
var c__30926__auto___31256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31252,c__30926__auto___31256,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (__31252,c__30926__auto___31256,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async){
return (function (state_31108){
var state_val_31109 = (state_31108[(1)]);
if((state_val_31109 === (1))){
var state_31108__$1 = state_31108;
var statearr_31110_31257 = state_31108__$1;
(statearr_31110_31257[(2)] = null);

(statearr_31110_31257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (2))){
var state_31108__$1 = state_31108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31108__$1,(4),jobs);
} else {
if((state_val_31109 === (3))){
var inst_31106 = (state_31108[(2)]);
var state_31108__$1 = state_31108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31108__$1,inst_31106);
} else {
if((state_val_31109 === (4))){
var inst_31098 = (state_31108[(2)]);
var inst_31099 = process.call(null,inst_31098);
var state_31108__$1 = state_31108;
if(cljs.core.truth_(inst_31099)){
var statearr_31111_31258 = state_31108__$1;
(statearr_31111_31258[(1)] = (5));

} else {
var statearr_31112_31259 = state_31108__$1;
(statearr_31112_31259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (5))){
var state_31108__$1 = state_31108;
var statearr_31113_31260 = state_31108__$1;
(statearr_31113_31260[(2)] = null);

(statearr_31113_31260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (6))){
var state_31108__$1 = state_31108;
var statearr_31114_31261 = state_31108__$1;
(statearr_31114_31261[(2)] = null);

(statearr_31114_31261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31109 === (7))){
var inst_31104 = (state_31108[(2)]);
var state_31108__$1 = state_31108;
var statearr_31115_31262 = state_31108__$1;
(statearr_31115_31262[(2)] = inst_31104);

(statearr_31115_31262[(1)] = (3));


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
});})(__31252,c__30926__auto___31256,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async))
;
return ((function (__31252,switch__30838__auto__,c__30926__auto___31256,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0 = (function (){
var statearr_31116 = [null,null,null,null,null,null,null];
(statearr_31116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__);

(statearr_31116[(1)] = (1));

return statearr_31116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1 = (function (state_31108){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31117){if((e31117 instanceof Object)){
var ex__30842__auto__ = e31117;
var statearr_31118_31263 = state_31108;
(statearr_31118_31263[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31264 = state_31108;
state_31108 = G__31264;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = function(state_31108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1.call(this,state_31108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__;
})()
;})(__31252,switch__30838__auto__,c__30926__auto___31256,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async))
})();
var state__30928__auto__ = (function (){var statearr_31119 = f__30927__auto__.call(null);
(statearr_31119[(6)] = c__30926__auto___31256);

return statearr_31119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(__31252,c__30926__auto___31256,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async))
);


break;
case "async":
var c__30926__auto___31265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31252,c__30926__auto___31265,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (__31252,c__30926__auto___31265,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async){
return (function (state_31132){
var state_val_31133 = (state_31132[(1)]);
if((state_val_31133 === (1))){
var state_31132__$1 = state_31132;
var statearr_31134_31266 = state_31132__$1;
(statearr_31134_31266[(2)] = null);

(statearr_31134_31266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (2))){
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31132__$1,(4),jobs);
} else {
if((state_val_31133 === (3))){
var inst_31130 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31132__$1,inst_31130);
} else {
if((state_val_31133 === (4))){
var inst_31122 = (state_31132[(2)]);
var inst_31123 = async.call(null,inst_31122);
var state_31132__$1 = state_31132;
if(cljs.core.truth_(inst_31123)){
var statearr_31135_31267 = state_31132__$1;
(statearr_31135_31267[(1)] = (5));

} else {
var statearr_31136_31268 = state_31132__$1;
(statearr_31136_31268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (5))){
var state_31132__$1 = state_31132;
var statearr_31137_31269 = state_31132__$1;
(statearr_31137_31269[(2)] = null);

(statearr_31137_31269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (6))){
var state_31132__$1 = state_31132;
var statearr_31138_31270 = state_31132__$1;
(statearr_31138_31270[(2)] = null);

(statearr_31138_31270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31133 === (7))){
var inst_31128 = (state_31132[(2)]);
var state_31132__$1 = state_31132;
var statearr_31139_31271 = state_31132__$1;
(statearr_31139_31271[(2)] = inst_31128);

(statearr_31139_31271[(1)] = (3));


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
});})(__31252,c__30926__auto___31265,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async))
;
return ((function (__31252,switch__30838__auto__,c__30926__auto___31265,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0 = (function (){
var statearr_31140 = [null,null,null,null,null,null,null];
(statearr_31140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__);

(statearr_31140[(1)] = (1));

return statearr_31140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1 = (function (state_31132){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31141){if((e31141 instanceof Object)){
var ex__30842__auto__ = e31141;
var statearr_31142_31272 = state_31132;
(statearr_31142_31272[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31273 = state_31132;
state_31132 = G__31273;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = function(state_31132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1.call(this,state_31132);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__;
})()
;})(__31252,switch__30838__auto__,c__30926__auto___31265,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async))
})();
var state__30928__auto__ = (function (){var statearr_31143 = f__30927__auto__.call(null);
(statearr_31143[(6)] = c__30926__auto___31265);

return statearr_31143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(__31252,c__30926__auto___31265,G__31095_31253,G__31095_31254__$1,n__28934__auto___31251,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31095_31254__$1)].join('')));

}

var G__31274 = (__31252 + (1));
__31252 = G__31274;
continue;
} else {
}
break;
}

var c__30926__auto___31275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___31275,jobs,results,process,async){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___31275,jobs,results,process,async){
return (function (state_31165){
var state_val_31166 = (state_31165[(1)]);
if((state_val_31166 === (1))){
var state_31165__$1 = state_31165;
var statearr_31167_31276 = state_31165__$1;
(statearr_31167_31276[(2)] = null);

(statearr_31167_31276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31166 === (2))){
var state_31165__$1 = state_31165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31165__$1,(4),from);
} else {
if((state_val_31166 === (3))){
var inst_31163 = (state_31165[(2)]);
var state_31165__$1 = state_31165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31165__$1,inst_31163);
} else {
if((state_val_31166 === (4))){
var inst_31146 = (state_31165[(7)]);
var inst_31146__$1 = (state_31165[(2)]);
var inst_31147 = (inst_31146__$1 == null);
var state_31165__$1 = (function (){var statearr_31168 = state_31165;
(statearr_31168[(7)] = inst_31146__$1);

return statearr_31168;
})();
if(cljs.core.truth_(inst_31147)){
var statearr_31169_31277 = state_31165__$1;
(statearr_31169_31277[(1)] = (5));

} else {
var statearr_31170_31278 = state_31165__$1;
(statearr_31170_31278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31166 === (5))){
var inst_31149 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31165__$1 = state_31165;
var statearr_31171_31279 = state_31165__$1;
(statearr_31171_31279[(2)] = inst_31149);

(statearr_31171_31279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31166 === (6))){
var inst_31146 = (state_31165[(7)]);
var inst_31151 = (state_31165[(8)]);
var inst_31151__$1 = cljs.core.async.chan.call(null,(1));
var inst_31152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31153 = [inst_31146,inst_31151__$1];
var inst_31154 = (new cljs.core.PersistentVector(null,2,(5),inst_31152,inst_31153,null));
var state_31165__$1 = (function (){var statearr_31172 = state_31165;
(statearr_31172[(8)] = inst_31151__$1);

return statearr_31172;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31165__$1,(8),jobs,inst_31154);
} else {
if((state_val_31166 === (7))){
var inst_31161 = (state_31165[(2)]);
var state_31165__$1 = state_31165;
var statearr_31173_31280 = state_31165__$1;
(statearr_31173_31280[(2)] = inst_31161);

(statearr_31173_31280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31166 === (8))){
var inst_31151 = (state_31165[(8)]);
var inst_31156 = (state_31165[(2)]);
var state_31165__$1 = (function (){var statearr_31174 = state_31165;
(statearr_31174[(9)] = inst_31156);

return statearr_31174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31165__$1,(9),results,inst_31151);
} else {
if((state_val_31166 === (9))){
var inst_31158 = (state_31165[(2)]);
var state_31165__$1 = (function (){var statearr_31175 = state_31165;
(statearr_31175[(10)] = inst_31158);

return statearr_31175;
})();
var statearr_31176_31281 = state_31165__$1;
(statearr_31176_31281[(2)] = null);

(statearr_31176_31281[(1)] = (2));


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
});})(c__30926__auto___31275,jobs,results,process,async))
;
return ((function (switch__30838__auto__,c__30926__auto___31275,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0 = (function (){
var statearr_31177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1 = (function (state_31165){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31178){if((e31178 instanceof Object)){
var ex__30842__auto__ = e31178;
var statearr_31179_31282 = state_31165;
(statearr_31179_31282[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31283 = state_31165;
state_31165 = G__31283;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = function(state_31165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1.call(this,state_31165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___31275,jobs,results,process,async))
})();
var state__30928__auto__ = (function (){var statearr_31180 = f__30927__auto__.call(null);
(statearr_31180[(6)] = c__30926__auto___31275);

return statearr_31180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___31275,jobs,results,process,async))
);


var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__,jobs,results,process,async){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__,jobs,results,process,async){
return (function (state_31218){
var state_val_31219 = (state_31218[(1)]);
if((state_val_31219 === (7))){
var inst_31214 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31220_31284 = state_31218__$1;
(statearr_31220_31284[(2)] = inst_31214);

(statearr_31220_31284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (20))){
var state_31218__$1 = state_31218;
var statearr_31221_31285 = state_31218__$1;
(statearr_31221_31285[(2)] = null);

(statearr_31221_31285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (1))){
var state_31218__$1 = state_31218;
var statearr_31222_31286 = state_31218__$1;
(statearr_31222_31286[(2)] = null);

(statearr_31222_31286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (4))){
var inst_31183 = (state_31218[(7)]);
var inst_31183__$1 = (state_31218[(2)]);
var inst_31184 = (inst_31183__$1 == null);
var state_31218__$1 = (function (){var statearr_31223 = state_31218;
(statearr_31223[(7)] = inst_31183__$1);

return statearr_31223;
})();
if(cljs.core.truth_(inst_31184)){
var statearr_31224_31287 = state_31218__$1;
(statearr_31224_31287[(1)] = (5));

} else {
var statearr_31225_31288 = state_31218__$1;
(statearr_31225_31288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (15))){
var inst_31196 = (state_31218[(8)]);
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31218__$1,(18),to,inst_31196);
} else {
if((state_val_31219 === (21))){
var inst_31209 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31226_31289 = state_31218__$1;
(statearr_31226_31289[(2)] = inst_31209);

(statearr_31226_31289[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (13))){
var inst_31211 = (state_31218[(2)]);
var state_31218__$1 = (function (){var statearr_31227 = state_31218;
(statearr_31227[(9)] = inst_31211);

return statearr_31227;
})();
var statearr_31228_31290 = state_31218__$1;
(statearr_31228_31290[(2)] = null);

(statearr_31228_31290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (6))){
var inst_31183 = (state_31218[(7)]);
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31218__$1,(11),inst_31183);
} else {
if((state_val_31219 === (17))){
var inst_31204 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
if(cljs.core.truth_(inst_31204)){
var statearr_31229_31291 = state_31218__$1;
(statearr_31229_31291[(1)] = (19));

} else {
var statearr_31230_31292 = state_31218__$1;
(statearr_31230_31292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (3))){
var inst_31216 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31218__$1,inst_31216);
} else {
if((state_val_31219 === (12))){
var inst_31193 = (state_31218[(10)]);
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31218__$1,(14),inst_31193);
} else {
if((state_val_31219 === (2))){
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31218__$1,(4),results);
} else {
if((state_val_31219 === (19))){
var state_31218__$1 = state_31218;
var statearr_31231_31293 = state_31218__$1;
(statearr_31231_31293[(2)] = null);

(statearr_31231_31293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (11))){
var inst_31193 = (state_31218[(2)]);
var state_31218__$1 = (function (){var statearr_31232 = state_31218;
(statearr_31232[(10)] = inst_31193);

return statearr_31232;
})();
var statearr_31233_31294 = state_31218__$1;
(statearr_31233_31294[(2)] = null);

(statearr_31233_31294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (9))){
var state_31218__$1 = state_31218;
var statearr_31234_31295 = state_31218__$1;
(statearr_31234_31295[(2)] = null);

(statearr_31234_31295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (5))){
var state_31218__$1 = state_31218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31235_31296 = state_31218__$1;
(statearr_31235_31296[(1)] = (8));

} else {
var statearr_31236_31297 = state_31218__$1;
(statearr_31236_31297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (14))){
var inst_31198 = (state_31218[(11)]);
var inst_31196 = (state_31218[(8)]);
var inst_31196__$1 = (state_31218[(2)]);
var inst_31197 = (inst_31196__$1 == null);
var inst_31198__$1 = cljs.core.not.call(null,inst_31197);
var state_31218__$1 = (function (){var statearr_31237 = state_31218;
(statearr_31237[(11)] = inst_31198__$1);

(statearr_31237[(8)] = inst_31196__$1);

return statearr_31237;
})();
if(inst_31198__$1){
var statearr_31238_31298 = state_31218__$1;
(statearr_31238_31298[(1)] = (15));

} else {
var statearr_31239_31299 = state_31218__$1;
(statearr_31239_31299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (16))){
var inst_31198 = (state_31218[(11)]);
var state_31218__$1 = state_31218;
var statearr_31240_31300 = state_31218__$1;
(statearr_31240_31300[(2)] = inst_31198);

(statearr_31240_31300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (10))){
var inst_31190 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31241_31301 = state_31218__$1;
(statearr_31241_31301[(2)] = inst_31190);

(statearr_31241_31301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (18))){
var inst_31201 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31242_31302 = state_31218__$1;
(statearr_31242_31302[(2)] = inst_31201);

(statearr_31242_31302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (8))){
var inst_31187 = cljs.core.async.close_BANG_.call(null,to);
var state_31218__$1 = state_31218;
var statearr_31243_31303 = state_31218__$1;
(statearr_31243_31303[(2)] = inst_31187);

(statearr_31243_31303[(1)] = (10));


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
});})(c__30926__auto__,jobs,results,process,async))
;
return ((function (switch__30838__auto__,c__30926__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0 = (function (){
var statearr_31244 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__);

(statearr_31244[(1)] = (1));

return statearr_31244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1 = (function (state_31218){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31245){if((e31245 instanceof Object)){
var ex__30842__auto__ = e31245;
var statearr_31246_31304 = state_31218;
(statearr_31246_31304[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31305 = state_31218;
state_31218 = G__31305;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__ = function(state_31218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1.call(this,state_31218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__,jobs,results,process,async))
})();
var state__30928__auto__ = (function (){var statearr_31247 = f__30927__auto__.call(null);
(statearr_31247[(6)] = c__30926__auto__);

return statearr_31247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__,jobs,results,process,async))
);

return c__30926__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31307 = arguments.length;
switch (G__31307) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31310 = arguments.length;
switch (G__31310) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31313 = arguments.length;
switch (G__31313) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30926__auto___31362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___31362,tc,fc){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___31362,tc,fc){
return (function (state_31339){
var state_val_31340 = (state_31339[(1)]);
if((state_val_31340 === (7))){
var inst_31335 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31341_31363 = state_31339__$1;
(statearr_31341_31363[(2)] = inst_31335);

(statearr_31341_31363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (1))){
var state_31339__$1 = state_31339;
var statearr_31342_31364 = state_31339__$1;
(statearr_31342_31364[(2)] = null);

(statearr_31342_31364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (4))){
var inst_31316 = (state_31339[(7)]);
var inst_31316__$1 = (state_31339[(2)]);
var inst_31317 = (inst_31316__$1 == null);
var state_31339__$1 = (function (){var statearr_31343 = state_31339;
(statearr_31343[(7)] = inst_31316__$1);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31317)){
var statearr_31344_31365 = state_31339__$1;
(statearr_31344_31365[(1)] = (5));

} else {
var statearr_31345_31366 = state_31339__$1;
(statearr_31345_31366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (13))){
var state_31339__$1 = state_31339;
var statearr_31346_31367 = state_31339__$1;
(statearr_31346_31367[(2)] = null);

(statearr_31346_31367[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (6))){
var inst_31316 = (state_31339[(7)]);
var inst_31322 = p.call(null,inst_31316);
var state_31339__$1 = state_31339;
if(cljs.core.truth_(inst_31322)){
var statearr_31347_31368 = state_31339__$1;
(statearr_31347_31368[(1)] = (9));

} else {
var statearr_31348_31369 = state_31339__$1;
(statearr_31348_31369[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (3))){
var inst_31337 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31339__$1,inst_31337);
} else {
if((state_val_31340 === (12))){
var state_31339__$1 = state_31339;
var statearr_31349_31370 = state_31339__$1;
(statearr_31349_31370[(2)] = null);

(statearr_31349_31370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (2))){
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31339__$1,(4),ch);
} else {
if((state_val_31340 === (11))){
var inst_31316 = (state_31339[(7)]);
var inst_31326 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31339__$1,(8),inst_31326,inst_31316);
} else {
if((state_val_31340 === (9))){
var state_31339__$1 = state_31339;
var statearr_31350_31371 = state_31339__$1;
(statearr_31350_31371[(2)] = tc);

(statearr_31350_31371[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (5))){
var inst_31319 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31320 = cljs.core.async.close_BANG_.call(null,fc);
var state_31339__$1 = (function (){var statearr_31351 = state_31339;
(statearr_31351[(8)] = inst_31319);

return statearr_31351;
})();
var statearr_31352_31372 = state_31339__$1;
(statearr_31352_31372[(2)] = inst_31320);

(statearr_31352_31372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (14))){
var inst_31333 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31353_31373 = state_31339__$1;
(statearr_31353_31373[(2)] = inst_31333);

(statearr_31353_31373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (10))){
var state_31339__$1 = state_31339;
var statearr_31354_31374 = state_31339__$1;
(statearr_31354_31374[(2)] = fc);

(statearr_31354_31374[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (8))){
var inst_31328 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
if(cljs.core.truth_(inst_31328)){
var statearr_31355_31375 = state_31339__$1;
(statearr_31355_31375[(1)] = (12));

} else {
var statearr_31356_31376 = state_31339__$1;
(statearr_31356_31376[(1)] = (13));

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
});})(c__30926__auto___31362,tc,fc))
;
return ((function (switch__30838__auto__,c__30926__auto___31362,tc,fc){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_31357 = [null,null,null,null,null,null,null,null,null];
(statearr_31357[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_31357[(1)] = (1));

return statearr_31357;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_31339){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31358){if((e31358 instanceof Object)){
var ex__30842__auto__ = e31358;
var statearr_31359_31377 = state_31339;
(statearr_31359_31377[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31378 = state_31339;
state_31339 = G__31378;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_31339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_31339);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___31362,tc,fc))
})();
var state__30928__auto__ = (function (){var statearr_31360 = f__30927__auto__.call(null);
(statearr_31360[(6)] = c__30926__auto___31362);

return statearr_31360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___31362,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__){
return (function (state_31399){
var state_val_31400 = (state_31399[(1)]);
if((state_val_31400 === (7))){
var inst_31395 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31401_31419 = state_31399__$1;
(statearr_31401_31419[(2)] = inst_31395);

(statearr_31401_31419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (1))){
var inst_31379 = init;
var state_31399__$1 = (function (){var statearr_31402 = state_31399;
(statearr_31402[(7)] = inst_31379);

return statearr_31402;
})();
var statearr_31403_31420 = state_31399__$1;
(statearr_31403_31420[(2)] = null);

(statearr_31403_31420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (4))){
var inst_31382 = (state_31399[(8)]);
var inst_31382__$1 = (state_31399[(2)]);
var inst_31383 = (inst_31382__$1 == null);
var state_31399__$1 = (function (){var statearr_31404 = state_31399;
(statearr_31404[(8)] = inst_31382__$1);

return statearr_31404;
})();
if(cljs.core.truth_(inst_31383)){
var statearr_31405_31421 = state_31399__$1;
(statearr_31405_31421[(1)] = (5));

} else {
var statearr_31406_31422 = state_31399__$1;
(statearr_31406_31422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (6))){
var inst_31382 = (state_31399[(8)]);
var inst_31379 = (state_31399[(7)]);
var inst_31386 = (state_31399[(9)]);
var inst_31386__$1 = f.call(null,inst_31379,inst_31382);
var inst_31387 = cljs.core.reduced_QMARK_.call(null,inst_31386__$1);
var state_31399__$1 = (function (){var statearr_31407 = state_31399;
(statearr_31407[(9)] = inst_31386__$1);

return statearr_31407;
})();
if(inst_31387){
var statearr_31408_31423 = state_31399__$1;
(statearr_31408_31423[(1)] = (8));

} else {
var statearr_31409_31424 = state_31399__$1;
(statearr_31409_31424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (3))){
var inst_31397 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31399__$1,inst_31397);
} else {
if((state_val_31400 === (2))){
var state_31399__$1 = state_31399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31399__$1,(4),ch);
} else {
if((state_val_31400 === (9))){
var inst_31386 = (state_31399[(9)]);
var inst_31379 = inst_31386;
var state_31399__$1 = (function (){var statearr_31410 = state_31399;
(statearr_31410[(7)] = inst_31379);

return statearr_31410;
})();
var statearr_31411_31425 = state_31399__$1;
(statearr_31411_31425[(2)] = null);

(statearr_31411_31425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (5))){
var inst_31379 = (state_31399[(7)]);
var state_31399__$1 = state_31399;
var statearr_31412_31426 = state_31399__$1;
(statearr_31412_31426[(2)] = inst_31379);

(statearr_31412_31426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (10))){
var inst_31393 = (state_31399[(2)]);
var state_31399__$1 = state_31399;
var statearr_31413_31427 = state_31399__$1;
(statearr_31413_31427[(2)] = inst_31393);

(statearr_31413_31427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31400 === (8))){
var inst_31386 = (state_31399[(9)]);
var inst_31389 = cljs.core.deref.call(null,inst_31386);
var state_31399__$1 = state_31399;
var statearr_31414_31428 = state_31399__$1;
(statearr_31414_31428[(2)] = inst_31389);

(statearr_31414_31428[(1)] = (10));


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
});})(c__30926__auto__))
;
return ((function (switch__30838__auto__,c__30926__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30839__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30839__auto____0 = (function (){
var statearr_31415 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31415[(0)] = cljs$core$async$reduce_$_state_machine__30839__auto__);

(statearr_31415[(1)] = (1));

return statearr_31415;
});
var cljs$core$async$reduce_$_state_machine__30839__auto____1 = (function (state_31399){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31416){if((e31416 instanceof Object)){
var ex__30842__auto__ = e31416;
var statearr_31417_31429 = state_31399;
(statearr_31417_31429[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31430 = state_31399;
state_31399 = G__31430;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30839__auto__ = function(state_31399){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30839__auto____1.call(this,state_31399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30839__auto____0;
cljs$core$async$reduce_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30839__auto____1;
return cljs$core$async$reduce_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__))
})();
var state__30928__auto__ = (function (){var statearr_31418 = f__30927__auto__.call(null);
(statearr_31418[(6)] = c__30926__auto__);

return statearr_31418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__))
);

return c__30926__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__,f__$1){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__,f__$1){
return (function (state_31436){
var state_val_31437 = (state_31436[(1)]);
if((state_val_31437 === (1))){
var inst_31431 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31436__$1,(2),inst_31431);
} else {
if((state_val_31437 === (2))){
var inst_31433 = (state_31436[(2)]);
var inst_31434 = f__$1.call(null,inst_31433);
var state_31436__$1 = state_31436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31436__$1,inst_31434);
} else {
return null;
}
}
});})(c__30926__auto__,f__$1))
;
return ((function (switch__30838__auto__,c__30926__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30839__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30839__auto____0 = (function (){
var statearr_31438 = [null,null,null,null,null,null,null];
(statearr_31438[(0)] = cljs$core$async$transduce_$_state_machine__30839__auto__);

(statearr_31438[(1)] = (1));

return statearr_31438;
});
var cljs$core$async$transduce_$_state_machine__30839__auto____1 = (function (state_31436){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31439){if((e31439 instanceof Object)){
var ex__30842__auto__ = e31439;
var statearr_31440_31442 = state_31436;
(statearr_31440_31442[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31443 = state_31436;
state_31436 = G__31443;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30839__auto__ = function(state_31436){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30839__auto____1.call(this,state_31436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30839__auto____0;
cljs$core$async$transduce_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30839__auto____1;
return cljs$core$async$transduce_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__,f__$1))
})();
var state__30928__auto__ = (function (){var statearr_31441 = f__30927__auto__.call(null);
(statearr_31441[(6)] = c__30926__auto__);

return statearr_31441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__,f__$1))
);

return c__30926__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31445 = arguments.length;
switch (G__31445) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__){
return (function (state_31470){
var state_val_31471 = (state_31470[(1)]);
if((state_val_31471 === (7))){
var inst_31452 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31472_31493 = state_31470__$1;
(statearr_31472_31493[(2)] = inst_31452);

(statearr_31472_31493[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (1))){
var inst_31446 = cljs.core.seq.call(null,coll);
var inst_31447 = inst_31446;
var state_31470__$1 = (function (){var statearr_31473 = state_31470;
(statearr_31473[(7)] = inst_31447);

return statearr_31473;
})();
var statearr_31474_31494 = state_31470__$1;
(statearr_31474_31494[(2)] = null);

(statearr_31474_31494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (4))){
var inst_31447 = (state_31470[(7)]);
var inst_31450 = cljs.core.first.call(null,inst_31447);
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31470__$1,(7),ch,inst_31450);
} else {
if((state_val_31471 === (13))){
var inst_31464 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31475_31495 = state_31470__$1;
(statearr_31475_31495[(2)] = inst_31464);

(statearr_31475_31495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (6))){
var inst_31455 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
if(cljs.core.truth_(inst_31455)){
var statearr_31476_31496 = state_31470__$1;
(statearr_31476_31496[(1)] = (8));

} else {
var statearr_31477_31497 = state_31470__$1;
(statearr_31477_31497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (3))){
var inst_31468 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31470__$1,inst_31468);
} else {
if((state_val_31471 === (12))){
var state_31470__$1 = state_31470;
var statearr_31478_31498 = state_31470__$1;
(statearr_31478_31498[(2)] = null);

(statearr_31478_31498[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (2))){
var inst_31447 = (state_31470[(7)]);
var state_31470__$1 = state_31470;
if(cljs.core.truth_(inst_31447)){
var statearr_31479_31499 = state_31470__$1;
(statearr_31479_31499[(1)] = (4));

} else {
var statearr_31480_31500 = state_31470__$1;
(statearr_31480_31500[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (11))){
var inst_31461 = cljs.core.async.close_BANG_.call(null,ch);
var state_31470__$1 = state_31470;
var statearr_31481_31501 = state_31470__$1;
(statearr_31481_31501[(2)] = inst_31461);

(statearr_31481_31501[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (9))){
var state_31470__$1 = state_31470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31482_31502 = state_31470__$1;
(statearr_31482_31502[(1)] = (11));

} else {
var statearr_31483_31503 = state_31470__$1;
(statearr_31483_31503[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (5))){
var inst_31447 = (state_31470[(7)]);
var state_31470__$1 = state_31470;
var statearr_31484_31504 = state_31470__$1;
(statearr_31484_31504[(2)] = inst_31447);

(statearr_31484_31504[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (10))){
var inst_31466 = (state_31470[(2)]);
var state_31470__$1 = state_31470;
var statearr_31485_31505 = state_31470__$1;
(statearr_31485_31505[(2)] = inst_31466);

(statearr_31485_31505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31471 === (8))){
var inst_31447 = (state_31470[(7)]);
var inst_31457 = cljs.core.next.call(null,inst_31447);
var inst_31447__$1 = inst_31457;
var state_31470__$1 = (function (){var statearr_31486 = state_31470;
(statearr_31486[(7)] = inst_31447__$1);

return statearr_31486;
})();
var statearr_31487_31506 = state_31470__$1;
(statearr_31487_31506[(2)] = null);

(statearr_31487_31506[(1)] = (2));


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
});})(c__30926__auto__))
;
return ((function (switch__30838__auto__,c__30926__auto__){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_31488 = [null,null,null,null,null,null,null,null];
(statearr_31488[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_31488[(1)] = (1));

return statearr_31488;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_31470){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31489){if((e31489 instanceof Object)){
var ex__30842__auto__ = e31489;
var statearr_31490_31507 = state_31470;
(statearr_31490_31507[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31508 = state_31470;
state_31470 = G__31508;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_31470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_31470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__))
})();
var state__30928__auto__ = (function (){var statearr_31491 = f__30927__auto__.call(null);
(statearr_31491[(6)] = c__30926__auto__);

return statearr_31491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__))
);

return c__30926__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28672__auto__ = (((_ == null))?null:_);
var m__28673__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,_);
} else {
var m__28673__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31509 = (function (ch,cs,meta31510){
this.ch = ch;
this.cs = cs;
this.meta31510 = meta31510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31511,meta31510__$1){
var self__ = this;
var _31511__$1 = this;
return (new cljs.core.async.t_cljs$core$async31509(self__.ch,self__.cs,meta31510__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31511){
var self__ = this;
var _31511__$1 = this;
return self__.meta31510;
});})(cs))
;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31509.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31509.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31510","meta31510",-1613765497,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31509";

cljs.core.async.t_cljs$core$async31509.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31509");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31509 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31509(ch__$1,cs__$1,meta31510){
return (new cljs.core.async.t_cljs$core$async31509(ch__$1,cs__$1,meta31510));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31509(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30926__auto___31731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___31731,cs,m,dchan,dctr,done){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___31731,cs,m,dchan,dctr,done){
return (function (state_31646){
var state_val_31647 = (state_31646[(1)]);
if((state_val_31647 === (7))){
var inst_31642 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31648_31732 = state_31646__$1;
(statearr_31648_31732[(2)] = inst_31642);

(statearr_31648_31732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (20))){
var inst_31545 = (state_31646[(7)]);
var inst_31557 = cljs.core.first.call(null,inst_31545);
var inst_31558 = cljs.core.nth.call(null,inst_31557,(0),null);
var inst_31559 = cljs.core.nth.call(null,inst_31557,(1),null);
var state_31646__$1 = (function (){var statearr_31649 = state_31646;
(statearr_31649[(8)] = inst_31558);

return statearr_31649;
})();
if(cljs.core.truth_(inst_31559)){
var statearr_31650_31733 = state_31646__$1;
(statearr_31650_31733[(1)] = (22));

} else {
var statearr_31651_31734 = state_31646__$1;
(statearr_31651_31734[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (27))){
var inst_31594 = (state_31646[(9)]);
var inst_31587 = (state_31646[(10)]);
var inst_31589 = (state_31646[(11)]);
var inst_31514 = (state_31646[(12)]);
var inst_31594__$1 = cljs.core._nth.call(null,inst_31587,inst_31589);
var inst_31595 = cljs.core.async.put_BANG_.call(null,inst_31594__$1,inst_31514,done);
var state_31646__$1 = (function (){var statearr_31652 = state_31646;
(statearr_31652[(9)] = inst_31594__$1);

return statearr_31652;
})();
if(cljs.core.truth_(inst_31595)){
var statearr_31653_31735 = state_31646__$1;
(statearr_31653_31735[(1)] = (30));

} else {
var statearr_31654_31736 = state_31646__$1;
(statearr_31654_31736[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (1))){
var state_31646__$1 = state_31646;
var statearr_31655_31737 = state_31646__$1;
(statearr_31655_31737[(2)] = null);

(statearr_31655_31737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (24))){
var inst_31545 = (state_31646[(7)]);
var inst_31564 = (state_31646[(2)]);
var inst_31565 = cljs.core.next.call(null,inst_31545);
var inst_31523 = inst_31565;
var inst_31524 = null;
var inst_31525 = (0);
var inst_31526 = (0);
var state_31646__$1 = (function (){var statearr_31656 = state_31646;
(statearr_31656[(13)] = inst_31525);

(statearr_31656[(14)] = inst_31523);

(statearr_31656[(15)] = inst_31524);

(statearr_31656[(16)] = inst_31526);

(statearr_31656[(17)] = inst_31564);

return statearr_31656;
})();
var statearr_31657_31738 = state_31646__$1;
(statearr_31657_31738[(2)] = null);

(statearr_31657_31738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (39))){
var state_31646__$1 = state_31646;
var statearr_31661_31739 = state_31646__$1;
(statearr_31661_31739[(2)] = null);

(statearr_31661_31739[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (4))){
var inst_31514 = (state_31646[(12)]);
var inst_31514__$1 = (state_31646[(2)]);
var inst_31515 = (inst_31514__$1 == null);
var state_31646__$1 = (function (){var statearr_31662 = state_31646;
(statearr_31662[(12)] = inst_31514__$1);

return statearr_31662;
})();
if(cljs.core.truth_(inst_31515)){
var statearr_31663_31740 = state_31646__$1;
(statearr_31663_31740[(1)] = (5));

} else {
var statearr_31664_31741 = state_31646__$1;
(statearr_31664_31741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (15))){
var inst_31525 = (state_31646[(13)]);
var inst_31523 = (state_31646[(14)]);
var inst_31524 = (state_31646[(15)]);
var inst_31526 = (state_31646[(16)]);
var inst_31541 = (state_31646[(2)]);
var inst_31542 = (inst_31526 + (1));
var tmp31658 = inst_31525;
var tmp31659 = inst_31523;
var tmp31660 = inst_31524;
var inst_31523__$1 = tmp31659;
var inst_31524__$1 = tmp31660;
var inst_31525__$1 = tmp31658;
var inst_31526__$1 = inst_31542;
var state_31646__$1 = (function (){var statearr_31665 = state_31646;
(statearr_31665[(13)] = inst_31525__$1);

(statearr_31665[(14)] = inst_31523__$1);

(statearr_31665[(18)] = inst_31541);

(statearr_31665[(15)] = inst_31524__$1);

(statearr_31665[(16)] = inst_31526__$1);

return statearr_31665;
})();
var statearr_31666_31742 = state_31646__$1;
(statearr_31666_31742[(2)] = null);

(statearr_31666_31742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (21))){
var inst_31568 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31670_31743 = state_31646__$1;
(statearr_31670_31743[(2)] = inst_31568);

(statearr_31670_31743[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (31))){
var inst_31594 = (state_31646[(9)]);
var inst_31598 = done.call(null,null);
var inst_31599 = cljs.core.async.untap_STAR_.call(null,m,inst_31594);
var state_31646__$1 = (function (){var statearr_31671 = state_31646;
(statearr_31671[(19)] = inst_31598);

return statearr_31671;
})();
var statearr_31672_31744 = state_31646__$1;
(statearr_31672_31744[(2)] = inst_31599);

(statearr_31672_31744[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (32))){
var inst_31586 = (state_31646[(20)]);
var inst_31587 = (state_31646[(10)]);
var inst_31588 = (state_31646[(21)]);
var inst_31589 = (state_31646[(11)]);
var inst_31601 = (state_31646[(2)]);
var inst_31602 = (inst_31589 + (1));
var tmp31667 = inst_31586;
var tmp31668 = inst_31587;
var tmp31669 = inst_31588;
var inst_31586__$1 = tmp31667;
var inst_31587__$1 = tmp31668;
var inst_31588__$1 = tmp31669;
var inst_31589__$1 = inst_31602;
var state_31646__$1 = (function (){var statearr_31673 = state_31646;
(statearr_31673[(20)] = inst_31586__$1);

(statearr_31673[(22)] = inst_31601);

(statearr_31673[(10)] = inst_31587__$1);

(statearr_31673[(21)] = inst_31588__$1);

(statearr_31673[(11)] = inst_31589__$1);

return statearr_31673;
})();
var statearr_31674_31745 = state_31646__$1;
(statearr_31674_31745[(2)] = null);

(statearr_31674_31745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (40))){
var inst_31614 = (state_31646[(23)]);
var inst_31618 = done.call(null,null);
var inst_31619 = cljs.core.async.untap_STAR_.call(null,m,inst_31614);
var state_31646__$1 = (function (){var statearr_31675 = state_31646;
(statearr_31675[(24)] = inst_31618);

return statearr_31675;
})();
var statearr_31676_31746 = state_31646__$1;
(statearr_31676_31746[(2)] = inst_31619);

(statearr_31676_31746[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (33))){
var inst_31605 = (state_31646[(25)]);
var inst_31607 = cljs.core.chunked_seq_QMARK_.call(null,inst_31605);
var state_31646__$1 = state_31646;
if(inst_31607){
var statearr_31677_31747 = state_31646__$1;
(statearr_31677_31747[(1)] = (36));

} else {
var statearr_31678_31748 = state_31646__$1;
(statearr_31678_31748[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (13))){
var inst_31535 = (state_31646[(26)]);
var inst_31538 = cljs.core.async.close_BANG_.call(null,inst_31535);
var state_31646__$1 = state_31646;
var statearr_31679_31749 = state_31646__$1;
(statearr_31679_31749[(2)] = inst_31538);

(statearr_31679_31749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (22))){
var inst_31558 = (state_31646[(8)]);
var inst_31561 = cljs.core.async.close_BANG_.call(null,inst_31558);
var state_31646__$1 = state_31646;
var statearr_31680_31750 = state_31646__$1;
(statearr_31680_31750[(2)] = inst_31561);

(statearr_31680_31750[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (36))){
var inst_31605 = (state_31646[(25)]);
var inst_31609 = cljs.core.chunk_first.call(null,inst_31605);
var inst_31610 = cljs.core.chunk_rest.call(null,inst_31605);
var inst_31611 = cljs.core.count.call(null,inst_31609);
var inst_31586 = inst_31610;
var inst_31587 = inst_31609;
var inst_31588 = inst_31611;
var inst_31589 = (0);
var state_31646__$1 = (function (){var statearr_31681 = state_31646;
(statearr_31681[(20)] = inst_31586);

(statearr_31681[(10)] = inst_31587);

(statearr_31681[(21)] = inst_31588);

(statearr_31681[(11)] = inst_31589);

return statearr_31681;
})();
var statearr_31682_31751 = state_31646__$1;
(statearr_31682_31751[(2)] = null);

(statearr_31682_31751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (41))){
var inst_31605 = (state_31646[(25)]);
var inst_31621 = (state_31646[(2)]);
var inst_31622 = cljs.core.next.call(null,inst_31605);
var inst_31586 = inst_31622;
var inst_31587 = null;
var inst_31588 = (0);
var inst_31589 = (0);
var state_31646__$1 = (function (){var statearr_31683 = state_31646;
(statearr_31683[(27)] = inst_31621);

(statearr_31683[(20)] = inst_31586);

(statearr_31683[(10)] = inst_31587);

(statearr_31683[(21)] = inst_31588);

(statearr_31683[(11)] = inst_31589);

return statearr_31683;
})();
var statearr_31684_31752 = state_31646__$1;
(statearr_31684_31752[(2)] = null);

(statearr_31684_31752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (43))){
var state_31646__$1 = state_31646;
var statearr_31685_31753 = state_31646__$1;
(statearr_31685_31753[(2)] = null);

(statearr_31685_31753[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (29))){
var inst_31630 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31686_31754 = state_31646__$1;
(statearr_31686_31754[(2)] = inst_31630);

(statearr_31686_31754[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (44))){
var inst_31639 = (state_31646[(2)]);
var state_31646__$1 = (function (){var statearr_31687 = state_31646;
(statearr_31687[(28)] = inst_31639);

return statearr_31687;
})();
var statearr_31688_31755 = state_31646__$1;
(statearr_31688_31755[(2)] = null);

(statearr_31688_31755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (6))){
var inst_31578 = (state_31646[(29)]);
var inst_31577 = cljs.core.deref.call(null,cs);
var inst_31578__$1 = cljs.core.keys.call(null,inst_31577);
var inst_31579 = cljs.core.count.call(null,inst_31578__$1);
var inst_31580 = cljs.core.reset_BANG_.call(null,dctr,inst_31579);
var inst_31585 = cljs.core.seq.call(null,inst_31578__$1);
var inst_31586 = inst_31585;
var inst_31587 = null;
var inst_31588 = (0);
var inst_31589 = (0);
var state_31646__$1 = (function (){var statearr_31689 = state_31646;
(statearr_31689[(20)] = inst_31586);

(statearr_31689[(29)] = inst_31578__$1);

(statearr_31689[(30)] = inst_31580);

(statearr_31689[(10)] = inst_31587);

(statearr_31689[(21)] = inst_31588);

(statearr_31689[(11)] = inst_31589);

return statearr_31689;
})();
var statearr_31690_31756 = state_31646__$1;
(statearr_31690_31756[(2)] = null);

(statearr_31690_31756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (28))){
var inst_31586 = (state_31646[(20)]);
var inst_31605 = (state_31646[(25)]);
var inst_31605__$1 = cljs.core.seq.call(null,inst_31586);
var state_31646__$1 = (function (){var statearr_31691 = state_31646;
(statearr_31691[(25)] = inst_31605__$1);

return statearr_31691;
})();
if(inst_31605__$1){
var statearr_31692_31757 = state_31646__$1;
(statearr_31692_31757[(1)] = (33));

} else {
var statearr_31693_31758 = state_31646__$1;
(statearr_31693_31758[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (25))){
var inst_31588 = (state_31646[(21)]);
var inst_31589 = (state_31646[(11)]);
var inst_31591 = (inst_31589 < inst_31588);
var inst_31592 = inst_31591;
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31592)){
var statearr_31694_31759 = state_31646__$1;
(statearr_31694_31759[(1)] = (27));

} else {
var statearr_31695_31760 = state_31646__$1;
(statearr_31695_31760[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (34))){
var state_31646__$1 = state_31646;
var statearr_31696_31761 = state_31646__$1;
(statearr_31696_31761[(2)] = null);

(statearr_31696_31761[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (17))){
var state_31646__$1 = state_31646;
var statearr_31697_31762 = state_31646__$1;
(statearr_31697_31762[(2)] = null);

(statearr_31697_31762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (3))){
var inst_31644 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31646__$1,inst_31644);
} else {
if((state_val_31647 === (12))){
var inst_31573 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31698_31763 = state_31646__$1;
(statearr_31698_31763[(2)] = inst_31573);

(statearr_31698_31763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (2))){
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31646__$1,(4),ch);
} else {
if((state_val_31647 === (23))){
var state_31646__$1 = state_31646;
var statearr_31699_31764 = state_31646__$1;
(statearr_31699_31764[(2)] = null);

(statearr_31699_31764[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (35))){
var inst_31628 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31700_31765 = state_31646__$1;
(statearr_31700_31765[(2)] = inst_31628);

(statearr_31700_31765[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (19))){
var inst_31545 = (state_31646[(7)]);
var inst_31549 = cljs.core.chunk_first.call(null,inst_31545);
var inst_31550 = cljs.core.chunk_rest.call(null,inst_31545);
var inst_31551 = cljs.core.count.call(null,inst_31549);
var inst_31523 = inst_31550;
var inst_31524 = inst_31549;
var inst_31525 = inst_31551;
var inst_31526 = (0);
var state_31646__$1 = (function (){var statearr_31701 = state_31646;
(statearr_31701[(13)] = inst_31525);

(statearr_31701[(14)] = inst_31523);

(statearr_31701[(15)] = inst_31524);

(statearr_31701[(16)] = inst_31526);

return statearr_31701;
})();
var statearr_31702_31766 = state_31646__$1;
(statearr_31702_31766[(2)] = null);

(statearr_31702_31766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (11))){
var inst_31523 = (state_31646[(14)]);
var inst_31545 = (state_31646[(7)]);
var inst_31545__$1 = cljs.core.seq.call(null,inst_31523);
var state_31646__$1 = (function (){var statearr_31703 = state_31646;
(statearr_31703[(7)] = inst_31545__$1);

return statearr_31703;
})();
if(inst_31545__$1){
var statearr_31704_31767 = state_31646__$1;
(statearr_31704_31767[(1)] = (16));

} else {
var statearr_31705_31768 = state_31646__$1;
(statearr_31705_31768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (9))){
var inst_31575 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31706_31769 = state_31646__$1;
(statearr_31706_31769[(2)] = inst_31575);

(statearr_31706_31769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (5))){
var inst_31521 = cljs.core.deref.call(null,cs);
var inst_31522 = cljs.core.seq.call(null,inst_31521);
var inst_31523 = inst_31522;
var inst_31524 = null;
var inst_31525 = (0);
var inst_31526 = (0);
var state_31646__$1 = (function (){var statearr_31707 = state_31646;
(statearr_31707[(13)] = inst_31525);

(statearr_31707[(14)] = inst_31523);

(statearr_31707[(15)] = inst_31524);

(statearr_31707[(16)] = inst_31526);

return statearr_31707;
})();
var statearr_31708_31770 = state_31646__$1;
(statearr_31708_31770[(2)] = null);

(statearr_31708_31770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (14))){
var state_31646__$1 = state_31646;
var statearr_31709_31771 = state_31646__$1;
(statearr_31709_31771[(2)] = null);

(statearr_31709_31771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (45))){
var inst_31636 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31710_31772 = state_31646__$1;
(statearr_31710_31772[(2)] = inst_31636);

(statearr_31710_31772[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (26))){
var inst_31578 = (state_31646[(29)]);
var inst_31632 = (state_31646[(2)]);
var inst_31633 = cljs.core.seq.call(null,inst_31578);
var state_31646__$1 = (function (){var statearr_31711 = state_31646;
(statearr_31711[(31)] = inst_31632);

return statearr_31711;
})();
if(inst_31633){
var statearr_31712_31773 = state_31646__$1;
(statearr_31712_31773[(1)] = (42));

} else {
var statearr_31713_31774 = state_31646__$1;
(statearr_31713_31774[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (16))){
var inst_31545 = (state_31646[(7)]);
var inst_31547 = cljs.core.chunked_seq_QMARK_.call(null,inst_31545);
var state_31646__$1 = state_31646;
if(inst_31547){
var statearr_31714_31775 = state_31646__$1;
(statearr_31714_31775[(1)] = (19));

} else {
var statearr_31715_31776 = state_31646__$1;
(statearr_31715_31776[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (38))){
var inst_31625 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31716_31777 = state_31646__$1;
(statearr_31716_31777[(2)] = inst_31625);

(statearr_31716_31777[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (30))){
var state_31646__$1 = state_31646;
var statearr_31717_31778 = state_31646__$1;
(statearr_31717_31778[(2)] = null);

(statearr_31717_31778[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (10))){
var inst_31524 = (state_31646[(15)]);
var inst_31526 = (state_31646[(16)]);
var inst_31534 = cljs.core._nth.call(null,inst_31524,inst_31526);
var inst_31535 = cljs.core.nth.call(null,inst_31534,(0),null);
var inst_31536 = cljs.core.nth.call(null,inst_31534,(1),null);
var state_31646__$1 = (function (){var statearr_31718 = state_31646;
(statearr_31718[(26)] = inst_31535);

return statearr_31718;
})();
if(cljs.core.truth_(inst_31536)){
var statearr_31719_31779 = state_31646__$1;
(statearr_31719_31779[(1)] = (13));

} else {
var statearr_31720_31780 = state_31646__$1;
(statearr_31720_31780[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (18))){
var inst_31571 = (state_31646[(2)]);
var state_31646__$1 = state_31646;
var statearr_31721_31781 = state_31646__$1;
(statearr_31721_31781[(2)] = inst_31571);

(statearr_31721_31781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (42))){
var state_31646__$1 = state_31646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31646__$1,(45),dchan);
} else {
if((state_val_31647 === (37))){
var inst_31614 = (state_31646[(23)]);
var inst_31605 = (state_31646[(25)]);
var inst_31514 = (state_31646[(12)]);
var inst_31614__$1 = cljs.core.first.call(null,inst_31605);
var inst_31615 = cljs.core.async.put_BANG_.call(null,inst_31614__$1,inst_31514,done);
var state_31646__$1 = (function (){var statearr_31722 = state_31646;
(statearr_31722[(23)] = inst_31614__$1);

return statearr_31722;
})();
if(cljs.core.truth_(inst_31615)){
var statearr_31723_31782 = state_31646__$1;
(statearr_31723_31782[(1)] = (39));

} else {
var statearr_31724_31783 = state_31646__$1;
(statearr_31724_31783[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31647 === (8))){
var inst_31525 = (state_31646[(13)]);
var inst_31526 = (state_31646[(16)]);
var inst_31528 = (inst_31526 < inst_31525);
var inst_31529 = inst_31528;
var state_31646__$1 = state_31646;
if(cljs.core.truth_(inst_31529)){
var statearr_31725_31784 = state_31646__$1;
(statearr_31725_31784[(1)] = (10));

} else {
var statearr_31726_31785 = state_31646__$1;
(statearr_31726_31785[(1)] = (11));

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
});})(c__30926__auto___31731,cs,m,dchan,dctr,done))
;
return ((function (switch__30838__auto__,c__30926__auto___31731,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30839__auto__ = null;
var cljs$core$async$mult_$_state_machine__30839__auto____0 = (function (){
var statearr_31727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31727[(0)] = cljs$core$async$mult_$_state_machine__30839__auto__);

(statearr_31727[(1)] = (1));

return statearr_31727;
});
var cljs$core$async$mult_$_state_machine__30839__auto____1 = (function (state_31646){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31728){if((e31728 instanceof Object)){
var ex__30842__auto__ = e31728;
var statearr_31729_31786 = state_31646;
(statearr_31729_31786[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31787 = state_31646;
state_31646 = G__31787;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30839__auto__ = function(state_31646){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30839__auto____1.call(this,state_31646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30839__auto____0;
cljs$core$async$mult_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30839__auto____1;
return cljs$core$async$mult_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___31731,cs,m,dchan,dctr,done))
})();
var state__30928__auto__ = (function (){var statearr_31730 = f__30927__auto__.call(null);
(statearr_31730[(6)] = c__30926__auto___31731);

return statearr_31730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___31731,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31789 = arguments.length;
switch (G__31789) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m);
} else {
var m__28673__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,state_map);
} else {
var m__28673__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28672__auto__ = (((m == null))?null:m);
var m__28673__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,m,mode);
} else {
var m__28673__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29165__auto__ = [];
var len__29158__auto___31801 = arguments.length;
var i__29159__auto___31802 = (0);
while(true){
if((i__29159__auto___31802 < len__29158__auto___31801)){
args__29165__auto__.push((arguments[i__29159__auto___31802]));

var G__31803 = (i__29159__auto___31802 + (1));
i__29159__auto___31802 = G__31803;
continue;
} else {
}
break;
}

var argseq__29166__auto__ = ((((3) < args__29165__auto__.length))?(new cljs.core.IndexedSeq(args__29165__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29166__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31795){
var map__31796 = p__31795;
var map__31796__$1 = ((((!((map__31796 == null)))?((((map__31796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31796):map__31796);
var opts = map__31796__$1;
var statearr_31798_31804 = state;
(statearr_31798_31804[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31796,map__31796__$1,opts){
return (function (val){
var statearr_31799_31805 = state;
(statearr_31799_31805[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31796,map__31796__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31800_31806 = state;
(statearr_31800_31806[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31791){
var G__31792 = cljs.core.first.call(null,seq31791);
var seq31791__$1 = cljs.core.next.call(null,seq31791);
var G__31793 = cljs.core.first.call(null,seq31791__$1);
var seq31791__$2 = cljs.core.next.call(null,seq31791__$1);
var G__31794 = cljs.core.first.call(null,seq31791__$2);
var seq31791__$3 = cljs.core.next.call(null,seq31791__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31792,G__31793,G__31794,seq31791__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31807 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31808){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31808 = meta31808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31809,meta31808__$1){
var self__ = this;
var _31809__$1 = this;
return (new cljs.core.async.t_cljs$core$async31807(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31808__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31809){
var self__ = this;
var _31809__$1 = this;
return self__.meta31808;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31808","meta31808",1170283125,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31807";

cljs.core.async.t_cljs$core$async31807.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async31807");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31807 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31807(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31808){
return (new cljs.core.async.t_cljs$core$async31807(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31808));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31807(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30926__auto___31971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (7))){
var inst_31826 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31913_31972 = state_31911__$1;
(statearr_31913_31972[(2)] = inst_31826);

(statearr_31913_31972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (20))){
var inst_31838 = (state_31911[(7)]);
var state_31911__$1 = state_31911;
var statearr_31914_31973 = state_31911__$1;
(statearr_31914_31973[(2)] = inst_31838);

(statearr_31914_31973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (27))){
var state_31911__$1 = state_31911;
var statearr_31915_31974 = state_31911__$1;
(statearr_31915_31974[(2)] = null);

(statearr_31915_31974[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (1))){
var inst_31813 = (state_31911[(8)]);
var inst_31813__$1 = calc_state.call(null);
var inst_31815 = (inst_31813__$1 == null);
var inst_31816 = cljs.core.not.call(null,inst_31815);
var state_31911__$1 = (function (){var statearr_31916 = state_31911;
(statearr_31916[(8)] = inst_31813__$1);

return statearr_31916;
})();
if(inst_31816){
var statearr_31917_31975 = state_31911__$1;
(statearr_31917_31975[(1)] = (2));

} else {
var statearr_31918_31976 = state_31911__$1;
(statearr_31918_31976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (24))){
var inst_31862 = (state_31911[(9)]);
var inst_31885 = (state_31911[(10)]);
var inst_31871 = (state_31911[(11)]);
var inst_31885__$1 = inst_31862.call(null,inst_31871);
var state_31911__$1 = (function (){var statearr_31919 = state_31911;
(statearr_31919[(10)] = inst_31885__$1);

return statearr_31919;
})();
if(cljs.core.truth_(inst_31885__$1)){
var statearr_31920_31977 = state_31911__$1;
(statearr_31920_31977[(1)] = (29));

} else {
var statearr_31921_31978 = state_31911__$1;
(statearr_31921_31978[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (4))){
var inst_31829 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31829)){
var statearr_31922_31979 = state_31911__$1;
(statearr_31922_31979[(1)] = (8));

} else {
var statearr_31923_31980 = state_31911__$1;
(statearr_31923_31980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (15))){
var inst_31856 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31856)){
var statearr_31924_31981 = state_31911__$1;
(statearr_31924_31981[(1)] = (19));

} else {
var statearr_31925_31982 = state_31911__$1;
(statearr_31925_31982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (21))){
var inst_31861 = (state_31911[(12)]);
var inst_31861__$1 = (state_31911[(2)]);
var inst_31862 = cljs.core.get.call(null,inst_31861__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31863 = cljs.core.get.call(null,inst_31861__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31864 = cljs.core.get.call(null,inst_31861__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31911__$1 = (function (){var statearr_31926 = state_31911;
(statearr_31926[(9)] = inst_31862);

(statearr_31926[(13)] = inst_31863);

(statearr_31926[(12)] = inst_31861__$1);

return statearr_31926;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31911__$1,(22),inst_31864);
} else {
if((state_val_31912 === (31))){
var inst_31893 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31893)){
var statearr_31927_31983 = state_31911__$1;
(statearr_31927_31983[(1)] = (32));

} else {
var statearr_31928_31984 = state_31911__$1;
(statearr_31928_31984[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (32))){
var inst_31870 = (state_31911[(14)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31911__$1,(35),out,inst_31870);
} else {
if((state_val_31912 === (33))){
var inst_31861 = (state_31911[(12)]);
var inst_31838 = inst_31861;
var state_31911__$1 = (function (){var statearr_31929 = state_31911;
(statearr_31929[(7)] = inst_31838);

return statearr_31929;
})();
var statearr_31930_31985 = state_31911__$1;
(statearr_31930_31985[(2)] = null);

(statearr_31930_31985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (13))){
var inst_31838 = (state_31911[(7)]);
var inst_31845 = inst_31838.cljs$lang$protocol_mask$partition0$;
var inst_31846 = (inst_31845 & (64));
var inst_31847 = inst_31838.cljs$core$ISeq$;
var inst_31848 = (cljs.core.PROTOCOL_SENTINEL === inst_31847);
var inst_31849 = (inst_31846) || (inst_31848);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31849)){
var statearr_31931_31986 = state_31911__$1;
(statearr_31931_31986[(1)] = (16));

} else {
var statearr_31932_31987 = state_31911__$1;
(statearr_31932_31987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (22))){
var inst_31871 = (state_31911[(11)]);
var inst_31870 = (state_31911[(14)]);
var inst_31869 = (state_31911[(2)]);
var inst_31870__$1 = cljs.core.nth.call(null,inst_31869,(0),null);
var inst_31871__$1 = cljs.core.nth.call(null,inst_31869,(1),null);
var inst_31872 = (inst_31870__$1 == null);
var inst_31873 = cljs.core._EQ_.call(null,inst_31871__$1,change);
var inst_31874 = (inst_31872) || (inst_31873);
var state_31911__$1 = (function (){var statearr_31933 = state_31911;
(statearr_31933[(11)] = inst_31871__$1);

(statearr_31933[(14)] = inst_31870__$1);

return statearr_31933;
})();
if(cljs.core.truth_(inst_31874)){
var statearr_31934_31988 = state_31911__$1;
(statearr_31934_31988[(1)] = (23));

} else {
var statearr_31935_31989 = state_31911__$1;
(statearr_31935_31989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (36))){
var inst_31861 = (state_31911[(12)]);
var inst_31838 = inst_31861;
var state_31911__$1 = (function (){var statearr_31936 = state_31911;
(statearr_31936[(7)] = inst_31838);

return statearr_31936;
})();
var statearr_31937_31990 = state_31911__$1;
(statearr_31937_31990[(2)] = null);

(statearr_31937_31990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (29))){
var inst_31885 = (state_31911[(10)]);
var state_31911__$1 = state_31911;
var statearr_31938_31991 = state_31911__$1;
(statearr_31938_31991[(2)] = inst_31885);

(statearr_31938_31991[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (6))){
var state_31911__$1 = state_31911;
var statearr_31939_31992 = state_31911__$1;
(statearr_31939_31992[(2)] = false);

(statearr_31939_31992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (28))){
var inst_31881 = (state_31911[(2)]);
var inst_31882 = calc_state.call(null);
var inst_31838 = inst_31882;
var state_31911__$1 = (function (){var statearr_31940 = state_31911;
(statearr_31940[(15)] = inst_31881);

(statearr_31940[(7)] = inst_31838);

return statearr_31940;
})();
var statearr_31941_31993 = state_31911__$1;
(statearr_31941_31993[(2)] = null);

(statearr_31941_31993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (25))){
var inst_31907 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31942_31994 = state_31911__$1;
(statearr_31942_31994[(2)] = inst_31907);

(statearr_31942_31994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (34))){
var inst_31905 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31943_31995 = state_31911__$1;
(statearr_31943_31995[(2)] = inst_31905);

(statearr_31943_31995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (17))){
var state_31911__$1 = state_31911;
var statearr_31944_31996 = state_31911__$1;
(statearr_31944_31996[(2)] = false);

(statearr_31944_31996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (3))){
var state_31911__$1 = state_31911;
var statearr_31945_31997 = state_31911__$1;
(statearr_31945_31997[(2)] = false);

(statearr_31945_31997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (12))){
var inst_31909 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31911__$1,inst_31909);
} else {
if((state_val_31912 === (2))){
var inst_31813 = (state_31911[(8)]);
var inst_31818 = inst_31813.cljs$lang$protocol_mask$partition0$;
var inst_31819 = (inst_31818 & (64));
var inst_31820 = inst_31813.cljs$core$ISeq$;
var inst_31821 = (cljs.core.PROTOCOL_SENTINEL === inst_31820);
var inst_31822 = (inst_31819) || (inst_31821);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31822)){
var statearr_31946_31998 = state_31911__$1;
(statearr_31946_31998[(1)] = (5));

} else {
var statearr_31947_31999 = state_31911__$1;
(statearr_31947_31999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (23))){
var inst_31870 = (state_31911[(14)]);
var inst_31876 = (inst_31870 == null);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31876)){
var statearr_31948_32000 = state_31911__$1;
(statearr_31948_32000[(1)] = (26));

} else {
var statearr_31949_32001 = state_31911__$1;
(statearr_31949_32001[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (35))){
var inst_31896 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31896)){
var statearr_31950_32002 = state_31911__$1;
(statearr_31950_32002[(1)] = (36));

} else {
var statearr_31951_32003 = state_31911__$1;
(statearr_31951_32003[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (19))){
var inst_31838 = (state_31911[(7)]);
var inst_31858 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31838);
var state_31911__$1 = state_31911;
var statearr_31952_32004 = state_31911__$1;
(statearr_31952_32004[(2)] = inst_31858);

(statearr_31952_32004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (11))){
var inst_31838 = (state_31911[(7)]);
var inst_31842 = (inst_31838 == null);
var inst_31843 = cljs.core.not.call(null,inst_31842);
var state_31911__$1 = state_31911;
if(inst_31843){
var statearr_31953_32005 = state_31911__$1;
(statearr_31953_32005[(1)] = (13));

} else {
var statearr_31954_32006 = state_31911__$1;
(statearr_31954_32006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (9))){
var inst_31813 = (state_31911[(8)]);
var state_31911__$1 = state_31911;
var statearr_31955_32007 = state_31911__$1;
(statearr_31955_32007[(2)] = inst_31813);

(statearr_31955_32007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (5))){
var state_31911__$1 = state_31911;
var statearr_31956_32008 = state_31911__$1;
(statearr_31956_32008[(2)] = true);

(statearr_31956_32008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (14))){
var state_31911__$1 = state_31911;
var statearr_31957_32009 = state_31911__$1;
(statearr_31957_32009[(2)] = false);

(statearr_31957_32009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (26))){
var inst_31871 = (state_31911[(11)]);
var inst_31878 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31871);
var state_31911__$1 = state_31911;
var statearr_31958_32010 = state_31911__$1;
(statearr_31958_32010[(2)] = inst_31878);

(statearr_31958_32010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (16))){
var state_31911__$1 = state_31911;
var statearr_31959_32011 = state_31911__$1;
(statearr_31959_32011[(2)] = true);

(statearr_31959_32011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (38))){
var inst_31901 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31960_32012 = state_31911__$1;
(statearr_31960_32012[(2)] = inst_31901);

(statearr_31960_32012[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (30))){
var inst_31862 = (state_31911[(9)]);
var inst_31863 = (state_31911[(13)]);
var inst_31871 = (state_31911[(11)]);
var inst_31888 = cljs.core.empty_QMARK_.call(null,inst_31862);
var inst_31889 = inst_31863.call(null,inst_31871);
var inst_31890 = cljs.core.not.call(null,inst_31889);
var inst_31891 = (inst_31888) && (inst_31890);
var state_31911__$1 = state_31911;
var statearr_31961_32013 = state_31911__$1;
(statearr_31961_32013[(2)] = inst_31891);

(statearr_31961_32013[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (10))){
var inst_31813 = (state_31911[(8)]);
var inst_31834 = (state_31911[(2)]);
var inst_31835 = cljs.core.get.call(null,inst_31834,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31836 = cljs.core.get.call(null,inst_31834,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31837 = cljs.core.get.call(null,inst_31834,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31838 = inst_31813;
var state_31911__$1 = (function (){var statearr_31962 = state_31911;
(statearr_31962[(7)] = inst_31838);

(statearr_31962[(16)] = inst_31836);

(statearr_31962[(17)] = inst_31837);

(statearr_31962[(18)] = inst_31835);

return statearr_31962;
})();
var statearr_31963_32014 = state_31911__$1;
(statearr_31963_32014[(2)] = null);

(statearr_31963_32014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (18))){
var inst_31853 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31964_32015 = state_31911__$1;
(statearr_31964_32015[(2)] = inst_31853);

(statearr_31964_32015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (37))){
var state_31911__$1 = state_31911;
var statearr_31965_32016 = state_31911__$1;
(statearr_31965_32016[(2)] = null);

(statearr_31965_32016[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (8))){
var inst_31813 = (state_31911[(8)]);
var inst_31831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31813);
var state_31911__$1 = state_31911;
var statearr_31966_32017 = state_31911__$1;
(statearr_31966_32017[(2)] = inst_31831);

(statearr_31966_32017[(1)] = (10));


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
});})(c__30926__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30838__auto__,c__30926__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30839__auto__ = null;
var cljs$core$async$mix_$_state_machine__30839__auto____0 = (function (){
var statearr_31967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31967[(0)] = cljs$core$async$mix_$_state_machine__30839__auto__);

(statearr_31967[(1)] = (1));

return statearr_31967;
});
var cljs$core$async$mix_$_state_machine__30839__auto____1 = (function (state_31911){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_31911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e31968){if((e31968 instanceof Object)){
var ex__30842__auto__ = e31968;
var statearr_31969_32018 = state_31911;
(statearr_31969_32018[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32019 = state_31911;
state_31911 = G__32019;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30839__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30839__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30839__auto____0;
cljs$core$async$mix_$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30839__auto____1;
return cljs$core$async$mix_$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30928__auto__ = (function (){var statearr_31970 = f__30927__auto__.call(null);
(statearr_31970[(6)] = c__30926__auto___31971);

return statearr_31970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28673__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v,ch);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32021 = arguments.length;
switch (G__32021) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28672__auto__ = (((p == null))?null:p);
var m__28673__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28672__auto__)]);
if(!((m__28673__auto__ == null))){
return m__28673__auto__.call(null,p,v);
} else {
var m__28673__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28673__auto____$1 == null))){
return m__28673__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32025 = arguments.length;
switch (G__32025) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27989__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27989__auto__,mults){
return (function (p1__32023_SHARP_){
if(cljs.core.truth_(p1__32023_SHARP_.call(null,topic))){
return p1__32023_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32023_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27989__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32026 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32027){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32027 = meta32027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32028,meta32027__$1){
var self__ = this;
var _32028__$1 = this;
return (new cljs.core.async.t_cljs$core$async32026(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32027__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32028){
var self__ = this;
var _32028__$1 = this;
return self__.meta32027;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32027","meta32027",1888488424,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32026";

cljs.core.async.t_cljs$core$async32026.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32026");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32026 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32027){
return (new cljs.core.async.t_cljs$core$async32026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32027));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32026(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30926__auto___32146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32146,mults,ensure_mult,p){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32146,mults,ensure_mult,p){
return (function (state_32100){
var state_val_32101 = (state_32100[(1)]);
if((state_val_32101 === (7))){
var inst_32096 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
var statearr_32102_32147 = state_32100__$1;
(statearr_32102_32147[(2)] = inst_32096);

(statearr_32102_32147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (20))){
var state_32100__$1 = state_32100;
var statearr_32103_32148 = state_32100__$1;
(statearr_32103_32148[(2)] = null);

(statearr_32103_32148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (1))){
var state_32100__$1 = state_32100;
var statearr_32104_32149 = state_32100__$1;
(statearr_32104_32149[(2)] = null);

(statearr_32104_32149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (24))){
var inst_32079 = (state_32100[(7)]);
var inst_32088 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32079);
var state_32100__$1 = state_32100;
var statearr_32105_32150 = state_32100__$1;
(statearr_32105_32150[(2)] = inst_32088);

(statearr_32105_32150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (4))){
var inst_32031 = (state_32100[(8)]);
var inst_32031__$1 = (state_32100[(2)]);
var inst_32032 = (inst_32031__$1 == null);
var state_32100__$1 = (function (){var statearr_32106 = state_32100;
(statearr_32106[(8)] = inst_32031__$1);

return statearr_32106;
})();
if(cljs.core.truth_(inst_32032)){
var statearr_32107_32151 = state_32100__$1;
(statearr_32107_32151[(1)] = (5));

} else {
var statearr_32108_32152 = state_32100__$1;
(statearr_32108_32152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (15))){
var inst_32073 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
var statearr_32109_32153 = state_32100__$1;
(statearr_32109_32153[(2)] = inst_32073);

(statearr_32109_32153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (21))){
var inst_32093 = (state_32100[(2)]);
var state_32100__$1 = (function (){var statearr_32110 = state_32100;
(statearr_32110[(9)] = inst_32093);

return statearr_32110;
})();
var statearr_32111_32154 = state_32100__$1;
(statearr_32111_32154[(2)] = null);

(statearr_32111_32154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (13))){
var inst_32055 = (state_32100[(10)]);
var inst_32057 = cljs.core.chunked_seq_QMARK_.call(null,inst_32055);
var state_32100__$1 = state_32100;
if(inst_32057){
var statearr_32112_32155 = state_32100__$1;
(statearr_32112_32155[(1)] = (16));

} else {
var statearr_32113_32156 = state_32100__$1;
(statearr_32113_32156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (22))){
var inst_32085 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
if(cljs.core.truth_(inst_32085)){
var statearr_32114_32157 = state_32100__$1;
(statearr_32114_32157[(1)] = (23));

} else {
var statearr_32115_32158 = state_32100__$1;
(statearr_32115_32158[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (6))){
var inst_32081 = (state_32100[(11)]);
var inst_32079 = (state_32100[(7)]);
var inst_32031 = (state_32100[(8)]);
var inst_32079__$1 = topic_fn.call(null,inst_32031);
var inst_32080 = cljs.core.deref.call(null,mults);
var inst_32081__$1 = cljs.core.get.call(null,inst_32080,inst_32079__$1);
var state_32100__$1 = (function (){var statearr_32116 = state_32100;
(statearr_32116[(11)] = inst_32081__$1);

(statearr_32116[(7)] = inst_32079__$1);

return statearr_32116;
})();
if(cljs.core.truth_(inst_32081__$1)){
var statearr_32117_32159 = state_32100__$1;
(statearr_32117_32159[(1)] = (19));

} else {
var statearr_32118_32160 = state_32100__$1;
(statearr_32118_32160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (25))){
var inst_32090 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
var statearr_32119_32161 = state_32100__$1;
(statearr_32119_32161[(2)] = inst_32090);

(statearr_32119_32161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (17))){
var inst_32055 = (state_32100[(10)]);
var inst_32064 = cljs.core.first.call(null,inst_32055);
var inst_32065 = cljs.core.async.muxch_STAR_.call(null,inst_32064);
var inst_32066 = cljs.core.async.close_BANG_.call(null,inst_32065);
var inst_32067 = cljs.core.next.call(null,inst_32055);
var inst_32041 = inst_32067;
var inst_32042 = null;
var inst_32043 = (0);
var inst_32044 = (0);
var state_32100__$1 = (function (){var statearr_32120 = state_32100;
(statearr_32120[(12)] = inst_32043);

(statearr_32120[(13)] = inst_32044);

(statearr_32120[(14)] = inst_32042);

(statearr_32120[(15)] = inst_32041);

(statearr_32120[(16)] = inst_32066);

return statearr_32120;
})();
var statearr_32121_32162 = state_32100__$1;
(statearr_32121_32162[(2)] = null);

(statearr_32121_32162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (3))){
var inst_32098 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32100__$1,inst_32098);
} else {
if((state_val_32101 === (12))){
var inst_32075 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
var statearr_32122_32163 = state_32100__$1;
(statearr_32122_32163[(2)] = inst_32075);

(statearr_32122_32163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (2))){
var state_32100__$1 = state_32100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32100__$1,(4),ch);
} else {
if((state_val_32101 === (23))){
var state_32100__$1 = state_32100;
var statearr_32123_32164 = state_32100__$1;
(statearr_32123_32164[(2)] = null);

(statearr_32123_32164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (19))){
var inst_32081 = (state_32100[(11)]);
var inst_32031 = (state_32100[(8)]);
var inst_32083 = cljs.core.async.muxch_STAR_.call(null,inst_32081);
var state_32100__$1 = state_32100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32100__$1,(22),inst_32083,inst_32031);
} else {
if((state_val_32101 === (11))){
var inst_32055 = (state_32100[(10)]);
var inst_32041 = (state_32100[(15)]);
var inst_32055__$1 = cljs.core.seq.call(null,inst_32041);
var state_32100__$1 = (function (){var statearr_32124 = state_32100;
(statearr_32124[(10)] = inst_32055__$1);

return statearr_32124;
})();
if(inst_32055__$1){
var statearr_32125_32165 = state_32100__$1;
(statearr_32125_32165[(1)] = (13));

} else {
var statearr_32126_32166 = state_32100__$1;
(statearr_32126_32166[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (9))){
var inst_32077 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
var statearr_32127_32167 = state_32100__$1;
(statearr_32127_32167[(2)] = inst_32077);

(statearr_32127_32167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (5))){
var inst_32038 = cljs.core.deref.call(null,mults);
var inst_32039 = cljs.core.vals.call(null,inst_32038);
var inst_32040 = cljs.core.seq.call(null,inst_32039);
var inst_32041 = inst_32040;
var inst_32042 = null;
var inst_32043 = (0);
var inst_32044 = (0);
var state_32100__$1 = (function (){var statearr_32128 = state_32100;
(statearr_32128[(12)] = inst_32043);

(statearr_32128[(13)] = inst_32044);

(statearr_32128[(14)] = inst_32042);

(statearr_32128[(15)] = inst_32041);

return statearr_32128;
})();
var statearr_32129_32168 = state_32100__$1;
(statearr_32129_32168[(2)] = null);

(statearr_32129_32168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (14))){
var state_32100__$1 = state_32100;
var statearr_32133_32169 = state_32100__$1;
(statearr_32133_32169[(2)] = null);

(statearr_32133_32169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (16))){
var inst_32055 = (state_32100[(10)]);
var inst_32059 = cljs.core.chunk_first.call(null,inst_32055);
var inst_32060 = cljs.core.chunk_rest.call(null,inst_32055);
var inst_32061 = cljs.core.count.call(null,inst_32059);
var inst_32041 = inst_32060;
var inst_32042 = inst_32059;
var inst_32043 = inst_32061;
var inst_32044 = (0);
var state_32100__$1 = (function (){var statearr_32134 = state_32100;
(statearr_32134[(12)] = inst_32043);

(statearr_32134[(13)] = inst_32044);

(statearr_32134[(14)] = inst_32042);

(statearr_32134[(15)] = inst_32041);

return statearr_32134;
})();
var statearr_32135_32170 = state_32100__$1;
(statearr_32135_32170[(2)] = null);

(statearr_32135_32170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (10))){
var inst_32043 = (state_32100[(12)]);
var inst_32044 = (state_32100[(13)]);
var inst_32042 = (state_32100[(14)]);
var inst_32041 = (state_32100[(15)]);
var inst_32049 = cljs.core._nth.call(null,inst_32042,inst_32044);
var inst_32050 = cljs.core.async.muxch_STAR_.call(null,inst_32049);
var inst_32051 = cljs.core.async.close_BANG_.call(null,inst_32050);
var inst_32052 = (inst_32044 + (1));
var tmp32130 = inst_32043;
var tmp32131 = inst_32042;
var tmp32132 = inst_32041;
var inst_32041__$1 = tmp32132;
var inst_32042__$1 = tmp32131;
var inst_32043__$1 = tmp32130;
var inst_32044__$1 = inst_32052;
var state_32100__$1 = (function (){var statearr_32136 = state_32100;
(statearr_32136[(12)] = inst_32043__$1);

(statearr_32136[(13)] = inst_32044__$1);

(statearr_32136[(14)] = inst_32042__$1);

(statearr_32136[(15)] = inst_32041__$1);

(statearr_32136[(17)] = inst_32051);

return statearr_32136;
})();
var statearr_32137_32171 = state_32100__$1;
(statearr_32137_32171[(2)] = null);

(statearr_32137_32171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (18))){
var inst_32070 = (state_32100[(2)]);
var state_32100__$1 = state_32100;
var statearr_32138_32172 = state_32100__$1;
(statearr_32138_32172[(2)] = inst_32070);

(statearr_32138_32172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32101 === (8))){
var inst_32043 = (state_32100[(12)]);
var inst_32044 = (state_32100[(13)]);
var inst_32046 = (inst_32044 < inst_32043);
var inst_32047 = inst_32046;
var state_32100__$1 = state_32100;
if(cljs.core.truth_(inst_32047)){
var statearr_32139_32173 = state_32100__$1;
(statearr_32139_32173[(1)] = (10));

} else {
var statearr_32140_32174 = state_32100__$1;
(statearr_32140_32174[(1)] = (11));

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
});})(c__30926__auto___32146,mults,ensure_mult,p))
;
return ((function (switch__30838__auto__,c__30926__auto___32146,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32141[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32141[(1)] = (1));

return statearr_32141;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32100){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32142){if((e32142 instanceof Object)){
var ex__30842__auto__ = e32142;
var statearr_32143_32175 = state_32100;
(statearr_32143_32175[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32176 = state_32100;
state_32100 = G__32176;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32100);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32146,mults,ensure_mult,p))
})();
var state__30928__auto__ = (function (){var statearr_32144 = f__30927__auto__.call(null);
(statearr_32144[(6)] = c__30926__auto___32146);

return statearr_32144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32146,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32178 = arguments.length;
switch (G__32178) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32181 = arguments.length;
switch (G__32181) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32184 = arguments.length;
switch (G__32184) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30926__auto___32251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32251,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32251,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32223){
var state_val_32224 = (state_32223[(1)]);
if((state_val_32224 === (7))){
var state_32223__$1 = state_32223;
var statearr_32225_32252 = state_32223__$1;
(statearr_32225_32252[(2)] = null);

(statearr_32225_32252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (1))){
var state_32223__$1 = state_32223;
var statearr_32226_32253 = state_32223__$1;
(statearr_32226_32253[(2)] = null);

(statearr_32226_32253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (4))){
var inst_32187 = (state_32223[(7)]);
var inst_32189 = (inst_32187 < cnt);
var state_32223__$1 = state_32223;
if(cljs.core.truth_(inst_32189)){
var statearr_32227_32254 = state_32223__$1;
(statearr_32227_32254[(1)] = (6));

} else {
var statearr_32228_32255 = state_32223__$1;
(statearr_32228_32255[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (15))){
var inst_32219 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32229_32256 = state_32223__$1;
(statearr_32229_32256[(2)] = inst_32219);

(statearr_32229_32256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (13))){
var inst_32212 = cljs.core.async.close_BANG_.call(null,out);
var state_32223__$1 = state_32223;
var statearr_32230_32257 = state_32223__$1;
(statearr_32230_32257[(2)] = inst_32212);

(statearr_32230_32257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (6))){
var state_32223__$1 = state_32223;
var statearr_32231_32258 = state_32223__$1;
(statearr_32231_32258[(2)] = null);

(statearr_32231_32258[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (3))){
var inst_32221 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32223__$1,inst_32221);
} else {
if((state_val_32224 === (12))){
var inst_32209 = (state_32223[(8)]);
var inst_32209__$1 = (state_32223[(2)]);
var inst_32210 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32209__$1);
var state_32223__$1 = (function (){var statearr_32232 = state_32223;
(statearr_32232[(8)] = inst_32209__$1);

return statearr_32232;
})();
if(cljs.core.truth_(inst_32210)){
var statearr_32233_32259 = state_32223__$1;
(statearr_32233_32259[(1)] = (13));

} else {
var statearr_32234_32260 = state_32223__$1;
(statearr_32234_32260[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (2))){
var inst_32186 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32187 = (0);
var state_32223__$1 = (function (){var statearr_32235 = state_32223;
(statearr_32235[(7)] = inst_32187);

(statearr_32235[(9)] = inst_32186);

return statearr_32235;
})();
var statearr_32236_32261 = state_32223__$1;
(statearr_32236_32261[(2)] = null);

(statearr_32236_32261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (11))){
var inst_32187 = (state_32223[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32223,(10),Object,null,(9));
var inst_32196 = chs__$1.call(null,inst_32187);
var inst_32197 = done.call(null,inst_32187);
var inst_32198 = cljs.core.async.take_BANG_.call(null,inst_32196,inst_32197);
var state_32223__$1 = state_32223;
var statearr_32237_32262 = state_32223__$1;
(statearr_32237_32262[(2)] = inst_32198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (9))){
var inst_32187 = (state_32223[(7)]);
var inst_32200 = (state_32223[(2)]);
var inst_32201 = (inst_32187 + (1));
var inst_32187__$1 = inst_32201;
var state_32223__$1 = (function (){var statearr_32238 = state_32223;
(statearr_32238[(7)] = inst_32187__$1);

(statearr_32238[(10)] = inst_32200);

return statearr_32238;
})();
var statearr_32239_32263 = state_32223__$1;
(statearr_32239_32263[(2)] = null);

(statearr_32239_32263[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (5))){
var inst_32207 = (state_32223[(2)]);
var state_32223__$1 = (function (){var statearr_32240 = state_32223;
(statearr_32240[(11)] = inst_32207);

return statearr_32240;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32223__$1,(12),dchan);
} else {
if((state_val_32224 === (14))){
var inst_32209 = (state_32223[(8)]);
var inst_32214 = cljs.core.apply.call(null,f,inst_32209);
var state_32223__$1 = state_32223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32223__$1,(16),out,inst_32214);
} else {
if((state_val_32224 === (16))){
var inst_32216 = (state_32223[(2)]);
var state_32223__$1 = (function (){var statearr_32241 = state_32223;
(statearr_32241[(12)] = inst_32216);

return statearr_32241;
})();
var statearr_32242_32264 = state_32223__$1;
(statearr_32242_32264[(2)] = null);

(statearr_32242_32264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (10))){
var inst_32191 = (state_32223[(2)]);
var inst_32192 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32223__$1 = (function (){var statearr_32243 = state_32223;
(statearr_32243[(13)] = inst_32191);

return statearr_32243;
})();
var statearr_32244_32265 = state_32223__$1;
(statearr_32244_32265[(2)] = inst_32192);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32224 === (8))){
var inst_32205 = (state_32223[(2)]);
var state_32223__$1 = state_32223;
var statearr_32245_32266 = state_32223__$1;
(statearr_32245_32266[(2)] = inst_32205);

(statearr_32245_32266[(1)] = (5));


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
});})(c__30926__auto___32251,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30838__auto__,c__30926__auto___32251,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32246[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32246[(1)] = (1));

return statearr_32246;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32223){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32247){if((e32247 instanceof Object)){
var ex__30842__auto__ = e32247;
var statearr_32248_32267 = state_32223;
(statearr_32248_32267[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32268 = state_32223;
state_32223 = G__32268;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32251,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30928__auto__ = (function (){var statearr_32249 = f__30927__auto__.call(null);
(statearr_32249[(6)] = c__30926__auto___32251);

return statearr_32249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32251,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32271 = arguments.length;
switch (G__32271) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30926__auto___32325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32325,out){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32325,out){
return (function (state_32303){
var state_val_32304 = (state_32303[(1)]);
if((state_val_32304 === (7))){
var inst_32283 = (state_32303[(7)]);
var inst_32282 = (state_32303[(8)]);
var inst_32282__$1 = (state_32303[(2)]);
var inst_32283__$1 = cljs.core.nth.call(null,inst_32282__$1,(0),null);
var inst_32284 = cljs.core.nth.call(null,inst_32282__$1,(1),null);
var inst_32285 = (inst_32283__$1 == null);
var state_32303__$1 = (function (){var statearr_32305 = state_32303;
(statearr_32305[(7)] = inst_32283__$1);

(statearr_32305[(9)] = inst_32284);

(statearr_32305[(8)] = inst_32282__$1);

return statearr_32305;
})();
if(cljs.core.truth_(inst_32285)){
var statearr_32306_32326 = state_32303__$1;
(statearr_32306_32326[(1)] = (8));

} else {
var statearr_32307_32327 = state_32303__$1;
(statearr_32307_32327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (1))){
var inst_32272 = cljs.core.vec.call(null,chs);
var inst_32273 = inst_32272;
var state_32303__$1 = (function (){var statearr_32308 = state_32303;
(statearr_32308[(10)] = inst_32273);

return statearr_32308;
})();
var statearr_32309_32328 = state_32303__$1;
(statearr_32309_32328[(2)] = null);

(statearr_32309_32328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (4))){
var inst_32273 = (state_32303[(10)]);
var state_32303__$1 = state_32303;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32303__$1,(7),inst_32273);
} else {
if((state_val_32304 === (6))){
var inst_32299 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32310_32329 = state_32303__$1;
(statearr_32310_32329[(2)] = inst_32299);

(statearr_32310_32329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (3))){
var inst_32301 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32303__$1,inst_32301);
} else {
if((state_val_32304 === (2))){
var inst_32273 = (state_32303[(10)]);
var inst_32275 = cljs.core.count.call(null,inst_32273);
var inst_32276 = (inst_32275 > (0));
var state_32303__$1 = state_32303;
if(cljs.core.truth_(inst_32276)){
var statearr_32312_32330 = state_32303__$1;
(statearr_32312_32330[(1)] = (4));

} else {
var statearr_32313_32331 = state_32303__$1;
(statearr_32313_32331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (11))){
var inst_32273 = (state_32303[(10)]);
var inst_32292 = (state_32303[(2)]);
var tmp32311 = inst_32273;
var inst_32273__$1 = tmp32311;
var state_32303__$1 = (function (){var statearr_32314 = state_32303;
(statearr_32314[(10)] = inst_32273__$1);

(statearr_32314[(11)] = inst_32292);

return statearr_32314;
})();
var statearr_32315_32332 = state_32303__$1;
(statearr_32315_32332[(2)] = null);

(statearr_32315_32332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (9))){
var inst_32283 = (state_32303[(7)]);
var state_32303__$1 = state_32303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32303__$1,(11),out,inst_32283);
} else {
if((state_val_32304 === (5))){
var inst_32297 = cljs.core.async.close_BANG_.call(null,out);
var state_32303__$1 = state_32303;
var statearr_32316_32333 = state_32303__$1;
(statearr_32316_32333[(2)] = inst_32297);

(statearr_32316_32333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (10))){
var inst_32295 = (state_32303[(2)]);
var state_32303__$1 = state_32303;
var statearr_32317_32334 = state_32303__$1;
(statearr_32317_32334[(2)] = inst_32295);

(statearr_32317_32334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32304 === (8))){
var inst_32283 = (state_32303[(7)]);
var inst_32284 = (state_32303[(9)]);
var inst_32273 = (state_32303[(10)]);
var inst_32282 = (state_32303[(8)]);
var inst_32287 = (function (){var cs = inst_32273;
var vec__32278 = inst_32282;
var v = inst_32283;
var c = inst_32284;
return ((function (cs,vec__32278,v,c,inst_32283,inst_32284,inst_32273,inst_32282,state_val_32304,c__30926__auto___32325,out){
return (function (p1__32269_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32269_SHARP_);
});
;})(cs,vec__32278,v,c,inst_32283,inst_32284,inst_32273,inst_32282,state_val_32304,c__30926__auto___32325,out))
})();
var inst_32288 = cljs.core.filterv.call(null,inst_32287,inst_32273);
var inst_32273__$1 = inst_32288;
var state_32303__$1 = (function (){var statearr_32318 = state_32303;
(statearr_32318[(10)] = inst_32273__$1);

return statearr_32318;
})();
var statearr_32319_32335 = state_32303__$1;
(statearr_32319_32335[(2)] = null);

(statearr_32319_32335[(1)] = (2));


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
});})(c__30926__auto___32325,out))
;
return ((function (switch__30838__auto__,c__30926__auto___32325,out){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32320[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32320[(1)] = (1));

return statearr_32320;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32303){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32321){if((e32321 instanceof Object)){
var ex__30842__auto__ = e32321;
var statearr_32322_32336 = state_32303;
(statearr_32322_32336[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32337 = state_32303;
state_32303 = G__32337;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32303){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32325,out))
})();
var state__30928__auto__ = (function (){var statearr_32323 = f__30927__auto__.call(null);
(statearr_32323[(6)] = c__30926__auto___32325);

return statearr_32323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32325,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32339 = arguments.length;
switch (G__32339) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30926__auto___32384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32384,out){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32384,out){
return (function (state_32363){
var state_val_32364 = (state_32363[(1)]);
if((state_val_32364 === (7))){
var inst_32345 = (state_32363[(7)]);
var inst_32345__$1 = (state_32363[(2)]);
var inst_32346 = (inst_32345__$1 == null);
var inst_32347 = cljs.core.not.call(null,inst_32346);
var state_32363__$1 = (function (){var statearr_32365 = state_32363;
(statearr_32365[(7)] = inst_32345__$1);

return statearr_32365;
})();
if(inst_32347){
var statearr_32366_32385 = state_32363__$1;
(statearr_32366_32385[(1)] = (8));

} else {
var statearr_32367_32386 = state_32363__$1;
(statearr_32367_32386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (1))){
var inst_32340 = (0);
var state_32363__$1 = (function (){var statearr_32368 = state_32363;
(statearr_32368[(8)] = inst_32340);

return statearr_32368;
})();
var statearr_32369_32387 = state_32363__$1;
(statearr_32369_32387[(2)] = null);

(statearr_32369_32387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (4))){
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32363__$1,(7),ch);
} else {
if((state_val_32364 === (6))){
var inst_32358 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32370_32388 = state_32363__$1;
(statearr_32370_32388[(2)] = inst_32358);

(statearr_32370_32388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (3))){
var inst_32360 = (state_32363[(2)]);
var inst_32361 = cljs.core.async.close_BANG_.call(null,out);
var state_32363__$1 = (function (){var statearr_32371 = state_32363;
(statearr_32371[(9)] = inst_32360);

return statearr_32371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32363__$1,inst_32361);
} else {
if((state_val_32364 === (2))){
var inst_32340 = (state_32363[(8)]);
var inst_32342 = (inst_32340 < n);
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32342)){
var statearr_32372_32389 = state_32363__$1;
(statearr_32372_32389[(1)] = (4));

} else {
var statearr_32373_32390 = state_32363__$1;
(statearr_32373_32390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (11))){
var inst_32340 = (state_32363[(8)]);
var inst_32350 = (state_32363[(2)]);
var inst_32351 = (inst_32340 + (1));
var inst_32340__$1 = inst_32351;
var state_32363__$1 = (function (){var statearr_32374 = state_32363;
(statearr_32374[(10)] = inst_32350);

(statearr_32374[(8)] = inst_32340__$1);

return statearr_32374;
})();
var statearr_32375_32391 = state_32363__$1;
(statearr_32375_32391[(2)] = null);

(statearr_32375_32391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (9))){
var state_32363__$1 = state_32363;
var statearr_32376_32392 = state_32363__$1;
(statearr_32376_32392[(2)] = null);

(statearr_32376_32392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (5))){
var state_32363__$1 = state_32363;
var statearr_32377_32393 = state_32363__$1;
(statearr_32377_32393[(2)] = null);

(statearr_32377_32393[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (10))){
var inst_32355 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32378_32394 = state_32363__$1;
(statearr_32378_32394[(2)] = inst_32355);

(statearr_32378_32394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (8))){
var inst_32345 = (state_32363[(7)]);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32363__$1,(11),out,inst_32345);
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
});})(c__30926__auto___32384,out))
;
return ((function (switch__30838__auto__,c__30926__auto___32384,out){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32379 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32379[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32379[(1)] = (1));

return statearr_32379;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32363){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32380){if((e32380 instanceof Object)){
var ex__30842__auto__ = e32380;
var statearr_32381_32395 = state_32363;
(statearr_32381_32395[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32396 = state_32363;
state_32363 = G__32396;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32384,out))
})();
var state__30928__auto__ = (function (){var statearr_32382 = f__30927__auto__.call(null);
(statearr_32382[(6)] = c__30926__auto___32384);

return statearr_32382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32384,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32398 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32398 = (function (f,ch,meta32399){
this.f = f;
this.ch = ch;
this.meta32399 = meta32399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32400,meta32399__$1){
var self__ = this;
var _32400__$1 = this;
return (new cljs.core.async.t_cljs$core$async32398(self__.f,self__.ch,meta32399__$1));
});

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32400){
var self__ = this;
var _32400__$1 = this;
return self__.meta32399;
});

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32401 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32401 = (function (f,ch,meta32399,_,fn1,meta32402){
this.f = f;
this.ch = ch;
this.meta32399 = meta32399;
this._ = _;
this.fn1 = fn1;
this.meta32402 = meta32402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32403,meta32402__$1){
var self__ = this;
var _32403__$1 = this;
return (new cljs.core.async.t_cljs$core$async32401(self__.f,self__.ch,self__.meta32399,self__._,self__.fn1,meta32402__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32403){
var self__ = this;
var _32403__$1 = this;
return self__.meta32402;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32397_SHARP_){
return f1.call(null,(((p1__32397_SHARP_ == null))?null:self__.f.call(null,p1__32397_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32401.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32399","meta32399",-1676543641,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32398","cljs.core.async/t_cljs$core$async32398",991953840,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32402","meta32402",1147515693,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32401.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32401";

cljs.core.async.t_cljs$core$async32401.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32401");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32401 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32401(f__$1,ch__$1,meta32399__$1,___$2,fn1__$1,meta32402){
return (new cljs.core.async.t_cljs$core$async32401(f__$1,ch__$1,meta32399__$1,___$2,fn1__$1,meta32402));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32401(self__.f,self__.ch,self__.meta32399,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27977__auto__ = ret;
if(cljs.core.truth_(and__27977__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27977__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32399","meta32399",-1676543641,null)], null);
});

cljs.core.async.t_cljs$core$async32398.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32398";

cljs.core.async.t_cljs$core$async32398.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32398");
});

cljs.core.async.__GT_t_cljs$core$async32398 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32398(f__$1,ch__$1,meta32399){
return (new cljs.core.async.t_cljs$core$async32398(f__$1,ch__$1,meta32399));
});

}

return (new cljs.core.async.t_cljs$core$async32398(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32404 = (function (f,ch,meta32405){
this.f = f;
this.ch = ch;
this.meta32405 = meta32405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32406,meta32405__$1){
var self__ = this;
var _32406__$1 = this;
return (new cljs.core.async.t_cljs$core$async32404(self__.f,self__.ch,meta32405__$1));
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32406){
var self__ = this;
var _32406__$1 = this;
return self__.meta32405;
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32405","meta32405",120143907,null)], null);
});

cljs.core.async.t_cljs$core$async32404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32404";

cljs.core.async.t_cljs$core$async32404.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32404");
});

cljs.core.async.__GT_t_cljs$core$async32404 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32404(f__$1,ch__$1,meta32405){
return (new cljs.core.async.t_cljs$core$async32404(f__$1,ch__$1,meta32405));
});

}

return (new cljs.core.async.t_cljs$core$async32404(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32407 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32407 = (function (p,ch,meta32408){
this.p = p;
this.ch = ch;
this.meta32408 = meta32408;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32409,meta32408__$1){
var self__ = this;
var _32409__$1 = this;
return (new cljs.core.async.t_cljs$core$async32407(self__.p,self__.ch,meta32408__$1));
});

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32409){
var self__ = this;
var _32409__$1 = this;
return self__.meta32408;
});

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32407.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32407.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32408","meta32408",-1854887006,null)], null);
});

cljs.core.async.t_cljs$core$async32407.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32407.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32407";

cljs.core.async.t_cljs$core$async32407.cljs$lang$ctorPrWriter = (function (this__28614__auto__,writer__28615__auto__,opt__28616__auto__){
return cljs.core._write.call(null,writer__28615__auto__,"cljs.core.async/t_cljs$core$async32407");
});

cljs.core.async.__GT_t_cljs$core$async32407 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32407(p__$1,ch__$1,meta32408){
return (new cljs.core.async.t_cljs$core$async32407(p__$1,ch__$1,meta32408));
});

}

return (new cljs.core.async.t_cljs$core$async32407(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32411 = arguments.length;
switch (G__32411) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30926__auto___32451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32451,out){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32451,out){
return (function (state_32432){
var state_val_32433 = (state_32432[(1)]);
if((state_val_32433 === (7))){
var inst_32428 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32434_32452 = state_32432__$1;
(statearr_32434_32452[(2)] = inst_32428);

(statearr_32434_32452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (1))){
var state_32432__$1 = state_32432;
var statearr_32435_32453 = state_32432__$1;
(statearr_32435_32453[(2)] = null);

(statearr_32435_32453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (4))){
var inst_32414 = (state_32432[(7)]);
var inst_32414__$1 = (state_32432[(2)]);
var inst_32415 = (inst_32414__$1 == null);
var state_32432__$1 = (function (){var statearr_32436 = state_32432;
(statearr_32436[(7)] = inst_32414__$1);

return statearr_32436;
})();
if(cljs.core.truth_(inst_32415)){
var statearr_32437_32454 = state_32432__$1;
(statearr_32437_32454[(1)] = (5));

} else {
var statearr_32438_32455 = state_32432__$1;
(statearr_32438_32455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (6))){
var inst_32414 = (state_32432[(7)]);
var inst_32419 = p.call(null,inst_32414);
var state_32432__$1 = state_32432;
if(cljs.core.truth_(inst_32419)){
var statearr_32439_32456 = state_32432__$1;
(statearr_32439_32456[(1)] = (8));

} else {
var statearr_32440_32457 = state_32432__$1;
(statearr_32440_32457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (3))){
var inst_32430 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32432__$1,inst_32430);
} else {
if((state_val_32433 === (2))){
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32432__$1,(4),ch);
} else {
if((state_val_32433 === (11))){
var inst_32422 = (state_32432[(2)]);
var state_32432__$1 = state_32432;
var statearr_32441_32458 = state_32432__$1;
(statearr_32441_32458[(2)] = inst_32422);

(statearr_32441_32458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (9))){
var state_32432__$1 = state_32432;
var statearr_32442_32459 = state_32432__$1;
(statearr_32442_32459[(2)] = null);

(statearr_32442_32459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (5))){
var inst_32417 = cljs.core.async.close_BANG_.call(null,out);
var state_32432__$1 = state_32432;
var statearr_32443_32460 = state_32432__$1;
(statearr_32443_32460[(2)] = inst_32417);

(statearr_32443_32460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (10))){
var inst_32425 = (state_32432[(2)]);
var state_32432__$1 = (function (){var statearr_32444 = state_32432;
(statearr_32444[(8)] = inst_32425);

return statearr_32444;
})();
var statearr_32445_32461 = state_32432__$1;
(statearr_32445_32461[(2)] = null);

(statearr_32445_32461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32433 === (8))){
var inst_32414 = (state_32432[(7)]);
var state_32432__$1 = state_32432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32432__$1,(11),out,inst_32414);
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
});})(c__30926__auto___32451,out))
;
return ((function (switch__30838__auto__,c__30926__auto___32451,out){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32446 = [null,null,null,null,null,null,null,null,null];
(statearr_32446[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32446[(1)] = (1));

return statearr_32446;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32432){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32447){if((e32447 instanceof Object)){
var ex__30842__auto__ = e32447;
var statearr_32448_32462 = state_32432;
(statearr_32448_32462[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32463 = state_32432;
state_32432 = G__32463;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32451,out))
})();
var state__30928__auto__ = (function (){var statearr_32449 = f__30927__auto__.call(null);
(statearr_32449[(6)] = c__30926__auto___32451);

return statearr_32449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32451,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32465 = arguments.length;
switch (G__32465) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30926__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto__){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto__){
return (function (state_32528){
var state_val_32529 = (state_32528[(1)]);
if((state_val_32529 === (7))){
var inst_32524 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32530_32568 = state_32528__$1;
(statearr_32530_32568[(2)] = inst_32524);

(statearr_32530_32568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (20))){
var inst_32494 = (state_32528[(7)]);
var inst_32505 = (state_32528[(2)]);
var inst_32506 = cljs.core.next.call(null,inst_32494);
var inst_32480 = inst_32506;
var inst_32481 = null;
var inst_32482 = (0);
var inst_32483 = (0);
var state_32528__$1 = (function (){var statearr_32531 = state_32528;
(statearr_32531[(8)] = inst_32483);

(statearr_32531[(9)] = inst_32482);

(statearr_32531[(10)] = inst_32480);

(statearr_32531[(11)] = inst_32481);

(statearr_32531[(12)] = inst_32505);

return statearr_32531;
})();
var statearr_32532_32569 = state_32528__$1;
(statearr_32532_32569[(2)] = null);

(statearr_32532_32569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (1))){
var state_32528__$1 = state_32528;
var statearr_32533_32570 = state_32528__$1;
(statearr_32533_32570[(2)] = null);

(statearr_32533_32570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (4))){
var inst_32469 = (state_32528[(13)]);
var inst_32469__$1 = (state_32528[(2)]);
var inst_32470 = (inst_32469__$1 == null);
var state_32528__$1 = (function (){var statearr_32534 = state_32528;
(statearr_32534[(13)] = inst_32469__$1);

return statearr_32534;
})();
if(cljs.core.truth_(inst_32470)){
var statearr_32535_32571 = state_32528__$1;
(statearr_32535_32571[(1)] = (5));

} else {
var statearr_32536_32572 = state_32528__$1;
(statearr_32536_32572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (15))){
var state_32528__$1 = state_32528;
var statearr_32540_32573 = state_32528__$1;
(statearr_32540_32573[(2)] = null);

(statearr_32540_32573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (21))){
var state_32528__$1 = state_32528;
var statearr_32541_32574 = state_32528__$1;
(statearr_32541_32574[(2)] = null);

(statearr_32541_32574[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (13))){
var inst_32483 = (state_32528[(8)]);
var inst_32482 = (state_32528[(9)]);
var inst_32480 = (state_32528[(10)]);
var inst_32481 = (state_32528[(11)]);
var inst_32490 = (state_32528[(2)]);
var inst_32491 = (inst_32483 + (1));
var tmp32537 = inst_32482;
var tmp32538 = inst_32480;
var tmp32539 = inst_32481;
var inst_32480__$1 = tmp32538;
var inst_32481__$1 = tmp32539;
var inst_32482__$1 = tmp32537;
var inst_32483__$1 = inst_32491;
var state_32528__$1 = (function (){var statearr_32542 = state_32528;
(statearr_32542[(8)] = inst_32483__$1);

(statearr_32542[(9)] = inst_32482__$1);

(statearr_32542[(10)] = inst_32480__$1);

(statearr_32542[(11)] = inst_32481__$1);

(statearr_32542[(14)] = inst_32490);

return statearr_32542;
})();
var statearr_32543_32575 = state_32528__$1;
(statearr_32543_32575[(2)] = null);

(statearr_32543_32575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (22))){
var state_32528__$1 = state_32528;
var statearr_32544_32576 = state_32528__$1;
(statearr_32544_32576[(2)] = null);

(statearr_32544_32576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (6))){
var inst_32469 = (state_32528[(13)]);
var inst_32478 = f.call(null,inst_32469);
var inst_32479 = cljs.core.seq.call(null,inst_32478);
var inst_32480 = inst_32479;
var inst_32481 = null;
var inst_32482 = (0);
var inst_32483 = (0);
var state_32528__$1 = (function (){var statearr_32545 = state_32528;
(statearr_32545[(8)] = inst_32483);

(statearr_32545[(9)] = inst_32482);

(statearr_32545[(10)] = inst_32480);

(statearr_32545[(11)] = inst_32481);

return statearr_32545;
})();
var statearr_32546_32577 = state_32528__$1;
(statearr_32546_32577[(2)] = null);

(statearr_32546_32577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (17))){
var inst_32494 = (state_32528[(7)]);
var inst_32498 = cljs.core.chunk_first.call(null,inst_32494);
var inst_32499 = cljs.core.chunk_rest.call(null,inst_32494);
var inst_32500 = cljs.core.count.call(null,inst_32498);
var inst_32480 = inst_32499;
var inst_32481 = inst_32498;
var inst_32482 = inst_32500;
var inst_32483 = (0);
var state_32528__$1 = (function (){var statearr_32547 = state_32528;
(statearr_32547[(8)] = inst_32483);

(statearr_32547[(9)] = inst_32482);

(statearr_32547[(10)] = inst_32480);

(statearr_32547[(11)] = inst_32481);

return statearr_32547;
})();
var statearr_32548_32578 = state_32528__$1;
(statearr_32548_32578[(2)] = null);

(statearr_32548_32578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (3))){
var inst_32526 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32528__$1,inst_32526);
} else {
if((state_val_32529 === (12))){
var inst_32514 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32549_32579 = state_32528__$1;
(statearr_32549_32579[(2)] = inst_32514);

(statearr_32549_32579[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (2))){
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32528__$1,(4),in$);
} else {
if((state_val_32529 === (23))){
var inst_32522 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32550_32580 = state_32528__$1;
(statearr_32550_32580[(2)] = inst_32522);

(statearr_32550_32580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (19))){
var inst_32509 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32551_32581 = state_32528__$1;
(statearr_32551_32581[(2)] = inst_32509);

(statearr_32551_32581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (11))){
var inst_32494 = (state_32528[(7)]);
var inst_32480 = (state_32528[(10)]);
var inst_32494__$1 = cljs.core.seq.call(null,inst_32480);
var state_32528__$1 = (function (){var statearr_32552 = state_32528;
(statearr_32552[(7)] = inst_32494__$1);

return statearr_32552;
})();
if(inst_32494__$1){
var statearr_32553_32582 = state_32528__$1;
(statearr_32553_32582[(1)] = (14));

} else {
var statearr_32554_32583 = state_32528__$1;
(statearr_32554_32583[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (9))){
var inst_32516 = (state_32528[(2)]);
var inst_32517 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32528__$1 = (function (){var statearr_32555 = state_32528;
(statearr_32555[(15)] = inst_32516);

return statearr_32555;
})();
if(cljs.core.truth_(inst_32517)){
var statearr_32556_32584 = state_32528__$1;
(statearr_32556_32584[(1)] = (21));

} else {
var statearr_32557_32585 = state_32528__$1;
(statearr_32557_32585[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (5))){
var inst_32472 = cljs.core.async.close_BANG_.call(null,out);
var state_32528__$1 = state_32528;
var statearr_32558_32586 = state_32528__$1;
(statearr_32558_32586[(2)] = inst_32472);

(statearr_32558_32586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (14))){
var inst_32494 = (state_32528[(7)]);
var inst_32496 = cljs.core.chunked_seq_QMARK_.call(null,inst_32494);
var state_32528__$1 = state_32528;
if(inst_32496){
var statearr_32559_32587 = state_32528__$1;
(statearr_32559_32587[(1)] = (17));

} else {
var statearr_32560_32588 = state_32528__$1;
(statearr_32560_32588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (16))){
var inst_32512 = (state_32528[(2)]);
var state_32528__$1 = state_32528;
var statearr_32561_32589 = state_32528__$1;
(statearr_32561_32589[(2)] = inst_32512);

(statearr_32561_32589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32529 === (10))){
var inst_32483 = (state_32528[(8)]);
var inst_32481 = (state_32528[(11)]);
var inst_32488 = cljs.core._nth.call(null,inst_32481,inst_32483);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32528__$1,(13),out,inst_32488);
} else {
if((state_val_32529 === (18))){
var inst_32494 = (state_32528[(7)]);
var inst_32503 = cljs.core.first.call(null,inst_32494);
var state_32528__$1 = state_32528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32528__$1,(20),out,inst_32503);
} else {
if((state_val_32529 === (8))){
var inst_32483 = (state_32528[(8)]);
var inst_32482 = (state_32528[(9)]);
var inst_32485 = (inst_32483 < inst_32482);
var inst_32486 = inst_32485;
var state_32528__$1 = state_32528;
if(cljs.core.truth_(inst_32486)){
var statearr_32562_32590 = state_32528__$1;
(statearr_32562_32590[(1)] = (10));

} else {
var statearr_32563_32591 = state_32528__$1;
(statearr_32563_32591[(1)] = (11));

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
});})(c__30926__auto__))
;
return ((function (switch__30838__auto__,c__30926__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30839__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30839__auto____0 = (function (){
var statearr_32564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32564[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30839__auto__);

(statearr_32564[(1)] = (1));

return statearr_32564;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30839__auto____1 = (function (state_32528){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32565){if((e32565 instanceof Object)){
var ex__30842__auto__ = e32565;
var statearr_32566_32592 = state_32528;
(statearr_32566_32592[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32593 = state_32528;
state_32528 = G__32593;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30839__auto__ = function(state_32528){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30839__auto____1.call(this,state_32528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30839__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30839__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto__))
})();
var state__30928__auto__ = (function (){var statearr_32567 = f__30927__auto__.call(null);
(statearr_32567[(6)] = c__30926__auto__);

return statearr_32567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto__))
);

return c__30926__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32595 = arguments.length;
switch (G__32595) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32598 = arguments.length;
switch (G__32598) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32601 = arguments.length;
switch (G__32601) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30926__auto___32648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32648,out){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32648,out){
return (function (state_32625){
var state_val_32626 = (state_32625[(1)]);
if((state_val_32626 === (7))){
var inst_32620 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32627_32649 = state_32625__$1;
(statearr_32627_32649[(2)] = inst_32620);

(statearr_32627_32649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (1))){
var inst_32602 = null;
var state_32625__$1 = (function (){var statearr_32628 = state_32625;
(statearr_32628[(7)] = inst_32602);

return statearr_32628;
})();
var statearr_32629_32650 = state_32625__$1;
(statearr_32629_32650[(2)] = null);

(statearr_32629_32650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (4))){
var inst_32605 = (state_32625[(8)]);
var inst_32605__$1 = (state_32625[(2)]);
var inst_32606 = (inst_32605__$1 == null);
var inst_32607 = cljs.core.not.call(null,inst_32606);
var state_32625__$1 = (function (){var statearr_32630 = state_32625;
(statearr_32630[(8)] = inst_32605__$1);

return statearr_32630;
})();
if(inst_32607){
var statearr_32631_32651 = state_32625__$1;
(statearr_32631_32651[(1)] = (5));

} else {
var statearr_32632_32652 = state_32625__$1;
(statearr_32632_32652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (6))){
var state_32625__$1 = state_32625;
var statearr_32633_32653 = state_32625__$1;
(statearr_32633_32653[(2)] = null);

(statearr_32633_32653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (3))){
var inst_32622 = (state_32625[(2)]);
var inst_32623 = cljs.core.async.close_BANG_.call(null,out);
var state_32625__$1 = (function (){var statearr_32634 = state_32625;
(statearr_32634[(9)] = inst_32622);

return statearr_32634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32625__$1,inst_32623);
} else {
if((state_val_32626 === (2))){
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32625__$1,(4),ch);
} else {
if((state_val_32626 === (11))){
var inst_32605 = (state_32625[(8)]);
var inst_32614 = (state_32625[(2)]);
var inst_32602 = inst_32605;
var state_32625__$1 = (function (){var statearr_32635 = state_32625;
(statearr_32635[(7)] = inst_32602);

(statearr_32635[(10)] = inst_32614);

return statearr_32635;
})();
var statearr_32636_32654 = state_32625__$1;
(statearr_32636_32654[(2)] = null);

(statearr_32636_32654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (9))){
var inst_32605 = (state_32625[(8)]);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32625__$1,(11),out,inst_32605);
} else {
if((state_val_32626 === (5))){
var inst_32602 = (state_32625[(7)]);
var inst_32605 = (state_32625[(8)]);
var inst_32609 = cljs.core._EQ_.call(null,inst_32605,inst_32602);
var state_32625__$1 = state_32625;
if(inst_32609){
var statearr_32638_32655 = state_32625__$1;
(statearr_32638_32655[(1)] = (8));

} else {
var statearr_32639_32656 = state_32625__$1;
(statearr_32639_32656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (10))){
var inst_32617 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32640_32657 = state_32625__$1;
(statearr_32640_32657[(2)] = inst_32617);

(statearr_32640_32657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (8))){
var inst_32602 = (state_32625[(7)]);
var tmp32637 = inst_32602;
var inst_32602__$1 = tmp32637;
var state_32625__$1 = (function (){var statearr_32641 = state_32625;
(statearr_32641[(7)] = inst_32602__$1);

return statearr_32641;
})();
var statearr_32642_32658 = state_32625__$1;
(statearr_32642_32658[(2)] = null);

(statearr_32642_32658[(1)] = (2));


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
});})(c__30926__auto___32648,out))
;
return ((function (switch__30838__auto__,c__30926__auto___32648,out){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32643 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32643[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32643[(1)] = (1));

return statearr_32643;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32625){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32644){if((e32644 instanceof Object)){
var ex__30842__auto__ = e32644;
var statearr_32645_32659 = state_32625;
(statearr_32645_32659[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32660 = state_32625;
state_32625 = G__32660;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32648,out))
})();
var state__30928__auto__ = (function (){var statearr_32646 = f__30927__auto__.call(null);
(statearr_32646[(6)] = c__30926__auto___32648);

return statearr_32646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32648,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32662 = arguments.length;
switch (G__32662) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30926__auto___32728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32728,out){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32728,out){
return (function (state_32700){
var state_val_32701 = (state_32700[(1)]);
if((state_val_32701 === (7))){
var inst_32696 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32702_32729 = state_32700__$1;
(statearr_32702_32729[(2)] = inst_32696);

(statearr_32702_32729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (1))){
var inst_32663 = (new Array(n));
var inst_32664 = inst_32663;
var inst_32665 = (0);
var state_32700__$1 = (function (){var statearr_32703 = state_32700;
(statearr_32703[(7)] = inst_32664);

(statearr_32703[(8)] = inst_32665);

return statearr_32703;
})();
var statearr_32704_32730 = state_32700__$1;
(statearr_32704_32730[(2)] = null);

(statearr_32704_32730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (4))){
var inst_32668 = (state_32700[(9)]);
var inst_32668__$1 = (state_32700[(2)]);
var inst_32669 = (inst_32668__$1 == null);
var inst_32670 = cljs.core.not.call(null,inst_32669);
var state_32700__$1 = (function (){var statearr_32705 = state_32700;
(statearr_32705[(9)] = inst_32668__$1);

return statearr_32705;
})();
if(inst_32670){
var statearr_32706_32731 = state_32700__$1;
(statearr_32706_32731[(1)] = (5));

} else {
var statearr_32707_32732 = state_32700__$1;
(statearr_32707_32732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (15))){
var inst_32690 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32708_32733 = state_32700__$1;
(statearr_32708_32733[(2)] = inst_32690);

(statearr_32708_32733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (13))){
var state_32700__$1 = state_32700;
var statearr_32709_32734 = state_32700__$1;
(statearr_32709_32734[(2)] = null);

(statearr_32709_32734[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (6))){
var inst_32665 = (state_32700[(8)]);
var inst_32686 = (inst_32665 > (0));
var state_32700__$1 = state_32700;
if(cljs.core.truth_(inst_32686)){
var statearr_32710_32735 = state_32700__$1;
(statearr_32710_32735[(1)] = (12));

} else {
var statearr_32711_32736 = state_32700__$1;
(statearr_32711_32736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (3))){
var inst_32698 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32700__$1,inst_32698);
} else {
if((state_val_32701 === (12))){
var inst_32664 = (state_32700[(7)]);
var inst_32688 = cljs.core.vec.call(null,inst_32664);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32700__$1,(15),out,inst_32688);
} else {
if((state_val_32701 === (2))){
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32700__$1,(4),ch);
} else {
if((state_val_32701 === (11))){
var inst_32680 = (state_32700[(2)]);
var inst_32681 = (new Array(n));
var inst_32664 = inst_32681;
var inst_32665 = (0);
var state_32700__$1 = (function (){var statearr_32712 = state_32700;
(statearr_32712[(7)] = inst_32664);

(statearr_32712[(10)] = inst_32680);

(statearr_32712[(8)] = inst_32665);

return statearr_32712;
})();
var statearr_32713_32737 = state_32700__$1;
(statearr_32713_32737[(2)] = null);

(statearr_32713_32737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (9))){
var inst_32664 = (state_32700[(7)]);
var inst_32678 = cljs.core.vec.call(null,inst_32664);
var state_32700__$1 = state_32700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32700__$1,(11),out,inst_32678);
} else {
if((state_val_32701 === (5))){
var inst_32668 = (state_32700[(9)]);
var inst_32664 = (state_32700[(7)]);
var inst_32673 = (state_32700[(11)]);
var inst_32665 = (state_32700[(8)]);
var inst_32672 = (inst_32664[inst_32665] = inst_32668);
var inst_32673__$1 = (inst_32665 + (1));
var inst_32674 = (inst_32673__$1 < n);
var state_32700__$1 = (function (){var statearr_32714 = state_32700;
(statearr_32714[(12)] = inst_32672);

(statearr_32714[(11)] = inst_32673__$1);

return statearr_32714;
})();
if(cljs.core.truth_(inst_32674)){
var statearr_32715_32738 = state_32700__$1;
(statearr_32715_32738[(1)] = (8));

} else {
var statearr_32716_32739 = state_32700__$1;
(statearr_32716_32739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (14))){
var inst_32693 = (state_32700[(2)]);
var inst_32694 = cljs.core.async.close_BANG_.call(null,out);
var state_32700__$1 = (function (){var statearr_32718 = state_32700;
(statearr_32718[(13)] = inst_32693);

return statearr_32718;
})();
var statearr_32719_32740 = state_32700__$1;
(statearr_32719_32740[(2)] = inst_32694);

(statearr_32719_32740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (10))){
var inst_32684 = (state_32700[(2)]);
var state_32700__$1 = state_32700;
var statearr_32720_32741 = state_32700__$1;
(statearr_32720_32741[(2)] = inst_32684);

(statearr_32720_32741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32701 === (8))){
var inst_32664 = (state_32700[(7)]);
var inst_32673 = (state_32700[(11)]);
var tmp32717 = inst_32664;
var inst_32664__$1 = tmp32717;
var inst_32665 = inst_32673;
var state_32700__$1 = (function (){var statearr_32721 = state_32700;
(statearr_32721[(7)] = inst_32664__$1);

(statearr_32721[(8)] = inst_32665);

return statearr_32721;
})();
var statearr_32722_32742 = state_32700__$1;
(statearr_32722_32742[(2)] = null);

(statearr_32722_32742[(1)] = (2));


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
});})(c__30926__auto___32728,out))
;
return ((function (switch__30838__auto__,c__30926__auto___32728,out){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32723[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32723[(1)] = (1));

return statearr_32723;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32700){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32724){if((e32724 instanceof Object)){
var ex__30842__auto__ = e32724;
var statearr_32725_32743 = state_32700;
(statearr_32725_32743[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32744 = state_32700;
state_32700 = G__32744;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32700);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32728,out))
})();
var state__30928__auto__ = (function (){var statearr_32726 = f__30927__auto__.call(null);
(statearr_32726[(6)] = c__30926__auto___32728);

return statearr_32726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32728,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32746 = arguments.length;
switch (G__32746) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30926__auto___32816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30926__auto___32816,out){
return (function (){
var f__30927__auto__ = (function (){var switch__30838__auto__ = ((function (c__30926__auto___32816,out){
return (function (state_32788){
var state_val_32789 = (state_32788[(1)]);
if((state_val_32789 === (7))){
var inst_32784 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
var statearr_32790_32817 = state_32788__$1;
(statearr_32790_32817[(2)] = inst_32784);

(statearr_32790_32817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (1))){
var inst_32747 = [];
var inst_32748 = inst_32747;
var inst_32749 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32788__$1 = (function (){var statearr_32791 = state_32788;
(statearr_32791[(7)] = inst_32748);

(statearr_32791[(8)] = inst_32749);

return statearr_32791;
})();
var statearr_32792_32818 = state_32788__$1;
(statearr_32792_32818[(2)] = null);

(statearr_32792_32818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (4))){
var inst_32752 = (state_32788[(9)]);
var inst_32752__$1 = (state_32788[(2)]);
var inst_32753 = (inst_32752__$1 == null);
var inst_32754 = cljs.core.not.call(null,inst_32753);
var state_32788__$1 = (function (){var statearr_32793 = state_32788;
(statearr_32793[(9)] = inst_32752__$1);

return statearr_32793;
})();
if(inst_32754){
var statearr_32794_32819 = state_32788__$1;
(statearr_32794_32819[(1)] = (5));

} else {
var statearr_32795_32820 = state_32788__$1;
(statearr_32795_32820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (15))){
var inst_32778 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
var statearr_32796_32821 = state_32788__$1;
(statearr_32796_32821[(2)] = inst_32778);

(statearr_32796_32821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (13))){
var state_32788__$1 = state_32788;
var statearr_32797_32822 = state_32788__$1;
(statearr_32797_32822[(2)] = null);

(statearr_32797_32822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (6))){
var inst_32748 = (state_32788[(7)]);
var inst_32773 = inst_32748.length;
var inst_32774 = (inst_32773 > (0));
var state_32788__$1 = state_32788;
if(cljs.core.truth_(inst_32774)){
var statearr_32798_32823 = state_32788__$1;
(statearr_32798_32823[(1)] = (12));

} else {
var statearr_32799_32824 = state_32788__$1;
(statearr_32799_32824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (3))){
var inst_32786 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32788__$1,inst_32786);
} else {
if((state_val_32789 === (12))){
var inst_32748 = (state_32788[(7)]);
var inst_32776 = cljs.core.vec.call(null,inst_32748);
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32788__$1,(15),out,inst_32776);
} else {
if((state_val_32789 === (2))){
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32788__$1,(4),ch);
} else {
if((state_val_32789 === (11))){
var inst_32756 = (state_32788[(10)]);
var inst_32752 = (state_32788[(9)]);
var inst_32766 = (state_32788[(2)]);
var inst_32767 = [];
var inst_32768 = inst_32767.push(inst_32752);
var inst_32748 = inst_32767;
var inst_32749 = inst_32756;
var state_32788__$1 = (function (){var statearr_32800 = state_32788;
(statearr_32800[(7)] = inst_32748);

(statearr_32800[(11)] = inst_32766);

(statearr_32800[(12)] = inst_32768);

(statearr_32800[(8)] = inst_32749);

return statearr_32800;
})();
var statearr_32801_32825 = state_32788__$1;
(statearr_32801_32825[(2)] = null);

(statearr_32801_32825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (9))){
var inst_32748 = (state_32788[(7)]);
var inst_32764 = cljs.core.vec.call(null,inst_32748);
var state_32788__$1 = state_32788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32788__$1,(11),out,inst_32764);
} else {
if((state_val_32789 === (5))){
var inst_32756 = (state_32788[(10)]);
var inst_32749 = (state_32788[(8)]);
var inst_32752 = (state_32788[(9)]);
var inst_32756__$1 = f.call(null,inst_32752);
var inst_32757 = cljs.core._EQ_.call(null,inst_32756__$1,inst_32749);
var inst_32758 = cljs.core.keyword_identical_QMARK_.call(null,inst_32749,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32759 = (inst_32757) || (inst_32758);
var state_32788__$1 = (function (){var statearr_32802 = state_32788;
(statearr_32802[(10)] = inst_32756__$1);

return statearr_32802;
})();
if(cljs.core.truth_(inst_32759)){
var statearr_32803_32826 = state_32788__$1;
(statearr_32803_32826[(1)] = (8));

} else {
var statearr_32804_32827 = state_32788__$1;
(statearr_32804_32827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (14))){
var inst_32781 = (state_32788[(2)]);
var inst_32782 = cljs.core.async.close_BANG_.call(null,out);
var state_32788__$1 = (function (){var statearr_32806 = state_32788;
(statearr_32806[(13)] = inst_32781);

return statearr_32806;
})();
var statearr_32807_32828 = state_32788__$1;
(statearr_32807_32828[(2)] = inst_32782);

(statearr_32807_32828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (10))){
var inst_32771 = (state_32788[(2)]);
var state_32788__$1 = state_32788;
var statearr_32808_32829 = state_32788__$1;
(statearr_32808_32829[(2)] = inst_32771);

(statearr_32808_32829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32789 === (8))){
var inst_32748 = (state_32788[(7)]);
var inst_32756 = (state_32788[(10)]);
var inst_32752 = (state_32788[(9)]);
var inst_32761 = inst_32748.push(inst_32752);
var tmp32805 = inst_32748;
var inst_32748__$1 = tmp32805;
var inst_32749 = inst_32756;
var state_32788__$1 = (function (){var statearr_32809 = state_32788;
(statearr_32809[(14)] = inst_32761);

(statearr_32809[(7)] = inst_32748__$1);

(statearr_32809[(8)] = inst_32749);

return statearr_32809;
})();
var statearr_32810_32830 = state_32788__$1;
(statearr_32810_32830[(2)] = null);

(statearr_32810_32830[(1)] = (2));


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
});})(c__30926__auto___32816,out))
;
return ((function (switch__30838__auto__,c__30926__auto___32816,out){
return (function() {
var cljs$core$async$state_machine__30839__auto__ = null;
var cljs$core$async$state_machine__30839__auto____0 = (function (){
var statearr_32811 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32811[(0)] = cljs$core$async$state_machine__30839__auto__);

(statearr_32811[(1)] = (1));

return statearr_32811;
});
var cljs$core$async$state_machine__30839__auto____1 = (function (state_32788){
while(true){
var ret_value__30840__auto__ = (function (){try{while(true){
var result__30841__auto__ = switch__30838__auto__.call(null,state_32788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30841__auto__;
}
break;
}
}catch (e32812){if((e32812 instanceof Object)){
var ex__30842__auto__ = e32812;
var statearr_32813_32831 = state_32788;
(statearr_32813_32831[(5)] = ex__30842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32832 = state_32788;
state_32788 = G__32832;
continue;
} else {
return ret_value__30840__auto__;
}
break;
}
});
cljs$core$async$state_machine__30839__auto__ = function(state_32788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30839__auto____1.call(this,state_32788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30839__auto____0;
cljs$core$async$state_machine__30839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30839__auto____1;
return cljs$core$async$state_machine__30839__auto__;
})()
;})(switch__30838__auto__,c__30926__auto___32816,out))
})();
var state__30928__auto__ = (function (){var statearr_32814 = f__30927__auto__.call(null);
(statearr_32814[(6)] = c__30926__auto___32816);

return statearr_32814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30928__auto__);
});})(c__30926__auto___32816,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504959332638
