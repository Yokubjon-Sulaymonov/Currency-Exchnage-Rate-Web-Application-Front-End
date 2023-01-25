let EUR = [
    document.getElementById("EUR1"),
    document.getElementById("EUR5"),
    document.getElementById("EUR10"),
    document.getElementById("EUR25"),
    document.getElementById("EUR50"),
    document.getElementById("EUR100"),
    document.getElementById("EUR500"),
    document.getElementById("EUR1000"),
    document.getElementById("EUR5000"),
    document.getElementById("EUR10000")
]

let USD = [
    document.getElementById("USD1"),
    document.getElementById("USD5"),
    document.getElementById("USD10"),
    document.getElementById("USD25"),
    document.getElementById("USD50"),
    document.getElementById("USD100"),
    document.getElementById("USD500"),
    document.getElementById("USD1000"),
    document.getElementById("USD5000"),
    document.getElementById("USD10000")
]

let num = [1, 5, 10, 25, 50, 100, 500, 1000, 5000, 10000]

async function fastConvert(EUR, currencyCode, amount) {
    let result;
    await fetch(`http://localhost:8080/exchangerate/rates/${currencyCode}/${amount}`)
        .then(res => res.json())
        .then(res => result = res)

    EUR.textContent = refactorNumbers(result.toString()) + " PLN"
}

function refactorNumbers(result) {
    if(containsDot(result)) {
        if(result.length < 8) {
           return makeLengthEightWithAdding(result)
        } else {
           return makeLengthEightWithSubstracting(result)
        }
    } else {
        if(result.length < 8) {
            result = makeLengthEightWithAdding(result)
        }
        if(result.length > 8) {
            result = makeLengthEightWithSubstracting(result)
        }
        return addDot(result)
    }
}

function makeLengthEightWithSubstracting(result) {
    return result.substring(0, 8)
}

function makeLengthEightWithAdding(result) {
    while(result.length !== 8) {
        result += "0";
    }
    return result;
}

function addDot(result) {
    let temp = result.substring(result.length - 3)
    result = result.substring(0, result.length - 3)
    result += `.`
    result += temp.charAt(0) + temp.charAt(1);
    return result;
}

function containsDot(result) {
    for(let i = 0; i < result.length; i++) {
        if(result.charAt(i) === ".") {
            return true
        }
        if(result.charAt(i) !== '.' && i === result.length - 1) {
            return false;
        }
    }
}

for(let i = 0, index = 0; i < EUR.length; i++) {
    fastConvert(EUR[i], "EUR", num[index++])
}

for(let i = 0, index = 0; i < USD.length; i++) {
    fastConvert(USD[i], "USD", num[index++])
}
