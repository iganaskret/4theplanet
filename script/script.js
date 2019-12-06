"use strict";

const form = document.querySelector("form#form1");
// form.setAttribute("novalidate", true);
let postLink = "http://iganaskret.com/wpv1/wp-json/wp/v2/4earth?_embed";
const template = document.querySelector("template").content;

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
function submitForm(inputData) {
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
  // document.location.href = "subpage.html";
  morphing.reverse();
  morphing.play();
  overlay.classList.remove("pointer");
  sect2.classList.remove("animated", "display", "flipInY", "delay-1s");
}

// MORPH TRANSITIONS

var btn = document.querySelector("#code_btn");
//var btn2 = document.querySelector("#code_btn2");
var sect1 = document.querySelector("#sect_1");
var sect2 = document.querySelector("#sect_2");
var overlay = document.querySelector("#morph");

var morphing = anime({
  targets: ".morph",
  d: [{ value: "M8734-7299h154.057s469.97.589,956,0,614.614,0,614.614,0H8734Z" }, { value: "M8734-7299l-.184,1079.988h1922.5V-7299Z" }],
  transform: [{ value: "translate(-100 20)" }, { value: "translate(-8733.816 7299)" }],
  // WebkitTransform: [{ value: "translate(-100 20)" }, { value: "translate(-8733.816 7299)" }],
  easing: "easeInOutQuint",
  duration: 1300,
  loop: false,
  autoplay: false
});

btn.addEventListener("click", function() {
  morphing.restart();
  overlay.classList.add("pointer");
  sect2.classList.add("animated", "display", "flipInY", "delay-1s");
});

// FETCH AND DISPALY FROM WORDPRESS

function loadData() {
  fetch(postLink)
    .then(e => e.json())
    .then(showWpData);
}

function showWpData(data) {
  data.forEach(post => {
    //clone
    const clone = template.cloneNode(true);
    //populate
    const paragraph_title = clone.querySelector(".paragraph_title");
    const paragraph_text = clone.querySelector(".paragraph_text");
    const paragraph_img = clone.querySelector(".paragraph_img");

    paragraph_title.textContent = post.title.rendered;
    paragraph_text.textContent = post.content.rendered;
    // paragraph_img.src = post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    if (post.img != false) paragraph_img.src = post.img.guid;

    // console.log(post);

    //append
    document.querySelector("." + post.position).appendChild(clone);
  });
}

loadData(postLink);

// LOTTIE IPHONE

let animation = lottie.loadAnimation({
  container: document.querySelector("#svg_landing"), // the dom element that will contain the animation
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "data.json" // the path to the animation json
});
