let allImg = document.querySelectorAll("#_1");

let className = document.querySelector(".className");


let btn = document.querySelector("[type='button']");

allImg.forEach((e) => {
  e.addEventListener("click", (el) => {
    let item = el.target.dataset.feed;
    el.className = 'active'
    btn.onclick = function () {
      className.innerHTML = `
      <i class="fas fa-heart"></i>
      <h4 class='feedBack'>Thank You!</h4>
     <h5 class='feedBack'>Feedback: <span> ${item} </span></h5>
     <p>We'll use your feedback to improve our customer support</p>`;
    };
  });
});
