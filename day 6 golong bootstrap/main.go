package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	route := mux.NewRouter()
	route.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
		w.Write([]byte("Hello Ridho"))
	}).Methods("GET")

	route.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request){
		w.Write([]byte("About"))
	}).Methods("GET")

		port := "5000"

	fmt.Print("Server sedang berjalan di port " + port)
	http.ListenAndServe("localhost:" + port, route)
}