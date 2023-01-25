const chart1 = document.getElementById('myChart1');
const chartHeading1 = document.getElementById("chart-heading1")
const oneMonthButton1 = document.getElementById("one-month1")
const twoMonthsButton1 = document.getElementById("two-months1")
const threeMonthsButton1 = document.getElementById("three-months1")

let exchangeRateWithSpecifiedPeriod1
let lineGraph1
let itemLabels1 = []
let itemData1 = []

async function createChart1(currencyCode = outputSelector.value) {
    await fetch(
        `http://localhost:8080/exchangerate/rates/${currencyCode}/month/1`
    )
        .then(res => res.json())
        .then(res => exchangeRateWithSpecifiedPeriod1 = res)
    lineGraph1 = new Chart(chart1, {
        type: 'line',
        data: {
            labels: generateLabel1(exchangeRateWithSpecifiedPeriod1),
            datasets: [{
                data: generateItemData1(exchangeRateWithSpecifiedPeriod1),
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

function changeBackColorOfButtons1(amountOfMonth) {
    if(amountOfMonth === 1) {
        oneMonthButton1.style.backgroundColor = "#EDEDED"
        twoMonthsButton1.style.backgroundColor = "#ffffff"
        threeMonthsButton1.style.backgroundColor = "#ffffff"
    } else if(amountOfMonth === 2) {
        oneMonthButton1.style.backgroundColor = "#ffffff"
        twoMonthsButton1.style.backgroundColor = "#EDEDED"
        threeMonthsButton1.style.backgroundColor = "#ffffff"
    } else if(amountOfMonth === 3) {
        oneMonthButton1.style.backgroundColor = "#ffffff"
        twoMonthsButton1.style.backgroundColor = "#ffffff"
        threeMonthsButton1.style.backgroundColor = "#EDEDED"
    }
}

async function addData1(amountOfMonth) {
    changeBackColorOfButtons1(amountOfMonth)

    await fetch(
        `http://localhost:8080/exchangerate/rates/${outputSelector.value}/month/${amountOfMonth}`
    )
        .then(res => res.json())
        .then(res => exchangeRateWithSpecifiedPeriod1 = res)
    lineGraph1.data.labels = generateLabel1(exchangeRateWithSpecifiedPeriod1);
    lineGraph1.data.datasets.forEach((dataset) => {
        dataset.data = generateItemData1(exchangeRateWithSpecifiedPeriod1)
    });
    lineGraph1.update();
}


function generateItemData1(exchangeRateWithSpecifiedPeriod) {
    itemData1 = []
    for(let i = 0; i < exchangeRateWithSpecifiedPeriod.length; i++) {
        itemData1.push(exchangeRateWithSpecifiedPeriod[i].exchangeRate);
    }
    return itemData1;
}

function generateLabel1(exchangeRateWithSpecifiedPeriod) {
    itemLabels1 = []
    for(let i = 0; i < exchangeRateWithSpecifiedPeriod.length; i++) {
        itemLabels1.push(exchangeRateWithSpecifiedPeriod[i].date)
    }
    return itemLabels1
}

function update1(currencyCode) {
    lineGraph1.destroy()
    createChart1(currencyCode)
    chartHeading1.textContent = currencyCode
    changeBackColorOfButtons1(1)
}

createChart1(outputSelector.value)
chartHeading1.textContent = outputSelector1.value
