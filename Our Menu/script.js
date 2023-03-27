let img = document.querySelectorAll("img");

img.innerHTML='lolo'


let all = document.querySelectorAll("ul li");

all.forEach((e) => {
  e.addEventListener("click", function (el) {
    let elements = el.currentTarget.dataset.menu;
    all.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.currentTarget.classList.add('active')
    img.forEach((a) => {
      if (elements === "all") {
        a.style.display = "block";
      } else {
        if (a.classList.contains(elements)) {
          a.style.display = "block";
        } else {
          a.style.display = "none";
        }
      }
    });
  });
});
