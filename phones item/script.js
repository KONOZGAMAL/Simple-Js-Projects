let list = document.querySelectorAll("#img_1");
let head = document.querySelector('.head')

let onlyImg = document.getElementById('onlyImg');

console.log(onlyImg.src);

if (window.localStorage.getItem("src")) {
    onlyImg.src = localStorage.getItem("src");
}

if (window.localStorage.getItem("background")) {
    head.style.background = localStorage.getItem("background");
}


list.forEach((e) => {
  e.addEventListener("click", function (el) {
    Img(el.target.src)
    back(el.target.dataset.color);
  });
});

function back(colors) {
    head.style.background = colors;
    localStorage.setItem("background", colors);

}
function Img(src_){
    onlyImg.src = src_
    console.log(onlyImg);
    window.localStorage.setItem('src',onlyImg.src)
}
