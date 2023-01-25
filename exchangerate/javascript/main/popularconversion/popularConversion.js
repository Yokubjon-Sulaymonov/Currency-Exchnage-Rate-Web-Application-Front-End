let headerTitle1 = document.getElementById("header-title")

let inputSelector1 = document.getElementById("input-drop-down")
let outputSelector1 = document.getElementById("output-drop-down")

let input1 = document.getElementById("input");
let output1 = document.getElementById("output");

async function convertPopularConversions(currencyCode) {
    let result;
    await fetch(`http://localhost:8080/exchangerate/rates/${currencyCode}`)
        .then(res => res.json())
        .then(res => result = res)

    if(result.length > 8) {
        result = makeResultEightCharacterLong(result)
    }

    input1.value = 1
    output1.value = Number.parseFloat(result)
    inputSelector1.value = `${currencyCode}`
    outputSelector1.value = `PLN`
    headerTitle1.textContent = `1 ${currencyCode} to PLN`

    update(currencyCode)
    update1(`PLN`)
}

function makeResultEightCharacterLong(number) {
    return number.substring(0, 8)
}
