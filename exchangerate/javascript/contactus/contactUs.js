let name = document.getElementById("name")
let email = document.getElementById("email")
let textarea = document.getElementById("textarea")
let task = document.getElementById("task")

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
               "j", "k", "l", "m", "n", "o", "p", "q", "r",
               "s", "t", "u", "v", "w", "x", "y", "z"]

function sendEmail() {
    if(!isEmailValid()) {
        return alert("Please, enter correct email");
    }

    if(!isTextAreaValid()) {
        return alert("Please, enter the body of email");
    }

    if(Number.parseInt(task.value) !== -8) {
        return alert("Please, confirm you are not a robot")
    }

    fetch(`http://localhost:8080/exchange/rates/support/email/${email.value}/${name.value}/${textarea.value}`,
        {
            mode: "no-cors"
        }).then(r => alert("Thank you! Your message was sent."))

    clearAllForms()
}

function clearAllForms() {
    name.value = ""
    email.value = ""
    textarea.value = ""
    task.value = ""
}

function isEmailValid() {
    if(email.value.length > 320) {
        return false
    }

    let firstCharacter = email.value.charAt(0)
    let secondCharacter = email.value.charAt(1)


    // validation to check if it has two valid characters before @
    for(let i = 0; i < letters.length; i++) {
        if(firstCharacter === letters[i] || secondCharacter === letters[i].toUpperCase()) {
            break
        }
        if((firstCharacter !== letters[i] || secondCharacter !== letters[i].toUpperCase())
            && i === letters.length - 1) {
            return false
        }
    }

    for(let i = 0; i < letters.length; i++) {
        if(secondCharacter === letters[i] || secondCharacter === letters[i].toUpperCase()) {
            break
        }
        if((secondCharacter !== letters[i] || secondCharacter === letters[i].toUpperCase())
            && i === letters.length - 1) {
            return false
        }
    }

    // validation to check if it contains @
    for(let i = 0; i < email.value.length; i++) {
        if(email.value.charAt(i) === "@") {
            break
        }
        if(email.value.charAt(i) !== "@" && i === email.value.length - 1) {
            return false
        }
    }

    // validation to check if it contains .
    for(let i = 0; i < email.value.length; i++) {
        if(email.value.charAt(i) === ".") {
            break
        }
        if(email.value.charAt(i) !== "." && i === email.value.length - 1) {
            return false
        }
    }

    return true
}

function isTextAreaValid() {
    return textarea.value !== "";
}