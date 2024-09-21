document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input-add-money").value;
    console.log(addMoney);

    const addPin = document.getElementById("input-pin").value;
    console.log(addPin);

    if (addPin === "1234") {
      console.log("Added your money");

      const balance = document.getElementById("account-balance").innerText;
      console.log(balance);

      const addMoneyNumber = parseFloat(addMoney);
      const balanceNumber = parseFloat(balance);
      const newMoney = addMoneyNumber + balanceNumber;
      console.log(newMoney);

      document.getElementById("account-balance").innerText = newMoney;
    } else {
      alert("wrong way! please try again later");
    }
  });
