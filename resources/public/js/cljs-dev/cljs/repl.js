// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35586){
var map__35587 = p__35586;
var map__35587__$1 = ((((!((map__35587 == null)))?((((map__35587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35587.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35587):map__35587);
var m = map__35587__$1;
var n = cljs.core.get.call(null,map__35587__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35587__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35589_35611 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35590_35612 = null;
var count__35591_35613 = (0);
var i__35592_35614 = (0);
while(true){
if((i__35592_35614 < count__35591_35613)){
var f_35615 = cljs.core._nth.call(null,chunk__35590_35612,i__35592_35614);
cljs.core.println.call(null,"  ",f_35615);

var G__35616 = seq__35589_35611;
var G__35617 = chunk__35590_35612;
var G__35618 = count__35591_35613;
var G__35619 = (i__35592_35614 + (1));
seq__35589_35611 = G__35616;
chunk__35590_35612 = G__35617;
count__35591_35613 = G__35618;
i__35592_35614 = G__35619;
continue;
} else {
var temp__4657__auto___35620 = cljs.core.seq.call(null,seq__35589_35611);
if(temp__4657__auto___35620){
var seq__35589_35621__$1 = temp__4657__auto___35620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35589_35621__$1)){
var c__28828__auto___35622 = cljs.core.chunk_first.call(null,seq__35589_35621__$1);
var G__35623 = cljs.core.chunk_rest.call(null,seq__35589_35621__$1);
var G__35624 = c__28828__auto___35622;
var G__35625 = cljs.core.count.call(null,c__28828__auto___35622);
var G__35626 = (0);
seq__35589_35611 = G__35623;
chunk__35590_35612 = G__35624;
count__35591_35613 = G__35625;
i__35592_35614 = G__35626;
continue;
} else {
var f_35627 = cljs.core.first.call(null,seq__35589_35621__$1);
cljs.core.println.call(null,"  ",f_35627);

var G__35628 = cljs.core.next.call(null,seq__35589_35621__$1);
var G__35629 = null;
var G__35630 = (0);
var G__35631 = (0);
seq__35589_35611 = G__35628;
chunk__35590_35612 = G__35629;
count__35591_35613 = G__35630;
i__35592_35614 = G__35631;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35632 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27989__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35632);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35632)))?cljs.core.second.call(null,arglists_35632):arglists_35632));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35593_35633 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35594_35634 = null;
var count__35595_35635 = (0);
var i__35596_35636 = (0);
while(true){
if((i__35596_35636 < count__35595_35635)){
var vec__35597_35637 = cljs.core._nth.call(null,chunk__35594_35634,i__35596_35636);
var name_35638 = cljs.core.nth.call(null,vec__35597_35637,(0),null);
var map__35600_35639 = cljs.core.nth.call(null,vec__35597_35637,(1),null);
var map__35600_35640__$1 = ((((!((map__35600_35639 == null)))?((((map__35600_35639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35600_35639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35600_35639):map__35600_35639);
var doc_35641 = cljs.core.get.call(null,map__35600_35640__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35642 = cljs.core.get.call(null,map__35600_35640__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35638);

cljs.core.println.call(null," ",arglists_35642);

if(cljs.core.truth_(doc_35641)){
cljs.core.println.call(null," ",doc_35641);
} else {
}

var G__35643 = seq__35593_35633;
var G__35644 = chunk__35594_35634;
var G__35645 = count__35595_35635;
var G__35646 = (i__35596_35636 + (1));
seq__35593_35633 = G__35643;
chunk__35594_35634 = G__35644;
count__35595_35635 = G__35645;
i__35596_35636 = G__35646;
continue;
} else {
var temp__4657__auto___35647 = cljs.core.seq.call(null,seq__35593_35633);
if(temp__4657__auto___35647){
var seq__35593_35648__$1 = temp__4657__auto___35647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35593_35648__$1)){
var c__28828__auto___35649 = cljs.core.chunk_first.call(null,seq__35593_35648__$1);
var G__35650 = cljs.core.chunk_rest.call(null,seq__35593_35648__$1);
var G__35651 = c__28828__auto___35649;
var G__35652 = cljs.core.count.call(null,c__28828__auto___35649);
var G__35653 = (0);
seq__35593_35633 = G__35650;
chunk__35594_35634 = G__35651;
count__35595_35635 = G__35652;
i__35596_35636 = G__35653;
continue;
} else {
var vec__35602_35654 = cljs.core.first.call(null,seq__35593_35648__$1);
var name_35655 = cljs.core.nth.call(null,vec__35602_35654,(0),null);
var map__35605_35656 = cljs.core.nth.call(null,vec__35602_35654,(1),null);
var map__35605_35657__$1 = ((((!((map__35605_35656 == null)))?((((map__35605_35656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35605_35656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35605_35656):map__35605_35656);
var doc_35658 = cljs.core.get.call(null,map__35605_35657__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35659 = cljs.core.get.call(null,map__35605_35657__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35655);

cljs.core.println.call(null," ",arglists_35659);

if(cljs.core.truth_(doc_35658)){
cljs.core.println.call(null," ",doc_35658);
} else {
}

var G__35660 = cljs.core.next.call(null,seq__35593_35648__$1);
var G__35661 = null;
var G__35662 = (0);
var G__35663 = (0);
seq__35593_35633 = G__35660;
chunk__35594_35634 = G__35661;
count__35595_35635 = G__35662;
i__35596_35636 = G__35663;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35607 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35608 = null;
var count__35609 = (0);
var i__35610 = (0);
while(true){
if((i__35610 < count__35609)){
var role = cljs.core._nth.call(null,chunk__35608,i__35610);
var temp__4657__auto___35664__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35664__$1)){
var spec_35665 = temp__4657__auto___35664__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35665));
} else {
}

var G__35666 = seq__35607;
var G__35667 = chunk__35608;
var G__35668 = count__35609;
var G__35669 = (i__35610 + (1));
seq__35607 = G__35666;
chunk__35608 = G__35667;
count__35609 = G__35668;
i__35610 = G__35669;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35607);
if(temp__4657__auto____$1){
var seq__35607__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35607__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__35607__$1);
var G__35670 = cljs.core.chunk_rest.call(null,seq__35607__$1);
var G__35671 = c__28828__auto__;
var G__35672 = cljs.core.count.call(null,c__28828__auto__);
var G__35673 = (0);
seq__35607 = G__35670;
chunk__35608 = G__35671;
count__35609 = G__35672;
i__35610 = G__35673;
continue;
} else {
var role = cljs.core.first.call(null,seq__35607__$1);
var temp__4657__auto___35674__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35674__$2)){
var spec_35675 = temp__4657__auto___35674__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35675));
} else {
}

var G__35676 = cljs.core.next.call(null,seq__35607__$1);
var G__35677 = null;
var G__35678 = (0);
var G__35679 = (0);
seq__35607 = G__35676;
chunk__35608 = G__35677;
count__35609 = G__35678;
i__35610 = G__35679;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1504959336315
