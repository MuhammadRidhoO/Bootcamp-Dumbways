let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]


let js = document.getElementById("javascrip")
let node_js = document.getElementById("node.js")
let react_js = document.getElementById("react")
let ts = document.getElementById("typesscript")

let data = []

function dataBase(event) {

  event.preventDefault()

  let name = document.getElementById("name").value;
  let description = document.getElementById("description").value;
  let image = document.getElementById("inputimg").files;


  if (name == "") {
    return alert("Tolong masukan nama")
  } else if (description == "") {
    return alert("Tolong masukan keterangannya")
  } else if (image.length == 0) {
    return alert("Tolong filesnya di input")
  }

  let gambar = URL.createObjectURL(image[0])

  let js = ''
  let node_js = ''
  let react_js = ''
  let ts = ''

  if (js == true) {
    js = 'img/JavaScript.png'
  }
  if (node_js == true) {
    node_js = 'img/JS node.png'
  }
  if (react_js == true) {
    react_js = 'img/React JS.png'
  }
  if (ts == true) {
    ts = 'img/typesscript.png'
  }


  let blog = {
    name,
    description,
    gambar,
    js,
    node_js,
    react_js,
    ts,
    // postAtDate: new Date(),
    // postAtEnd : new End(),
    author: "Muhammad Ridho"
  }

  data.push(blog)
  console.log(data)
  renderBlog()
}

function renderBlog() {
  document.getElementById("semua").innerHTML = ``
  for (let i = 0; i < data.length; i++) {
    document.getElementById("semua").innerHTML += `
    <div class="menumyproject" id="menuproject">
                <div class="detailproject">
                    <div>
                        <div>
                            <img src="${data[i].gambar}" alt="">
                        </div>
                    </div>
                    <h3>${data[i].name}</h3>
                    <h5>Durasi</h5>
                    <p>${data[i].description}</p>
                </div>
                <div class="gambarakses">
                    <img src="${data[i].js}">
                    <img src="${data[i].node_js}">
                    <img src="${data[i].react_js}">
                    <img src="${data[i].ts}">
                </div>
                <div class="tombolpilihan">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>`
  }
}

