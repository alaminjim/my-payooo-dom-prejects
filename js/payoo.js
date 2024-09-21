// console.log("texting");

document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("log in");

    const phnNumber = document.getElementById("phn-nmbr").value;
    const pinNumber = document.getElementById("pin-nmbr").value;
    console.log(phnNumber, pinNumber);

    if (phnNumber === "5" && pinNumber === "1234") {
      console.log("you are login this site");
      window.location.href = "/payoohomepage.html";
    } else {
      alert("wrong phone number and pin");
    }
  });
