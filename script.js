// Scroll suave para as seções
document.querySelectorAll("nav.menu-desktop a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionID = this.getAttribute("href").substring(1);
    const section = document.getElementById(sectionID);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
