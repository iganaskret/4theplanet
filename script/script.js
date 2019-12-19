"use strict";
let imported = document.createElement("script");
imported.src = "js.js"; 
// LOADER GIF
window.setTimeout(function() {
document.querySelector("#loading-image").classList.add("fade_loader");
window.setTimeout(function() {
document.querySelector("#loading-image").style.display = "none";
document.querySelector("#loading").classList.add("fade_loader");
document.querySelector("#loading").style.display = "none";
}, 1000);
}, 3000);


// FADE IN ANIMATION
//https://www.npmjs.com/package/aos
AOS.init({
  duration: 2200
});

const form_code = document.querySelector("form#form_code");
const form_newsletter = document.querySelector("#form_newsletter");
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

form_code.addEventListener("submit", evt => {
  evt.preventDefault();

  if (form_code.reportValidity()) {
    const inputData = {
      Name: form_code.elements.fullname.value,
      Email: form_code.elements.email.value,
      Subscriber: form_code.elements.subscription.value
    };
    submitFormCode(inputData);
  } else {
     alert("It's seems like your email is incorrect"); 
  }

});
function submitFormCode(inputData) {
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
    .then(inputData => submittingCompleted(inputData));
}
function submittingCompleted(inputData) {
  console.log(inputData);
  if (inputData.status == 400) {
    alert("Your email is already in our database!");
  } else {
    form_code.classList.add("hide");
    document.querySelector(".success-message").classList.remove("hide");
  }

}
 

// MORPH TRANSITIONS

var btn_code = document.querySelector("#ticketButton");
var sect1 = document.querySelector("#sect_1");
var sect2 = document.querySelector("#sect_2");
var overlay = document.querySelector("#morph");

var morphing = anime({
  targets: ".morph",
  d: [{ value: "M8734-7299h154.057s469.97.589,956,0,614.614,0,614.614,0H8734Z" }, { value: "M8734-7299l-.184,1079.988h1922.5V-7299Z" }],
  easing: "easeInOutQuint",
  duration: 1300,
  loop: false,
  autoplay: false
});

