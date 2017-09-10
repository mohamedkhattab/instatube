(ns instatube.header
  (:require [instatube.nav :refer [nav-item]]
            [instatube.search-bar :refer [search-bar]]))


(defn header [EVENTCHANNEL app-state]
  [:div {:class "col-md-12"}
   [:nav {:class "navbar navbar-light header"}

    [:a {:class "navbar-brand" :href "#"}
     [:img {:src "img/logo_sm.png"}]]
     
    [:ul {:class "navbar-nav mr-auto"}
     [search-bar EVENTCHANNEL (:term @app-state)]]]])
