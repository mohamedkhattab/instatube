// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort(this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14902 = arguments.length;
var i__9333__auto___14903 = (0);
while(true){
if((i__9333__auto___14903 < len__9332__auto___14902)){
args__9339__auto__.push((arguments[i__9333__auto___14903]));

var G__14904 = (i__9333__auto___14903 + (1));
i__9333__auto___14903 = G__14904;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"GET",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq14900){
var G__14901 = cljs.core.first(seq14900);
var seq14900__$1 = cljs.core.next(seq14900);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__14901,seq14900__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14907 = arguments.length;
var i__9333__auto___14908 = (0);
while(true){
if((i__9333__auto___14908 < len__9332__auto___14907)){
args__9339__auto__.push((arguments[i__9333__auto___14908]));

var G__14909 = (i__9333__auto___14908 + (1));
i__9333__auto___14908 = G__14909;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"HEAD",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq14905){
var G__14906 = cljs.core.first(seq14905);
var seq14905__$1 = cljs.core.next(seq14905);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__14906,seq14905__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14912 = arguments.length;
var i__9333__auto___14913 = (0);
while(true){
if((i__9333__auto___14913 < len__9332__auto___14912)){
args__9339__auto__.push((arguments[i__9333__auto___14913]));

var G__14914 = (i__9333__auto___14913 + (1));
i__9333__auto___14913 = G__14914;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"POST",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq14910){
var G__14911 = cljs.core.first(seq14910);
var seq14910__$1 = cljs.core.next(seq14910);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__14911,seq14910__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14917 = arguments.length;
var i__9333__auto___14918 = (0);
while(true){
if((i__9333__auto___14918 < len__9332__auto___14917)){
args__9339__auto__.push((arguments[i__9333__auto___14918]));

var G__14919 = (i__9333__auto___14918 + (1));
i__9333__auto___14918 = G__14919;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PUT",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq14915){
var G__14916 = cljs.core.first(seq14915);
var seq14915__$1 = cljs.core.next(seq14915);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__14916,seq14915__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14922 = arguments.length;
var i__9333__auto___14923 = (0);
while(true){
if((i__9333__auto___14923 < len__9332__auto___14922)){
args__9339__auto__.push((arguments[i__9333__auto___14923]));

var G__14924 = (i__9333__auto___14923 + (1));
i__9333__auto___14923 = G__14924;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"DELETE",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq14920){
var G__14921 = cljs.core.first(seq14920);
var seq14920__$1 = cljs.core.next(seq14920);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__14921,seq14920__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14927 = arguments.length;
var i__9333__auto___14928 = (0);
while(true){
if((i__9333__auto___14928 < len__9332__auto___14927)){
args__9339__auto__.push((arguments[i__9333__auto___14928]));

var G__14929 = (i__9333__auto___14928 + (1));
i__9333__auto___14928 = G__14929;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"OPTIONS",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq14925){
var G__14926 = cljs.core.first(seq14925);
var seq14925__$1 = cljs.core.next(seq14925);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__14926,seq14925__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14932 = arguments.length;
var i__9333__auto___14933 = (0);
while(true){
if((i__9333__auto___14933 < len__9332__auto___14932)){
args__9339__auto__.push((arguments[i__9333__auto___14933]));

var G__14934 = (i__9333__auto___14933 + (1));
i__9333__auto___14933 = G__14934;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"TRACE",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq14930){
var G__14931 = cljs.core.first(seq14930);
var seq14930__$1 = cljs.core.next(seq14930);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__14931,seq14930__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14937 = arguments.length;
var i__9333__auto___14938 = (0);
while(true){
if((i__9333__auto___14938 < len__9332__auto___14937)){
args__9339__auto__.push((arguments[i__9333__auto___14938]));

var G__14939 = (i__9333__auto___14938 + (1));
i__9333__auto___14938 = G__14939;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PATCH",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq14935){
var G__14936 = cljs.core.first(seq14935);
var seq14935__$1 = cljs.core.next(seq14935);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__14936,seq14935__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__9339__auto__ = [];
var len__9332__auto___14942 = arguments.length;
var i__9333__auto___14943 = (0);
while(true){
if((i__9333__auto___14943 < len__9332__auto___14942)){
args__9339__auto__.push((arguments[i__9333__auto___14943]));

var G__14944 = (i__9333__auto___14943 + (1));
i__9333__auto___14943 = G__14944;
continue;
} else {
}
break;
}

var argseq__9340__auto__ = ((((1) < args__9339__auto__.length))?(new cljs.core.IndexedSeq(args__9339__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9340__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__14437__auto__ = cljs.core.first(opts);
return ajax.easy.easy_ajax_request(uri,"PURGE",(((f__14437__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__14437__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq14940){
var G__14941 = cljs.core.first(seq14940);
var seq14940__$1 = cljs.core.next(seq14940);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__14941,seq14940__$1);
});

