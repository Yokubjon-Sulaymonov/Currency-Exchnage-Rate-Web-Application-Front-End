const chart = document.getElementById('myChart');
const chartHeading = document.getElementById("chart-heading")
const oneMonthButton = document.getElementById("one-month")
const twoMonthsButton = document.getElementById("two-months")
const threeMonthsButton = document.getElementById("three-months")

let exchangeRateWithSpecifiedPeriod
let lineGraph
let itemLabels = []
let itemData = []

async function createChart(currencyCode = inputSelector.value) {
    await fetch(
        `http://localhost:8080/exchangerate/rates/${currencyCode}/month/1`
    )
        .then(res => res.json())
        .then(res => exchangeRateWithSpecifiedPeriod = res)
    lineGraph = new Chart(chart, {
        type: 'line',
        data: {
            labels: generateLabel(exchangeRateWithSpecifiedPeriod),
            datasets: [{
                data: generateItemData(exchangeRateWithSpecifiedPeriod),
                label: `${currencyCode}`,
                backgroundColor: [`#00003B`],
                borderColor: [`#00003B`]
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                },
            }
        }
    })
}

function changeBackColorOfButtons(amountOfMonth) {
    if(amountOfMonth === 1) {
        oneMonthButton.style.backgroundColor = "#EDEDED"
        twoMonthsButton.style.backgroundColor = "#ffffff"
        threeMonthsButton.style.backgroundColor = "#ffffff"
    } else if(amountOfMonth === 2) {
        oneMonthButton.style.backgroundColor = "#ffffff"
        twoMonthsButton.style.backgroundColor = "#EDEDED"
        threeMonthsButton.style.backgroundColor = "#ffffff"
    } else if(amountOfMonth === 3) {
        oneMonthButton.style.backgroundColor = "#ffffff"
        twoMonthsButton.style.backgroundColor = "#ffffff"
        threeMonthsButton.style.backgroundColor = "#EDEDED"
    }
}

async function addData(amountOfMonth) {
    changeBackColorOfButtons(amountOfMonth)

    await fetch(
        `http://localhost:8080/exchangerate/rates/${inputSelector.value}/month/${amountOfMonth}`
    )
        .then(res => res.json())
        .then(res => exchangeRateWithSpecifiedPeriod = res)
    lineGraph.data.labels = generateLabel(exchangeRateWithSpecifiedPeriod);
    lineGraph.data.datasets.forEach((dataset) => {
        dataset.data = generateItemData(exchangeRateWithSpecifiedPeriod)
    });
    lineGraph.update();
}


function generateItemData(exchangeRateWithSpecifiedPeriod) {
    itemData = []
    for(let i = 0; i < exchangeRateWithSpecifiedPeriod.length; i++) {
        itemData.push(exchangeRateWithSpecifiedPeriod[i].exchangeRate);
    }
    return itemData;
}

function generateLabel(exchangeRateWithSpecifiedPeriod) {
    itemLabels = []
    for(let i = 0; i < exchangeRateWithSpecifiedPeriod.length; i++) {
        itemLabels.push(exchangeRateWithSpecifiedPeriod[i].date)
    }
    return itemLabels
}

function update(currencyCode) {
    lineGraph.destroy()
    createChart(currencyCode)
    chartHeading.textContent = currencyCode
    changeBackColorOfButtons(1)
}

createChart(inputSelector.value)
chartHeading.textContent = inputSelector.value
