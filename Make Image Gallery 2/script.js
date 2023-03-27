let all = document.querySelectorAll(".a");

let only = document.querySelector('.only')

let change = document.querySelector('#change')

let className = document.querySelector(".className");

let close = document.querySelector('.close')
console.log(all);

console.log(change);

console.log(only);


all.forEach((e) => {
  e.addEventListener("click", function () {
    only.style.display = 'flex'
    change.src = e.src
  });
});

close.onclick = ()=>{
  only.style.display = 'none'
}
