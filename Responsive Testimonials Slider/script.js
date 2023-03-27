let arr = [
  {
    img: "./img/2.jpg",
    name: "Robert Mason",
    jobe: "Back-End",
    title:
      "Robert Mason => ipsum dolor sit amet. Obcaecati possimus expedita odio quam quia neque. Doloribus adipisci modi omnis minus, nisi neque aliquid consequatur ut, est porro, vel veritatis dolorem",
  },
  {
    img: "./img/3.jpg",
    name: "Joseph Rhys",
    jobe: "Designer",
    title:
      "Joseph Rhys =>ipsum dolor sit amet. Obcaecati possimus expedita odio quam quia neque. Doloribus adipisci modi omnis minus, nisi neque aliquid consequatur ut, est porro, vel veritatis dolorem",
  },
  {
    img: "./img/4.jpg",
    name: "Mario Emma",
    jobe: "Ux Devloper",
    title:
      "Mary Emma => ipsum dolor sit amet. Obcaecati possimus expedita odio quam quia neque. Doloribus adipisci modi omnis minus, nisi neque aliquid consequatur ut, est porro, vel veritatis dolorem",
  },
  {
    img: "./img/5.jpg",
    name: "Olivia",
    jobe: "IT",
    title:
      "Olivia=> ipsum dolor sit amet.Obcaecati possimus expedita odio quam quia neque. Doloribus adipisci modi omnis minus, nisi neque aliquid consequatur ut, est porro, vel veritatis dolorem",
  },
];

let all2 = document.querySelector(".all2");

let img = document.querySelector("img");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let pr = document.querySelector("p");

let left = document.querySelector(".fa-chevron-left");
let right = document.querySelector(".fa-chevron-right");
let i = 0;
function show() {
  let x = arr[i];
  img.src = x.img;
  h3.innerHTML = x.name;
  h4.innerHTML = x.jobe;
  pr.innerHTML = x.title;
}
show();
left.addEventListener("click", function () {
  i++;
  if (i > arr.length - 1) {
    i = 0;
  }
  show();
});

right.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  show();
});
// let all3 = document.querySelector('.all3')
// let all2 = document.querySelector('.all2')
