(ns instatube.clj.router
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.content-type :as content-type]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.util.response :as res]
            
            [compojure.core :refer :all]
            [compojure.route :as route]

            [ring.middleware.edn :refer [wrap-edn-params]]))


(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defroutes mux
  (GET "/search/:term" [term]
       (generate-response {:hello "world"}))

  (route/not-found "<h1>Page not found</h1>"))


(def app
  (-> mux
      wrap-edn-params))
