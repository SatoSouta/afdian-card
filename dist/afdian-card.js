function afdianCreate(container, data) {
  var rq = document.getElementById(container);

  var name = data.name;
  var avatar = data.avatar;
  var cover = data.cover;
  var doing = data.creator.doing;
  var id = data.url_slug;
  var tag = data.creator.category.name;

  if (!cover) {
    cover = avatar;
  }

  let card = document.createElement("a");
  let c = document.createElement("div");
  let a = document.createElement("div");
  let img = document.createElement("img");
  let i = document.createElement("div");
  let n = document.createElement("div");
  let d = document.createElement("div");

  card.href = "https://afdian.net/@" + id;
  card.target = "_blank";
  card.className = "af-card";
  c.className = "af-cover";
  c.style = "background-image: url(" + cover + ");";
  a.className = "af-avatar";
  img.src = avatar;
  i.className = "af-info";
  n.className = "af-name";
  if (!tag) {
    n.innerHTML = name;
  } else {
    n.innerHTML = name + "<span class='af-tag'>" + tag + "</span>"
  }
  d.className = "af-doing";
  d.innerHTML = "正在创作 " + doing;

  a.appendChild(img);
  i.appendChild(n);
  i.appendChild(d);
  card.appendChild(c);
  card.appendChild(a);
  card.appendChild(i);
  rq.appendChild(card);
}

function afdian(container, id) {
  fetch("https://api.bbstr.net/afdian?id=" + id)
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      afdianCreate(container, json.data.user);
    });
}