(ns instatube.search-bar
  (:require [cljs.core.async :refer [put!]]))

(defn search-bar [EVENTCHANNEL value]
  [:input {:class "form-control"
           :id "search-bar"
           :placeholder "Search YouTube Instantly..."
           :value value
           :on-change (fn [event]
                        (put! EVENTCHANNEL [:update-search-term {:term event.target.value}])
                        (put! EVENTCHANNEL [:query-youtube-search {:term event.target.value}]))}])
