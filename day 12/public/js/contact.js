function inputData() {
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    console.log(nama, email, number, subject, message)


if (nama == "") {
    return alert('tolong di isi 1')
} else if (email == "") {
    return alert('tolong isi 2')
} else if (number == "") {
    return alert('tolong isi 3')
} else if (subject == "") {
    return alert('tolong isi 4')
} else if (message == "") {
    return alert('tolong isi 5')

}

// let emailReceiver = "muhammadridho081997@gmail.com"

let link = document.createElement('a')
link.href = `mailto:${email}?subject=${subject}&body=Hallo nama saya ${nama}, ${message}, silahkan kontak nomer saya di ${number}`
link.click()

// let student = {
//     nama,
//     email,
//     number,
//     subject,
//     massage
// }

// console.log(student)

}