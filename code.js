let div = document.querySelector("div");
let counter1 = 2;
let counter2 = 49;
document.addEventListener("scroll", function () {
  if (counter1 < 90) {
    counter1 += 2;
  }
  div.style.width = `${counter1}vw`;
  div.style.height = `${counter1}vh`;
  div.style.top = `${counter2}vh`;
  div.style.left = `${counter2}vw`;
  counter1 += 2;
});
