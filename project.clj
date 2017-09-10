(defproject instatube "0.1.0-SNAPSHOT"

  :description "An Instant Youtube Client Written using Reagent"

  :url "http://instatube.co"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [reagent "0.8.0-alpha1"]
                 [org.clojure/core.async "0.3.443"]
                 [cljs-ajax "0.7.2"]]

  :cljsbuild {:builds [{:id "dev"
                        ; change to add client folder for production
                        :source-paths ["src/instatube/cljs"] 
                        :figwheel true
                        :compiler {:optimizations :none
                                   :output-to "resources/public/js/dev.js"
                                   :output-dir "resources/public/js/cljs-dev/"
                                   :pretty-print true
                                   :source-map true}}

                       {:id "prod"
                        :source-paths ["src/instatube/cljs"]
                        :compiler {:output-to "resources/public/js/prod.js"
                                   :optimizations :advanced
                                   :output-dir "resources/public/js/cljs-prod/"
                                   :pretty-print false}}]}
  
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-figwheel "0.5.13"]]

  :figwheel {:css-dirs ["resources/public/css"]}
  
  :main instatube.core)
