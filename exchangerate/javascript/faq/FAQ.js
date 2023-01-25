let firstQuestion = document.getElementById("first-question")
let secondQuestion = document.getElementById("second-question")
let thirdQuestion = document.getElementById("third-question")
let fourthQuestion = document.getElementById("fourth-question")
let fifthQuestion = document.getElementById("fifth-question")
let sixthQuestion = document.getElementById("sixth-question")
let seventhQuestion = document.getElementById("seventh-question")

let downIcon1 = document.getElementById("down-icon1")
let upIcon1 = document.getElementById("up-icon1")
let downIcon2 = document.getElementById("down-icon2")
let upIcon2 = document.getElementById("up-icon2")
let downIcon3 = document.getElementById("down-icon3")
let upIcon3 = document.getElementById("up-icon3")
let downIcon4 = document.getElementById("down-icon4")
let upIcon4 = document.getElementById("up-icon4")
let downIcon5 = document.getElementById("down-icon5")
let upIcon5 = document.getElementById("up-icon5")
let downIcon6 = document.getElementById("down-icon6")
let upIcon6 = document.getElementById("up-icon6")
let downIcon7 = document.getElementById("down-icon7")
let upIcon7 = document.getElementById("up-icon7")


function displayBlock(index) {
    if(index === 1) {
        if(firstQuestion.style.display === "block") {
            firstQuestion.style.display = "none"
            downIcon1.style.display = "inline"
            upIcon1.style.display = "none"
            return
        }
        firstQuestion.style.display = "block"
        downIcon1.style.display = "none"
        upIcon1.style.display = "inline"
    } else if(index === 2) {
        if(secondQuestion.style.display === "block") {
            secondQuestion.style.display = "none"
            downIcon2.style.display = "inline"
            upIcon2.style.display = "none"
            return
        }
        secondQuestion.style.display = "block"
        downIcon2.style.display = "none"
        upIcon2.style.display = "inline"
    } else if(index === 3) {
        if(thirdQuestion.style.display === "block") {
            thirdQuestion.style.display = "none"
            downIcon3.style.display = "inline"
            upIcon3.style.display = "none"
            return
        }
        thirdQuestion.style.display = "block"
        downIcon3.style.display = "none"
        upIcon3.style.display = "inline"
    } else if(index === 4) {
        if(fourthQuestion.style.display === "block") {
            fourthQuestion.style.display = "none"
            downIcon4.style.display = "inline"
            upIcon4.style.display = "none"
            return
        }
        fourthQuestion.style.display = "block"
        downIcon4.style.display = "none"
        upIcon4.style.display = "inline"
    } else if(index === 5) {
        if(fifthQuestion.style.display === "block") {
            fifthQuestion.style.display = "none"
            downIcon5.style.display = "inline"
            upIcon5.style.display = "none"
            return
        }
        fifthQuestion.style.display = "block"
        downIcon5.style.display = "none"
        upIcon5.style.display = "inline"
    } else if(index === 6) {
        if(sixthQuestion.style.display === "block") {
            sixthQuestion.style.display = "none"
            downIcon6.style.display = "inline"
            upIcon6.style.display = "none"
            return
        }
        sixthQuestion.style.display = "block"
        downIcon6.style.display = "none"
        upIcon6.style.display = "inline"
    } else if(index === 7) {
        if(seventhQuestion.style.display === "block") {
            seventhQuestion.style.display = "none"
            downIcon7.style.display = "inline"
            upIcon7.style.display = "none"
            return
        }
        seventhQuestion.style.display = "block"
        downIcon7.style.display = "none"
        upIcon7.style.display = "inline"
    }
}