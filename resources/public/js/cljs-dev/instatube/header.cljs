(ns instatube.header
  (:require [instatube.nav :refer [nav-item]]
            [instatube.search-bar :refer [search-bar]]))


(defn header [EVENTCHANNEL app-state]
  [:div {:class "col-md-12"}
   [:nav {:class "navbar navbar-expand-lg navbar-light header"}

    [:a {:class "navbar-brand" :href "#"}
     [:img {:src "img/logo_sm.png"}]]

    [:button {:class "navbar-toggler"
              :type "button"
              :data-toggle "collapse"
              :data-target "#navbarSupportedContent"
              :aria-controls "navbarSupportedContent"
              :aria-expanded "false"
              :aria-label "Toggle Navigation"}
     [:span {:class "navbar-toggler-icon"}]]
    
    [:div {:class "collapse navbar-collapse" :id "navbarSupportedContent"}
     
     [:ul {:class "navbar-nav mr-auto"}
      [search-bar EVENTCHANNEL (:term @app-state)]]
     
     [:ul {:class "navbar-nav"}
      [nav-item EVENTCHANNEL "Home" (:active-item @app-state)]
      [nav-item EVENTCHANNEL "About" (:active-item @app-state)]]]]])
