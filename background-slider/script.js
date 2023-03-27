let left = document.querySelector(".fa-caret-left");

let right = document.querySelector(".fa-caret-right");

let onlyImg = document.querySelector("#onlyImg");

let all = document.querySelectorAll("a");

let arr = ["1", "2", "3", "4", "5", "6", "7"];
// onlyImg.src = "./img/4.jpeg";
console.log(arr.length - 1);
let count = 0;

all.forEach((e) => {
  e.addEventListener("click", (el) => {
    if (e.classList.contains("_")) {
      count--;
      if (count < 0) {
        count = arr.length - 1;
      }
      onlyImg.src = `./img/${arr[count]}.jpeg`;
    }
    if (e.classList.contains("__")) {
        count++;
        if (count > arr.length - 1) {
          count = 0;
        }
        onlyImg.src = `./img/${arr[count]}.jpeg`;
      }
  });
});

// left.onclick = () => {
//  arr.map((e,index) => {
//     onlyImg.src = `./img/${index}.jpeg`;
// });
// //   console.log(a);
// };

// right.onclick = () => {
//   console.log("fa-caret-right");
// };