btn_code.addEventListener("click", function() {
  document.body.style = "overflow: hidden; ";
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

let counter = 1;

function showWpData(data) {
  data.forEach(post => {
    //clone
    const clone = template.cloneNode(true);
    //populate
    const paragraph_title = clone.querySelector(".paragraph_title");
    const paragraph_text = clone.querySelector(".paragraph_text");

    clone.querySelector(".lottie-placeholder").setAttribute("id", "lottie" + counter);
    counter++;

    paragraph_title.textContent = post.title.rendered;
    paragraph_text.innerHTML = post.content.rendered;

    //append
    document.querySelector("." + post.position).appendChild(clone);
  });
  loadLottieData();
  loadLottieData2();
}

loadData(postLink);

// LOTTIE TICKET

fetch("../ticket.svg")
  .then(e => e.text())
  .then(data => loadSVG(data));

function loadSVG(data) {
  document.querySelector(".SVG_ticket_btn").innerHTML = data;
}


let params_ticket = lottie.loadAnimation({
container: document.querySelector("#svg_ticket"), // the dom element that will contain the animation
renderer: "svg",
loop: false,
autoplay: false,
path: "data_ticket.json" // the path to the animation json svg_ticket
});
params_ticket.setSpeed(2.1);

function startTicket() {
params_ticket.play();
}
params_ticket.addEventListener("complete", function() {
document.querySelector(".SVG_ticket_btn").style = "display: block";
});

params_ticket.addEventListener("enterFrame", function(animation) {
if (animation.currentTime > params_ticket.totalFrames - 1) {
params_ticket.pause();
}
});

// end

// NEWSLETTER - 1step form
// https://form4earth-2b74.restdb.io/rest/subscribers

const btn_newsletter = document.querySelector(".button3");

const email_input = document.querySelector('input[name="email"]');
const submit_btn = document.querySelector(".submit");

btn_newsletter.addEventListener("click", function() {
  btn_newsletter.classList.add("circle-in");
  btn_newsletter.innerHTML = " ";
});

btn_newsletter.addEventListener("animationend", function() {
  form_newsletter.classList.remove("hide");
  email_input.classList.add("oval-in");
  submit_btn.classList.add("oval-in-submit");
  btn_newsletter.classList.add("hide");
});

form_newsletter.addEventListener("submit", evt => {
  evt.preventDefault();

  if (form_newsletter.reportValidity()) {
    const inputData = {
      Email: form_newsletter.elements.email.value
    };
    console.log(inputData);
    submitFormSubscribtion(inputData);
  } else {
    alert("It's seems like your email is incorrect"); 
  }
});
function submitFormSubscribtion(inputData) {
  let postData = JSON.stringify(inputData);
  console.log(postData);
  fetch("https://form4earth-2b74.restdb.io/rest/subscribers", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de4e9004658275ac9dc2184",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(inputData => submittingCompletedNewsletter(inputData));
}
function submittingCompletedNewsletter(inputData) {
  console.log(inputData);
  if (inputData.status == 400) {
    alert("Your email is already in our database!"); 
  } else {
    form_newsletter.classList.add("hide");
    document.querySelector(".newsletter_finish").classList.remove("hide");
  }
}

// SLOT MACHINE
let gamecount = 0;
const machine_lever = document.querySelector(".lever");

machine_lever.addEventListener("click", function() {
  machine_lever.classList.add("lever_animation");
  gamecount++;
console.log(gamecount);
/* put this into js.js winning function to avoid*/
  if (gamecount>6) {
 startTicket();
let slot_machine= document.querySelector(".slot_machine");
let communicate = document.createElement("span"); 
communicate.classList.add("comm");
document.querySelector(".slot_machine").style.backgroundImage="url('/images/confetti.gif')";
document.querySelector(".slot_machine").style.backgroundPosition="center"; 
document.querySelector(".slot_machine").style.backgroundRepeat= "no-repeat"; 
document.querySelector(".slot_machine").style.backgroundSize= "cover"; 
communicate.textContent="SORRY YOU'RE NOT SO LUCKY TODAY BUT HERE IS YOUR FREE TICKET ANYWAY";
slot_machine.appendChild(communicate);

 
  }
});


machine_lever.addEventListener("animationend", function() {
 
  machine_lever.classList.remove("lever_animation");
});

// SCROLL LOTTIE INTERACTION

function loadLottieData() {
  var anim;
  let elem = document.querySelector("#lottie3");
  let animData = {
    container: elem,
    renderer: "svg",
    loop: false,
    autoplay: false,
    rendererSettings: {
      progressiveLoad: false,
      preserveAspectRatio: "xMidYMid slice"
    },
    path: "icon_1.json"
  };
  anim = bodymovin.loadAnimation(animData);
  /* https://www.fariskassim.com/stage/typojanchi/old_v1/?fbclid=IwAR2XIGdr3y_oZ5gSpqdVlaAJPwoZEv-F0hEfovrCwwwZ5zWUS7B1wb35AEA */
  $(window).scroll(function() {
    // calculate the percentage the user has scrolled down the page
    let scrollPercent = (120 * $(window).scrollTop()) / ($(document).height() - $(window).height());

    let scrollPercentRounded = Math.round(scrollPercent);
    anim.goToAndStop((scrollPercentRounded / 100) * 4000);
  });
}
function loadLottieData2() {
  var anim2;
  let elem2 = document.querySelector("#lottie2");
  let animData = {
    container: elem2,
    renderer: "svg",
    loop: false,
    autoplay: false,
    rendererSettings: {
      progressiveLoad: false,
      preserveAspectRatio: "xMidYMid slice"
    },
    path: "icon_2.json"
  };
  anim2 = bodymovin.loadAnimation(animData);

  $(window).scroll(function() {
    // calculate the percentage the user has scrolled down the page
    let scrollPercent = (100 * $(window).scrollTop()) / ($(document).height() - $(window).height());

    let scrollPercentRounded = Math.round(scrollPercent);
    anim2.goToAndStop((scrollPercentRounded / 100) * 4000);
  });
}
document.querySelector(".close-btn").addEventListener("click", () => {
  morphing.reverse();
  morphing.play();
  overlay.classList.remove("pointer");
  sect2.classList.remove("animated", "display", "flipInY", "delay-1s");
  document.body.style = "overflow: auto; ";
  form_code.classList.remove("hide");
  document.querySelector(".success-message").classList.add("hide");
  document.querySelector(".comm").classList.add("hide");
  document.querySelector(".SVG_ticket_btn").style = "display: none";
  document.querySelector(".slot_machine").style.backgroundImage = "none";
 });
 
