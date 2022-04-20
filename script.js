'use strict';

let tipPercent = 0;
let accountValue = 0;
let tipAmount = 0;
let totalValue = 0;

const inputAccontValue = document.querySelector("#account-value");
const rangeTip = document.querySelector("#tip-percentage-range");
const percentTip = document.querySelector("#tip-percentage-value");
const inputTipAmount = document.querySelector("#tip-amount");
const inputTotal = document.querySelector("#total");

inputAccontValue.addEventListener("input", () => {
  calculator();
  update();
});

rangeTip.addEventListener("input", () => {
  if (inputAccontValue.value) {
    calculator();
    update();
  }
});

const calculator = () => {
  accountValue = inputAccontValue.value * 1;
  tipPercent = rangeTip.value;
  tipAmount = accountValue * tipPercent / 100;
  totalValue = accountValue + tipAmount;
}

const update = () => {
  percentTip.textContent = tipPercent + "%";
  inputTipAmount.value = "R$ " + tipAmount.toFixed(2);
  inputTotal.value = "R$ " + totalValue.toFixed(2);
}

window.onload = update;