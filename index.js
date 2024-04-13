let speedTypingTest = document.getElementById("speedTypingTest");
let spinner = document.getElementById("spinner");

let quoteDisplay = document.getElementById('quoteDisplay');
let number = document.getElementById("number");

let counter = 0;
let counterId = setInterval(function() {
    counter = counter + 1;
    number.textContent = counter + " ";
}, 1000);


let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");

function getQuote() {
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";

    speedTypingTest.classList.add("d-none");
    spinner.classList.remove("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            speedTypingTest.classList.remove("d-none");
            spinner.classList.add("d-none");
            quoteDisplay.textContent = jsonData.content
        });
}
getQuote();


function submitBtn() {
    let quoteInputValue = quoteInput.value;
    if (quoteInputValue === quoteDisplay.textContent) {
        clearInterval(counterId);
        result.textContent = "You typed in " + counter + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
}

function resetBtn() {
    getQuote();
    clearInterval(counterId);
    counter = 0;
    counterId = setInterval(function() {
        counter = counter + 1;
        number.textContent = counter + " ";
    }, 1000);
}