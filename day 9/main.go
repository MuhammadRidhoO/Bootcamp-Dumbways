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

	config.DatabaseConnect()

	route.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))
	
	route.HandleFunc("/", home).Methods("GET")//1
	route.HandleFunc("/", addBlog).Methods("POST") //2
	route.HandleFunc("/contact", contact).Methods("GET")
	route.HandleFunc("/final-blog/{id}", finalBlog).Methods("GET")
	route.HandleFunc("/inputproject", inputproject).Methods("GET") 
	route.HandleFunc("/edit/{id}", formubahdata).Methods("GET")
	route.HandleFunc("/edit/{id}", formproses).Methods("POST")
	route.HandleFunc("/delete/{{id}}", deleteinput).Methods("GET")

	
	fmt.Println("Server berjalan pada port 5000")
	http.ListenAndServe("localhost:5000", route)
}

type Blog struct {
	Nameproject	string
	Comment		string
	Author		string
	PostAt		string
	NodeJS		string
	ReactJS		string
	JavaScript	string
	TypeScript	string
	Id			int	
}

var blogs = []Blog{
	{
		Nameproject: "Learning Golang",
		Comment: "At DumbWays",
		Author: "Muhammad Ridho",
		PostAt: "29 Nov 2022",
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
		imgnodejs = "/public/image/JSnode.png"
		
	}
	if reactjs == "true" {
		imgreactjs = "/public/image/ReactJS.png"
		
	}
	if javascript == "true"{
		imgjavascript = "/public/image/JavaScript.png"
		
	}
	if typescript == "true"{
		imgtypescript = "/public/image/typesscript.png"
		
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

func formubahdata(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/editdata.html")

	if err != nil {
		w.Write([]byte("Massage : " + err.Error()))
		return
	}
	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	
	editinputan := Blog{}

	for index, data :=range blogs{
		if index == id {
			editinputan = Blog {	
				Nameproject: data.Nameproject,
				Comment: data.Comment,
				JavaScript: data.JavaScript,
				NodeJS: data.NodeJS,
				ReactJS: data.ReactJS,
				TypeScript: data.TypeScript,
				Id: id,
			}
		}
	}

	fmt.Println(editinputan)
	finaldata := map[string]interface{}{
		"Blog" :editinputan,
	}
	tmpt.Execute(w,finaldata)
}

func formproses(w http.ResponseWriter, r *http.Request) {
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
	
	id, _ := strconv.Atoi(mux.Vars(r)["id"])
		blogs[id].Nameproject = nameproject
		blogs[id].Comment = comment
		blogs[id].JavaScript = javascript
		blogs[id].NodeJS = nodejs
		blogs[id].ReactJS = reactjs
		blogs[id].TypeScript = typescript
	
	http.Redirect(w, r, "/", http.StatusMovedPermanently)
}


func finalBlog(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/hasilinputan.html")

	
	if err != nil {
		w.Write([]byte("Massage : " + err.Error()))
		return
	}
	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	
	finalinput := Blog{}

	for index, data :=range blogs{
		if index == id {
			finalinput = Blog {	
				Nameproject: data.Nameproject,
				Comment: data.Comment,
				JavaScript: data.JavaScript,
				NodeJS: data.NodeJS,
				ReactJS: data.ReactJS,
				TypeScript: data.TypeScript,
			}
		}
	}

	fmt.Println(finalinput)
	finaldata := map[string]interface{}{
		"Blog" :finalinput,
	}
	tmpt.Execute(w,finaldata)

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


func deleteinput(w http.ResponseWriter, r *http.Request){
	index, _ := strconv.Atoi(mux.Vars(r)["index"]) 

	fmt.Println(index)
	//untuk menanpung blog untuk mendapatkan index
	blogs=append(blogs[:index], blogs[index+1:]...)
	http.Redirect(w,r,"/",http.StatusFound)
}



