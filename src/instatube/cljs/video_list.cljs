(ns instatube.video-list
  (:require [cljs.core.async :refer [put!]]
            [instatube.nav :refer [active?]]
            [instatube.core :refer [get-video-id]]))


(defn video-list [EVENTCHANNEL videos active-video]
  [:div {:class "col-md-4"}
   [:ul {:class "list-group"}
    (for [video videos]
      [:li {:class (if (active? (get-video-id video) (get-video-id active-video)) "list-group-item active" "list-group-item")
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
