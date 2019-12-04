"use strict";

const form = document.querySelector("form#form1");
form.setAttribute("novalidate", true);

fetch("https://form4earth-2b74.restdb.io/rest/form4earth", {
  method: "get",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "5de4e9004658275ac9dc2184",
    "cache-control": "no-cache"
  }
})
  .then(e => e.json())
  .then(e => console.log(e));

form.addEventListener("submit", evt => {
  evt.preventDefault();

  if (form.reportValidity()) {
    const inputData = {
      Name: form.elements.fullname.value,
      Email: form.elements.email.value,
      Subscriber: form.elements.subscription.value
    };
    submitForm(inputData);
  } else {
    alert("It's seems like your email is incorrect");
  }
  // const inputData = {
  //   Name: form.elements.fullname.value,
  //   Email: form.elements.email.value,
  //   Subscriber: form.elements.subscription.value
  // };
  // submitForm(inputData);
});

// function submitForm() {
//   post();
// }

function submitForm(inputData) {
  // let data = {
  //   Name: "Tomek",
  //   Email: "romek@kea.dk",
  //   Subscriber: "true"
  //   // Name: form.elements.fullname.value,
  //   // Email: form.elements.email.value,
  //   // Subscriber: "true"
  // };

  let postData = JSON.stringify(inputData);
  fetch("https://form4earth-2b74.restdb.io/rest/form4earth", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de4e9004658275ac9dc2184",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    // .then(inputData => console.log(inputData))
    .then(inputData => submittingCompleted(inputData));
}
function submittingCompleted() {
  document.location.href = "subpage.html";
}

// MORPH TRANSITIONS

var btn = document.querySelector("#code_btn");
//var btn2 = document.querySelector("#code_btn2");
var sect1 = document.querySelector("#sect_1");
//var sect2 = document.querySelector("#sect_2");
var overlay = document.querySelector("#morph");

var morphing = anime({
  targets: ".morph",
  d: [{ value: "M8734-7299h154.057s469.97.589,956,0,614.614,0,614.614,0H8734Z" }, { value: "M8734-7299l-.184,1079.988h1922.5V-7299Z" }],
  transform: [{ value: "translate(-9072.979 4587.749)" }, { value: "translate(-8733.816 7299)" }],
  easing: "easeInOutQuint",
  duration: 2300,
  loop: false
  //autoplay: false
});
