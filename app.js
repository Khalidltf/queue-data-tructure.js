import Queueobj from "./queueobj.js";
let q = new Queueobj(3);

document.addEventListener("DOMContentLoaded", () => {
  let addBtn = document.querySelector(".btnAdd");
  let removeBtn = document.querySelector(".btnRemove");
  let logBtn = document.querySelector(".btnLog");

  addBtn.addEventListener("click", addFilm);
  removeBtn.addEventListener("click", removeFilm);
  logBtn.addEventListener("click", logFilm);
});

// add the input value to the end of the queue
const addFilm = () => {
  let film = document.getElementById("film");
  let txt = film.value.trim();

  if (txt) {
    q.enqueue(txt);
    console.log(` the items size: ${q.size()}`);
    addTxtToHtml(txt);
    console.log(`the last item has been add to the items ${q.tail()}`);
    film.value = "";
    film.focus();
  }
};

function addTxtToHtml(film) {
  let ol = document.querySelector("main ol");
  ol.insertAdjacentHTML("beforeend", `<li>${film}</li>`);
}

function removeTxtFromHtml(item) {
  let ol = document.querySelectorAll("ol li");
  ol.forEach((element) => {
    if (element.textContent === item) element.remove();
  });
}

// remove one item from the front of the queue
const removeFilm = () => {
  let item = q.dequeue();
  console.log(`${item} has has been deleted`);
  removeTxtFromHtml(item);
};

//  show the contents of the queue
const logFilm = () => {
  console.log(q.string());
};
