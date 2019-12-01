"use strict";

const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5];
const arr3 = [0, 1, 2, 3, 4, 5];

function randomNumbers() {
  return Math.floor(Math.random() * 15);
}

let divOne = document.querySelector(".div1");
let divTwo = document.querySelector(".div2");
let divThree = document.querySelector(".div3");

populate(divOne);
populate(divTwo);
populate(divThree);

function populate(div) {
  for (let i = 0; i < 6; i++) {
    let span = document.createElement("span");
    span.classList.add("span" + i);
    span.textContent = i;
    div.appendChild(span);
  }
}

let counter = 0;
var interval;
var interval2;
var interval3;

document.querySelector("button").addEventListener("click", () => {
  interval = setInterval(() => {
    animatedSpin();
  }, 20);
  interval2 = setInterval(() => {
    animatedSpin2();
  }, 20);
  interval3 = setInterval(() => {
    animatedSpin3();
  }, 20);
  document.querySelector("button").style.display = "none";
  document.querySelector("button.stop").style.display = "block";
});

document.querySelector("button.stop").addEventListener("click", () => {
  clearInterval(interval);
  clearSecondInterval();
  clearThirdInterval();
  document.querySelector("button").style.display = "block";
  document.querySelector("button.stop").style.display = "none";
  didIWin();
});

function clearSecondInterval() {
  setTimeout(() => {
    clearInterval(interval2);
  }, 500);
}

function clearThirdInterval() {
  setTimeout(() => {
    let picked1 = document.querySelector(".div1 .span3").textContent;
    let picked2 = document.querySelector(".div2 .span3").textContent;
    let picked3 = document.querySelector(".div3 .span3").textContent;
    console.log("wylosowałeś: " + picked1 + " " + picked2 + " " + picked3);
  }, 2000);
}

function didIWin() {
  setTimeout(() => {
    clearInterval(interval3);
  }, 1000);
}

function animatedSpin() {
  counter = 1;
  document.querySelector(".div1").classList.add("spin");
  document.querySelector(".spin").addEventListener("animationend", endSpin);
}

function animatedSpin2() {
  counter = 1;
  document.querySelector(".div2").classList.add("spin2");
  document.querySelector(".spin2").addEventListener("animationend", endSpin2);
}

function animatedSpin3() {
  counter = 1;
  document.querySelector(".div3").classList.add("spin3");
  document.querySelector(".spin3").addEventListener("animationend", endSpin3);
}

function endSpin() {
  spin(arr1, 1);
  document
    .querySelector(".spin")
    .removeEventListener("animationend", endSpin, true);
  document.querySelector(".div1").classList.remove("spin");
}

function endSpin2() {
  spin(arr2, 2);
  document
    .querySelector(".spin2")
    .removeEventListener("animationend", endSpin, true);
  document.querySelector(".div2").classList.remove("spin2");
}

function endSpin3() {
  spin(arr3, 3);
  document
    .querySelector(".spin3")
    .removeEventListener("animationend", endSpin, true);
  document.querySelector(".div3").classList.remove("spin3");
}

function spin(arr, nr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
      arr[i] = 0;
    } else {
      arr[i] = arr[i] + 1;
    }
    document.querySelector(".div" + nr + " .span" + i).innerHTML = arr[i];
  }
}
