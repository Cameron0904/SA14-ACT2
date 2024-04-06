document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;
    convertCurrency(fromCurrency, toCurrency, amount);
});

function convertCurrency(from, to, amount) {
    const apiKey = '6bd5bf124bdc302118468f86';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayResult(data);
        })
        .catch(error => console.error('Error:', error));
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    if (data.result === 'success') {
        resultDiv.innerHTML = `<h2>Converted Amount: ${data.conversion_result} ${data.target_code}</h2>
                               <h3>Exchange Rate: 1 ${data.base_code} = ${data.conversion_rate} ${data.target_code}</h3>`;
    } else {
        resultDiv.innerHTML = `<p>Conversion failed. Please try again.</p>`;
    }
}
