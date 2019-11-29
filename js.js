"use strict";

const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5];
const arr3 = [0, 1, 2, 3, 4, 5];

function randomNumbers() {
  return Math.floor(Math.random() * 6);
}

function populate() {
  let divOne = document.querySelector(".div1");
  for (let i = 0; i < 6; i++) {
    let span = document.createElement("span");
    span.classList.add("span" + i);
    span.textContent = i;
    divOne.appendChild(span);
  }
}

populate();
// console.log(arr1[randomNumbers()]);

// function shuffle(arr) {
//   document.querySelectorAll("span").forEach(span => {
//     span.style.color = "black";
//   });
//   let value = arr[randomNumbers()] + 1;
//   console.log(value);
//   document.querySelector(".span" + value).style.color = "red";
// }

document.querySelector("button").addEventListener("click", () => {
  animatedSpin();
  //   spin(arr1);
  //   shuffle(arr2);
  //   shuffle(arr3);
});

function animatedSpin() {
  // document.querySelectorAll(".div1 span").forEach(span => {
  //     span.classList.add("spin");
  //     span.addEventListener("animationend", spin(arr1));
  //   });
  document.querySelector(".div1").classList.add("spin");
  document.querySelector(".spin").addEventListener("animationend", endSpin);
}

function endSpin() {
  spin(arr1);
  console.log("stop");
  document
    .querySelector(".spin")
    .removeEventListener("animationend", endSpin, true);
  document.querySelector(".div1").classList.remove("spin");
}

function spin(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
      arr[i] = 0;
    } else {
      arr[i] = arr[i] + 1;
    }
    document.querySelectorAll("span")[i].innerHTML = arr[i];
  }
}

// let height = 0;
// let customers = 0;
// // const array = [];
// // let i = 0;
// // for (i = 40; i > 0; i--) {
// //   array.push(Math.floor(Math.random() * 36));
// // }

// // console.log(array);

// function getHeight() {
//   for (i = arr1.length - 1; i > -1; i--) {
//     height = arr1[i];
//     document.querySelectorAll("div")[i].style.height = height + "px";
//     document.querySelectorAll("span")[i].innerHTML = array[i];
//     if (i < 13) {
//       document.querySelectorAll("div")[i].style.opacity = 0.5;
//     } else if (i < 26) {
//       document.querySelectorAll("div")[i].style.opacity = 0.7;
//     }
//     if (height > 130) {
//       document.querySelectorAll("span")[i].style.opacity = 1;
//     }
//   }
// }
// getHeight();

// function scrollArray() {
//   for (i = 0; i < 39; i++) {
//     array[i] = array[i + 1];
//   }
//   array.pop();
//   array.push(Math.floor(Math.random() * 36));
//   getHeight();
// }
// setInterval(scrollArray, 1000);
