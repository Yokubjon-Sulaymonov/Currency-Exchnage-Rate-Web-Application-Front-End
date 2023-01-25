let headerTitle = document.getElementById("header-title")

let inputSelector = document.getElementById("input-drop-down")

let outputSelector = document.getElementById("output-drop-down")
let date = document.getElementById("date")
let input = document.getElementById("input");

let output = document.getElementById("output");
headerTitle.textContent = "1 AED to PLN"

outputSelector.value = "PLN"
async function convert() {
    let result;

    if (date.value === "") {
        await fetch(
            `http://localhost:8080/exchangerate/rates/${inputSelector.value}/to/${outputSelector.value}/${Number.parseFloat(input.value)}`
        )
            .then(res => res.json())
            .then(res => result = res)
    } else {
        await fetch(
            `http://localhost:8080/exchangerate/rates/${inputSelector.value}/to/${outputSelector.value}/${Number.parseFloat(input.value)}?date=${date.value}`
        )
            .then(res => res.json())
            .then(res => result = res)
            .catch(res => alert("Currency code is not supported"))
    }

    headerTitle.textContent = `${input.value} ${inputSelector.value} to ${outputSelector.value}`
    output.value = Math.abs(Number.parseFloat(result));

    update(inputSelector.value)
    update1(outputSelector.value)
}

function replace() {
    let temp = inputSelector.value;
    inputSelector.value = outputSelector.value;
    outputSelector.value = temp;
    input.value = output.value
    output.value = ""
    convert()
}
