package main

import (
	"context"
	"fmt"
	"html/template"

	"log"
	"net/http"
	"strconv"
	"time"

	// "vendor/golang.org/x/net/idna"

	"persona-web/connection"

	"github.com/gorilla/mux"
)

func main() {
	route := mux.NewRouter()

	connection.DatabaseConnect()

	route.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))

	route.HandleFunc("/", home).Methods("GET")     //1
	route.HandleFunc("/", addBlog).Methods("POST") //2
	route.HandleFunc("/contact", contact).Methods("GET")
	route.HandleFunc("/final-blog/{id}", finalBlog).Methods("GET")
	route.HandleFunc("/inputproject", inputproject).Methods("GET")
	route.HandleFunc("/edit/{id}", formubahdata).Methods("GET")
	route.HandleFunc("/edit/{id}", formproses).Methods("POST")
	route.HandleFunc("/delete/{id}", deleteinput).Methods("GET")

	fmt.Println("Server berjalan pada port 5000")
	http.ListenAndServe("localhost:5000", route)
}

type Project struct {
	Id          int
	Nameproject string
	Comment     string
	StartDate   time.Time
	EndDate     time.Time
	Duration    string
	Image       string
	Tecnology   []string
}

func home(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/addblog.html")

	if err != nil {
		w.Write([]byte("Message: yang mana ni?" + err.Error()))
		return
	}
	dataProjects, errQuery := connection.Conn.Query(context.Background(), "SELECT * FROM project")
	if errQuery != nil {
		fmt.Println("Message : yang mana ni 1 " + errQuery.Error())
		return
	}

	var result []Project

	for dataProjects.Next() {
		var each = Project{}

		err := dataProjects.Scan(&each.Id, &each.Nameproject, &each.Comment, &each.Image, &each.Tecnology, &each.StartDate, &each.EndDate)
		if err != nil {
			fmt.Println("Message : yang mana ni 2 " + err.Error())
			return
		}

		diff := each.EndDate.Sub(each.StartDate)

		months := int64(diff.Hours() / 24 / 30)
		days := int64(diff.Hours() / 24)

		if days%30 >= 0 {
			days = days % 30
		}

		var duration string

		if months >= 1 && days >= 1 {
			duration = strconv.FormatInt(months, 10) + " month " + strconv.FormatInt(days, 10) + " days"
		} else if months >= 1 && days <= 0 {
			duration = strconv.FormatInt(months, 10) + " month"
		} else if months < 1 && days >= 0 {
			duration = strconv.FormatInt(days, 10) + " days"
		} else {
			duration = "0 days"
		}
		each.Duration = duration

		result = append(result, each)
	}

	// fmt.Println(result)
	listProject := map[string]interface{}{
		"Projects": result,
	}

	tmpt.Execute(w, listProject)
}

func addBlog(w http.ResponseWriter, r *http.Request) {
	err := r.ParseForm()

	if err != nil {
		log.Fatal(err)
	}

	startDate := r.PostForm.Get("start_date")
	endDate := r.PostForm.Get("end_date")

	// End for Duration

	nameproject := r.PostForm.Get("nameproject")
	comment := r.PostForm.Get("comment")
	nodejs := r.PostForm.Get("nodejs")
	reactjs := r.PostForm.Get("reactjs")
	javascript := r.PostForm.Get("javascript")
	typescript := r.PostForm.Get("typescript")

	if nodejs == "true" {

		nodejs = "nodejs"
	}
	if reactjs == "true" {

		reactjs = "reactjs"
	}
	if javascript == "true" {

		javascript = "javascript"
	}
	if typescript == "true" {

		typescript = "typescript"
	}
	tecnology := []string{nodejs, reactjs, javascript, typescript}

	
	_, err = connection.Conn.Exec(context.Background(), "INSERT INTO project(nameproject, comment, image, tecnology, start_date, end_date) VALUES ($1, $2, 'images.png', $3, $4, $5)",
		nameproject, comment, tecnology, startDate, endDate)




	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("message : yang mana ni 3 " + err.Error()))
		return
	}

	http.Redirect(w, r, "/", http.StatusMovedPermanently)
}

