let countBtn = document.getElementById("countBtn");
let count = document.getElementById("count");

let index = 0;

let toggle = false;

let countUp = () => {
  index = index + 1;
  count.innerHTML = index;
  if (toggle === true) {
    setTimeout(() => {
      countUp();
    }, 1000);
  }
  console.log(index);
};

countBtn.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle === true) {
    countUp();
  }
});
