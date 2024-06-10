const toggleNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
  });
};

toggleNav();

window.addEventListener("beforeunload", () => {
  const forms = document.getElementsByTagName("form");
  for (const form of forms) {
      form.reset();
  }
});
