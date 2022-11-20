let data = []

function addData(event) {

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

  let blog = {
    name,
    description,
    image,
    postAtDate: new Date(),
    postAtEnd : new End(),
    author: "Muhammad Ridho"
  }

  data.push(blog)
  console.log(data)
  renderBlog()
}