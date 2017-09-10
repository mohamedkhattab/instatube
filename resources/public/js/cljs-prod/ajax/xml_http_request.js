// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__14611 = e.target.readyState;
var fexpr__14610 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__14610.cljs$core$IFn$_invoke$arity$1 ? fexpr__14610.cljs$core$IFn$_invoke$arity$1(G__14611) : fexpr__14610.call(null,G__14611));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__14613,handler){
var map__14614 = p__14613;
var map__14614__$1 = ((((!((map__14614 == null)))?((((map__14614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14614):map__14614);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14614__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14614__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14614__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__14614,map__14614__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__14612_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__14612_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__14614,map__14614__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___14626 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___14626)){
var response_type_14627 = temp__4657__auto___14626;
this$__$1.responseType = cljs.core.name(response_type_14627);
} else {
}

var seq__14616_14628 = cljs.core.seq(headers);
var chunk__14617_14629 = null;
var count__14618_14630 = (0);
var i__14619_14631 = (0);
while(true){
if((i__14619_14631 < count__14618_14630)){
var vec__14620_14632 = chunk__14617_14629.cljs$core$IIndexed$_nth$arity$2(null,i__14619_14631);
var k_14633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14620_14632,(0),null);
var v_14634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14620_14632,(1),null);
this$__$1.setRequestHeader(k_14633,v_14634);

var G__14635 = seq__14616_14628;
var G__14636 = chunk__14617_14629;
var G__14637 = count__14618_14630;
var G__14638 = (i__14619_14631 + (1));
seq__14616_14628 = G__14635;
chunk__14617_14629 = G__14636;
count__14618_14630 = G__14637;
i__14619_14631 = G__14638;
continue;
} else {
var temp__4657__auto___14639 = cljs.core.seq(seq__14616_14628);
if(temp__4657__auto___14639){
var seq__14616_14640__$1 = temp__4657__auto___14639;
if(cljs.core.chunked_seq_QMARK_(seq__14616_14640__$1)){
var c__9002__auto___14641 = cljs.core.chunk_first(seq__14616_14640__$1);
var G__14642 = cljs.core.chunk_rest(seq__14616_14640__$1);
var G__14643 = c__9002__auto___14641;
var G__14644 = cljs.core.count(c__9002__auto___14641);
var G__14645 = (0);
seq__14616_14628 = G__14642;
chunk__14617_14629 = G__14643;
count__14618_14630 = G__14644;
i__14619_14631 = G__14645;
continue;
} else {
var vec__14623_14646 = cljs.core.first(seq__14616_14640__$1);
var k_14647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14623_14646,(0),null);
var v_14648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14623_14646,(1),null);
this$__$1.setRequestHeader(k_14647,v_14648);

var G__14649 = cljs.core.next(seq__14616_14640__$1);
var G__14650 = null;
var G__14651 = (0);
var G__14652 = (0);
seq__14616_14628 = G__14649;
chunk__14617_14629 = G__14650;
count__14618_14630 = G__14651;
i__14619_14631 = G__14652;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__8163__auto__ = body;
if(cljs.core.truth_(or__8163__auto__)){
return or__8163__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
