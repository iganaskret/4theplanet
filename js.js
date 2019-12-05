"use strict";

const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5];
const arr3 = [0, 1, 2, 3, 4, 5];

function randomNumbers() {
  return Math.floor(Math.random() * 30);
}

let divOne = document.querySelector(".div1");
let divTwo = document.querySelector(".div2");
let divThree = document.querySelector(".div3");

populate(divOne, 1);
populate(divTwo, 2);
populate(divThree, 3);

function populate(div, nr) {
  for (let i = 0; i < 6; i++) {
    let span = document.createElement("img");
    if (nr == 1) { span.src = "icons/gamico" + i + ".png"; }
    else if (nr == 2) {
      let j = i + 1;
      if (j == 6) { j = 0 }
      span.src = "icons/gamico" + j + ".png";
    } else if (nr == 3) {
      let j = i - 1;
      if (j == -1) { j = 5 }
      span.src = "icons/gamico" + j + ".png";
    }
    span.classList.add("span" + i);
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
  setTimeout(stopSpinning, 100 * randomNumbers());
});

function stopSpinning() {
  clearInterval(interval);
  clearSecondInterval();
  clearThirdInterval();
  document.querySelector("button").style.display = "block";
  document.querySelector("button.stop").style.display = "none";
  didIWin();
}

// document.querySelector("button.stop").addEventListener("click", () => {
//   clearInterval(interval);
//   clearSecondInterval();
//   clearThirdInterval();
//   document.querySelector("button").style.display = "block";
//   document.querySelector("button.stop").style.display = "none";
//   didIWin();
// });

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
    console.log(arr1[3] + " " + arr2[3] + " " + arr3[3]);
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
    // document.querySelector(".div" + nr + " .span" + i).src =
    //   "icons/gamico" + arr[i] + ".png";

    if (nr == 1) {
      document.querySelector(".div" + nr + " .span" + i).src =
        "icons/gamico" + arr[i] + ".png";
    }
    else if (nr == 2) {
      let j = i + 1;
      if (j == 6) { j = 0 }
      document.querySelector(".div" + nr + " .span" + i).src =
        "icons/gamico" + arr[j] + ".png";
    } else if (nr == 3) {
      let j = i - 1;
      if (j == -1) { j = 5 }
      document.querySelector(".div" + nr + " .span" + i).src =
        "icons/gamico" + arr[j] + ".png";
    }
  }
}
