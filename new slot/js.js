"use strict";

let root = document.documentElement;

fetch("e.svg")
  .then(e => e.text())
  .then(data => loadSVG(data));

function loadSVG(data) {
  document.querySelector(".slot").innerHTML = data;
  main();
}

function main() {}

function randomNumbers() {
  return Math.floor(Math.random() * 30);
}

let columnOne = document.querySelector("#ir1");
let columnTwo = document.querySelector("#ir2");
let columnThree = document.querySelector("#ir3");

let counter = 0;

document.querySelector("#lever").addEventListener("click", () => {
  console.log("click");
  for (let i = 0; i < 21; i++)
    document.querySelector("#ir1").style.transform = `translateY(${i}%)`;
});

// document.querySelector("button.stop").addEventListener("click", () => {
//   clearInterval(interval);
//   clearSecondInterval();
//   clearThirdInterval();
//   document.querySelector("button").style.display = "block";
//   document.querySelector("button.stop").style.display = "none";
//   didIWin();
// });

// function clearThirdInterval() {
//   setTimeout(() => {
//     let picked1 = document.querySelector(".div1 .span3").textContent;
//     let picked2 = document.querySelector(".div2 .span3").textContent;
//     let picked3 = document.querySelector(".div3 .span3").textContent;
//     console.log("wylosowałeś: " + picked1 + " " + picked2 + " " + picked3);
//     if (arr1[3] === arr2[3] && arr1[3] === arr3[3]) {
//       console.log("wygrana");
//     }
//     console.log(arr1[3] + " " + arr2[3] + " " + arr3[3]);
//   }, 2000);
// }

// function didIWin() {
//   setTimeout(() => {
//     clearInterval(interval3);
//   }, 1000);
// }

// function animatedSpin() {
//   counter = 1;
//   document.querySelector("#ir1").classList.add("spin");
//   document.querySelector(".spin").addEventListener("animationend", endSpin);
// }

// function animatedSpin2() {
//   counter = 1;
//   document.querySelector("#ir2").classList.add("spin2");
//   document.querySelector(".spin2").addEventListener("animationend", endSpin2);
// }

// function animatedSpin3() {
//   counter = 1;
//   document.querySelector("#ir3").classList.add("spin3");
//   document.querySelector(".spin3").addEventListener("animationend", endSpin3);
// }

// function endSpin() {
//   spin(arr1, 1);
//   document
//     .querySelector(".spin")
//     .removeEventListener("animationend", endSpin, true);
//   document.querySelector("#ir1").classList.remove("spin");
// }

// function endSpin2() {
//   spin(arr2, 2);
//   document
//     .querySelector(".spin2")
//     .removeEventListener("animationend", endSpin, true);
//   document.querySelector("#ir2").classList.remove("spin2");
// }

// function endSpin3() {
//   spin(arr3, 3);
//   document
//     .querySelector(".spin3")
//     .removeEventListener("animationend", endSpin, true);
//   document.querySelector("#ir3").classList.remove("spin3");
// }

let j = 0;

function spin(arr, nr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
      arr[i] = 0;
    } else {
      arr[i] = arr[i] + 1;
    }
    // if (j < 3) {
    //   j++;
    // } else {
    //   j = -2;
    // }
    // root.style.setProperty("--number", j);
    // document.querySelector(".div" + nr + " .span" + i).src =
    //   "icons/gamico" + arr[i] + ".png";

    // if (nr == 1) {
    //   document.querySelector("#ir" + nr + " .span" + i).src =
    //     "icons/gamico" + arr[i] + ".png";
    // } else if (nr == 2) {
    //   let j = i + 1;
    //   if (j == 6) {
    //     j = 0;
    //   }
    //   document.querySelector(".div" + nr + " .span" + i).src =
    //     "icons/gamico" + arr[j] + ".png";
    // } else if (nr == 3) {
    //   let j = i - 1;
    //   if (j == -1) {
    //     j = 5;
    //   }
    //   document.querySelector(".div" + nr + " .span" + i).src =
    //     "icons/gamico" + arr[j] + ".png";
    // }

    document.querySelector("#ir1");
  }
}
