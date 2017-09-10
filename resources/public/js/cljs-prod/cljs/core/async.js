// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__16386 = arguments.length;
switch (G__16386) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16387 = (function (f,blockable,meta16388){
this.f = f;
this.blockable = blockable;
this.meta16388 = meta16388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16389,meta16388__$1){
var self__ = this;
var _16389__$1 = this;
return (new cljs.core.async.t_cljs$core$async16387(self__.f,self__.blockable,meta16388__$1));
});

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16389){
var self__ = this;
var _16389__$1 = this;
return self__.meta16388;
});

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16388], null);
});

cljs.core.async.t_cljs$core$async16387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16387";

cljs.core.async.t_cljs$core$async16387.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async16387");
});

cljs.core.async.__GT_t_cljs$core$async16387 = (function cljs$core$async$__GT_t_cljs$core$async16387(f__$1,blockable__$1,meta16388){
return (new cljs.core.async.t_cljs$core$async16387(f__$1,blockable__$1,meta16388));
});

}

return (new cljs.core.async.t_cljs$core$async16387(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__16393 = arguments.length;
switch (G__16393) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__16396 = arguments.length;
switch (G__16396) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__16399 = arguments.length;
switch (G__16399) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16401 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16401) : fn1.call(null,val_16401));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16401,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16401) : fn1.call(null,val_16401));
});})(val_16401,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__16403 = arguments.length;
switch (G__16403) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9108__auto___16405 = n;
var x_16406 = (0);
while(true){
if((x_16406 < n__9108__auto___16405)){
(a[x_16406] = (0));

var G__16407 = (x_16406 + (1));
x_16406 = G__16407;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16408 = (i + (1));
i = G__16408;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async16409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16409 = (function (flag,meta16410){
this.flag = flag;
this.meta16410 = meta16410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16411,meta16410__$1){
var self__ = this;
var _16411__$1 = this;
return (new cljs.core.async.t_cljs$core$async16409(self__.flag,meta16410__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16411){
var self__ = this;
var _16411__$1 = this;
return self__.meta16410;
});})(flag))
;

cljs.core.async.t_cljs$core$async16409.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16409.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16409.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16410], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16409";

cljs.core.async.t_cljs$core$async16409.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async16409");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16409 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16409(flag__$1,meta16410){
return (new cljs.core.async.t_cljs$core$async16409(flag__$1,meta16410));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16409(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16412 = (function (flag,cb,meta16413){
this.flag = flag;
this.cb = cb;
this.meta16413 = meta16413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16414,meta16413__$1){
var self__ = this;
var _16414__$1 = this;
return (new cljs.core.async.t_cljs$core$async16412(self__.flag,self__.cb,meta16413__$1));
});

cljs.core.async.t_cljs$core$async16412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16414){
var self__ = this;
var _16414__$1 = this;
return self__.meta16413;
});

cljs.core.async.t_cljs$core$async16412.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16412.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16412.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16412.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16413], null);
});

cljs.core.async.t_cljs$core$async16412.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16412.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16412";

cljs.core.async.t_cljs$core$async16412.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async16412");
});

cljs.core.async.__GT_t_cljs$core$async16412 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16412(flag__$1,cb__$1,meta16413){
return (new cljs.core.async.t_cljs$core$async16412(flag__$1,cb__$1,meta16413));
});

}

