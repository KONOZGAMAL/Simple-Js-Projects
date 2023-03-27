let btn1 = document.querySelector("#btn1");
let Close = document.querySelector("#Close");

let Popup = document.querySelector(".Popup");

btn1.addEventListener("click", function () {
  Popup.style.display = "block";
});
Close.addEventListener("click", function () {
  Popup.style.display = "none";
});

/////////////////Secondary Popup

let btn2 = document.querySelector("#btn2");
let Close2 = document.querySelector("#Close2");

let Popup2 = document.querySelector(".Popup2");

btn2.addEventListener("click", function () {
  Popup2.style.display = "block";
});
Close2.addEventListener("click", function () {
  Popup2.style.display = "none";
});