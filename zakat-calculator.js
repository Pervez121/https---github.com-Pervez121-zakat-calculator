document.getElementById("zakat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    const totalWealth = parseFloat(document.getElementById("total-wealth").value);
    const nisaab = parseFloat(document.getElementById("nisaab").value);
    
    if (totalWealth >= nisaab) {
        const zakatAmount = totalWealth * 0.025; // 2.5% of total wealth
        document.getElementById("zakat-amount").innerText = zakatAmount.toFixed(2);
        document.getElementById("result").style.display = "block";
    } else {
        document.getElementById("result").style.display = "none";
        alert("Your total wealth is below the Nisaab value, so no Zakat is due.");
    }
});
