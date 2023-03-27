let count = document.querySelector("#count");

let one = document.querySelector("#one");

let two = document.querySelector("#two");

one.onclick = () => {
  count.innerHTML -= 1;
  if (count.innerHTML < 0) {
    count.style.color = 'red'
  }
 };



two.onclick = () => {
 count.innerHTML++ ;
 if (count.innerHTML > 0) {
  count.style.color = 'blue'
}
};
