let c = console.log;

fetch(
  "https://api.currencyfreaks.com/latest?apikey=a4d3e028954e45419f86eeb13f8d3023"
)
  .then((result) => {
    let myDate = result.json();
    // c(myDate);
    return myDate;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount");
    let egyPrice = document.querySelector(".egy span");
    let qarPrice = document.querySelector(".qar span");

    egyPrice.innerHTML = (amount.innerHTML * currency.rates["EGP"]).toFixed(2);
    qarPrice.innerHTML = (amount.innerHTML * currency.rates["QAR"]).toFixed(2);

    c(currency.rates);
    c(currency.rates["EGP"]);
    c(currency.rates["QAR"]);
  });
