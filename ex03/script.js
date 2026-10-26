let count = 0;

const displayValue = document.getElementById("counter-value");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");

function updateDisplay() {
  displayValue.textContent = count;

  if (count > 0) {
    displayValue.style.color = "green";
  } else if (count < 0) {
    displayValue.style.color = "red";
  } else {
    displayValue.style.color = "black";
  }
}

btnIncrement.addEventListener("click", function () {
  count = count + 1;
  updateDisplay();
});

btnDecrement.addEventListener("click", function () {
  count = count - 1;
  updateDisplay();
});

btnReset.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
