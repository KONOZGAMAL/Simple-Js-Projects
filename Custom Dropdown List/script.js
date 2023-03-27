
let className = document.querySelector('.className')


let icon = document.querySelector(".icon");

let mainList = document.querySelector(".mainList");

let element = document.querySelector('[type="text"]');
let fa_solid = document.querySelector(".fa-solid");


className.onclick=function() {
    className.classList.toggle('active')
}

icon.addEventListener("click", () => {
  fa_solid.className = "fa-solid fa-chevron-up";
  mainList.innerHTML = `<ul>
    <li data-word = "HTML"> <i class="fa-brands fa-html5"></i> HTML</li>
    <li data-word = "CSS"> <i class="fa-brands fa-css3-alt"></i> CSS</li>
    <li data-word = "Javascript"> <i class="fa-brands fa-js"></i>  Javascript</li>
    <li data-word = "BootStrap"> <i class="fa-brands fa-bootstrap"></i> BootStrap</li>
    <li data-word = "ReactJs"> <i class="fa-brands fa-react"></i> ReactJs</li>
</ul>`;
  let all = document.querySelectorAll("ul li");
  all.forEach((e) => {
    e.addEventListener("click", (el) => {
      let val = el.target.dataset.word;
      icon.innerHTML = `${val}
      <i class="fa-solid fa-chevron-down"> `;
      mainList.style.display='none'
    });
    icon.innerHTML = `${''}
      <i class="fa-solid fa-chevron-down"> `;
  });
});
