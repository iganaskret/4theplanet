//fetching

let postLink = "http://iganaskret.com/wpv1/wp-json/wp/v2/4earth?_embed";
const template = document.querySelector("template").content;

function loadData() {
  fetch(postLink)
    .then(e => e.json())
    .then(show);
}

function show(data) {
  data.forEach(post => {
    //clone
    const clone = template.cloneNode(true);
    //populate
    const img = clone.querySelector("img");
    const h1 = clone.querySelector("h1");
    const p = clone.querySelector("p");

    h1.textContent = post.title.rendered;
    p.textContent = post.content.rendered;

    // img.src =
    //   post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;

    console.log(post);

    //append
    document.querySelector("." + post.position).appendChild(clone);
  });
}

loadData(postLink);
