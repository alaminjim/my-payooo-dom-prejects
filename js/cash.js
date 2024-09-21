document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutMoney = document.getElementById("input-money-cash").value;
    console.log(cashOutMoney);

    const cashOutPin = document.getElementById("input-cash-pin").value;
    console.log(cashOutPin);

    if (cashOutPin === "1629") {
      console.log("Riceved your money");

      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      const newCashMoney = parseFloat(cashOutMoney);
      const balanceCash = parseFloat(balance);
      const newCashOutMoney = balanceCash - newCashMoney;
      console.log(newCashOutMoney);

      document.getElementById("account-balance").innerText = newCashOutMoney;
    } else {
      alert("wrong pin! please correct pin and try again");
    }
  });
