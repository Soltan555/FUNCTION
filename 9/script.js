let mail = document.getElementById("mail");

let password = document.getElementById("password");


function test() {
    if (mail.value == "soltan.abdurahmanov@mail.ru" && password.value == "12345") {
        alert("Giris duzgundur")
    } else {
        alert("Giris yanlisdir, Yeniden daxil et")

    }

}