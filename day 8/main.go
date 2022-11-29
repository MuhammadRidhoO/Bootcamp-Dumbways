package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func main() {
	route := mux.NewRouter()

	route.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))
	
	route.HandleFunc("/", home).Methods("GET")//1
	route.HandleFunc("/", addBlog).Methods("POST") //2
	route.HandleFunc("/contact", contact).Methods("GET")
	route.HandleFunc("/final-blog/{id}", finalBlog).Methods("GET")
	route.HandleFunc("/inputproject", inputproject).Methods("GET") 
	
	fmt.Println("Server berjalan pada port 5000")
	http.ListenAndServe("localhost:5000", route)
}

type Blog struct {
	Nameproject	string
	Comment		string
	Author		string
	NodeJS		string
	ReactJS		string
	JavaScript	string
	TypeScript	string
}

var blogs = []Blog{
	{
		Nameproject: "Learning Golang",
		Comment: "At DumbWays",
		Author: "Muhammad Ridho",
	},
}

func addBlog(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()

	if err != nil {
		log.Fatal(err)
	}
		
	nameproject  := r.PostForm.Get("nameproject")
	comment := r.PostForm.Get("comment")
	nodejs := r.PostForm.Get("nodejs")
	reactjs := r.PostForm.Get("reactjs")
	javascript := r.PostForm.Get("javascript")
	typescript := r.PostForm.Get("typescript")
	
	imgnodejs := ""
	imgreactjs := ""
	imgjavascript := ""
	imgtypescript := ""

	if nodejs == "true"{
		imgnodejs = "public/image/JSnode.png"
		return
	}
	if reactjs == "true" {
		imgreactjs = "public/image/ReactJS.png"
		return
	}
	if javascript == "true"{
		imgjavascript = "public/image/JavaScript.png"
		return
	}
	if typescript == "true"{
		imgtypescript = "public/image/typesscript.png"
		return
	}

	
	var newBlog = Blog{
		Nameproject: nameproject,
		Comment: comment,
		NodeJS: imgnodejs,
		ReactJS: imgreactjs,
		JavaScript: imgjavascript,
		TypeScript: imgtypescript,
	}
	
	blogs = append(blogs, newBlog)
	
	http.Redirect(w, r, "/", http.StatusMovedPermanently)
}

func home(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/addblog.html")
	
	if err != nil {
		w.Write([]byte("Massage : " + err.Error()))
		return
	}
	dataBlog := map[string]interface{}{
		"Blogs": blogs,
	}

	tmpt.Execute(w, dataBlog)
	// fmt.Println(blogs)
}

func finalBlog(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/hasilinputan.html")

	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	
	data := map[string]interface{}{
		"Nameproject" : "ROG is the Best",
		"Comment" : "Very well for gamer",
		"PostAt" : "29 Nov 2022",
		"Author" : "Muhammad Ridho",
		"Id" : id,
	}
	
	tmpt.Execute(w, data)
	
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
	fmt.Println()
}


