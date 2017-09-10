(ns instatube.nav
  (:require [cljs.core.async :refer [put!]]))


(defn active? [active-item item]
  (if (= active-item item) true false))


(defn nav-item [EVENTCHANNEL content active-item]
  [:li {:class "nav-item"
        :on-click (fn [event]
                    (put! EVENTCHANNEL [:update-active-item {:active-item content}]))}
   [:a {:class
        (if (active? content active-item) "nav-link active" "nav-link")
        :href "#"}
    content]])
