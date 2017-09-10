// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.core');
goog.require('cljs.core');
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

return ajax.protocols._abort.call(null,this$);
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
var args__29299__auto__ = [];
var len__29292__auto___31169 = arguments.length;
var i__29293__auto___31170 = (0);
while(true){
if((i__29293__auto___31170 < len__29292__auto___31169)){
args__29299__auto__.push((arguments[i__29293__auto___31170]));

var G__31171 = (i__29293__auto___31170 + (1));
i__29293__auto___31170 = G__31171;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq31167){
var G__31168 = cljs.core.first.call(null,seq31167);
var seq31167__$1 = cljs.core.next.call(null,seq31167);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__31168,seq31167__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31174 = arguments.length;
var i__29293__auto___31175 = (0);
while(true){
if((i__29293__auto___31175 < len__29292__auto___31174)){
args__29299__auto__.push((arguments[i__29293__auto___31175]));

var G__31176 = (i__29293__auto___31175 + (1));
i__29293__auto___31175 = G__31176;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq31172){
var G__31173 = cljs.core.first.call(null,seq31172);
var seq31172__$1 = cljs.core.next.call(null,seq31172);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__31173,seq31172__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31179 = arguments.length;
var i__29293__auto___31180 = (0);
while(true){
if((i__29293__auto___31180 < len__29292__auto___31179)){
args__29299__auto__.push((arguments[i__29293__auto___31180]));

var G__31181 = (i__29293__auto___31180 + (1));
i__29293__auto___31180 = G__31181;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq31177){
var G__31178 = cljs.core.first.call(null,seq31177);
var seq31177__$1 = cljs.core.next.call(null,seq31177);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__31178,seq31177__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31184 = arguments.length;
var i__29293__auto___31185 = (0);
while(true){
if((i__29293__auto___31185 < len__29292__auto___31184)){
args__29299__auto__.push((arguments[i__29293__auto___31185]));

var G__31186 = (i__29293__auto___31185 + (1));
i__29293__auto___31185 = G__31186;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq31182){
var G__31183 = cljs.core.first.call(null,seq31182);
var seq31182__$1 = cljs.core.next.call(null,seq31182);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__31183,seq31182__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31189 = arguments.length;
var i__29293__auto___31190 = (0);
while(true){
if((i__29293__auto___31190 < len__29292__auto___31189)){
args__29299__auto__.push((arguments[i__29293__auto___31190]));

var G__31191 = (i__29293__auto___31190 + (1));
i__29293__auto___31190 = G__31191;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq31187){
var G__31188 = cljs.core.first.call(null,seq31187);
var seq31187__$1 = cljs.core.next.call(null,seq31187);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__31188,seq31187__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31194 = arguments.length;
var i__29293__auto___31195 = (0);
while(true){
if((i__29293__auto___31195 < len__29292__auto___31194)){
args__29299__auto__.push((arguments[i__29293__auto___31195]));

var G__31196 = (i__29293__auto___31195 + (1));
i__29293__auto___31195 = G__31196;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq31192){
var G__31193 = cljs.core.first.call(null,seq31192);
var seq31192__$1 = cljs.core.next.call(null,seq31192);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__31193,seq31192__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31199 = arguments.length;
var i__29293__auto___31200 = (0);
while(true){
if((i__29293__auto___31200 < len__29292__auto___31199)){
args__29299__auto__.push((arguments[i__29293__auto___31200]));

var G__31201 = (i__29293__auto___31200 + (1));
i__29293__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq31197){
var G__31198 = cljs.core.first.call(null,seq31197);
var seq31197__$1 = cljs.core.next.call(null,seq31197);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__31198,seq31197__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31204 = arguments.length;
var i__29293__auto___31205 = (0);
while(true){
if((i__29293__auto___31205 < len__29292__auto___31204)){
args__29299__auto__.push((arguments[i__29293__auto___31205]));

var G__31206 = (i__29293__auto___31205 + (1));
i__29293__auto___31205 = G__31206;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq31202){
var G__31203 = cljs.core.first.call(null,seq31202);
var seq31202__$1 = cljs.core.next.call(null,seq31202);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__31203,seq31202__$1);
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
var args__29299__auto__ = [];
var len__29292__auto___31209 = arguments.length;
var i__29293__auto___31210 = (0);
while(true){
if((i__29293__auto___31210 < len__29292__auto___31209)){
args__29299__auto__.push((arguments[i__29293__auto___31210]));

var G__31211 = (i__29293__auto___31210 + (1));
i__29293__auto___31210 = G__31211;
continue;
} else {
}
break;
}

var argseq__29300__auto__ = ((((1) < args__29299__auto__.length))?(new cljs.core.IndexedSeq(args__29299__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29300__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__30457__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__30457__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__30457__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq31207){
var G__31208 = cljs.core.first.call(null,seq31207);
var seq31207__$1 = cljs.core.next.call(null,seq31207);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__31208,seq31207__$1);
});


//# sourceMappingURL=core.js.map?rel=1504967592660
