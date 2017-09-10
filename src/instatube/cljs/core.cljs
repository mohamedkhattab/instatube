(ns instatube.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [chan put! <!]]
            [ajax.core :as ajax]

            [instatube.header :refer [header]]
            [instatube.video-list :refer [video-list]]))

;; The Youtube API KEY
(def YOUTUBE_API_KEY "AIzaSyANo3bt4bOjVU_VxSGwkbZSfrLoj9VREGo")

;; define the main app state (once for figwheel)
(defonce app-state
  (r/atom {:active-item "Home"
           :term "nirvana"
           :videos []
           :active-video "hTWKbfoikeg"}))

;; Arbitrary events will be pushed on the event channel (queue)
(def EVENTCHANNEL (chan))

;; handle YouTube API response rendering
(defn handle-youtube-resonse [response]
  (put! EVENTCHANNEL [:update-video-result-set {:videos (:items response)}]))

(defn get-video-id [video]
  (get-in video [:id :videoId]))

(defn get-video-title [video]
  (get-in video [:snippet :title]))

(defn get-video-desc [video]
  (get-in video [:snippet :description]))

(defn get-active-video! []
  (:active-video @app-state))

;; Define different events for handling user input
(def EVENTS
  ;; handles user click on nav bar links
  {:update-active-item (fn [{:keys [active-item]}]
                         (swap! app-state assoc-in [:active-item] active-item))
   
   ;; handles the onChange event fro the search bar
   :update-search-term (fn [{:keys [term]}]
                         (swap! app-state assoc-in [:term] term))

   :update-video-result-set (fn [{:keys [videos]}]
                              (swap! app-state assoc-in [:videos] videos))

   :update-active-video (fn [{:keys [active-video]}]
                          (swap! app-state assoc-in [:active-video] active-video))
   
   :query-youtube-search (fn [{:keys [term]}]
                           (ajax/GET
                            ;; search URI
                            "https://www.googleapis.com/youtube/v3/search"

                            ;; URI parameters
                            {:params {:q term
                                      :maxResults 5
                                      :part "snippet"
                                      :type "video,playlist"
                                      :key YOUTUBE_API_KEY}
                             :handler handle-youtube-resonse
                             :response-format (ajax/json-response-format {:keywords? true})}))})

;;;; BUG videoId intitializes to nil
;; initialize UI state
(put! EVENTCHANNEL [:query-youtube-search {:term "nirvana"}])
(put! EVENTCHANNEL [:update-active-video {:active-video (first (:videos @app-state))}])

;; event loop
(go
  (while true
    ;; pull events from the channel
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ;; call the event function with the given data
      ((event-name EVENTS) event-data))))
;; END event loop

(defn video-container [videoId title desc]
  [:div {:class "video-detail col-md-8"}
   [:div {:class "embed-responsive embed-responsive-16by9"}
    [:iframe {:class "embed-responsive-item"
              :allow-full-screen "allowfullscreen"
              :frame-border 0
              :src (str "https://www.youtube.com/embed/" videoId)}]]

   [:div {:class "details"}
    [:div {:class "title"} title]
    [:div {:class "description"} desc]]])

(defn app []
  [:div {:class "container"}
   [:div {:class "row"}
    [header EVENTCHANNEL app-state]]
   [:div {:class "row"}
    
    [video-container
     (get-video-id (get-active-video!))
     (get-video-title (get-active-video!))
     (get-video-desc (get-active-video!))]
    
    [video-list EVENTCHANNEL (:videos @app-state)]]])

(r/render [app] (js/document.querySelector "#cljs-target"))