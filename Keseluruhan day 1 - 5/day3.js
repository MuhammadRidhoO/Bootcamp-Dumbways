function inputData() {
    let nama = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let massage = document.getElementById("massage").value
    console.log(nama, email, number, subject, massage)


if (nama == "") {
    return alert('tolong di isi')
} else if (email == "") {
    return alert('tolong isi')
} else if (number == "") {
    return alert('tolong isi')
} else if (subject == "") {
    return alert('tolong isi')
} else if (massage == "") {
    return alert('tolong isi')
}

// let emailReceiver = "muhammadridho081997@gmail.com"

let link = document.createElement('a')
link.href = `mailto:${email}?subject=${subject}&body=Hallo nama saya ${nama}, ${massage}, silahkan kontak nomer saya di ${number}`
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