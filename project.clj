(defproject com.lighttable/vim "0.0.5"
  :description "Vim keybindings for Light Table"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"
                  :exclusions [org.apache.ant/ant]]
                 ]
  :jvm-opts ["-Xmx1g" "-XX:+UseConcMarkSweepGC"] ; cljsbuild eats memory
  :cljsbuild {:builds [{}]}
  :plugins [[lein-cljsbuild "1.0.1"]])