return (new cljs.core.async.t_cljs$core$async16412(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16415_SHARP_){
var G__16417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16415_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16417) : fret.call(null,G__16417));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16416_SHARP_){
var G__16418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16416_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16418) : fret.call(null,G__16418));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__8163__auto__ = wport;
if(cljs.core.truth_(or__8163__auto__)){
return or__8163__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16419 = (i + (1));
i = G__16419;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8163__auto__ = ret;
if(cljs.core.truth_(or__8163__auto__)){
return or__8163__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__8151__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__8151__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__8151__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__9339__auto__ = [];
var len__9332__auto___16425 = arguments.length;
var i__9333__auto___16426 = (0);
while(true){
if((i__9333__auto___16426 < len__9332__auto___16425)){
args__9339__auto__.push((arguments[i__9333__auto___16426]));

var G__16427 = (i__9333__auto___16426 + (1));
i__9333__auto___16426 = G__16427;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16422){
var map__16423 = p__16422;
var map__16423__$1 = ((((!((map__16423 == null)))?((((map__16423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16423):map__16423);
var opts = map__16423__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16420){
var G__16421 = cljs.core.first(seq16420);
var seq16420__$1 = cljs.core.next(seq16420);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16421,seq16420__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__16429 = arguments.length;
switch (G__16429) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16340__auto___16475 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___16475){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___16475){
return (function (state_16453){
var state_val_16454 = (state_16453[(1)]);
if((state_val_16454 === (7))){
var inst_16449 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16455_16476 = state_16453__$1;
(statearr_16455_16476[(2)] = inst_16449);

(statearr_16455_16476[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (1))){
var state_16453__$1 = state_16453;
var statearr_16456_16477 = state_16453__$1;
(statearr_16456_16477[(2)] = null);

(statearr_16456_16477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (4))){
var inst_16432 = (state_16453[(7)]);
var inst_16432__$1 = (state_16453[(2)]);
var inst_16433 = (inst_16432__$1 == null);
var state_16453__$1 = (function (){var statearr_16457 = state_16453;
(statearr_16457[(7)] = inst_16432__$1);

return statearr_16457;
})();
if(cljs.core.truth_(inst_16433)){
var statearr_16458_16478 = state_16453__$1;
(statearr_16458_16478[(1)] = (5));

} else {
var statearr_16459_16479 = state_16453__$1;
(statearr_16459_16479[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (13))){
var state_16453__$1 = state_16453;
var statearr_16460_16480 = state_16453__$1;
(statearr_16460_16480[(2)] = null);

(statearr_16460_16480[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (6))){
var inst_16432 = (state_16453[(7)]);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16453__$1,(11),to,inst_16432);
} else {
if((state_val_16454 === (3))){
var inst_16451 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16453__$1,inst_16451);
} else {
if((state_val_16454 === (12))){
var state_16453__$1 = state_16453;
var statearr_16461_16481 = state_16453__$1;
(statearr_16461_16481[(2)] = null);

(statearr_16461_16481[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (2))){
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16453__$1,(4),from);
} else {
if((state_val_16454 === (11))){
var inst_16442 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
if(cljs.core.truth_(inst_16442)){
var statearr_16462_16482 = state_16453__$1;
(statearr_16462_16482[(1)] = (12));

} else {
var statearr_16463_16483 = state_16453__$1;
(statearr_16463_16483[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (9))){
var state_16453__$1 = state_16453;
var statearr_16464_16484 = state_16453__$1;
(statearr_16464_16484[(2)] = null);

(statearr_16464_16484[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (5))){
var state_16453__$1 = state_16453;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16465_16485 = state_16453__$1;
(statearr_16465_16485[(1)] = (8));

} else {
var statearr_16466_16486 = state_16453__$1;
(statearr_16466_16486[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (14))){
var inst_16447 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16467_16487 = state_16453__$1;
(statearr_16467_16487[(2)] = inst_16447);

(statearr_16467_16487[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (10))){
var inst_16439 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16468_16488 = state_16453__$1;
(statearr_16468_16488[(2)] = inst_16439);

(statearr_16468_16488[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16454 === (8))){
var inst_16436 = cljs.core.async.close_BANG_(to);
var state_16453__$1 = state_16453;
var statearr_16469_16489 = state_16453__$1;
(statearr_16469_16489[(2)] = inst_16436);

(statearr_16469_16489[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___16475))
;
return ((function (switch__16240__auto__,c__16340__auto___16475){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_16470 = [null,null,null,null,null,null,null,null];
(statearr_16470[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_16470[(1)] = (1));

return statearr_16470;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_16453){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16453);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16471){if((e16471 instanceof Object)){
var ex__16244__auto__ = e16471;
var statearr_16472_16490 = state_16453;
(statearr_16472_16490[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16453);

return cljs.core.cst$kw$recur;
} else {
throw e16471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16491 = state_16453;
state_16453 = G__16491;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_16453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_16453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___16475))
})();
var state__16342__auto__ = (function (){var statearr_16473 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16473[(6)] = c__16340__auto___16475);

return statearr_16473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___16475))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16492){
var vec__16493 = p__16492;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16493,(1),null);
var job = vec__16493;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16340__auto___16664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___16664,res,vec__16493,v,p,job,jobs,results){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___16664,res,vec__16493,v,p,job,jobs,results){
return (function (state_16500){
var state_val_16501 = (state_16500[(1)]);
if((state_val_16501 === (1))){
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16500__$1,(2),res,v);
} else {
if((state_val_16501 === (2))){
var inst_16497 = (state_16500[(2)]);
var inst_16498 = cljs.core.async.close_BANG_(res);
var state_16500__$1 = (function (){var statearr_16502 = state_16500;
(statearr_16502[(7)] = inst_16497);

return statearr_16502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16500__$1,inst_16498);
} else {
return null;
}
}
});})(c__16340__auto___16664,res,vec__16493,v,p,job,jobs,results))
;
return ((function (switch__16240__auto__,c__16340__auto___16664,res,vec__16493,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0 = (function (){
var statearr_16503 = [null,null,null,null,null,null,null,null];
(statearr_16503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__);

(statearr_16503[(1)] = (1));

return statearr_16503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1 = (function (state_16500){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16500);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16504){if((e16504 instanceof Object)){
var ex__16244__auto__ = e16504;
var statearr_16505_16665 = state_16500;
(statearr_16505_16665[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16500);

return cljs.core.cst$kw$recur;
} else {
throw e16504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16666 = state_16500;
state_16500 = G__16666;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = function(state_16500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1.call(this,state_16500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___16664,res,vec__16493,v,p,job,jobs,results))
})();
var state__16342__auto__ = (function (){var statearr_16506 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16506[(6)] = c__16340__auto___16664);

return statearr_16506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___16664,res,vec__16493,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16507){
var vec__16508 = p__16507;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(1),null);
var job = vec__16508;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__9108__auto___16667 = n;
var __16668 = (0);
while(true){
if((__16668 < n__9108__auto___16667)){
var G__16511_16669 = type;
var G__16511_16670__$1 = (((G__16511_16669 instanceof cljs.core.Keyword))?G__16511_16669.fqn:null);
switch (G__16511_16670__$1) {
case "compute":
var c__16340__auto___16672 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16668,c__16340__auto___16672,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (__16668,c__16340__auto___16672,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async){
return (function (state_16524){
var state_val_16525 = (state_16524[(1)]);
if((state_val_16525 === (1))){
var state_16524__$1 = state_16524;
var statearr_16526_16673 = state_16524__$1;
(statearr_16526_16673[(2)] = null);

(statearr_16526_16673[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16525 === (2))){
var state_16524__$1 = state_16524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16524__$1,(4),jobs);
} else {
if((state_val_16525 === (3))){
var inst_16522 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16524__$1,inst_16522);
} else {
if((state_val_16525 === (4))){
var inst_16514 = (state_16524[(2)]);
var inst_16515 = process(inst_16514);
var state_16524__$1 = state_16524;
if(cljs.core.truth_(inst_16515)){
var statearr_16527_16674 = state_16524__$1;
(statearr_16527_16674[(1)] = (5));

} else {
var statearr_16528_16675 = state_16524__$1;
(statearr_16528_16675[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16525 === (5))){
var state_16524__$1 = state_16524;
var statearr_16529_16676 = state_16524__$1;
(statearr_16529_16676[(2)] = null);

(statearr_16529_16676[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16525 === (6))){
var state_16524__$1 = state_16524;
var statearr_16530_16677 = state_16524__$1;
(statearr_16530_16677[(2)] = null);

(statearr_16530_16677[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16525 === (7))){
var inst_16520 = (state_16524[(2)]);
var state_16524__$1 = state_16524;
var statearr_16531_16678 = state_16524__$1;
(statearr_16531_16678[(2)] = inst_16520);

(statearr_16531_16678[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16668,c__16340__auto___16672,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async))
;
return ((function (__16668,switch__16240__auto__,c__16340__auto___16672,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0 = (function (){
var statearr_16532 = [null,null,null,null,null,null,null];
(statearr_16532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__);

(statearr_16532[(1)] = (1));

return statearr_16532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1 = (function (state_16524){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16524);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16533){if((e16533 instanceof Object)){
var ex__16244__auto__ = e16533;
var statearr_16534_16679 = state_16524;
(statearr_16534_16679[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16524);

return cljs.core.cst$kw$recur;
} else {
throw e16533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16680 = state_16524;
state_16524 = G__16680;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = function(state_16524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1.call(this,state_16524);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__;
})()
;})(__16668,switch__16240__auto__,c__16340__auto___16672,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async))
})();
var state__16342__auto__ = (function (){var statearr_16535 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16535[(6)] = c__16340__auto___16672);

return statearr_16535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(__16668,c__16340__auto___16672,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async))
);


break;
case "async":
var c__16340__auto___16681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16668,c__16340__auto___16681,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (__16668,c__16340__auto___16681,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async){
return (function (state_16548){
var state_val_16549 = (state_16548[(1)]);
if((state_val_16549 === (1))){
var state_16548__$1 = state_16548;
var statearr_16550_16682 = state_16548__$1;
(statearr_16550_16682[(2)] = null);

(statearr_16550_16682[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16549 === (2))){
var state_16548__$1 = state_16548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16548__$1,(4),jobs);
} else {
if((state_val_16549 === (3))){
var inst_16546 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16548__$1,inst_16546);
} else {
if((state_val_16549 === (4))){
var inst_16538 = (state_16548[(2)]);
var inst_16539 = async(inst_16538);
var state_16548__$1 = state_16548;
if(cljs.core.truth_(inst_16539)){
var statearr_16551_16683 = state_16548__$1;
(statearr_16551_16683[(1)] = (5));

} else {
var statearr_16552_16684 = state_16548__$1;
(statearr_16552_16684[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16549 === (5))){
var state_16548__$1 = state_16548;
var statearr_16553_16685 = state_16548__$1;
(statearr_16553_16685[(2)] = null);

(statearr_16553_16685[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16549 === (6))){
var state_16548__$1 = state_16548;
var statearr_16554_16686 = state_16548__$1;
(statearr_16554_16686[(2)] = null);

(statearr_16554_16686[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16549 === (7))){
var inst_16544 = (state_16548[(2)]);
var state_16548__$1 = state_16548;
var statearr_16555_16687 = state_16548__$1;
(statearr_16555_16687[(2)] = inst_16544);

(statearr_16555_16687[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16668,c__16340__auto___16681,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async))
;
return ((function (__16668,switch__16240__auto__,c__16340__auto___16681,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0 = (function (){
var statearr_16556 = [null,null,null,null,null,null,null];
(statearr_16556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__);

(statearr_16556[(1)] = (1));

return statearr_16556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1 = (function (state_16548){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16548);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16557){if((e16557 instanceof Object)){
var ex__16244__auto__ = e16557;
var statearr_16558_16688 = state_16548;
(statearr_16558_16688[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16548);

return cljs.core.cst$kw$recur;
} else {
throw e16557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16689 = state_16548;
state_16548 = G__16689;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = function(state_16548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1.call(this,state_16548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__;
})()
;})(__16668,switch__16240__auto__,c__16340__auto___16681,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async))
})();
var state__16342__auto__ = (function (){var statearr_16559 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16559[(6)] = c__16340__auto___16681);

return statearr_16559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(__16668,c__16340__auto___16681,G__16511_16669,G__16511_16670__$1,n__9108__auto___16667,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16511_16670__$1)].join('')));

}

var G__16690 = (__16668 + (1));
__16668 = G__16690;
continue;
} else {
}
break;
}

var c__16340__auto___16691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___16691,jobs,results,process,async){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___16691,jobs,results,process,async){
return (function (state_16581){
var state_val_16582 = (state_16581[(1)]);
if((state_val_16582 === (1))){
var state_16581__$1 = state_16581;
var statearr_16583_16692 = state_16581__$1;
(statearr_16583_16692[(2)] = null);

(statearr_16583_16692[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (2))){
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16581__$1,(4),from);
} else {
if((state_val_16582 === (3))){
var inst_16579 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16581__$1,inst_16579);
} else {
if((state_val_16582 === (4))){
var inst_16562 = (state_16581[(7)]);
var inst_16562__$1 = (state_16581[(2)]);
var inst_16563 = (inst_16562__$1 == null);
var state_16581__$1 = (function (){var statearr_16584 = state_16581;
(statearr_16584[(7)] = inst_16562__$1);

return statearr_16584;
})();
if(cljs.core.truth_(inst_16563)){
var statearr_16585_16693 = state_16581__$1;
(statearr_16585_16693[(1)] = (5));

} else {
var statearr_16586_16694 = state_16581__$1;
(statearr_16586_16694[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (5))){
var inst_16565 = cljs.core.async.close_BANG_(jobs);
var state_16581__$1 = state_16581;
var statearr_16587_16695 = state_16581__$1;
(statearr_16587_16695[(2)] = inst_16565);

(statearr_16587_16695[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (6))){
var inst_16562 = (state_16581[(7)]);
var inst_16567 = (state_16581[(8)]);
var inst_16567__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16568 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16569 = [inst_16562,inst_16567__$1];
var inst_16570 = (new cljs.core.PersistentVector(null,2,(5),inst_16568,inst_16569,null));
var state_16581__$1 = (function (){var statearr_16588 = state_16581;
(statearr_16588[(8)] = inst_16567__$1);

return statearr_16588;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16581__$1,(8),jobs,inst_16570);
} else {
if((state_val_16582 === (7))){
var inst_16577 = (state_16581[(2)]);
var state_16581__$1 = state_16581;
var statearr_16589_16696 = state_16581__$1;
(statearr_16589_16696[(2)] = inst_16577);

(statearr_16589_16696[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16582 === (8))){
var inst_16567 = (state_16581[(8)]);
var inst_16572 = (state_16581[(2)]);
var state_16581__$1 = (function (){var statearr_16590 = state_16581;
(statearr_16590[(9)] = inst_16572);

return statearr_16590;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16581__$1,(9),results,inst_16567);
} else {
if((state_val_16582 === (9))){
var inst_16574 = (state_16581[(2)]);
var state_16581__$1 = (function (){var statearr_16591 = state_16581;
(statearr_16591[(10)] = inst_16574);

return statearr_16591;
})();
var statearr_16592_16697 = state_16581__$1;
(statearr_16592_16697[(2)] = null);

(statearr_16592_16697[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___16691,jobs,results,process,async))
;
return ((function (switch__16240__auto__,c__16340__auto___16691,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0 = (function (){
var statearr_16593 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16593[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__);

(statearr_16593[(1)] = (1));

return statearr_16593;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1 = (function (state_16581){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16581);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16594){if((e16594 instanceof Object)){
var ex__16244__auto__ = e16594;
var statearr_16595_16698 = state_16581;
(statearr_16595_16698[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16581);

return cljs.core.cst$kw$recur;
} else {
throw e16594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16699 = state_16581;
state_16581 = G__16699;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = function(state_16581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1.call(this,state_16581);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___16691,jobs,results,process,async))
})();
var state__16342__auto__ = (function (){var statearr_16596 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16596[(6)] = c__16340__auto___16691);

return statearr_16596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___16691,jobs,results,process,async))
);


var c__16340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto__,jobs,results,process,async){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto__,jobs,results,process,async){
return (function (state_16634){
var state_val_16635 = (state_16634[(1)]);
if((state_val_16635 === (7))){
var inst_16630 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
var statearr_16636_16700 = state_16634__$1;
(statearr_16636_16700[(2)] = inst_16630);

(statearr_16636_16700[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (20))){
var state_16634__$1 = state_16634;
var statearr_16637_16701 = state_16634__$1;
(statearr_16637_16701[(2)] = null);

(statearr_16637_16701[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (1))){
var state_16634__$1 = state_16634;
var statearr_16638_16702 = state_16634__$1;
(statearr_16638_16702[(2)] = null);

(statearr_16638_16702[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (4))){
var inst_16599 = (state_16634[(7)]);
var inst_16599__$1 = (state_16634[(2)]);
var inst_16600 = (inst_16599__$1 == null);
var state_16634__$1 = (function (){var statearr_16639 = state_16634;
(statearr_16639[(7)] = inst_16599__$1);

return statearr_16639;
})();
if(cljs.core.truth_(inst_16600)){
var statearr_16640_16703 = state_16634__$1;
(statearr_16640_16703[(1)] = (5));

} else {
var statearr_16641_16704 = state_16634__$1;
(statearr_16641_16704[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (15))){
var inst_16612 = (state_16634[(8)]);
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16634__$1,(18),to,inst_16612);
} else {
if((state_val_16635 === (21))){
var inst_16625 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
var statearr_16642_16705 = state_16634__$1;
(statearr_16642_16705[(2)] = inst_16625);

(statearr_16642_16705[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (13))){
var inst_16627 = (state_16634[(2)]);
var state_16634__$1 = (function (){var statearr_16643 = state_16634;
(statearr_16643[(9)] = inst_16627);

return statearr_16643;
})();
var statearr_16644_16706 = state_16634__$1;
(statearr_16644_16706[(2)] = null);

(statearr_16644_16706[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (6))){
var inst_16599 = (state_16634[(7)]);
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16634__$1,(11),inst_16599);
} else {
if((state_val_16635 === (17))){
var inst_16620 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
if(cljs.core.truth_(inst_16620)){
var statearr_16645_16707 = state_16634__$1;
(statearr_16645_16707[(1)] = (19));

} else {
var statearr_16646_16708 = state_16634__$1;
(statearr_16646_16708[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (3))){
var inst_16632 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16634__$1,inst_16632);
} else {
if((state_val_16635 === (12))){
var inst_16609 = (state_16634[(10)]);
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16634__$1,(14),inst_16609);
} else {
if((state_val_16635 === (2))){
var state_16634__$1 = state_16634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16634__$1,(4),results);
} else {
if((state_val_16635 === (19))){
var state_16634__$1 = state_16634;
var statearr_16647_16709 = state_16634__$1;
(statearr_16647_16709[(2)] = null);

(statearr_16647_16709[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (11))){
var inst_16609 = (state_16634[(2)]);
var state_16634__$1 = (function (){var statearr_16648 = state_16634;
(statearr_16648[(10)] = inst_16609);

return statearr_16648;
})();
var statearr_16649_16710 = state_16634__$1;
(statearr_16649_16710[(2)] = null);

(statearr_16649_16710[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (9))){
var state_16634__$1 = state_16634;
var statearr_16650_16711 = state_16634__$1;
(statearr_16650_16711[(2)] = null);

(statearr_16650_16711[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (5))){
var state_16634__$1 = state_16634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16651_16712 = state_16634__$1;
(statearr_16651_16712[(1)] = (8));

} else {
var statearr_16652_16713 = state_16634__$1;
(statearr_16652_16713[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (14))){
var inst_16614 = (state_16634[(11)]);
var inst_16612 = (state_16634[(8)]);
var inst_16612__$1 = (state_16634[(2)]);
var inst_16613 = (inst_16612__$1 == null);
var inst_16614__$1 = cljs.core.not(inst_16613);
var state_16634__$1 = (function (){var statearr_16653 = state_16634;
(statearr_16653[(11)] = inst_16614__$1);

(statearr_16653[(8)] = inst_16612__$1);

return statearr_16653;
})();
if(inst_16614__$1){
var statearr_16654_16714 = state_16634__$1;
(statearr_16654_16714[(1)] = (15));

} else {
var statearr_16655_16715 = state_16634__$1;
(statearr_16655_16715[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (16))){
var inst_16614 = (state_16634[(11)]);
var state_16634__$1 = state_16634;
var statearr_16656_16716 = state_16634__$1;
(statearr_16656_16716[(2)] = inst_16614);

(statearr_16656_16716[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (10))){
var inst_16606 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
var statearr_16657_16717 = state_16634__$1;
(statearr_16657_16717[(2)] = inst_16606);

(statearr_16657_16717[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (18))){
var inst_16617 = (state_16634[(2)]);
var state_16634__$1 = state_16634;
var statearr_16658_16718 = state_16634__$1;
(statearr_16658_16718[(2)] = inst_16617);

(statearr_16658_16718[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16635 === (8))){
var inst_16603 = cljs.core.async.close_BANG_(to);
var state_16634__$1 = state_16634;
var statearr_16659_16719 = state_16634__$1;
(statearr_16659_16719[(2)] = inst_16603);

(statearr_16659_16719[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto__,jobs,results,process,async))
;
return ((function (switch__16240__auto__,c__16340__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0 = (function (){
var statearr_16660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__);

(statearr_16660[(1)] = (1));

return statearr_16660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1 = (function (state_16634){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16634);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16661){if((e16661 instanceof Object)){
var ex__16244__auto__ = e16661;
var statearr_16662_16720 = state_16634;
(statearr_16662_16720[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16634);

return cljs.core.cst$kw$recur;
} else {
throw e16661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16721 = state_16634;
state_16634 = G__16721;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__ = function(state_16634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1.call(this,state_16634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16241__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto__,jobs,results,process,async))
})();
var state__16342__auto__ = (function (){var statearr_16663 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16663[(6)] = c__16340__auto__);

return statearr_16663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto__,jobs,results,process,async))
);

return c__16340__auto__;
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
var G__16723 = arguments.length;
switch (G__16723) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__16726 = arguments.length;
switch (G__16726) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__16729 = arguments.length;
switch (G__16729) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16340__auto___16778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___16778,tc,fc){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___16778,tc,fc){
return (function (state_16755){
var state_val_16756 = (state_16755[(1)]);
if((state_val_16756 === (7))){
var inst_16751 = (state_16755[(2)]);
var state_16755__$1 = state_16755;
var statearr_16757_16779 = state_16755__$1;
(statearr_16757_16779[(2)] = inst_16751);

(statearr_16757_16779[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (1))){
var state_16755__$1 = state_16755;
var statearr_16758_16780 = state_16755__$1;
(statearr_16758_16780[(2)] = null);

(statearr_16758_16780[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (4))){
var inst_16732 = (state_16755[(7)]);
var inst_16732__$1 = (state_16755[(2)]);
var inst_16733 = (inst_16732__$1 == null);
var state_16755__$1 = (function (){var statearr_16759 = state_16755;
(statearr_16759[(7)] = inst_16732__$1);

return statearr_16759;
})();
if(cljs.core.truth_(inst_16733)){
var statearr_16760_16781 = state_16755__$1;
(statearr_16760_16781[(1)] = (5));

} else {
var statearr_16761_16782 = state_16755__$1;
(statearr_16761_16782[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (13))){
var state_16755__$1 = state_16755;
var statearr_16762_16783 = state_16755__$1;
(statearr_16762_16783[(2)] = null);

(statearr_16762_16783[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (6))){
var inst_16732 = (state_16755[(7)]);
var inst_16738 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16732) : p.call(null,inst_16732));
var state_16755__$1 = state_16755;
if(cljs.core.truth_(inst_16738)){
var statearr_16763_16784 = state_16755__$1;
(statearr_16763_16784[(1)] = (9));

} else {
var statearr_16764_16785 = state_16755__$1;
(statearr_16764_16785[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (3))){
var inst_16753 = (state_16755[(2)]);
var state_16755__$1 = state_16755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16755__$1,inst_16753);
} else {
if((state_val_16756 === (12))){
var state_16755__$1 = state_16755;
var statearr_16765_16786 = state_16755__$1;
(statearr_16765_16786[(2)] = null);

(statearr_16765_16786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (2))){
var state_16755__$1 = state_16755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16755__$1,(4),ch);
} else {
if((state_val_16756 === (11))){
var inst_16732 = (state_16755[(7)]);
var inst_16742 = (state_16755[(2)]);
var state_16755__$1 = state_16755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16755__$1,(8),inst_16742,inst_16732);
} else {
if((state_val_16756 === (9))){
var state_16755__$1 = state_16755;
var statearr_16766_16787 = state_16755__$1;
(statearr_16766_16787[(2)] = tc);

(statearr_16766_16787[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (5))){
var inst_16735 = cljs.core.async.close_BANG_(tc);
var inst_16736 = cljs.core.async.close_BANG_(fc);
var state_16755__$1 = (function (){var statearr_16767 = state_16755;
(statearr_16767[(8)] = inst_16735);

return statearr_16767;
})();
var statearr_16768_16788 = state_16755__$1;
(statearr_16768_16788[(2)] = inst_16736);

(statearr_16768_16788[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (14))){
var inst_16749 = (state_16755[(2)]);
var state_16755__$1 = state_16755;
var statearr_16769_16789 = state_16755__$1;
(statearr_16769_16789[(2)] = inst_16749);

(statearr_16769_16789[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (10))){
var state_16755__$1 = state_16755;
var statearr_16770_16790 = state_16755__$1;
(statearr_16770_16790[(2)] = fc);

(statearr_16770_16790[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16756 === (8))){
var inst_16744 = (state_16755[(2)]);
var state_16755__$1 = state_16755;
if(cljs.core.truth_(inst_16744)){
var statearr_16771_16791 = state_16755__$1;
(statearr_16771_16791[(1)] = (12));

} else {
var statearr_16772_16792 = state_16755__$1;
(statearr_16772_16792[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___16778,tc,fc))
;
return ((function (switch__16240__auto__,c__16340__auto___16778,tc,fc){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_16773 = [null,null,null,null,null,null,null,null,null];
(statearr_16773[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_16773[(1)] = (1));

return statearr_16773;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_16755){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16755);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16774){if((e16774 instanceof Object)){
var ex__16244__auto__ = e16774;
var statearr_16775_16793 = state_16755;
(statearr_16775_16793[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16755);

return cljs.core.cst$kw$recur;
} else {
throw e16774;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16794 = state_16755;
state_16755 = G__16794;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_16755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_16755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___16778,tc,fc))
})();
var state__16342__auto__ = (function (){var statearr_16776 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16776[(6)] = c__16340__auto___16778);

return statearr_16776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___16778,tc,fc))
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
var c__16340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto__){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto__){
return (function (state_16815){
var state_val_16816 = (state_16815[(1)]);
if((state_val_16816 === (7))){
var inst_16811 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
var statearr_16817_16835 = state_16815__$1;
(statearr_16817_16835[(2)] = inst_16811);

(statearr_16817_16835[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16816 === (1))){
var inst_16795 = init;
var state_16815__$1 = (function (){var statearr_16818 = state_16815;
(statearr_16818[(7)] = inst_16795);

return statearr_16818;
})();
var statearr_16819_16836 = state_16815__$1;
(statearr_16819_16836[(2)] = null);

(statearr_16819_16836[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16816 === (4))){
var inst_16798 = (state_16815[(8)]);
var inst_16798__$1 = (state_16815[(2)]);
var inst_16799 = (inst_16798__$1 == null);
var state_16815__$1 = (function (){var statearr_16820 = state_16815;
(statearr_16820[(8)] = inst_16798__$1);

return statearr_16820;
})();
if(cljs.core.truth_(inst_16799)){
var statearr_16821_16837 = state_16815__$1;
(statearr_16821_16837[(1)] = (5));

} else {
var statearr_16822_16838 = state_16815__$1;
(statearr_16822_16838[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16816 === (6))){
var inst_16802 = (state_16815[(9)]);
var inst_16795 = (state_16815[(7)]);
var inst_16798 = (state_16815[(8)]);
var inst_16802__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16795,inst_16798) : f.call(null,inst_16795,inst_16798));
var inst_16803 = cljs.core.reduced_QMARK_(inst_16802__$1);
var state_16815__$1 = (function (){var statearr_16823 = state_16815;
(statearr_16823[(9)] = inst_16802__$1);

return statearr_16823;
})();
if(inst_16803){
var statearr_16824_16839 = state_16815__$1;
(statearr_16824_16839[(1)] = (8));

} else {
var statearr_16825_16840 = state_16815__$1;
(statearr_16825_16840[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16816 === (3))){
var inst_16813 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16815__$1,inst_16813);
} else {
if((state_val_16816 === (2))){
var state_16815__$1 = state_16815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16815__$1,(4),ch);
} else {
if((state_val_16816 === (9))){
var inst_16802 = (state_16815[(9)]);
var inst_16795 = inst_16802;
var state_16815__$1 = (function (){var statearr_16826 = state_16815;
(statearr_16826[(7)] = inst_16795);

return statearr_16826;
})();
var statearr_16827_16841 = state_16815__$1;
(statearr_16827_16841[(2)] = null);

(statearr_16827_16841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16816 === (5))){
var inst_16795 = (state_16815[(7)]);
var state_16815__$1 = state_16815;
var statearr_16828_16842 = state_16815__$1;
(statearr_16828_16842[(2)] = inst_16795);

(statearr_16828_16842[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16816 === (10))){
var inst_16809 = (state_16815[(2)]);
var state_16815__$1 = state_16815;
var statearr_16829_16843 = state_16815__$1;
(statearr_16829_16843[(2)] = inst_16809);

(statearr_16829_16843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16816 === (8))){
var inst_16802 = (state_16815[(9)]);
var inst_16805 = cljs.core.deref(inst_16802);
var state_16815__$1 = state_16815;
var statearr_16830_16844 = state_16815__$1;
(statearr_16830_16844[(2)] = inst_16805);

(statearr_16830_16844[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto__))
;
return ((function (switch__16240__auto__,c__16340__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16241__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16241__auto____0 = (function (){
var statearr_16831 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16831[(0)] = cljs$core$async$reduce_$_state_machine__16241__auto__);

(statearr_16831[(1)] = (1));

return statearr_16831;
});
var cljs$core$async$reduce_$_state_machine__16241__auto____1 = (function (state_16815){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16815);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16832){if((e16832 instanceof Object)){
var ex__16244__auto__ = e16832;
var statearr_16833_16845 = state_16815;
(statearr_16833_16845[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16815);

return cljs.core.cst$kw$recur;
} else {
throw e16832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16846 = state_16815;
state_16815 = G__16846;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16241__auto__ = function(state_16815){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16241__auto____1.call(this,state_16815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16241__auto____0;
cljs$core$async$reduce_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16241__auto____1;
return cljs$core$async$reduce_$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto__))
})();
var state__16342__auto__ = (function (){var statearr_16834 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16834[(6)] = c__16340__auto__);

return statearr_16834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto__))
);

return c__16340__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto__,f__$1){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto__,f__$1){
return (function (state_16852){
var state_val_16853 = (state_16852[(1)]);
if((state_val_16853 === (1))){
var inst_16847 = cljs.core.async.reduce(f__$1,init,ch);
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16852__$1,(2),inst_16847);
} else {
if((state_val_16853 === (2))){
var inst_16849 = (state_16852[(2)]);
var inst_16850 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16849) : f__$1.call(null,inst_16849));
var state_16852__$1 = state_16852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16852__$1,inst_16850);
} else {
return null;
}
}
});})(c__16340__auto__,f__$1))
;
return ((function (switch__16240__auto__,c__16340__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16241__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16241__auto____0 = (function (){
var statearr_16854 = [null,null,null,null,null,null,null];
(statearr_16854[(0)] = cljs$core$async$transduce_$_state_machine__16241__auto__);

(statearr_16854[(1)] = (1));

return statearr_16854;
});
var cljs$core$async$transduce_$_state_machine__16241__auto____1 = (function (state_16852){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16852);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16855){if((e16855 instanceof Object)){
var ex__16244__auto__ = e16855;
var statearr_16856_16858 = state_16852;
(statearr_16856_16858[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16852);

return cljs.core.cst$kw$recur;
} else {
throw e16855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16859 = state_16852;
state_16852 = G__16859;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16241__auto__ = function(state_16852){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16241__auto____1.call(this,state_16852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16241__auto____0;
cljs$core$async$transduce_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16241__auto____1;
return cljs$core$async$transduce_$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto__,f__$1))
})();
var state__16342__auto__ = (function (){var statearr_16857 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16857[(6)] = c__16340__auto__);

return statearr_16857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto__,f__$1))
);

return c__16340__auto__;
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
var G__16861 = arguments.length;
switch (G__16861) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto__){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto__){
return (function (state_16886){
var state_val_16887 = (state_16886[(1)]);
if((state_val_16887 === (7))){
var inst_16868 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
var statearr_16888_16909 = state_16886__$1;
(statearr_16888_16909[(2)] = inst_16868);

(statearr_16888_16909[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (1))){
var inst_16862 = cljs.core.seq(coll);
var inst_16863 = inst_16862;
var state_16886__$1 = (function (){var statearr_16889 = state_16886;
(statearr_16889[(7)] = inst_16863);

return statearr_16889;
})();
var statearr_16890_16910 = state_16886__$1;
(statearr_16890_16910[(2)] = null);

(statearr_16890_16910[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (4))){
var inst_16863 = (state_16886[(7)]);
var inst_16866 = cljs.core.first(inst_16863);
var state_16886__$1 = state_16886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16886__$1,(7),ch,inst_16866);
} else {
if((state_val_16887 === (13))){
var inst_16880 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
var statearr_16891_16911 = state_16886__$1;
(statearr_16891_16911[(2)] = inst_16880);

(statearr_16891_16911[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (6))){
var inst_16871 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
if(cljs.core.truth_(inst_16871)){
var statearr_16892_16912 = state_16886__$1;
(statearr_16892_16912[(1)] = (8));

} else {
var statearr_16893_16913 = state_16886__$1;
(statearr_16893_16913[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (3))){
var inst_16884 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16886__$1,inst_16884);
} else {
if((state_val_16887 === (12))){
var state_16886__$1 = state_16886;
var statearr_16894_16914 = state_16886__$1;
(statearr_16894_16914[(2)] = null);

(statearr_16894_16914[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (2))){
var inst_16863 = (state_16886[(7)]);
var state_16886__$1 = state_16886;
if(cljs.core.truth_(inst_16863)){
var statearr_16895_16915 = state_16886__$1;
(statearr_16895_16915[(1)] = (4));

} else {
var statearr_16896_16916 = state_16886__$1;
(statearr_16896_16916[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (11))){
var inst_16877 = cljs.core.async.close_BANG_(ch);
var state_16886__$1 = state_16886;
var statearr_16897_16917 = state_16886__$1;
(statearr_16897_16917[(2)] = inst_16877);

(statearr_16897_16917[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (9))){
var state_16886__$1 = state_16886;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16898_16918 = state_16886__$1;
(statearr_16898_16918[(1)] = (11));

} else {
var statearr_16899_16919 = state_16886__$1;
(statearr_16899_16919[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (5))){
var inst_16863 = (state_16886[(7)]);
var state_16886__$1 = state_16886;
var statearr_16900_16920 = state_16886__$1;
(statearr_16900_16920[(2)] = inst_16863);

(statearr_16900_16920[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (10))){
var inst_16882 = (state_16886[(2)]);
var state_16886__$1 = state_16886;
var statearr_16901_16921 = state_16886__$1;
(statearr_16901_16921[(2)] = inst_16882);

(statearr_16901_16921[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16887 === (8))){
var inst_16863 = (state_16886[(7)]);
var inst_16873 = cljs.core.next(inst_16863);
var inst_16863__$1 = inst_16873;
var state_16886__$1 = (function (){var statearr_16902 = state_16886;
(statearr_16902[(7)] = inst_16863__$1);

return statearr_16902;
})();
var statearr_16903_16922 = state_16886__$1;
(statearr_16903_16922[(2)] = null);

(statearr_16903_16922[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto__))
;
return ((function (switch__16240__auto__,c__16340__auto__){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_16904 = [null,null,null,null,null,null,null,null];
(statearr_16904[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_16904[(1)] = (1));

return statearr_16904;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_16886){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_16886);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e16905){if((e16905 instanceof Object)){
var ex__16244__auto__ = e16905;
var statearr_16906_16923 = state_16886;
(statearr_16906_16923[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16886);

return cljs.core.cst$kw$recur;
} else {
throw e16905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__16924 = state_16886;
state_16886 = G__16924;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_16886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_16886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto__))
})();
var state__16342__auto__ = (function (){var statearr_16907 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_16907[(6)] = c__16340__auto__);

return statearr_16907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto__))
);

return c__16340__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8846__auto__ = (((_ == null))?null:_);
var m__8847__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8847__auto__.call(null,_));
} else {
var m__8847__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8847__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8847__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8847__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8847__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8847__auto__.call(null,m,ch));
} else {
var m__8847__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8847__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8847__auto__.call(null,m));
} else {
var m__8847__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8847__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16925 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16925 = (function (ch,cs,meta16926){
this.ch = ch;
this.cs = cs;
this.meta16926 = meta16926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16927,meta16926__$1){
var self__ = this;
var _16927__$1 = this;
return (new cljs.core.async.t_cljs$core$async16925(self__.ch,self__.cs,meta16926__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16927){
var self__ = this;
var _16927__$1 = this;
return self__.meta16926;
});})(cs))
;

cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16925.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16925.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16926], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16925.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16925";

cljs.core.async.t_cljs$core$async16925.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async16925");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16925 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16925(ch__$1,cs__$1,meta16926){
return (new cljs.core.async.t_cljs$core$async16925(ch__$1,cs__$1,meta16926));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16925(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16340__auto___17147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___17147,cs,m,dchan,dctr,done){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___17147,cs,m,dchan,dctr,done){
return (function (state_17062){
var state_val_17063 = (state_17062[(1)]);
if((state_val_17063 === (7))){
var inst_17058 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17064_17148 = state_17062__$1;
(statearr_17064_17148[(2)] = inst_17058);

(statearr_17064_17148[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (20))){
var inst_16961 = (state_17062[(7)]);
var inst_16973 = cljs.core.first(inst_16961);
var inst_16974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16973,(0),null);
var inst_16975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16973,(1),null);
var state_17062__$1 = (function (){var statearr_17065 = state_17062;
(statearr_17065[(8)] = inst_16974);

return statearr_17065;
})();
if(cljs.core.truth_(inst_16975)){
var statearr_17066_17149 = state_17062__$1;
(statearr_17066_17149[(1)] = (22));

} else {
var statearr_17067_17150 = state_17062__$1;
(statearr_17067_17150[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (27))){
var inst_17003 = (state_17062[(9)]);
var inst_16930 = (state_17062[(10)]);
var inst_17010 = (state_17062[(11)]);
var inst_17005 = (state_17062[(12)]);
var inst_17010__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17003,inst_17005);
var inst_17011 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17010__$1,inst_16930,done);
var state_17062__$1 = (function (){var statearr_17068 = state_17062;
(statearr_17068[(11)] = inst_17010__$1);

return statearr_17068;
})();
if(cljs.core.truth_(inst_17011)){
var statearr_17069_17151 = state_17062__$1;
(statearr_17069_17151[(1)] = (30));

} else {
var statearr_17070_17152 = state_17062__$1;
(statearr_17070_17152[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (1))){
var state_17062__$1 = state_17062;
var statearr_17071_17153 = state_17062__$1;
(statearr_17071_17153[(2)] = null);

(statearr_17071_17153[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (24))){
var inst_16961 = (state_17062[(7)]);
var inst_16980 = (state_17062[(2)]);
var inst_16981 = cljs.core.next(inst_16961);
var inst_16939 = inst_16981;
var inst_16940 = null;
var inst_16941 = (0);
var inst_16942 = (0);
var state_17062__$1 = (function (){var statearr_17072 = state_17062;
(statearr_17072[(13)] = inst_16942);

(statearr_17072[(14)] = inst_16980);

(statearr_17072[(15)] = inst_16941);

(statearr_17072[(16)] = inst_16940);

(statearr_17072[(17)] = inst_16939);

return statearr_17072;
})();
var statearr_17073_17154 = state_17062__$1;
(statearr_17073_17154[(2)] = null);

(statearr_17073_17154[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (39))){
var state_17062__$1 = state_17062;
var statearr_17077_17155 = state_17062__$1;
(statearr_17077_17155[(2)] = null);

(statearr_17077_17155[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (4))){
var inst_16930 = (state_17062[(10)]);
var inst_16930__$1 = (state_17062[(2)]);
var inst_16931 = (inst_16930__$1 == null);
var state_17062__$1 = (function (){var statearr_17078 = state_17062;
(statearr_17078[(10)] = inst_16930__$1);

return statearr_17078;
})();
if(cljs.core.truth_(inst_16931)){
var statearr_17079_17156 = state_17062__$1;
(statearr_17079_17156[(1)] = (5));

} else {
var statearr_17080_17157 = state_17062__$1;
(statearr_17080_17157[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (15))){
var inst_16942 = (state_17062[(13)]);
var inst_16941 = (state_17062[(15)]);
var inst_16940 = (state_17062[(16)]);
var inst_16939 = (state_17062[(17)]);
var inst_16957 = (state_17062[(2)]);
var inst_16958 = (inst_16942 + (1));
var tmp17074 = inst_16941;
var tmp17075 = inst_16940;
var tmp17076 = inst_16939;
var inst_16939__$1 = tmp17076;
var inst_16940__$1 = tmp17075;
var inst_16941__$1 = tmp17074;
var inst_16942__$1 = inst_16958;
var state_17062__$1 = (function (){var statearr_17081 = state_17062;
(statearr_17081[(13)] = inst_16942__$1);

(statearr_17081[(15)] = inst_16941__$1);

(statearr_17081[(16)] = inst_16940__$1);

(statearr_17081[(17)] = inst_16939__$1);

(statearr_17081[(18)] = inst_16957);

return statearr_17081;
})();
var statearr_17082_17158 = state_17062__$1;
(statearr_17082_17158[(2)] = null);

(statearr_17082_17158[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (21))){
var inst_16984 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17086_17159 = state_17062__$1;
(statearr_17086_17159[(2)] = inst_16984);

(statearr_17086_17159[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (31))){
var inst_17010 = (state_17062[(11)]);
var inst_17014 = done(null);
var inst_17015 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17010);
var state_17062__$1 = (function (){var statearr_17087 = state_17062;
(statearr_17087[(19)] = inst_17014);

return statearr_17087;
})();
var statearr_17088_17160 = state_17062__$1;
(statearr_17088_17160[(2)] = inst_17015);

(statearr_17088_17160[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (32))){
var inst_17003 = (state_17062[(9)]);
var inst_17002 = (state_17062[(20)]);
var inst_17004 = (state_17062[(21)]);
var inst_17005 = (state_17062[(12)]);
var inst_17017 = (state_17062[(2)]);
var inst_17018 = (inst_17005 + (1));
var tmp17083 = inst_17003;
var tmp17084 = inst_17002;
var tmp17085 = inst_17004;
var inst_17002__$1 = tmp17084;
var inst_17003__$1 = tmp17083;
var inst_17004__$1 = tmp17085;
var inst_17005__$1 = inst_17018;
var state_17062__$1 = (function (){var statearr_17089 = state_17062;
(statearr_17089[(9)] = inst_17003__$1);

(statearr_17089[(22)] = inst_17017);

(statearr_17089[(20)] = inst_17002__$1);

(statearr_17089[(21)] = inst_17004__$1);

(statearr_17089[(12)] = inst_17005__$1);

return statearr_17089;
})();
var statearr_17090_17161 = state_17062__$1;
(statearr_17090_17161[(2)] = null);

(statearr_17090_17161[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (40))){
var inst_17030 = (state_17062[(23)]);
var inst_17034 = done(null);
var inst_17035 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17030);
var state_17062__$1 = (function (){var statearr_17091 = state_17062;
(statearr_17091[(24)] = inst_17034);

return statearr_17091;
})();
var statearr_17092_17162 = state_17062__$1;
(statearr_17092_17162[(2)] = inst_17035);

(statearr_17092_17162[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (33))){
var inst_17021 = (state_17062[(25)]);
var inst_17023 = cljs.core.chunked_seq_QMARK_(inst_17021);
var state_17062__$1 = state_17062;
if(inst_17023){
var statearr_17093_17163 = state_17062__$1;
(statearr_17093_17163[(1)] = (36));

} else {
var statearr_17094_17164 = state_17062__$1;
(statearr_17094_17164[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (13))){
var inst_16951 = (state_17062[(26)]);
var inst_16954 = cljs.core.async.close_BANG_(inst_16951);
var state_17062__$1 = state_17062;
var statearr_17095_17165 = state_17062__$1;
(statearr_17095_17165[(2)] = inst_16954);

(statearr_17095_17165[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (22))){
var inst_16974 = (state_17062[(8)]);
var inst_16977 = cljs.core.async.close_BANG_(inst_16974);
var state_17062__$1 = state_17062;
var statearr_17096_17166 = state_17062__$1;
(statearr_17096_17166[(2)] = inst_16977);

(statearr_17096_17166[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (36))){
var inst_17021 = (state_17062[(25)]);
var inst_17025 = cljs.core.chunk_first(inst_17021);
var inst_17026 = cljs.core.chunk_rest(inst_17021);
var inst_17027 = cljs.core.count(inst_17025);
var inst_17002 = inst_17026;
var inst_17003 = inst_17025;
var inst_17004 = inst_17027;
var inst_17005 = (0);
var state_17062__$1 = (function (){var statearr_17097 = state_17062;
(statearr_17097[(9)] = inst_17003);

(statearr_17097[(20)] = inst_17002);

(statearr_17097[(21)] = inst_17004);

(statearr_17097[(12)] = inst_17005);

return statearr_17097;
})();
var statearr_17098_17167 = state_17062__$1;
(statearr_17098_17167[(2)] = null);

(statearr_17098_17167[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (41))){
var inst_17021 = (state_17062[(25)]);
var inst_17037 = (state_17062[(2)]);
var inst_17038 = cljs.core.next(inst_17021);
var inst_17002 = inst_17038;
var inst_17003 = null;
var inst_17004 = (0);
var inst_17005 = (0);
var state_17062__$1 = (function (){var statearr_17099 = state_17062;
(statearr_17099[(9)] = inst_17003);

(statearr_17099[(20)] = inst_17002);

(statearr_17099[(21)] = inst_17004);

(statearr_17099[(12)] = inst_17005);

(statearr_17099[(27)] = inst_17037);

return statearr_17099;
})();
var statearr_17100_17168 = state_17062__$1;
(statearr_17100_17168[(2)] = null);

(statearr_17100_17168[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (43))){
var state_17062__$1 = state_17062;
var statearr_17101_17169 = state_17062__$1;
(statearr_17101_17169[(2)] = null);

(statearr_17101_17169[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (29))){
var inst_17046 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17102_17170 = state_17062__$1;
(statearr_17102_17170[(2)] = inst_17046);

(statearr_17102_17170[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (44))){
var inst_17055 = (state_17062[(2)]);
var state_17062__$1 = (function (){var statearr_17103 = state_17062;
(statearr_17103[(28)] = inst_17055);

return statearr_17103;
})();
var statearr_17104_17171 = state_17062__$1;
(statearr_17104_17171[(2)] = null);

(statearr_17104_17171[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (6))){
var inst_16994 = (state_17062[(29)]);
var inst_16993 = cljs.core.deref(cs);
var inst_16994__$1 = cljs.core.keys(inst_16993);
var inst_16995 = cljs.core.count(inst_16994__$1);
var inst_16996 = cljs.core.reset_BANG_(dctr,inst_16995);
var inst_17001 = cljs.core.seq(inst_16994__$1);
var inst_17002 = inst_17001;
var inst_17003 = null;
var inst_17004 = (0);
var inst_17005 = (0);
var state_17062__$1 = (function (){var statearr_17105 = state_17062;
(statearr_17105[(9)] = inst_17003);

(statearr_17105[(30)] = inst_16996);

(statearr_17105[(20)] = inst_17002);

(statearr_17105[(21)] = inst_17004);

(statearr_17105[(12)] = inst_17005);

(statearr_17105[(29)] = inst_16994__$1);

return statearr_17105;
})();
var statearr_17106_17172 = state_17062__$1;
(statearr_17106_17172[(2)] = null);

(statearr_17106_17172[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (28))){
var inst_17021 = (state_17062[(25)]);
var inst_17002 = (state_17062[(20)]);
var inst_17021__$1 = cljs.core.seq(inst_17002);
var state_17062__$1 = (function (){var statearr_17107 = state_17062;
(statearr_17107[(25)] = inst_17021__$1);

return statearr_17107;
})();
if(inst_17021__$1){
var statearr_17108_17173 = state_17062__$1;
(statearr_17108_17173[(1)] = (33));

} else {
var statearr_17109_17174 = state_17062__$1;
(statearr_17109_17174[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (25))){
var inst_17004 = (state_17062[(21)]);
var inst_17005 = (state_17062[(12)]);
var inst_17007 = (inst_17005 < inst_17004);
var inst_17008 = inst_17007;
var state_17062__$1 = state_17062;
if(cljs.core.truth_(inst_17008)){
var statearr_17110_17175 = state_17062__$1;
(statearr_17110_17175[(1)] = (27));

} else {
var statearr_17111_17176 = state_17062__$1;
(statearr_17111_17176[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (34))){
var state_17062__$1 = state_17062;
var statearr_17112_17177 = state_17062__$1;
(statearr_17112_17177[(2)] = null);

(statearr_17112_17177[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (17))){
var state_17062__$1 = state_17062;
var statearr_17113_17178 = state_17062__$1;
(statearr_17113_17178[(2)] = null);

(statearr_17113_17178[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (3))){
var inst_17060 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17062__$1,inst_17060);
} else {
if((state_val_17063 === (12))){
var inst_16989 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17114_17179 = state_17062__$1;
(statearr_17114_17179[(2)] = inst_16989);

(statearr_17114_17179[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (2))){
var state_17062__$1 = state_17062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17062__$1,(4),ch);
} else {
if((state_val_17063 === (23))){
var state_17062__$1 = state_17062;
var statearr_17115_17180 = state_17062__$1;
(statearr_17115_17180[(2)] = null);

(statearr_17115_17180[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (35))){
var inst_17044 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17116_17181 = state_17062__$1;
(statearr_17116_17181[(2)] = inst_17044);

(statearr_17116_17181[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (19))){
var inst_16961 = (state_17062[(7)]);
var inst_16965 = cljs.core.chunk_first(inst_16961);
var inst_16966 = cljs.core.chunk_rest(inst_16961);
var inst_16967 = cljs.core.count(inst_16965);
var inst_16939 = inst_16966;
var inst_16940 = inst_16965;
var inst_16941 = inst_16967;
var inst_16942 = (0);
var state_17062__$1 = (function (){var statearr_17117 = state_17062;
(statearr_17117[(13)] = inst_16942);

(statearr_17117[(15)] = inst_16941);

(statearr_17117[(16)] = inst_16940);

(statearr_17117[(17)] = inst_16939);

return statearr_17117;
})();
var statearr_17118_17182 = state_17062__$1;
(statearr_17118_17182[(2)] = null);

(statearr_17118_17182[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (11))){
var inst_16961 = (state_17062[(7)]);
var inst_16939 = (state_17062[(17)]);
var inst_16961__$1 = cljs.core.seq(inst_16939);
var state_17062__$1 = (function (){var statearr_17119 = state_17062;
(statearr_17119[(7)] = inst_16961__$1);

return statearr_17119;
})();
if(inst_16961__$1){
var statearr_17120_17183 = state_17062__$1;
(statearr_17120_17183[(1)] = (16));

} else {
var statearr_17121_17184 = state_17062__$1;
(statearr_17121_17184[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (9))){
var inst_16991 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17122_17185 = state_17062__$1;
(statearr_17122_17185[(2)] = inst_16991);

(statearr_17122_17185[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (5))){
var inst_16937 = cljs.core.deref(cs);
var inst_16938 = cljs.core.seq(inst_16937);
var inst_16939 = inst_16938;
var inst_16940 = null;
var inst_16941 = (0);
var inst_16942 = (0);
var state_17062__$1 = (function (){var statearr_17123 = state_17062;
(statearr_17123[(13)] = inst_16942);

(statearr_17123[(15)] = inst_16941);

(statearr_17123[(16)] = inst_16940);

(statearr_17123[(17)] = inst_16939);

return statearr_17123;
})();
var statearr_17124_17186 = state_17062__$1;
(statearr_17124_17186[(2)] = null);

(statearr_17124_17186[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (14))){
var state_17062__$1 = state_17062;
var statearr_17125_17187 = state_17062__$1;
(statearr_17125_17187[(2)] = null);

(statearr_17125_17187[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (45))){
var inst_17052 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17126_17188 = state_17062__$1;
(statearr_17126_17188[(2)] = inst_17052);

(statearr_17126_17188[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (26))){
var inst_16994 = (state_17062[(29)]);
var inst_17048 = (state_17062[(2)]);
var inst_17049 = cljs.core.seq(inst_16994);
var state_17062__$1 = (function (){var statearr_17127 = state_17062;
(statearr_17127[(31)] = inst_17048);

return statearr_17127;
})();
if(inst_17049){
var statearr_17128_17189 = state_17062__$1;
(statearr_17128_17189[(1)] = (42));

} else {
var statearr_17129_17190 = state_17062__$1;
(statearr_17129_17190[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (16))){
var inst_16961 = (state_17062[(7)]);
var inst_16963 = cljs.core.chunked_seq_QMARK_(inst_16961);
var state_17062__$1 = state_17062;
if(inst_16963){
var statearr_17130_17191 = state_17062__$1;
(statearr_17130_17191[(1)] = (19));

} else {
var statearr_17131_17192 = state_17062__$1;
(statearr_17131_17192[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (38))){
var inst_17041 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17132_17193 = state_17062__$1;
(statearr_17132_17193[(2)] = inst_17041);

(statearr_17132_17193[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (30))){
var state_17062__$1 = state_17062;
var statearr_17133_17194 = state_17062__$1;
(statearr_17133_17194[(2)] = null);

(statearr_17133_17194[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (10))){
var inst_16942 = (state_17062[(13)]);
var inst_16940 = (state_17062[(16)]);
var inst_16950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16940,inst_16942);
var inst_16951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16950,(0),null);
var inst_16952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16950,(1),null);
var state_17062__$1 = (function (){var statearr_17134 = state_17062;
(statearr_17134[(26)] = inst_16951);

return statearr_17134;
})();
if(cljs.core.truth_(inst_16952)){
var statearr_17135_17195 = state_17062__$1;
(statearr_17135_17195[(1)] = (13));

} else {
var statearr_17136_17196 = state_17062__$1;
(statearr_17136_17196[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (18))){
var inst_16987 = (state_17062[(2)]);
var state_17062__$1 = state_17062;
var statearr_17137_17197 = state_17062__$1;
(statearr_17137_17197[(2)] = inst_16987);

(statearr_17137_17197[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (42))){
var state_17062__$1 = state_17062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17062__$1,(45),dchan);
} else {
if((state_val_17063 === (37))){
var inst_17021 = (state_17062[(25)]);
var inst_17030 = (state_17062[(23)]);
var inst_16930 = (state_17062[(10)]);
var inst_17030__$1 = cljs.core.first(inst_17021);
var inst_17031 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17030__$1,inst_16930,done);
var state_17062__$1 = (function (){var statearr_17138 = state_17062;
(statearr_17138[(23)] = inst_17030__$1);

return statearr_17138;
})();
if(cljs.core.truth_(inst_17031)){
var statearr_17139_17198 = state_17062__$1;
(statearr_17139_17198[(1)] = (39));

} else {
var statearr_17140_17199 = state_17062__$1;
(statearr_17140_17199[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17063 === (8))){
var inst_16942 = (state_17062[(13)]);
var inst_16941 = (state_17062[(15)]);
var inst_16944 = (inst_16942 < inst_16941);
var inst_16945 = inst_16944;
var state_17062__$1 = state_17062;
if(cljs.core.truth_(inst_16945)){
var statearr_17141_17200 = state_17062__$1;
(statearr_17141_17200[(1)] = (10));

} else {
var statearr_17142_17201 = state_17062__$1;
(statearr_17142_17201[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___17147,cs,m,dchan,dctr,done))
;
return ((function (switch__16240__auto__,c__16340__auto___17147,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16241__auto__ = null;
var cljs$core$async$mult_$_state_machine__16241__auto____0 = (function (){
var statearr_17143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17143[(0)] = cljs$core$async$mult_$_state_machine__16241__auto__);

(statearr_17143[(1)] = (1));

return statearr_17143;
});
var cljs$core$async$mult_$_state_machine__16241__auto____1 = (function (state_17062){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17062);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17144){if((e17144 instanceof Object)){
var ex__16244__auto__ = e17144;
var statearr_17145_17202 = state_17062;
(statearr_17145_17202[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17062);

return cljs.core.cst$kw$recur;
} else {
throw e17144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__17203 = state_17062;
state_17062 = G__17203;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16241__auto__ = function(state_17062){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16241__auto____1.call(this,state_17062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16241__auto____0;
cljs$core$async$mult_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16241__auto____1;
return cljs$core$async$mult_$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___17147,cs,m,dchan,dctr,done))
})();
var state__16342__auto__ = (function (){var statearr_17146 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17146[(6)] = c__16340__auto___17147);

return statearr_17146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___17147,cs,m,dchan,dctr,done))
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
var G__17205 = arguments.length;
switch (G__17205) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8847__auto__.call(null,m,ch));
} else {
var m__8847__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8847__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8847__auto__.call(null,m,ch));
} else {
var m__8847__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8847__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8847__auto__.call(null,m));
} else {
var m__8847__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8847__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8847__auto__.call(null,m,state_map));
} else {
var m__8847__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8847__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8846__auto__ = (((m == null))?null:m);
var m__8847__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8847__auto__.call(null,m,mode));
} else {
var m__8847__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8847__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9339__auto__ = [];
var len__9332__auto___17217 = arguments.length;
var i__9333__auto___17218 = (0);
while(true){
if((i__9333__auto___17218 < len__9332__auto___17217)){
args__9339__auto__.push((arguments[i__9333__auto___17218]));

var G__17219 = (i__9333__auto___17218 + (1));
i__9333__auto___17218 = G__17219;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((3) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9340__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17211){
var map__17212 = p__17211;
var map__17212__$1 = ((((!((map__17212 == null)))?((((map__17212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17212):map__17212);
var opts = map__17212__$1;
var statearr_17214_17220 = state;
(statearr_17214_17220[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__17212,map__17212__$1,opts){
return (function (val){
var statearr_17215_17221 = state;
(statearr_17215_17221[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17212,map__17212__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_17216_17222 = state;
(statearr_17216_17222[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17207){
var G__17208 = cljs.core.first(seq17207);
var seq17207__$1 = cljs.core.next(seq17207);
var G__17209 = cljs.core.first(seq17207__$1);
var seq17207__$2 = cljs.core.next(seq17207__$1);
var G__17210 = cljs.core.first(seq17207__$2);
var seq17207__$3 = cljs.core.next(seq17207__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17208,G__17209,G__17210,seq17207__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17223 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17224){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17224 = meta17224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17225,meta17224__$1){
var self__ = this;
var _17225__$1 = this;
return (new cljs.core.async.t_cljs$core$async17223(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17224__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17225){
var self__ = this;
var _17225__$1 = this;
return self__.meta17224;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta17224], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17223";

cljs.core.async.t_cljs$core$async17223.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async17223");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17223 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17223(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17224){
return (new cljs.core.async.t_cljs$core$async17223(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17224));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17223(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16340__auto___17387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___17387,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___17387,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17327){
var state_val_17328 = (state_17327[(1)]);
if((state_val_17328 === (7))){
var inst_17242 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
var statearr_17329_17388 = state_17327__$1;
(statearr_17329_17388[(2)] = inst_17242);

(statearr_17329_17388[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (20))){
var inst_17254 = (state_17327[(7)]);
var state_17327__$1 = state_17327;
var statearr_17330_17389 = state_17327__$1;
(statearr_17330_17389[(2)] = inst_17254);

(statearr_17330_17389[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (27))){
var state_17327__$1 = state_17327;
var statearr_17331_17390 = state_17327__$1;
(statearr_17331_17390[(2)] = null);

(statearr_17331_17390[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (1))){
var inst_17229 = (state_17327[(8)]);
var inst_17229__$1 = calc_state();
var inst_17231 = (inst_17229__$1 == null);
var inst_17232 = cljs.core.not(inst_17231);
var state_17327__$1 = (function (){var statearr_17332 = state_17327;
(statearr_17332[(8)] = inst_17229__$1);

return statearr_17332;
})();
if(inst_17232){
var statearr_17333_17391 = state_17327__$1;
(statearr_17333_17391[(1)] = (2));

} else {
var statearr_17334_17392 = state_17327__$1;
(statearr_17334_17392[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (24))){
var inst_17301 = (state_17327[(9)]);
var inst_17287 = (state_17327[(10)]);
var inst_17278 = (state_17327[(11)]);
var inst_17301__$1 = (inst_17278.cljs$core$IFn$_invoke$arity$1 ? inst_17278.cljs$core$IFn$_invoke$arity$1(inst_17287) : inst_17278.call(null,inst_17287));
var state_17327__$1 = (function (){var statearr_17335 = state_17327;
(statearr_17335[(9)] = inst_17301__$1);

return statearr_17335;
})();
if(cljs.core.truth_(inst_17301__$1)){
var statearr_17336_17393 = state_17327__$1;
(statearr_17336_17393[(1)] = (29));

} else {
var statearr_17337_17394 = state_17327__$1;
(statearr_17337_17394[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (4))){
var inst_17245 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17245)){
var statearr_17338_17395 = state_17327__$1;
(statearr_17338_17395[(1)] = (8));

} else {
var statearr_17339_17396 = state_17327__$1;
(statearr_17339_17396[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (15))){
var inst_17272 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17272)){
var statearr_17340_17397 = state_17327__$1;
(statearr_17340_17397[(1)] = (19));

} else {
var statearr_17341_17398 = state_17327__$1;
(statearr_17341_17398[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (21))){
var inst_17277 = (state_17327[(12)]);
var inst_17277__$1 = (state_17327[(2)]);
var inst_17278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17277__$1,cljs.core.cst$kw$solos);
var inst_17279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17277__$1,cljs.core.cst$kw$mutes);
var inst_17280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17277__$1,cljs.core.cst$kw$reads);
var state_17327__$1 = (function (){var statearr_17342 = state_17327;
(statearr_17342[(12)] = inst_17277__$1);

(statearr_17342[(13)] = inst_17279);

(statearr_17342[(11)] = inst_17278);

return statearr_17342;
})();
return cljs.core.async.ioc_alts_BANG_(state_17327__$1,(22),inst_17280);
} else {
if((state_val_17328 === (31))){
var inst_17309 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17309)){
var statearr_17343_17399 = state_17327__$1;
(statearr_17343_17399[(1)] = (32));

} else {
var statearr_17344_17400 = state_17327__$1;
(statearr_17344_17400[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (32))){
var inst_17286 = (state_17327[(14)]);
var state_17327__$1 = state_17327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17327__$1,(35),out,inst_17286);
} else {
if((state_val_17328 === (33))){
var inst_17277 = (state_17327[(12)]);
var inst_17254 = inst_17277;
var state_17327__$1 = (function (){var statearr_17345 = state_17327;
(statearr_17345[(7)] = inst_17254);

return statearr_17345;
})();
var statearr_17346_17401 = state_17327__$1;
(statearr_17346_17401[(2)] = null);

(statearr_17346_17401[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (13))){
var inst_17254 = (state_17327[(7)]);
var inst_17261 = inst_17254.cljs$lang$protocol_mask$partition0$;
var inst_17262 = (inst_17261 & (64));
var inst_17263 = inst_17254.cljs$core$ISeq$;
var inst_17264 = (cljs.core.PROTOCOL_SENTINEL === inst_17263);
var inst_17265 = (inst_17262) || (inst_17264);
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17265)){
var statearr_17347_17402 = state_17327__$1;
(statearr_17347_17402[(1)] = (16));

} else {
var statearr_17348_17403 = state_17327__$1;
(statearr_17348_17403[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (22))){
var inst_17287 = (state_17327[(10)]);
var inst_17286 = (state_17327[(14)]);
var inst_17285 = (state_17327[(2)]);
var inst_17286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17285,(0),null);
var inst_17287__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17285,(1),null);
var inst_17288 = (inst_17286__$1 == null);
var inst_17289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17287__$1,change);
var inst_17290 = (inst_17288) || (inst_17289);
var state_17327__$1 = (function (){var statearr_17349 = state_17327;
(statearr_17349[(10)] = inst_17287__$1);

(statearr_17349[(14)] = inst_17286__$1);

return statearr_17349;
})();
if(cljs.core.truth_(inst_17290)){
var statearr_17350_17404 = state_17327__$1;
(statearr_17350_17404[(1)] = (23));

} else {
var statearr_17351_17405 = state_17327__$1;
(statearr_17351_17405[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (36))){
var inst_17277 = (state_17327[(12)]);
var inst_17254 = inst_17277;
var state_17327__$1 = (function (){var statearr_17352 = state_17327;
(statearr_17352[(7)] = inst_17254);

return statearr_17352;
})();
var statearr_17353_17406 = state_17327__$1;
(statearr_17353_17406[(2)] = null);

(statearr_17353_17406[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (29))){
var inst_17301 = (state_17327[(9)]);
var state_17327__$1 = state_17327;
var statearr_17354_17407 = state_17327__$1;
(statearr_17354_17407[(2)] = inst_17301);

(statearr_17354_17407[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (6))){
var state_17327__$1 = state_17327;
var statearr_17355_17408 = state_17327__$1;
(statearr_17355_17408[(2)] = false);

(statearr_17355_17408[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (28))){
var inst_17297 = (state_17327[(2)]);
var inst_17298 = calc_state();
var inst_17254 = inst_17298;
var state_17327__$1 = (function (){var statearr_17356 = state_17327;
(statearr_17356[(7)] = inst_17254);

(statearr_17356[(15)] = inst_17297);

return statearr_17356;
})();
var statearr_17357_17409 = state_17327__$1;
(statearr_17357_17409[(2)] = null);

(statearr_17357_17409[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (25))){
var inst_17323 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
var statearr_17358_17410 = state_17327__$1;
(statearr_17358_17410[(2)] = inst_17323);

(statearr_17358_17410[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (34))){
var inst_17321 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
var statearr_17359_17411 = state_17327__$1;
(statearr_17359_17411[(2)] = inst_17321);

(statearr_17359_17411[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (17))){
var state_17327__$1 = state_17327;
var statearr_17360_17412 = state_17327__$1;
(statearr_17360_17412[(2)] = false);

(statearr_17360_17412[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (3))){
var state_17327__$1 = state_17327;
var statearr_17361_17413 = state_17327__$1;
(statearr_17361_17413[(2)] = false);

(statearr_17361_17413[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (12))){
var inst_17325 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17327__$1,inst_17325);
} else {
if((state_val_17328 === (2))){
var inst_17229 = (state_17327[(8)]);
var inst_17234 = inst_17229.cljs$lang$protocol_mask$partition0$;
var inst_17235 = (inst_17234 & (64));
var inst_17236 = inst_17229.cljs$core$ISeq$;
var inst_17237 = (cljs.core.PROTOCOL_SENTINEL === inst_17236);
var inst_17238 = (inst_17235) || (inst_17237);
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17238)){
var statearr_17362_17414 = state_17327__$1;
(statearr_17362_17414[(1)] = (5));

} else {
var statearr_17363_17415 = state_17327__$1;
(statearr_17363_17415[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (23))){
var inst_17286 = (state_17327[(14)]);
var inst_17292 = (inst_17286 == null);
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17292)){
var statearr_17364_17416 = state_17327__$1;
(statearr_17364_17416[(1)] = (26));

} else {
var statearr_17365_17417 = state_17327__$1;
(statearr_17365_17417[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (35))){
var inst_17312 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
if(cljs.core.truth_(inst_17312)){
var statearr_17366_17418 = state_17327__$1;
(statearr_17366_17418[(1)] = (36));

} else {
var statearr_17367_17419 = state_17327__$1;
(statearr_17367_17419[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (19))){
var inst_17254 = (state_17327[(7)]);
var inst_17274 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17254);
var state_17327__$1 = state_17327;
var statearr_17368_17420 = state_17327__$1;
(statearr_17368_17420[(2)] = inst_17274);

(statearr_17368_17420[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (11))){
var inst_17254 = (state_17327[(7)]);
var inst_17258 = (inst_17254 == null);
var inst_17259 = cljs.core.not(inst_17258);
var state_17327__$1 = state_17327;
if(inst_17259){
var statearr_17369_17421 = state_17327__$1;
(statearr_17369_17421[(1)] = (13));

} else {
var statearr_17370_17422 = state_17327__$1;
(statearr_17370_17422[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (9))){
var inst_17229 = (state_17327[(8)]);
var state_17327__$1 = state_17327;
var statearr_17371_17423 = state_17327__$1;
(statearr_17371_17423[(2)] = inst_17229);

(statearr_17371_17423[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (5))){
var state_17327__$1 = state_17327;
var statearr_17372_17424 = state_17327__$1;
(statearr_17372_17424[(2)] = true);

(statearr_17372_17424[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (14))){
var state_17327__$1 = state_17327;
var statearr_17373_17425 = state_17327__$1;
(statearr_17373_17425[(2)] = false);

(statearr_17373_17425[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (26))){
var inst_17287 = (state_17327[(10)]);
var inst_17294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17287);
var state_17327__$1 = state_17327;
var statearr_17374_17426 = state_17327__$1;
(statearr_17374_17426[(2)] = inst_17294);

(statearr_17374_17426[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (16))){
var state_17327__$1 = state_17327;
var statearr_17375_17427 = state_17327__$1;
(statearr_17375_17427[(2)] = true);

(statearr_17375_17427[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (38))){
var inst_17317 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
var statearr_17376_17428 = state_17327__$1;
(statearr_17376_17428[(2)] = inst_17317);

(statearr_17376_17428[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (30))){
var inst_17279 = (state_17327[(13)]);
var inst_17287 = (state_17327[(10)]);
var inst_17278 = (state_17327[(11)]);
var inst_17304 = cljs.core.empty_QMARK_(inst_17278);
var inst_17305 = (inst_17279.cljs$core$IFn$_invoke$arity$1 ? inst_17279.cljs$core$IFn$_invoke$arity$1(inst_17287) : inst_17279.call(null,inst_17287));
var inst_17306 = cljs.core.not(inst_17305);
var inst_17307 = (inst_17304) && (inst_17306);
var state_17327__$1 = state_17327;
var statearr_17377_17429 = state_17327__$1;
(statearr_17377_17429[(2)] = inst_17307);

(statearr_17377_17429[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (10))){
var inst_17229 = (state_17327[(8)]);
var inst_17250 = (state_17327[(2)]);
var inst_17251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17250,cljs.core.cst$kw$solos);
var inst_17252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17250,cljs.core.cst$kw$mutes);
var inst_17253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17250,cljs.core.cst$kw$reads);
var inst_17254 = inst_17229;
var state_17327__$1 = (function (){var statearr_17378 = state_17327;
(statearr_17378[(7)] = inst_17254);

(statearr_17378[(16)] = inst_17251);

(statearr_17378[(17)] = inst_17253);

(statearr_17378[(18)] = inst_17252);

return statearr_17378;
})();
var statearr_17379_17430 = state_17327__$1;
(statearr_17379_17430[(2)] = null);

(statearr_17379_17430[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (18))){
var inst_17269 = (state_17327[(2)]);
var state_17327__$1 = state_17327;
var statearr_17380_17431 = state_17327__$1;
(statearr_17380_17431[(2)] = inst_17269);

(statearr_17380_17431[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (37))){
var state_17327__$1 = state_17327;
var statearr_17381_17432 = state_17327__$1;
(statearr_17381_17432[(2)] = null);

(statearr_17381_17432[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17328 === (8))){
var inst_17229 = (state_17327[(8)]);
var inst_17247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17229);
var state_17327__$1 = state_17327;
var statearr_17382_17433 = state_17327__$1;
(statearr_17382_17433[(2)] = inst_17247);

(statearr_17382_17433[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___17387,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16240__auto__,c__16340__auto___17387,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16241__auto__ = null;
var cljs$core$async$mix_$_state_machine__16241__auto____0 = (function (){
var statearr_17383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17383[(0)] = cljs$core$async$mix_$_state_machine__16241__auto__);

(statearr_17383[(1)] = (1));

return statearr_17383;
});
var cljs$core$async$mix_$_state_machine__16241__auto____1 = (function (state_17327){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17327);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17384){if((e17384 instanceof Object)){
var ex__16244__auto__ = e17384;
var statearr_17385_17434 = state_17327;
(statearr_17385_17434[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17327);

return cljs.core.cst$kw$recur;
} else {
throw e17384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__17435 = state_17327;
state_17327 = G__17435;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16241__auto__ = function(state_17327){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16241__auto____1.call(this,state_17327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16241__auto____0;
cljs$core$async$mix_$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16241__auto____1;
return cljs$core$async$mix_$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___17387,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16342__auto__ = (function (){var statearr_17386 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17386[(6)] = c__16340__auto___17387);

return statearr_17386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___17387,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8846__auto__ = (((p == null))?null:p);
var m__8847__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8847__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8847__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8847__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8846__auto__ = (((p == null))?null:p);
var m__8847__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8847__auto__.call(null,p,v,ch));
} else {
var m__8847__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8847__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17437 = arguments.length;
switch (G__17437) {
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
var x__8846__auto__ = (((p == null))?null:p);
var m__8847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8847__auto__.call(null,p));
} else {
var m__8847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8847__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8846__auto__ = (((p == null))?null:p);
var m__8847__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8846__auto__)]);
if(!((m__8847__auto__ == null))){
return (m__8847__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8847__auto__.call(null,p,v));
} else {
var m__8847__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8847__auto____$1 == null))){
return (m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8847__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8847__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__17441 = arguments.length;
switch (G__17441) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8163__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__8163__auto__)){
return or__8163__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__8163__auto__,mults){
return (function (p1__17439_SHARP_){
if(cljs.core.truth_((p1__17439_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17439_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17439_SHARP_.call(null,topic)))){
return p1__17439_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17439_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__8163__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17442 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17443){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17443 = meta17443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17444,meta17443__$1){
var self__ = this;
var _17444__$1 = this;
return (new cljs.core.async.t_cljs$core$async17442(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17443__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17444){
var self__ = this;
var _17444__$1 = this;
return self__.meta17443;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17443], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17442";

cljs.core.async.t_cljs$core$async17442.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async17442");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17442 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17442(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17443){
return (new cljs.core.async.t_cljs$core$async17442(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17443));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17442(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16340__auto___17562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___17562,mults,ensure_mult,p){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___17562,mults,ensure_mult,p){
return (function (state_17516){
var state_val_17517 = (state_17516[(1)]);
if((state_val_17517 === (7))){
var inst_17512 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17518_17563 = state_17516__$1;
(statearr_17518_17563[(2)] = inst_17512);

(statearr_17518_17563[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (20))){
var state_17516__$1 = state_17516;
var statearr_17519_17564 = state_17516__$1;
(statearr_17519_17564[(2)] = null);

(statearr_17519_17564[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (1))){
var state_17516__$1 = state_17516;
var statearr_17520_17565 = state_17516__$1;
(statearr_17520_17565[(2)] = null);

(statearr_17520_17565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (24))){
var inst_17495 = (state_17516[(7)]);
var inst_17504 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17495);
var state_17516__$1 = state_17516;
var statearr_17521_17566 = state_17516__$1;
(statearr_17521_17566[(2)] = inst_17504);

(statearr_17521_17566[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (4))){
var inst_17447 = (state_17516[(8)]);
var inst_17447__$1 = (state_17516[(2)]);
var inst_17448 = (inst_17447__$1 == null);
var state_17516__$1 = (function (){var statearr_17522 = state_17516;
(statearr_17522[(8)] = inst_17447__$1);

return statearr_17522;
})();
if(cljs.core.truth_(inst_17448)){
var statearr_17523_17567 = state_17516__$1;
(statearr_17523_17567[(1)] = (5));

} else {
var statearr_17524_17568 = state_17516__$1;
(statearr_17524_17568[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (15))){
var inst_17489 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17525_17569 = state_17516__$1;
(statearr_17525_17569[(2)] = inst_17489);

(statearr_17525_17569[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (21))){
var inst_17509 = (state_17516[(2)]);
var state_17516__$1 = (function (){var statearr_17526 = state_17516;
(statearr_17526[(9)] = inst_17509);

return statearr_17526;
})();
var statearr_17527_17570 = state_17516__$1;
(statearr_17527_17570[(2)] = null);

(statearr_17527_17570[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (13))){
var inst_17471 = (state_17516[(10)]);
var inst_17473 = cljs.core.chunked_seq_QMARK_(inst_17471);
var state_17516__$1 = state_17516;
if(inst_17473){
var statearr_17528_17571 = state_17516__$1;
(statearr_17528_17571[(1)] = (16));

} else {
var statearr_17529_17572 = state_17516__$1;
(statearr_17529_17572[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (22))){
var inst_17501 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
if(cljs.core.truth_(inst_17501)){
var statearr_17530_17573 = state_17516__$1;
(statearr_17530_17573[(1)] = (23));

} else {
var statearr_17531_17574 = state_17516__$1;
(statearr_17531_17574[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (6))){
var inst_17495 = (state_17516[(7)]);
var inst_17447 = (state_17516[(8)]);
var inst_17497 = (state_17516[(11)]);
var inst_17495__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17447) : topic_fn.call(null,inst_17447));
var inst_17496 = cljs.core.deref(mults);
var inst_17497__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17496,inst_17495__$1);
var state_17516__$1 = (function (){var statearr_17532 = state_17516;
(statearr_17532[(7)] = inst_17495__$1);

(statearr_17532[(11)] = inst_17497__$1);

return statearr_17532;
})();
if(cljs.core.truth_(inst_17497__$1)){
var statearr_17533_17575 = state_17516__$1;
(statearr_17533_17575[(1)] = (19));

} else {
var statearr_17534_17576 = state_17516__$1;
(statearr_17534_17576[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (25))){
var inst_17506 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17535_17577 = state_17516__$1;
(statearr_17535_17577[(2)] = inst_17506);

(statearr_17535_17577[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (17))){
var inst_17471 = (state_17516[(10)]);
var inst_17480 = cljs.core.first(inst_17471);
var inst_17481 = cljs.core.async.muxch_STAR_(inst_17480);
var inst_17482 = cljs.core.async.close_BANG_(inst_17481);
var inst_17483 = cljs.core.next(inst_17471);
var inst_17457 = inst_17483;
var inst_17458 = null;
var inst_17459 = (0);
var inst_17460 = (0);
var state_17516__$1 = (function (){var statearr_17536 = state_17516;
(statearr_17536[(12)] = inst_17459);

(statearr_17536[(13)] = inst_17457);

(statearr_17536[(14)] = inst_17460);

(statearr_17536[(15)] = inst_17482);

(statearr_17536[(16)] = inst_17458);

return statearr_17536;
})();
var statearr_17537_17578 = state_17516__$1;
(statearr_17537_17578[(2)] = null);

(statearr_17537_17578[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (3))){
var inst_17514 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17516__$1,inst_17514);
} else {
if((state_val_17517 === (12))){
var inst_17491 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17538_17579 = state_17516__$1;
(statearr_17538_17579[(2)] = inst_17491);

(statearr_17538_17579[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (2))){
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17516__$1,(4),ch);
} else {
if((state_val_17517 === (23))){
var state_17516__$1 = state_17516;
var statearr_17539_17580 = state_17516__$1;
(statearr_17539_17580[(2)] = null);

(statearr_17539_17580[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (19))){
var inst_17447 = (state_17516[(8)]);
var inst_17497 = (state_17516[(11)]);
var inst_17499 = cljs.core.async.muxch_STAR_(inst_17497);
var state_17516__$1 = state_17516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17516__$1,(22),inst_17499,inst_17447);
} else {
if((state_val_17517 === (11))){
var inst_17471 = (state_17516[(10)]);
var inst_17457 = (state_17516[(13)]);
var inst_17471__$1 = cljs.core.seq(inst_17457);
var state_17516__$1 = (function (){var statearr_17540 = state_17516;
(statearr_17540[(10)] = inst_17471__$1);

return statearr_17540;
})();
if(inst_17471__$1){
var statearr_17541_17581 = state_17516__$1;
(statearr_17541_17581[(1)] = (13));

} else {
var statearr_17542_17582 = state_17516__$1;
(statearr_17542_17582[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (9))){
var inst_17493 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17543_17583 = state_17516__$1;
(statearr_17543_17583[(2)] = inst_17493);

(statearr_17543_17583[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (5))){
var inst_17454 = cljs.core.deref(mults);
var inst_17455 = cljs.core.vals(inst_17454);
var inst_17456 = cljs.core.seq(inst_17455);
var inst_17457 = inst_17456;
var inst_17458 = null;
var inst_17459 = (0);
var inst_17460 = (0);
var state_17516__$1 = (function (){var statearr_17544 = state_17516;
(statearr_17544[(12)] = inst_17459);

(statearr_17544[(13)] = inst_17457);

(statearr_17544[(14)] = inst_17460);

(statearr_17544[(16)] = inst_17458);

return statearr_17544;
})();
var statearr_17545_17584 = state_17516__$1;
(statearr_17545_17584[(2)] = null);

(statearr_17545_17584[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (14))){
var state_17516__$1 = state_17516;
var statearr_17549_17585 = state_17516__$1;
(statearr_17549_17585[(2)] = null);

(statearr_17549_17585[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (16))){
var inst_17471 = (state_17516[(10)]);
var inst_17475 = cljs.core.chunk_first(inst_17471);
var inst_17476 = cljs.core.chunk_rest(inst_17471);
var inst_17477 = cljs.core.count(inst_17475);
var inst_17457 = inst_17476;
var inst_17458 = inst_17475;
var inst_17459 = inst_17477;
var inst_17460 = (0);
var state_17516__$1 = (function (){var statearr_17550 = state_17516;
(statearr_17550[(12)] = inst_17459);

(statearr_17550[(13)] = inst_17457);

(statearr_17550[(14)] = inst_17460);

(statearr_17550[(16)] = inst_17458);

return statearr_17550;
})();
var statearr_17551_17586 = state_17516__$1;
(statearr_17551_17586[(2)] = null);

(statearr_17551_17586[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (10))){
var inst_17459 = (state_17516[(12)]);
var inst_17457 = (state_17516[(13)]);
var inst_17460 = (state_17516[(14)]);
var inst_17458 = (state_17516[(16)]);
var inst_17465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17458,inst_17460);
var inst_17466 = cljs.core.async.muxch_STAR_(inst_17465);
var inst_17467 = cljs.core.async.close_BANG_(inst_17466);
var inst_17468 = (inst_17460 + (1));
var tmp17546 = inst_17459;
var tmp17547 = inst_17457;
var tmp17548 = inst_17458;
var inst_17457__$1 = tmp17547;
var inst_17458__$1 = tmp17548;
var inst_17459__$1 = tmp17546;
var inst_17460__$1 = inst_17468;
var state_17516__$1 = (function (){var statearr_17552 = state_17516;
(statearr_17552[(12)] = inst_17459__$1);

(statearr_17552[(13)] = inst_17457__$1);

(statearr_17552[(14)] = inst_17460__$1);

(statearr_17552[(16)] = inst_17458__$1);

(statearr_17552[(17)] = inst_17467);

return statearr_17552;
})();
var statearr_17553_17587 = state_17516__$1;
(statearr_17553_17587[(2)] = null);

(statearr_17553_17587[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (18))){
var inst_17486 = (state_17516[(2)]);
var state_17516__$1 = state_17516;
var statearr_17554_17588 = state_17516__$1;
(statearr_17554_17588[(2)] = inst_17486);

(statearr_17554_17588[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17517 === (8))){
var inst_17459 = (state_17516[(12)]);
var inst_17460 = (state_17516[(14)]);
var inst_17462 = (inst_17460 < inst_17459);
var inst_17463 = inst_17462;
var state_17516__$1 = state_17516;
if(cljs.core.truth_(inst_17463)){
var statearr_17555_17589 = state_17516__$1;
(statearr_17555_17589[(1)] = (10));

} else {
var statearr_17556_17590 = state_17516__$1;
(statearr_17556_17590[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___17562,mults,ensure_mult,p))
;
return ((function (switch__16240__auto__,c__16340__auto___17562,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_17557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17557[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_17557[(1)] = (1));

return statearr_17557;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_17516){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17516);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17558){if((e17558 instanceof Object)){
var ex__16244__auto__ = e17558;
var statearr_17559_17591 = state_17516;
(statearr_17559_17591[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17516);

return cljs.core.cst$kw$recur;
} else {
throw e17558;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__17592 = state_17516;
state_17516 = G__17592;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_17516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_17516);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___17562,mults,ensure_mult,p))
})();
var state__16342__auto__ = (function (){var statearr_17560 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17560[(6)] = c__16340__auto___17562);

return statearr_17560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___17562,mults,ensure_mult,p))
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
var G__17594 = arguments.length;
switch (G__17594) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17597 = arguments.length;
switch (G__17597) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__17600 = arguments.length;
switch (G__17600) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16340__auto___17667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___17667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___17667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17639){
var state_val_17640 = (state_17639[(1)]);
if((state_val_17640 === (7))){
var state_17639__$1 = state_17639;
var statearr_17641_17668 = state_17639__$1;
(statearr_17641_17668[(2)] = null);

(statearr_17641_17668[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (1))){
var state_17639__$1 = state_17639;
var statearr_17642_17669 = state_17639__$1;
(statearr_17642_17669[(2)] = null);

(statearr_17642_17669[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (4))){
var inst_17603 = (state_17639[(7)]);
var inst_17605 = (inst_17603 < cnt);
var state_17639__$1 = state_17639;
if(cljs.core.truth_(inst_17605)){
var statearr_17643_17670 = state_17639__$1;
(statearr_17643_17670[(1)] = (6));

} else {
var statearr_17644_17671 = state_17639__$1;
(statearr_17644_17671[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (15))){
var inst_17635 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17645_17672 = state_17639__$1;
(statearr_17645_17672[(2)] = inst_17635);

(statearr_17645_17672[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (13))){
var inst_17628 = cljs.core.async.close_BANG_(out);
var state_17639__$1 = state_17639;
var statearr_17646_17673 = state_17639__$1;
(statearr_17646_17673[(2)] = inst_17628);

(statearr_17646_17673[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (6))){
var state_17639__$1 = state_17639;
var statearr_17647_17674 = state_17639__$1;
(statearr_17647_17674[(2)] = null);

(statearr_17647_17674[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (3))){
var inst_17637 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17639__$1,inst_17637);
} else {
if((state_val_17640 === (12))){
var inst_17625 = (state_17639[(8)]);
var inst_17625__$1 = (state_17639[(2)]);
var inst_17626 = cljs.core.some(cljs.core.nil_QMARK_,inst_17625__$1);
var state_17639__$1 = (function (){var statearr_17648 = state_17639;
(statearr_17648[(8)] = inst_17625__$1);

return statearr_17648;
})();
if(cljs.core.truth_(inst_17626)){
var statearr_17649_17675 = state_17639__$1;
(statearr_17649_17675[(1)] = (13));

} else {
var statearr_17650_17676 = state_17639__$1;
(statearr_17650_17676[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (2))){
var inst_17602 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17603 = (0);
var state_17639__$1 = (function (){var statearr_17651 = state_17639;
(statearr_17651[(7)] = inst_17603);

(statearr_17651[(9)] = inst_17602);

return statearr_17651;
})();
var statearr_17652_17677 = state_17639__$1;
(statearr_17652_17677[(2)] = null);

(statearr_17652_17677[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (11))){
var inst_17603 = (state_17639[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17639,(10),Object,null,(9));
var inst_17612 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17603) : chs__$1.call(null,inst_17603));
var inst_17613 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17603) : done.call(null,inst_17603));
var inst_17614 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17612,inst_17613);
var state_17639__$1 = state_17639;
var statearr_17653_17678 = state_17639__$1;
(statearr_17653_17678[(2)] = inst_17614);


cljs.core.async.impl.ioc_helpers.process_exception(state_17639__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (9))){
var inst_17603 = (state_17639[(7)]);
var inst_17616 = (state_17639[(2)]);
var inst_17617 = (inst_17603 + (1));
var inst_17603__$1 = inst_17617;
var state_17639__$1 = (function (){var statearr_17654 = state_17639;
(statearr_17654[(7)] = inst_17603__$1);

(statearr_17654[(10)] = inst_17616);

return statearr_17654;
})();
var statearr_17655_17679 = state_17639__$1;
(statearr_17655_17679[(2)] = null);

(statearr_17655_17679[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (5))){
var inst_17623 = (state_17639[(2)]);
var state_17639__$1 = (function (){var statearr_17656 = state_17639;
(statearr_17656[(11)] = inst_17623);

return statearr_17656;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17639__$1,(12),dchan);
} else {
if((state_val_17640 === (14))){
var inst_17625 = (state_17639[(8)]);
var inst_17630 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17625);
var state_17639__$1 = state_17639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17639__$1,(16),out,inst_17630);
} else {
if((state_val_17640 === (16))){
var inst_17632 = (state_17639[(2)]);
var state_17639__$1 = (function (){var statearr_17657 = state_17639;
(statearr_17657[(12)] = inst_17632);

return statearr_17657;
})();
var statearr_17658_17680 = state_17639__$1;
(statearr_17658_17680[(2)] = null);

(statearr_17658_17680[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (10))){
var inst_17607 = (state_17639[(2)]);
var inst_17608 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17639__$1 = (function (){var statearr_17659 = state_17639;
(statearr_17659[(13)] = inst_17607);

return statearr_17659;
})();
var statearr_17660_17681 = state_17639__$1;
(statearr_17660_17681[(2)] = inst_17608);


cljs.core.async.impl.ioc_helpers.process_exception(state_17639__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17640 === (8))){
var inst_17621 = (state_17639[(2)]);
var state_17639__$1 = state_17639;
var statearr_17661_17682 = state_17639__$1;
(statearr_17661_17682[(2)] = inst_17621);

(statearr_17661_17682[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___17667,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16240__auto__,c__16340__auto___17667,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_17662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17662[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_17662[(1)] = (1));

return statearr_17662;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_17639){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17639);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17663){if((e17663 instanceof Object)){
var ex__16244__auto__ = e17663;
var statearr_17664_17683 = state_17639;
(statearr_17664_17683[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17639);

return cljs.core.cst$kw$recur;
} else {
throw e17663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__17684 = state_17639;
state_17639 = G__17684;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_17639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_17639);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___17667,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16342__auto__ = (function (){var statearr_17665 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17665[(6)] = c__16340__auto___17667);

return statearr_17665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___17667,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__17687 = arguments.length;
switch (G__17687) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16340__auto___17741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___17741,out){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___17741,out){
return (function (state_17719){
var state_val_17720 = (state_17719[(1)]);
if((state_val_17720 === (7))){
var inst_17698 = (state_17719[(7)]);
var inst_17699 = (state_17719[(8)]);
var inst_17698__$1 = (state_17719[(2)]);
var inst_17699__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17698__$1,(0),null);
var inst_17700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17698__$1,(1),null);
var inst_17701 = (inst_17699__$1 == null);
var state_17719__$1 = (function (){var statearr_17721 = state_17719;
(statearr_17721[(7)] = inst_17698__$1);

(statearr_17721[(9)] = inst_17700);

(statearr_17721[(8)] = inst_17699__$1);

return statearr_17721;
})();
if(cljs.core.truth_(inst_17701)){
var statearr_17722_17742 = state_17719__$1;
(statearr_17722_17742[(1)] = (8));

} else {
var statearr_17723_17743 = state_17719__$1;
(statearr_17723_17743[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17720 === (1))){
var inst_17688 = cljs.core.vec(chs);
var inst_17689 = inst_17688;
var state_17719__$1 = (function (){var statearr_17724 = state_17719;
(statearr_17724[(10)] = inst_17689);

return statearr_17724;
})();
var statearr_17725_17744 = state_17719__$1;
(statearr_17725_17744[(2)] = null);

(statearr_17725_17744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17720 === (4))){
var inst_17689 = (state_17719[(10)]);
var state_17719__$1 = state_17719;
return cljs.core.async.ioc_alts_BANG_(state_17719__$1,(7),inst_17689);
} else {
if((state_val_17720 === (6))){
var inst_17715 = (state_17719[(2)]);
var state_17719__$1 = state_17719;
var statearr_17726_17745 = state_17719__$1;
(statearr_17726_17745[(2)] = inst_17715);

(statearr_17726_17745[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17720 === (3))){
var inst_17717 = (state_17719[(2)]);
var state_17719__$1 = state_17719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17719__$1,inst_17717);
} else {
if((state_val_17720 === (2))){
var inst_17689 = (state_17719[(10)]);
var inst_17691 = cljs.core.count(inst_17689);
var inst_17692 = (inst_17691 > (0));
var state_17719__$1 = state_17719;
if(cljs.core.truth_(inst_17692)){
var statearr_17728_17746 = state_17719__$1;
(statearr_17728_17746[(1)] = (4));

} else {
var statearr_17729_17747 = state_17719__$1;
(statearr_17729_17747[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17720 === (11))){
var inst_17689 = (state_17719[(10)]);
var inst_17708 = (state_17719[(2)]);
var tmp17727 = inst_17689;
var inst_17689__$1 = tmp17727;
var state_17719__$1 = (function (){var statearr_17730 = state_17719;
(statearr_17730[(11)] = inst_17708);

(statearr_17730[(10)] = inst_17689__$1);

return statearr_17730;
})();
var statearr_17731_17748 = state_17719__$1;
(statearr_17731_17748[(2)] = null);

(statearr_17731_17748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17720 === (9))){
var inst_17699 = (state_17719[(8)]);
var state_17719__$1 = state_17719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17719__$1,(11),out,inst_17699);
} else {
if((state_val_17720 === (5))){
var inst_17713 = cljs.core.async.close_BANG_(out);
var state_17719__$1 = state_17719;
var statearr_17732_17749 = state_17719__$1;
(statearr_17732_17749[(2)] = inst_17713);

(statearr_17732_17749[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17720 === (10))){
var inst_17711 = (state_17719[(2)]);
var state_17719__$1 = state_17719;
var statearr_17733_17750 = state_17719__$1;
(statearr_17733_17750[(2)] = inst_17711);

(statearr_17733_17750[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17720 === (8))){
var inst_17698 = (state_17719[(7)]);
var inst_17689 = (state_17719[(10)]);
var inst_17700 = (state_17719[(9)]);
var inst_17699 = (state_17719[(8)]);
var inst_17703 = (function (){var cs = inst_17689;
var vec__17694 = inst_17698;
var v = inst_17699;
var c = inst_17700;
return ((function (cs,vec__17694,v,c,inst_17698,inst_17689,inst_17700,inst_17699,state_val_17720,c__16340__auto___17741,out){
return (function (p1__17685_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17685_SHARP_);
});
;})(cs,vec__17694,v,c,inst_17698,inst_17689,inst_17700,inst_17699,state_val_17720,c__16340__auto___17741,out))
})();
var inst_17704 = cljs.core.filterv(inst_17703,inst_17689);
var inst_17689__$1 = inst_17704;
var state_17719__$1 = (function (){var statearr_17734 = state_17719;
(statearr_17734[(10)] = inst_17689__$1);

return statearr_17734;
})();
var statearr_17735_17751 = state_17719__$1;
(statearr_17735_17751[(2)] = null);

(statearr_17735_17751[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___17741,out))
;
return ((function (switch__16240__auto__,c__16340__auto___17741,out){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_17736 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17736[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_17736[(1)] = (1));

return statearr_17736;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_17719){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17719);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17737){if((e17737 instanceof Object)){
var ex__16244__auto__ = e17737;
var statearr_17738_17752 = state_17719;
(statearr_17738_17752[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17719);

return cljs.core.cst$kw$recur;
} else {
throw e17737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__17753 = state_17719;
state_17719 = G__17753;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_17719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_17719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___17741,out))
})();
var state__16342__auto__ = (function (){var statearr_17739 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17739[(6)] = c__16340__auto___17741);

return statearr_17739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___17741,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17755 = arguments.length;
switch (G__17755) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16340__auto___17800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___17800,out){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___17800,out){
return (function (state_17779){
var state_val_17780 = (state_17779[(1)]);
if((state_val_17780 === (7))){
var inst_17761 = (state_17779[(7)]);
var inst_17761__$1 = (state_17779[(2)]);
var inst_17762 = (inst_17761__$1 == null);
var inst_17763 = cljs.core.not(inst_17762);
var state_17779__$1 = (function (){var statearr_17781 = state_17779;
(statearr_17781[(7)] = inst_17761__$1);

return statearr_17781;
})();
if(inst_17763){
var statearr_17782_17801 = state_17779__$1;
(statearr_17782_17801[(1)] = (8));

} else {
var statearr_17783_17802 = state_17779__$1;
(statearr_17783_17802[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (1))){
var inst_17756 = (0);
var state_17779__$1 = (function (){var statearr_17784 = state_17779;
(statearr_17784[(8)] = inst_17756);

return statearr_17784;
})();
var statearr_17785_17803 = state_17779__$1;
(statearr_17785_17803[(2)] = null);

(statearr_17785_17803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (4))){
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17779__$1,(7),ch);
} else {
if((state_val_17780 === (6))){
var inst_17774 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17786_17804 = state_17779__$1;
(statearr_17786_17804[(2)] = inst_17774);

(statearr_17786_17804[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (3))){
var inst_17776 = (state_17779[(2)]);
var inst_17777 = cljs.core.async.close_BANG_(out);
var state_17779__$1 = (function (){var statearr_17787 = state_17779;
(statearr_17787[(9)] = inst_17776);

return statearr_17787;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17779__$1,inst_17777);
} else {
if((state_val_17780 === (2))){
var inst_17756 = (state_17779[(8)]);
var inst_17758 = (inst_17756 < n);
var state_17779__$1 = state_17779;
if(cljs.core.truth_(inst_17758)){
var statearr_17788_17805 = state_17779__$1;
(statearr_17788_17805[(1)] = (4));

} else {
var statearr_17789_17806 = state_17779__$1;
(statearr_17789_17806[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (11))){
var inst_17756 = (state_17779[(8)]);
var inst_17766 = (state_17779[(2)]);
var inst_17767 = (inst_17756 + (1));
var inst_17756__$1 = inst_17767;
var state_17779__$1 = (function (){var statearr_17790 = state_17779;
(statearr_17790[(10)] = inst_17766);

(statearr_17790[(8)] = inst_17756__$1);

return statearr_17790;
})();
var statearr_17791_17807 = state_17779__$1;
(statearr_17791_17807[(2)] = null);

(statearr_17791_17807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (9))){
var state_17779__$1 = state_17779;
var statearr_17792_17808 = state_17779__$1;
(statearr_17792_17808[(2)] = null);

(statearr_17792_17808[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (5))){
var state_17779__$1 = state_17779;
var statearr_17793_17809 = state_17779__$1;
(statearr_17793_17809[(2)] = null);

(statearr_17793_17809[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (10))){
var inst_17771 = (state_17779[(2)]);
var state_17779__$1 = state_17779;
var statearr_17794_17810 = state_17779__$1;
(statearr_17794_17810[(2)] = inst_17771);

(statearr_17794_17810[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17780 === (8))){
var inst_17761 = (state_17779[(7)]);
var state_17779__$1 = state_17779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17779__$1,(11),out,inst_17761);
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
});})(c__16340__auto___17800,out))
;
return ((function (switch__16240__auto__,c__16340__auto___17800,out){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_17795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17795[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_17795[(1)] = (1));

return statearr_17795;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_17779){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17779);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17796){if((e17796 instanceof Object)){
var ex__16244__auto__ = e17796;
var statearr_17797_17811 = state_17779;
(statearr_17797_17811[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17779);

return cljs.core.cst$kw$recur;
} else {
throw e17796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__17812 = state_17779;
state_17779 = G__17812;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_17779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_17779);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___17800,out))
})();
var state__16342__auto__ = (function (){var statearr_17798 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17798[(6)] = c__16340__auto___17800);

return statearr_17798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___17800,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17814 = (function (f,ch,meta17815){
this.f = f;
this.ch = ch;
this.meta17815 = meta17815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17816,meta17815__$1){
var self__ = this;
var _17816__$1 = this;
return (new cljs.core.async.t_cljs$core$async17814(self__.f,self__.ch,meta17815__$1));
});

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17816){
var self__ = this;
var _17816__$1 = this;
return self__.meta17815;
});

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17817 = (function (f,ch,meta17815,_,fn1,meta17818){
this.f = f;
this.ch = ch;
this.meta17815 = meta17815;
this._ = _;
this.fn1 = fn1;
this.meta17818 = meta17818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17819,meta17818__$1){
var self__ = this;
var _17819__$1 = this;
return (new cljs.core.async.t_cljs$core$async17817(self__.f,self__.ch,self__.meta17815,self__._,self__.fn1,meta17818__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17817.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17819){
var self__ = this;
var _17819__$1 = this;
return self__.meta17818;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17813_SHARP_){
var G__17820 = (((p1__17813_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17813_SHARP_) : self__.f.call(null,p1__17813_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17820) : f1.call(null,G__17820));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17817.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17815,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17814], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17818], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17817";

cljs.core.async.t_cljs$core$async17817.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async17817");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17817 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17817(f__$1,ch__$1,meta17815__$1,___$2,fn1__$1,meta17818){
return (new cljs.core.async.t_cljs$core$async17817(f__$1,ch__$1,meta17815__$1,___$2,fn1__$1,meta17818));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17817(self__.f,self__.ch,self__.meta17815,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8151__auto__ = ret;
if(cljs.core.truth_(and__8151__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__8151__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17821 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17821) : self__.f.call(null,G__17821));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17814.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17814.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17815], null);
});

cljs.core.async.t_cljs$core$async17814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17814";

cljs.core.async.t_cljs$core$async17814.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async17814");
});

cljs.core.async.__GT_t_cljs$core$async17814 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17814(f__$1,ch__$1,meta17815){
return (new cljs.core.async.t_cljs$core$async17814(f__$1,ch__$1,meta17815));
});

}

return (new cljs.core.async.t_cljs$core$async17814(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17822 = (function (f,ch,meta17823){
this.f = f;
this.ch = ch;
this.meta17823 = meta17823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17824,meta17823__$1){
var self__ = this;
var _17824__$1 = this;
return (new cljs.core.async.t_cljs$core$async17822(self__.f,self__.ch,meta17823__$1));
});

cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17824){
var self__ = this;
var _17824__$1 = this;
return self__.meta17823;
});

cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17823], null);
});

cljs.core.async.t_cljs$core$async17822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17822";

cljs.core.async.t_cljs$core$async17822.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async17822");
});

cljs.core.async.__GT_t_cljs$core$async17822 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17822(f__$1,ch__$1,meta17823){
return (new cljs.core.async.t_cljs$core$async17822(f__$1,ch__$1,meta17823));
});

}

return (new cljs.core.async.t_cljs$core$async17822(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17825 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17825 = (function (p,ch,meta17826){
this.p = p;
this.ch = ch;
this.meta17826 = meta17826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17827,meta17826__$1){
var self__ = this;
var _17827__$1 = this;
return (new cljs.core.async.t_cljs$core$async17825(self__.p,self__.ch,meta17826__$1));
});

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17827){
var self__ = this;
var _17827__$1 = this;
return self__.meta17826;
});

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17826], null);
});

cljs.core.async.t_cljs$core$async17825.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17825";

cljs.core.async.t_cljs$core$async17825.cljs$lang$ctorPrWriter = (function (this__8788__auto__,writer__8789__auto__,opt__8790__auto__){
return cljs.core._write(writer__8789__auto__,"cljs.core.async/t_cljs$core$async17825");
});

cljs.core.async.__GT_t_cljs$core$async17825 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17825(p__$1,ch__$1,meta17826){
return (new cljs.core.async.t_cljs$core$async17825(p__$1,ch__$1,meta17826));
});

}

return (new cljs.core.async.t_cljs$core$async17825(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17829 = arguments.length;
switch (G__17829) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16340__auto___17869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___17869,out){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___17869,out){
return (function (state_17850){
var state_val_17851 = (state_17850[(1)]);
if((state_val_17851 === (7))){
var inst_17846 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17852_17870 = state_17850__$1;
(statearr_17852_17870[(2)] = inst_17846);

(statearr_17852_17870[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (1))){
var state_17850__$1 = state_17850;
var statearr_17853_17871 = state_17850__$1;
(statearr_17853_17871[(2)] = null);

(statearr_17853_17871[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (4))){
var inst_17832 = (state_17850[(7)]);
var inst_17832__$1 = (state_17850[(2)]);
var inst_17833 = (inst_17832__$1 == null);
var state_17850__$1 = (function (){var statearr_17854 = state_17850;
(statearr_17854[(7)] = inst_17832__$1);

return statearr_17854;
})();
if(cljs.core.truth_(inst_17833)){
var statearr_17855_17872 = state_17850__$1;
(statearr_17855_17872[(1)] = (5));

} else {
var statearr_17856_17873 = state_17850__$1;
(statearr_17856_17873[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (6))){
var inst_17832 = (state_17850[(7)]);
var inst_17837 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17832) : p.call(null,inst_17832));
var state_17850__$1 = state_17850;
if(cljs.core.truth_(inst_17837)){
var statearr_17857_17874 = state_17850__$1;
(statearr_17857_17874[(1)] = (8));

} else {
var statearr_17858_17875 = state_17850__$1;
(statearr_17858_17875[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (3))){
var inst_17848 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17850__$1,inst_17848);
} else {
if((state_val_17851 === (2))){
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17850__$1,(4),ch);
} else {
if((state_val_17851 === (11))){
var inst_17840 = (state_17850[(2)]);
var state_17850__$1 = state_17850;
var statearr_17859_17876 = state_17850__$1;
(statearr_17859_17876[(2)] = inst_17840);

(statearr_17859_17876[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (9))){
var state_17850__$1 = state_17850;
var statearr_17860_17877 = state_17850__$1;
(statearr_17860_17877[(2)] = null);

(statearr_17860_17877[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (5))){
var inst_17835 = cljs.core.async.close_BANG_(out);
var state_17850__$1 = state_17850;
var statearr_17861_17878 = state_17850__$1;
(statearr_17861_17878[(2)] = inst_17835);

(statearr_17861_17878[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (10))){
var inst_17843 = (state_17850[(2)]);
var state_17850__$1 = (function (){var statearr_17862 = state_17850;
(statearr_17862[(8)] = inst_17843);

return statearr_17862;
})();
var statearr_17863_17879 = state_17850__$1;
(statearr_17863_17879[(2)] = null);

(statearr_17863_17879[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17851 === (8))){
var inst_17832 = (state_17850[(7)]);
var state_17850__$1 = state_17850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17850__$1,(11),out,inst_17832);
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
});})(c__16340__auto___17869,out))
;
return ((function (switch__16240__auto__,c__16340__auto___17869,out){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_17864 = [null,null,null,null,null,null,null,null,null];
(statearr_17864[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_17864[(1)] = (1));

return statearr_17864;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_17850){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17850);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17865){if((e17865 instanceof Object)){
var ex__16244__auto__ = e17865;
var statearr_17866_17880 = state_17850;
(statearr_17866_17880[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17850);

return cljs.core.cst$kw$recur;
} else {
throw e17865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__17881 = state_17850;
state_17850 = G__17881;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_17850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_17850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___17869,out))
})();
var state__16342__auto__ = (function (){var statearr_17867 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17867[(6)] = c__16340__auto___17869);

return statearr_17867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___17869,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17883 = arguments.length;
switch (G__17883) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16340__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto__){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto__){
return (function (state_17946){
var state_val_17947 = (state_17946[(1)]);
if((state_val_17947 === (7))){
var inst_17942 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17948_17986 = state_17946__$1;
(statearr_17948_17986[(2)] = inst_17942);

(statearr_17948_17986[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (20))){
var inst_17912 = (state_17946[(7)]);
var inst_17923 = (state_17946[(2)]);
var inst_17924 = cljs.core.next(inst_17912);
var inst_17898 = inst_17924;
var inst_17899 = null;
var inst_17900 = (0);
var inst_17901 = (0);
var state_17946__$1 = (function (){var statearr_17949 = state_17946;
(statearr_17949[(8)] = inst_17898);

(statearr_17949[(9)] = inst_17923);

(statearr_17949[(10)] = inst_17900);

(statearr_17949[(11)] = inst_17901);

(statearr_17949[(12)] = inst_17899);

return statearr_17949;
})();
var statearr_17950_17987 = state_17946__$1;
(statearr_17950_17987[(2)] = null);

(statearr_17950_17987[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (1))){
var state_17946__$1 = state_17946;
var statearr_17951_17988 = state_17946__$1;
(statearr_17951_17988[(2)] = null);

(statearr_17951_17988[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (4))){
var inst_17887 = (state_17946[(13)]);
var inst_17887__$1 = (state_17946[(2)]);
var inst_17888 = (inst_17887__$1 == null);
var state_17946__$1 = (function (){var statearr_17952 = state_17946;
(statearr_17952[(13)] = inst_17887__$1);

return statearr_17952;
})();
if(cljs.core.truth_(inst_17888)){
var statearr_17953_17989 = state_17946__$1;
(statearr_17953_17989[(1)] = (5));

} else {
var statearr_17954_17990 = state_17946__$1;
(statearr_17954_17990[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (15))){
var state_17946__$1 = state_17946;
var statearr_17958_17991 = state_17946__$1;
(statearr_17958_17991[(2)] = null);

(statearr_17958_17991[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (21))){
var state_17946__$1 = state_17946;
var statearr_17959_17992 = state_17946__$1;
(statearr_17959_17992[(2)] = null);

(statearr_17959_17992[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (13))){
var inst_17898 = (state_17946[(8)]);
var inst_17900 = (state_17946[(10)]);
var inst_17901 = (state_17946[(11)]);
var inst_17899 = (state_17946[(12)]);
var inst_17908 = (state_17946[(2)]);
var inst_17909 = (inst_17901 + (1));
var tmp17955 = inst_17898;
var tmp17956 = inst_17900;
var tmp17957 = inst_17899;
var inst_17898__$1 = tmp17955;
var inst_17899__$1 = tmp17957;
var inst_17900__$1 = tmp17956;
var inst_17901__$1 = inst_17909;
var state_17946__$1 = (function (){var statearr_17960 = state_17946;
(statearr_17960[(14)] = inst_17908);

(statearr_17960[(8)] = inst_17898__$1);

(statearr_17960[(10)] = inst_17900__$1);

(statearr_17960[(11)] = inst_17901__$1);

(statearr_17960[(12)] = inst_17899__$1);

return statearr_17960;
})();
var statearr_17961_17993 = state_17946__$1;
(statearr_17961_17993[(2)] = null);

(statearr_17961_17993[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (22))){
var state_17946__$1 = state_17946;
var statearr_17962_17994 = state_17946__$1;
(statearr_17962_17994[(2)] = null);

(statearr_17962_17994[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (6))){
var inst_17887 = (state_17946[(13)]);
var inst_17896 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17887) : f.call(null,inst_17887));
var inst_17897 = cljs.core.seq(inst_17896);
var inst_17898 = inst_17897;
var inst_17899 = null;
var inst_17900 = (0);
var inst_17901 = (0);
var state_17946__$1 = (function (){var statearr_17963 = state_17946;
(statearr_17963[(8)] = inst_17898);

(statearr_17963[(10)] = inst_17900);

(statearr_17963[(11)] = inst_17901);

(statearr_17963[(12)] = inst_17899);

return statearr_17963;
})();
var statearr_17964_17995 = state_17946__$1;
(statearr_17964_17995[(2)] = null);

(statearr_17964_17995[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (17))){
var inst_17912 = (state_17946[(7)]);
var inst_17916 = cljs.core.chunk_first(inst_17912);
var inst_17917 = cljs.core.chunk_rest(inst_17912);
var inst_17918 = cljs.core.count(inst_17916);
var inst_17898 = inst_17917;
var inst_17899 = inst_17916;
var inst_17900 = inst_17918;
var inst_17901 = (0);
var state_17946__$1 = (function (){var statearr_17965 = state_17946;
(statearr_17965[(8)] = inst_17898);

(statearr_17965[(10)] = inst_17900);

(statearr_17965[(11)] = inst_17901);

(statearr_17965[(12)] = inst_17899);

return statearr_17965;
})();
var statearr_17966_17996 = state_17946__$1;
(statearr_17966_17996[(2)] = null);

(statearr_17966_17996[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (3))){
var inst_17944 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17946__$1,inst_17944);
} else {
if((state_val_17947 === (12))){
var inst_17932 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17967_17997 = state_17946__$1;
(statearr_17967_17997[(2)] = inst_17932);

(statearr_17967_17997[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (2))){
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17946__$1,(4),in$);
} else {
if((state_val_17947 === (23))){
var inst_17940 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17968_17998 = state_17946__$1;
(statearr_17968_17998[(2)] = inst_17940);

(statearr_17968_17998[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (19))){
var inst_17927 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17969_17999 = state_17946__$1;
(statearr_17969_17999[(2)] = inst_17927);

(statearr_17969_17999[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (11))){
var inst_17898 = (state_17946[(8)]);
var inst_17912 = (state_17946[(7)]);
var inst_17912__$1 = cljs.core.seq(inst_17898);
var state_17946__$1 = (function (){var statearr_17970 = state_17946;
(statearr_17970[(7)] = inst_17912__$1);

return statearr_17970;
})();
if(inst_17912__$1){
var statearr_17971_18000 = state_17946__$1;
(statearr_17971_18000[(1)] = (14));

} else {
var statearr_17972_18001 = state_17946__$1;
(statearr_17972_18001[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (9))){
var inst_17934 = (state_17946[(2)]);
var inst_17935 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17946__$1 = (function (){var statearr_17973 = state_17946;
(statearr_17973[(15)] = inst_17934);

return statearr_17973;
})();
if(cljs.core.truth_(inst_17935)){
var statearr_17974_18002 = state_17946__$1;
(statearr_17974_18002[(1)] = (21));

} else {
var statearr_17975_18003 = state_17946__$1;
(statearr_17975_18003[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (5))){
var inst_17890 = cljs.core.async.close_BANG_(out);
var state_17946__$1 = state_17946;
var statearr_17976_18004 = state_17946__$1;
(statearr_17976_18004[(2)] = inst_17890);

(statearr_17976_18004[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (14))){
var inst_17912 = (state_17946[(7)]);
var inst_17914 = cljs.core.chunked_seq_QMARK_(inst_17912);
var state_17946__$1 = state_17946;
if(inst_17914){
var statearr_17977_18005 = state_17946__$1;
(statearr_17977_18005[(1)] = (17));

} else {
var statearr_17978_18006 = state_17946__$1;
(statearr_17978_18006[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (16))){
var inst_17930 = (state_17946[(2)]);
var state_17946__$1 = state_17946;
var statearr_17979_18007 = state_17946__$1;
(statearr_17979_18007[(2)] = inst_17930);

(statearr_17979_18007[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17947 === (10))){
var inst_17901 = (state_17946[(11)]);
var inst_17899 = (state_17946[(12)]);
var inst_17906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17899,inst_17901);
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17946__$1,(13),out,inst_17906);
} else {
if((state_val_17947 === (18))){
var inst_17912 = (state_17946[(7)]);
var inst_17921 = cljs.core.first(inst_17912);
var state_17946__$1 = state_17946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17946__$1,(20),out,inst_17921);
} else {
if((state_val_17947 === (8))){
var inst_17900 = (state_17946[(10)]);
var inst_17901 = (state_17946[(11)]);
var inst_17903 = (inst_17901 < inst_17900);
var inst_17904 = inst_17903;
var state_17946__$1 = state_17946;
if(cljs.core.truth_(inst_17904)){
var statearr_17980_18008 = state_17946__$1;
(statearr_17980_18008[(1)] = (10));

} else {
var statearr_17981_18009 = state_17946__$1;
(statearr_17981_18009[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16340__auto__))
;
return ((function (switch__16240__auto__,c__16340__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16241__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16241__auto____0 = (function (){
var statearr_17982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17982[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16241__auto__);

(statearr_17982[(1)] = (1));

return statearr_17982;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16241__auto____1 = (function (state_17946){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_17946);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e17983){if((e17983 instanceof Object)){
var ex__16244__auto__ = e17983;
var statearr_17984_18010 = state_17946;
(statearr_17984_18010[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17946);

return cljs.core.cst$kw$recur;
} else {
throw e17983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__18011 = state_17946;
state_17946 = G__18011;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16241__auto__ = function(state_17946){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16241__auto____1.call(this,state_17946);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16241__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16241__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto__))
})();
var state__16342__auto__ = (function (){var statearr_17985 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_17985[(6)] = c__16340__auto__);

return statearr_17985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto__))
);

return c__16340__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18013 = arguments.length;
switch (G__18013) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18016 = arguments.length;
switch (G__18016) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18019 = arguments.length;
switch (G__18019) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16340__auto___18066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___18066,out){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___18066,out){
return (function (state_18043){
var state_val_18044 = (state_18043[(1)]);
if((state_val_18044 === (7))){
var inst_18038 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18045_18067 = state_18043__$1;
(statearr_18045_18067[(2)] = inst_18038);

(statearr_18045_18067[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18044 === (1))){
var inst_18020 = null;
var state_18043__$1 = (function (){var statearr_18046 = state_18043;
(statearr_18046[(7)] = inst_18020);

return statearr_18046;
})();
var statearr_18047_18068 = state_18043__$1;
(statearr_18047_18068[(2)] = null);

(statearr_18047_18068[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18044 === (4))){
var inst_18023 = (state_18043[(8)]);
var inst_18023__$1 = (state_18043[(2)]);
var inst_18024 = (inst_18023__$1 == null);
var inst_18025 = cljs.core.not(inst_18024);
var state_18043__$1 = (function (){var statearr_18048 = state_18043;
(statearr_18048[(8)] = inst_18023__$1);

return statearr_18048;
})();
if(inst_18025){
var statearr_18049_18069 = state_18043__$1;
(statearr_18049_18069[(1)] = (5));

} else {
var statearr_18050_18070 = state_18043__$1;
(statearr_18050_18070[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18044 === (6))){
var state_18043__$1 = state_18043;
var statearr_18051_18071 = state_18043__$1;
(statearr_18051_18071[(2)] = null);

(statearr_18051_18071[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18044 === (3))){
var inst_18040 = (state_18043[(2)]);
var inst_18041 = cljs.core.async.close_BANG_(out);
var state_18043__$1 = (function (){var statearr_18052 = state_18043;
(statearr_18052[(9)] = inst_18040);

return statearr_18052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18043__$1,inst_18041);
} else {
if((state_val_18044 === (2))){
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18043__$1,(4),ch);
} else {
if((state_val_18044 === (11))){
var inst_18023 = (state_18043[(8)]);
var inst_18032 = (state_18043[(2)]);
var inst_18020 = inst_18023;
var state_18043__$1 = (function (){var statearr_18053 = state_18043;
(statearr_18053[(7)] = inst_18020);

(statearr_18053[(10)] = inst_18032);

return statearr_18053;
})();
var statearr_18054_18072 = state_18043__$1;
(statearr_18054_18072[(2)] = null);

(statearr_18054_18072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18044 === (9))){
var inst_18023 = (state_18043[(8)]);
var state_18043__$1 = state_18043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18043__$1,(11),out,inst_18023);
} else {
if((state_val_18044 === (5))){
var inst_18023 = (state_18043[(8)]);
var inst_18020 = (state_18043[(7)]);
var inst_18027 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18023,inst_18020);
var state_18043__$1 = state_18043;
if(inst_18027){
var statearr_18056_18073 = state_18043__$1;
(statearr_18056_18073[(1)] = (8));

} else {
var statearr_18057_18074 = state_18043__$1;
(statearr_18057_18074[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18044 === (10))){
var inst_18035 = (state_18043[(2)]);
var state_18043__$1 = state_18043;
var statearr_18058_18075 = state_18043__$1;
(statearr_18058_18075[(2)] = inst_18035);

(statearr_18058_18075[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18044 === (8))){
var inst_18020 = (state_18043[(7)]);
var tmp18055 = inst_18020;
var inst_18020__$1 = tmp18055;
var state_18043__$1 = (function (){var statearr_18059 = state_18043;
(statearr_18059[(7)] = inst_18020__$1);

return statearr_18059;
})();
var statearr_18060_18076 = state_18043__$1;
(statearr_18060_18076[(2)] = null);

(statearr_18060_18076[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___18066,out))
;
return ((function (switch__16240__auto__,c__16340__auto___18066,out){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_18061 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18061[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_18061[(1)] = (1));

return statearr_18061;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_18043){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_18043);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e18062){if((e18062 instanceof Object)){
var ex__16244__auto__ = e18062;
var statearr_18063_18077 = state_18043;
(statearr_18063_18077[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18043);

return cljs.core.cst$kw$recur;
} else {
throw e18062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__18078 = state_18043;
state_18043 = G__18078;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_18043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_18043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___18066,out))
})();
var state__16342__auto__ = (function (){var statearr_18064 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_18064[(6)] = c__16340__auto___18066);

return statearr_18064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___18066,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18080 = arguments.length;
switch (G__18080) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16340__auto___18146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___18146,out){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___18146,out){
return (function (state_18118){
var state_val_18119 = (state_18118[(1)]);
if((state_val_18119 === (7))){
var inst_18114 = (state_18118[(2)]);
var state_18118__$1 = state_18118;
var statearr_18120_18147 = state_18118__$1;
(statearr_18120_18147[(2)] = inst_18114);

(statearr_18120_18147[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (1))){
var inst_18081 = (new Array(n));
var inst_18082 = inst_18081;
var inst_18083 = (0);
var state_18118__$1 = (function (){var statearr_18121 = state_18118;
(statearr_18121[(7)] = inst_18083);

(statearr_18121[(8)] = inst_18082);

return statearr_18121;
})();
var statearr_18122_18148 = state_18118__$1;
(statearr_18122_18148[(2)] = null);

(statearr_18122_18148[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (4))){
var inst_18086 = (state_18118[(9)]);
var inst_18086__$1 = (state_18118[(2)]);
var inst_18087 = (inst_18086__$1 == null);
var inst_18088 = cljs.core.not(inst_18087);
var state_18118__$1 = (function (){var statearr_18123 = state_18118;
(statearr_18123[(9)] = inst_18086__$1);

return statearr_18123;
})();
if(inst_18088){
var statearr_18124_18149 = state_18118__$1;
(statearr_18124_18149[(1)] = (5));

} else {
var statearr_18125_18150 = state_18118__$1;
(statearr_18125_18150[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (15))){
var inst_18108 = (state_18118[(2)]);
var state_18118__$1 = state_18118;
var statearr_18126_18151 = state_18118__$1;
(statearr_18126_18151[(2)] = inst_18108);

(statearr_18126_18151[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (13))){
var state_18118__$1 = state_18118;
var statearr_18127_18152 = state_18118__$1;
(statearr_18127_18152[(2)] = null);

(statearr_18127_18152[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (6))){
var inst_18083 = (state_18118[(7)]);
var inst_18104 = (inst_18083 > (0));
var state_18118__$1 = state_18118;
if(cljs.core.truth_(inst_18104)){
var statearr_18128_18153 = state_18118__$1;
(statearr_18128_18153[(1)] = (12));

} else {
var statearr_18129_18154 = state_18118__$1;
(statearr_18129_18154[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (3))){
var inst_18116 = (state_18118[(2)]);
var state_18118__$1 = state_18118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18118__$1,inst_18116);
} else {
if((state_val_18119 === (12))){
var inst_18082 = (state_18118[(8)]);
var inst_18106 = cljs.core.vec(inst_18082);
var state_18118__$1 = state_18118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18118__$1,(15),out,inst_18106);
} else {
if((state_val_18119 === (2))){
var state_18118__$1 = state_18118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18118__$1,(4),ch);
} else {
if((state_val_18119 === (11))){
var inst_18098 = (state_18118[(2)]);
var inst_18099 = (new Array(n));
var inst_18082 = inst_18099;
var inst_18083 = (0);
var state_18118__$1 = (function (){var statearr_18130 = state_18118;
(statearr_18130[(7)] = inst_18083);

(statearr_18130[(10)] = inst_18098);

(statearr_18130[(8)] = inst_18082);

return statearr_18130;
})();
var statearr_18131_18155 = state_18118__$1;
(statearr_18131_18155[(2)] = null);

(statearr_18131_18155[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (9))){
var inst_18082 = (state_18118[(8)]);
var inst_18096 = cljs.core.vec(inst_18082);
var state_18118__$1 = state_18118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18118__$1,(11),out,inst_18096);
} else {
if((state_val_18119 === (5))){
var inst_18083 = (state_18118[(7)]);
var inst_18091 = (state_18118[(11)]);
var inst_18086 = (state_18118[(9)]);
var inst_18082 = (state_18118[(8)]);
var inst_18090 = (inst_18082[inst_18083] = inst_18086);
var inst_18091__$1 = (inst_18083 + (1));
var inst_18092 = (inst_18091__$1 < n);
var state_18118__$1 = (function (){var statearr_18132 = state_18118;
(statearr_18132[(12)] = inst_18090);

(statearr_18132[(11)] = inst_18091__$1);

return statearr_18132;
})();
if(cljs.core.truth_(inst_18092)){
var statearr_18133_18156 = state_18118__$1;
(statearr_18133_18156[(1)] = (8));

} else {
var statearr_18134_18157 = state_18118__$1;
(statearr_18134_18157[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (14))){
var inst_18111 = (state_18118[(2)]);
var inst_18112 = cljs.core.async.close_BANG_(out);
var state_18118__$1 = (function (){var statearr_18136 = state_18118;
(statearr_18136[(13)] = inst_18111);

return statearr_18136;
})();
var statearr_18137_18158 = state_18118__$1;
(statearr_18137_18158[(2)] = inst_18112);

(statearr_18137_18158[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (10))){
var inst_18102 = (state_18118[(2)]);
var state_18118__$1 = state_18118;
var statearr_18138_18159 = state_18118__$1;
(statearr_18138_18159[(2)] = inst_18102);

(statearr_18138_18159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18119 === (8))){
var inst_18091 = (state_18118[(11)]);
var inst_18082 = (state_18118[(8)]);
var tmp18135 = inst_18082;
var inst_18082__$1 = tmp18135;
var inst_18083 = inst_18091;
var state_18118__$1 = (function (){var statearr_18139 = state_18118;
(statearr_18139[(7)] = inst_18083);

(statearr_18139[(8)] = inst_18082__$1);

return statearr_18139;
})();
var statearr_18140_18160 = state_18118__$1;
(statearr_18140_18160[(2)] = null);

(statearr_18140_18160[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___18146,out))
;
return ((function (switch__16240__auto__,c__16340__auto___18146,out){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_18141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18141[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_18141[(1)] = (1));

return statearr_18141;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_18118){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_18118);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e18142){if((e18142 instanceof Object)){
var ex__16244__auto__ = e18142;
var statearr_18143_18161 = state_18118;
(statearr_18143_18161[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18118);

return cljs.core.cst$kw$recur;
} else {
throw e18142;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__18162 = state_18118;
state_18118 = G__18162;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_18118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_18118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___18146,out))
})();
var state__16342__auto__ = (function (){var statearr_18144 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_18144[(6)] = c__16340__auto___18146);

return statearr_18144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___18146,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18164 = arguments.length;
switch (G__18164) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16340__auto___18234 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16340__auto___18234,out){
return (function (){
var f__16341__auto__ = (function (){var switch__16240__auto__ = ((function (c__16340__auto___18234,out){
return (function (state_18206){
var state_val_18207 = (state_18206[(1)]);
if((state_val_18207 === (7))){
var inst_18202 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18208_18235 = state_18206__$1;
(statearr_18208_18235[(2)] = inst_18202);

(statearr_18208_18235[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (1))){
var inst_18165 = [];
var inst_18166 = inst_18165;
var inst_18167 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18206__$1 = (function (){var statearr_18209 = state_18206;
(statearr_18209[(7)] = inst_18167);

(statearr_18209[(8)] = inst_18166);

return statearr_18209;
})();
var statearr_18210_18236 = state_18206__$1;
(statearr_18210_18236[(2)] = null);

(statearr_18210_18236[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (4))){
var inst_18170 = (state_18206[(9)]);
var inst_18170__$1 = (state_18206[(2)]);
var inst_18171 = (inst_18170__$1 == null);
var inst_18172 = cljs.core.not(inst_18171);
var state_18206__$1 = (function (){var statearr_18211 = state_18206;
(statearr_18211[(9)] = inst_18170__$1);

return statearr_18211;
})();
if(inst_18172){
var statearr_18212_18237 = state_18206__$1;
(statearr_18212_18237[(1)] = (5));

} else {
var statearr_18213_18238 = state_18206__$1;
(statearr_18213_18238[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (15))){
var inst_18196 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18214_18239 = state_18206__$1;
(statearr_18214_18239[(2)] = inst_18196);

(statearr_18214_18239[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (13))){
var state_18206__$1 = state_18206;
var statearr_18215_18240 = state_18206__$1;
(statearr_18215_18240[(2)] = null);

(statearr_18215_18240[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (6))){
var inst_18166 = (state_18206[(8)]);
var inst_18191 = inst_18166.length;
var inst_18192 = (inst_18191 > (0));
var state_18206__$1 = state_18206;
if(cljs.core.truth_(inst_18192)){
var statearr_18216_18241 = state_18206__$1;
(statearr_18216_18241[(1)] = (12));

} else {
var statearr_18217_18242 = state_18206__$1;
(statearr_18217_18242[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (3))){
var inst_18204 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18206__$1,inst_18204);
} else {
if((state_val_18207 === (12))){
var inst_18166 = (state_18206[(8)]);
var inst_18194 = cljs.core.vec(inst_18166);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18206__$1,(15),out,inst_18194);
} else {
if((state_val_18207 === (2))){
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18206__$1,(4),ch);
} else {
if((state_val_18207 === (11))){
var inst_18170 = (state_18206[(9)]);
var inst_18174 = (state_18206[(10)]);
var inst_18184 = (state_18206[(2)]);
var inst_18185 = [];
var inst_18186 = inst_18185.push(inst_18170);
var inst_18166 = inst_18185;
var inst_18167 = inst_18174;
var state_18206__$1 = (function (){var statearr_18218 = state_18206;
(statearr_18218[(7)] = inst_18167);

(statearr_18218[(11)] = inst_18186);

(statearr_18218[(12)] = inst_18184);

(statearr_18218[(8)] = inst_18166);

return statearr_18218;
})();
var statearr_18219_18243 = state_18206__$1;
(statearr_18219_18243[(2)] = null);

(statearr_18219_18243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (9))){
var inst_18166 = (state_18206[(8)]);
var inst_18182 = cljs.core.vec(inst_18166);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18206__$1,(11),out,inst_18182);
} else {
if((state_val_18207 === (5))){
var inst_18170 = (state_18206[(9)]);
var inst_18167 = (state_18206[(7)]);
var inst_18174 = (state_18206[(10)]);
var inst_18174__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18170) : f.call(null,inst_18170));
var inst_18175 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18174__$1,inst_18167);
var inst_18176 = cljs.core.keyword_identical_QMARK_(inst_18167,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18177 = (inst_18175) || (inst_18176);
var state_18206__$1 = (function (){var statearr_18220 = state_18206;
(statearr_18220[(10)] = inst_18174__$1);

return statearr_18220;
})();
if(cljs.core.truth_(inst_18177)){
var statearr_18221_18244 = state_18206__$1;
(statearr_18221_18244[(1)] = (8));

} else {
var statearr_18222_18245 = state_18206__$1;
(statearr_18222_18245[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (14))){
var inst_18199 = (state_18206[(2)]);
var inst_18200 = cljs.core.async.close_BANG_(out);
var state_18206__$1 = (function (){var statearr_18224 = state_18206;
(statearr_18224[(13)] = inst_18199);

return statearr_18224;
})();
var statearr_18225_18246 = state_18206__$1;
(statearr_18225_18246[(2)] = inst_18200);

(statearr_18225_18246[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (10))){
var inst_18189 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18226_18247 = state_18206__$1;
(statearr_18226_18247[(2)] = inst_18189);

(statearr_18226_18247[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18207 === (8))){
var inst_18170 = (state_18206[(9)]);
var inst_18166 = (state_18206[(8)]);
var inst_18174 = (state_18206[(10)]);
var inst_18179 = inst_18166.push(inst_18170);
var tmp18223 = inst_18166;
var inst_18166__$1 = tmp18223;
var inst_18167 = inst_18174;
var state_18206__$1 = (function (){var statearr_18227 = state_18206;
(statearr_18227[(7)] = inst_18167);

(statearr_18227[(14)] = inst_18179);

(statearr_18227[(8)] = inst_18166__$1);

return statearr_18227;
})();
var statearr_18228_18248 = state_18206__$1;
(statearr_18228_18248[(2)] = null);

(statearr_18228_18248[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16340__auto___18234,out))
;
return ((function (switch__16240__auto__,c__16340__auto___18234,out){
return (function() {
var cljs$core$async$state_machine__16241__auto__ = null;
var cljs$core$async$state_machine__16241__auto____0 = (function (){
var statearr_18229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18229[(0)] = cljs$core$async$state_machine__16241__auto__);

(statearr_18229[(1)] = (1));

return statearr_18229;
});
var cljs$core$async$state_machine__16241__auto____1 = (function (state_18206){
while(true){
var ret_value__16242__auto__ = (function (){try{while(true){
var result__16243__auto__ = switch__16240__auto__(state_18206);
if(cljs.core.keyword_identical_QMARK_(result__16243__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16243__auto__;
}
break;
}
}catch (e18230){if((e18230 instanceof Object)){
var ex__16244__auto__ = e18230;
var statearr_18231_18249 = state_18206;
(statearr_18231_18249[(5)] = ex__16244__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18206);

return cljs.core.cst$kw$recur;
} else {
throw e18230;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16242__auto__,cljs.core.cst$kw$recur)){
var G__18250 = state_18206;
state_18206 = G__18250;
continue;
} else {
return ret_value__16242__auto__;
}
break;
}
});
cljs$core$async$state_machine__16241__auto__ = function(state_18206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16241__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16241__auto____1.call(this,state_18206);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16241__auto____0;
cljs$core$async$state_machine__16241__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16241__auto____1;
return cljs$core$async$state_machine__16241__auto__;
})()
;})(switch__16240__auto__,c__16340__auto___18234,out))
})();
var state__16342__auto__ = (function (){var statearr_18232 = (f__16341__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16341__auto__.cljs$core$IFn$_invoke$arity$0() : f__16341__auto__.call(null));
(statearr_18232[(6)] = c__16340__auto___18234);

return statearr_18232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16342__auto__);
});})(c__16340__auto___18234,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

