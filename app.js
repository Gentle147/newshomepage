let hamburger = document.querySelector(".hamburger");
let allBars = document.querySelectorAll(".bar");
console.log(allBars);
let ul = document.querySelector("ul");
console.log(ul);

hamburger.addEventListener("click", () => {
  allBars.forEach((eachBar) => {
    if (eachBar.classList.contains("active")) {
      eachBar.classList.remove("active");
      ul.classList.remove('active')
    } else {
      eachBar.classList.add("active");
      ul.classList.add('active')
    }
    // if (eachBar.classList.contains("active")) {
    //   ul.style.display = "flex";
    // } else {
    //   ul.style.display = "none";
    // }
  });
});
