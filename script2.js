"use strict";

const form = document.querySelector("form#addform");
form.setAttribute("novalidate", true);

// CHECKING VALIDITY
// function checkValidity() {
//   if (form.elements.bandname.checkValidity()) {
//     form.elements.bandname.style.background = "";
//   } else {
//     form.elements.bandname.style.background = "red";
//   }
// }

// form.elements.bandname.addEventListener("blur", checkValidity);
// form.elements.bandname.addEventListener("focus", () => {
//   form.elements.bandname.style.background = "";
// });


form.addEventListener("submit", evt => {
  evt.preventDefault();

  // if (form.reportValidity()) {
  //   const inputData = {
  //     bandname: form.elements.bandname.value,
  //     musicgenre: form.elements.genre.value,
  //     nrofmembers: form.elements.nrofmembers.value,
  //     songtitle: form.elements.song.value
  //   };
  //   post(inputData);
  // } else {
  //   alert("sth is wrong");
  // }

  const inputData = {
    bandname: form.elements.bandname.value,
    musicgenre: form.elements.genre.value,
    nrofmembers: form.elements.nrofmembers.value,
    songtitle: form.elements.song.value
  };
  post(inputData);
});

formEdit.addEventListener("submit", evt => {
  evt.preventDefault();
  put();
});

function get() {
  fetch("https://bandsdatabase-76bc.restdb.io/rest/bands", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887ce8fd86cb75861e2623",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(bands => {
      console.log(bands);
      bands.forEach(addBandToDOM);
    });
}
get();

function addBandToDOM(band) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector("article").dataset.bandid = band._id;
  clone.querySelector("h1").textContent = band.bandname;
  clone.querySelector("h2").textContent = band.musicgenre;
  clone.querySelector("h3").textContent = band.nrofmembers;
  clone.querySelector("p").textContent = band.songtitle;

  clone.querySelector(".delete").addEventListener("click", () => {
    deleteBand(band._id);
  });
  clone.querySelector(".edit").addEventListener("click", () => {
    editBand(band._id);
  });

  document.querySelector(".app").prepend(clone);
}

function post(inputData) {
  addBandToDOM(inputData);
  const postData = JSON.stringify(inputData);
  fetch("https://bandsdatabase-76bc.restdb.io/rest/bands", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887ce8fd86cb75861e2623",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

function put() {
  const data = {
    bandname: formEdit.elements.bandname.value,
    genre: formEdit.elements.genre.value,
    nrofmembers: formEdit.elements.nrofmembers.value,
    song: formEdit.elements.song.value
  };
  const postData = JSON.stringify(data);
  fetch("https://bandsdatabase-76bc.restdb.io/rest/bands/" + formEdit.elements.id.value, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887ce8fd86cb75861e2623",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(updatedBand => {
      const parentElement = document.querySelector(`article[data-bandid="${updatedBand._id}"`);
      parentElement.querySelector("h1").textContent = updatedBand.bandname;
      parentElement.querySelector("h2").textContent = updatedBand.genre;
      parentElement.querySelector("h3").textContent = updatedBand.nrofmembers;
      parentElement.querySelector("p").textContent = updatedBand.song;

      formEdit.elements.bandname.value = "";
      formEdit.elements.genre.value = "";
      formEdit.elements.nrofmembers.value = "";
      formEdit.elements.song.value = "";
      formEdit.elements.id.value = "";
    });
}

function deleteBand(id) {
  fetch("https://bandsdatabase-76bc.restdb.io/rest/bands/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887ce8fd86cb75861e2623",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      //delete from DOM
      document.querySelector(`article[data-bandid="${id}"`).remove();
    });
}

function editBand(id) {
  fetch(`https://bandsdatabase-76bc.restdb.io/rest/bands/${id}`, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5d887ce8fd86cb75861e2623",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(bands => {
      formEdit.elements.bandname.value = bands.bandname;
      formEdit.elements.genre.value = bands.genre;
      formEdit.elements.nrofmembers.value = bands.nrofmembers;
      formEdit.elements.song.value = bands.songtitle;
      formEdit.elements.id.value = bands._id;
    });
}
