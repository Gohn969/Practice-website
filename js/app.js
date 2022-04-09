const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    let collapsibleNav = this.parentElement;
    collapsibleNav.classList.toggle("collapsible--expanded");
  });
});
