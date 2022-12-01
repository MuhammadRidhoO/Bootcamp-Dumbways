package main

import (
	"context"
	"fmt"
	"html/template"
	"strings"

	"log"
	"net/http"
	"strconv"
	"time"

	"persona-web/connection"

	"github.com/gorilla/mux"
	"github.com/gorilla/sessions"
	"golang.org/x/crypto/bcrypt"
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

	route.HandleFunc("/register", fomregis).Methods("GET")
	route.HandleFunc("/register", aksesregis).Methods("POST")

	route.HandleFunc("/login", fomLogin).Methods("GET")
	route.HandleFunc("/login", akseslogin).Methods("POST")

	route.HandleFunc("/logout", logoutusers).Methods("GET")

	fmt.Println("Server berjalan pada port 5000")
	http.ListenAndServe("localhost:5000", route)
}

type MetaData struct {
	Title     string
	IsLogin   bool
	UserName  string
	FlashData string
}
var Data = MetaData{
	Title: "Personal Web",
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

type Users struct {
	Id       	  int
	NameUsers     string
	EmailUsers    string
	PasswordUsers string
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

	
	var store = sessions.NewCookieStore([]byte("SESSIONS_ID"))
	session, _ := store.Get(r, "SESSIONS_ID")

	if session.Values["IsLogin"] != true {
		Data.IsLogin = false
	} else {
		Data.IsLogin = session.Values["IsLogin"].(bool)
		Data.UserName = session.Values["Name"].(string)
	}

	fm := session.Flashes("message")

	var flashes []string
	if len(fm) > 0 {
		session.Save(r, w)

		for _, fl := range fm {
			flashes = append(flashes, fl.(string))
		}
	}

	Data.FlashData = strings.Join(flashes, "")

	// fmt.Println(result)
	listProject := map[string]interface{}{
		"Projects": result,
		"Data" : Data,
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

func fomregis(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "text/html; charset=utf-8")
	var tmpl, err = template.ParseFiles("views/register.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("message : " + err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	tmpl.Execute(w, nil)
}

func aksesregis(w http.ResponseWriter, r *http.Request){
	err := r.ParseForm()
	if err != nil {
		log.Fatal(err)
	}

	name := r.PostForm.Get("name_users")
	email := r.PostForm.Get("email_users")
	
	password := r.PostForm.Get("password_users")
	passwordHash, _ := bcrypt.GenerateFromPassword([]byte(password), 10)

	_, err = connection.Conn.Exec(context.Background(), "INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", name, email, passwordHash)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("message : " + err.Error()))
		return
	}
	
	var store = sessions.NewCookieStore([]byte("SESSIONS_ID"))
	session, _ := store.Get(r, "SESSIONS_ID")

	session.AddFlash("successfully registered!", "message")

	session.Save(r, w)

	http.Redirect(w, r, "/login", http.StatusMovedPermanently)
}

func fomLogin(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "text/html; charset=utf-8")

	var tmpl, err = template.ParseFiles("views/login.html")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("message : " + err.Error()))
		return
	}

	w.WriteHeader(http.StatusOK)
	tmpl.Execute(w, nil)
}

func akseslogin(w http.ResponseWriter, r *http.Request){
	var store = sessions.NewCookieStore([]byte("SESSIONS_ID"))
	session, _ := store.Get(r, "SESSIONS_ID")

	err := r.ParseForm()
	if err != nil {
		log.Fatal(err)
	}

	email := r.PostForm.Get("email")
	password := r.PostForm.Get("password")

	user := Users{}

	err = connection.Conn.QueryRow(context.Background(), "SELECT * FROM users WHERE email=$1", email).Scan(
		&user.Id, &user.NameUsers, &user.EmailUsers, &user.PasswordUsers,
	)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("message : " + err.Error()))
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.PasswordUsers), []byte(password))
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("message : " + err.Error()))
		return
	}

	session.Values["IsLogin"] = true
	session.Values["Name"] = user.NameUsers
	session.Options.MaxAge = 10800 // 3 hours

	session.AddFlash("successfully login!", "message")
	session.Save(r, w)

	http.Redirect(w, r, "/", http.StatusMovedPermanently)
}

func logoutusers(w http.ResponseWriter, r *http.Request){
	fmt.Println("Logout")

	var store = sessions.NewCookieStore([]byte("SESSIONS_ID"))
	session, _ := store.Get(r, "SESSIONS_ID")
	session.Options.MaxAge = -1

	session.Save(r, w)

	http.Redirect(w, r, "/login", http.StatusSeeOther)
}