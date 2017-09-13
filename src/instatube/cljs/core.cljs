(ns instatube.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs.core.async :refer [chan put! <!]]
            [ajax.core :as ajax]

            [instatube.header :refer [header]]
            [instatube.video-list :refer [video-list]]
            [instatube.util :as util]))

;; The Youtube API KEY
(def YOUTUBE_API_KEY "AIzaSyANo3bt4bOjVU_VxSGwkbZSfrLoj9VREGo")

;; define the main app state (once for figwheel)
(defonce app-state
  (r/atom {:active-item "Home"
           :term "mom's spaghetti"
           :videos []
           
           ;; PROBLEM very hacky soultion, must find a better solution
           :active-video {}}))

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

(def debounced-youtube-query (util/debounce (fn [term]
                                              (ajax/GET
                                               ;; search URI
                                               "https://www.googleapis.com/youtube/v3/search"

                                               ;; URI parameters
                                               {:params {:q term
                                                         :maxResults 5
                                                         :part "snippet"
                                                         :type "video"
                                                         :key YOUTUBE_API_KEY}
                                                :handler handle-youtube-resonse
                                                :response-format (ajax/json-response-format {:keywords? true})}))
                                            300))

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
                           (debounced-youtube-query term)
                           (swap! app-state assoc-in [:active-video] (first (:videos @app-state))))})

;; initialize UI state
(put! EVENTCHANNEL [:query-youtube-search {:term (:term @app-state)}])

;; event loop
(go
  (while true
    ;; pull events from the channel
    (let [[event-name event-data] (<! EVENTCHANNEL)]
      ;; call the event function with the given data
      ((event-name EVENTS) event-data))))
;; END event loop

(js/Object.defineProperty js/document "referrer"
                             (js-obj {:get
                                      (fn []
                                        (str "https://www.youtube.com"))}))

(defn video-container [videoId title desc]
  [:div {:class "video-detail col-md-8"}
   [:div {:class "embed-responsive embed-responsive-16by9"}
    [:iframe {:class "embed-responsive-item"
              :allow-full-screen "allowfullscreen"
              :frame-border 0
              :auto-play 1
              :src (str "https://www.youtube.com/embed/"
                        (if (nil? videoId) "SW-BU6keEUw" videoId)
                        "?autoplay=1&enablejsapi=1&origin=https://www.youtube.com&rel=0&loop=1")}]]

   [:div {:class "details"}
    [:div {:class "title"} (if (nil? title) "Eminem - \"Mom's Spaghetti\" (Music Video)" title)]
    [:div {:class "description"} (if (nil? desc) "parody Lyric subtitles available in video options (click the CC icon)" desc)]]

   [:div {:class "footer"}
    [:p {} "InstaTube by " [:a {:href "https://www.facebook.com/photo.php?fbid=10212265116655567&set=a.2410213467219.122028.1607704221&type=3&theater"} "Mohamed Khattab"]]]])

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
