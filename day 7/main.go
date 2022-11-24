package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	route := mux.NewRouter()

	route.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))

	route.HandleFunc("/", home).Methods("GET")
	route.HandleFunc("/contact", contact).Methods("GET")
	route.HandleFunc("/inputproject", inputproject).Methods("GET")
	route.HandleFunc("/inputproject", theproject).Methods("POST")

	fmt.Println("Server berjalan pada port 5000")
	http.ListenAndServe("localhost:5000", route)
}

func home(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/addblog.html")

	if err != nil {
		w.Write([]byte("Massage : " + err.Error()))
		return
	}
	tmpt.Execute(w, nil)
}

func contact(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpl, err := template.ParseFiles("views/contact.html")

	if err != nil {
		w.Write([]byte("Message : " + err.Error()))
		return
	}
	tmpl.Execute(w, nil)
}

func inputproject(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpl, err := template.ParseFiles("views/inputproject.html")

	if err != nil {
		w.Write([]byte("Message : " + err.Error()))
		return
	}
	tmpl.Execute(w, nil)
}

func theproject(w http.ResponseWriter, r *http.Request){
	err := r.ParseForm()

	if err != nil {
		log.Fatal(err)

		fmt.Println("ini nama project : " + r.PostForm.Get("theproject"))
		fmt.Println("ini comment : " + r.PostForm.Get("comment"))

		http.Redirect(w, r, "/", http.StatusMovedPermanently)
	}
}