const apiKey = "7910811fac796cd975c5b537"; 
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

document.addEventListener("DOMContentLoaded", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const currencyOptions = Object.keys(data.conversion_rates)
        .map((currency) => `<option value="${currency}">${currency}</option>`)
        .join("");

      document.getElementById("fromCurrency").innerHTML = currencyOptions;
      document.getElementById("toCurrency").innerHTML = currencyOptions;
    });

  document.getElementById("convertButton").addEventListener("click", () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").innerText =
        "Please enter a valid amount.";
      return;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const rate =
          data.conversion_rates[toCurrency] /
          data.conversion_rates[fromCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        document.getElementById(
          "result"
        ).innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch((error) => {
        document.getElementById("result").innerText =
          "Error fetching exchange rates. Please try again later.";
        console.error("Error:", error);
      });
  });
});
