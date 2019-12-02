"use strict";

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

document.querySelector(".submit").addEventListener("click", () => {
  submitForm();
});

function submitForm() {
  console.log("click");
  post();
}

function post() {
  const data = {
    Name: "Tomek",
    Email: "romek@kea.dk",
    Subscriber: "true"
  };

  const postData = JSON.stringify(data);
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
    .then(data => console.log(data));
}
