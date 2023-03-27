let inputField = document.querySelector("#ptn");

let nav = document.querySelector(".nav");

let submit = document.querySelector('[type="submit"]');

let messageUser = document.querySelector(".messageUser");

let messageError = document.querySelector(".messageError");

console.log(messageError);

nav.addEventListener("submit", (el) => {
  el.preventDefault();
  let val = inputField.value;
  submit.onclick = function () {
    if (inputField.value !== "") {
      messageUser.textContent = val;
    inputField.value = ''
    } else {
      messageError.classList.remove('messageError');
      setTimeout(() => {
        messageError.classList.add('messageError');
      }, 4000);
    }
  };
});
