"use strict";
const numList = [];
window.addEventListener("load", start);
const UI = document.querySelector("#ui");
setInterval(countList, 1000);
const defaultHeight = 0;
const defaultTop = 80;
const barAmount = 41;

function start() {
  console.log("start");
  for (let i = 0; i < barAmount; i++) createBars(i);
}
function createBars(num) {
  console.log(`createBars`);
  let barElement = /*html*/ `
    <div id="bar${num}" class="bar_obj"></div>
  `;
  document.querySelector("#ui").insertAdjacentHTML("beforeend", barElement);
}
function styleBar(num, newHeight) {
  let bar = document.querySelector("#bar" + num);
  bar.style.height = newHeight * 2 + "%";
  let compensatedTop = defaultTop + defaultHeight - newHeight * 2;
  bar.style.top = compensatedTop + "%";
}
function styleAllBars() {
  for (let i = 0; i < numList.length; i++) {
    styleBar(i, numList[i]);
  }
}
function countList() {
  const queueSize = getNumberOfCustomers();
  numList.push(`${queueSize}`);
  if (numList.length > barAmount) {
    UI.classList.add("move_left");
    UI.addEventListener("animationend", moveAnimationEnd);
  } else styleAllBars();
  // console.log(numList);
}
function moveAnimationEnd() {
  UI.classList.remove("move_left");
  numList.shift();
  styleAllBars();
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}