func inputproject(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpl, err := template.ParseFiles("views/inputproject.html")

	if err != nil {
		w.Write([]byte("Message : " + err.Error()))
		return
	}
	tmpl.Execute(w, nil)
	fmt.Println()
}

func deleteinput(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	_, err := connection.Conn.Exec(context.Background(), "DELETE FROM project WHERE id=$1", id)
	if err != nil {
		w.Write([]byte("message : " + err.Error()))
		return
	}

	http.Redirect(w, r, "/", http.StatusMovedPermanently)
}

func finalBlog(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/hasilinputan.html")

	if err != nil {
		w.Write([]byte("Massage : yang mana ni 4 " + err.Error()))
		return
	}
	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	var tampilandetail = Project{}

	err = connection.Conn.QueryRow(context.Background(), 
	"SELECT id, nameproject,comment,image,tecnology, start_date, end_date FROM project WHERE id = $1", id).Scan(&tampilandetail.Id, &tampilandetail.Nameproject, &tampilandetail.Comment, &tampilandetail.Image, &tampilandetail.Tecnology,
		&tampilandetail.StartDate,&tampilandetail.EndDate)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Message2: " + err.Error()))
	}

	dataDetail := map[string]interface{}{
		"Project": tampilandetail,
	}

	tmpt.Execute(w, dataDetail)
}

func formubahdata(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpt, err := template.ParseFiles("views/editdata.html")

	if err != nil {
		w.Write([]byte("Massage : " + err.Error()))
		return
	}
	id, _ := strconv.Atoi(mux.Vars(r)["id"])

	var EditProject = Project{}

	errQuery := connection.Conn.QueryRow(context.Background(), "SELECT id, nameproject, comment, image, tecnology,start_date, end_date FROM project WHERE id = $1", id).Scan(&EditProject.Id, &EditProject.Nameproject, &EditProject.Comment, &EditProject.Image,&EditProject.Tecnology, &EditProject.StartDate, &EditProject.EndDate)

	if errQuery != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("message : " + err.Error()))
	}

	dataEdit := map[string]interface{}{
		"Projects": EditProject,
	}


	tmpt.Execute(w, dataEdit)
}

func formproses(w http.ResponseWriter, r *http.Request) {
	id, _ := strconv.Atoi(mux.Vars(r)["id"])
	err := r.ParseForm()

	if err != nil {
		log.Fatal(err)
	}

	Nameproject := r.PostForm.Get("nameproject")
	Comment := r.PostForm.Get("comment")
	StartDate, _ := time.Parse("2006-01-02", r.PostForm.Get("startdate"))
	EndDate, _ := time.Parse("2006-01-02", r.PostForm.Get("enddate"))
	Image := "Dummy IT"
	nodejs := r.PostForm.Get("nodejs")
	reactjs := r.PostForm.Get("reactjs")
	javascript := r.PostForm.Get("javascript")
	typescript := r.PostForm.Get("typescript")

	if nodejs == "true" {

		nodejs = "nodejs"
	}
	if reactjs == "true" {

		reactjs = "reactjs"
	}
	if javascript == "true" {

		javascript = "javascript"
	}
	if typescript == "true" {

		typescript = "typescript"
	}
	Tecnology := []string{nodejs, reactjs, javascript, typescript}

	_, errQuery := connection.Conn.Exec(context.Background(), "UPDATE project SET nameproject=$1, comment=$2, image=$3, tecnology=$4, start_date=$5, end_date=$6  WHERE id=$7;", 
	Nameproject, Comment, Image, Tecnology, StartDate, EndDate, id)

	if errQuery != nil {
		fmt.Println("Message : " + errQuery.Error())
		return
	}

	http.Redirect(w, r, "/", http.StatusMovedPermanently)
}

func contact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	tmpl, err := template.ParseFiles("views/contact.html")

	if err != nil {
		w.Write([]byte("Message : " + err.Error()))
		return
	}
	tmpl.Execute(w, nil)
}
