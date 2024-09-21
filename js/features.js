// add money

document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("add-money-from").classList.remove("hidden");
  document.getElementById("cash-out-from").classList.add("hidden");
});

// cash out
document.getElementById("cash-out-btn").addEventListener("click", function () {
  document.getElementById("cash-out-from").classList.remove("hidden");
  document.getElementById("add-money-from").classList.add("hidden");
});
