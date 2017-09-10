(ns instatube.video-list
  (:require [cljs.core.async :refer [put!]]))


(defn video-list [EVENTCHANNEL videos]
  [:div {:class "col-md-4"}
   [:ul {:class "list-group"}
    (for [video videos]
      [:li {:class "list-group-item"
            :on-click (fn []
                        (put! EVENTCHANNEL [:update-active-video {:active-video video}]))
            :key (get-in video [:etag])}
       [:div {:class "video-list media"}

        [:div {:class "media-left"}
         [:img {:class "media-object"
                :alt ""
                :src (get-in video [:snippet :thumbnails :default :url])}]]

        [:div {:class "media-body"}
         [:div {:class "media-heading"}
          (get-in video [:snippet :title])]]]])]])
