
const navMenu = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");
const items = ["Section 1", "Section 2", "Section 3", "Section 4"];

//Build the nav
items.forEach((item, i) => {
  const el = document.createElement("a");
  el.innerText = item;
  el.classList.add("menu-items");
  el.setAttribute("id", `menu-${i + 1}`);
  el.href = `#section${i + 1}`;
  navList.appendChild(el);

  const li = document.createElement("li");
  li.classList.add("menu-list");
  li.appendChild(el);
  li.setAttribute("id", `${i + 1}`);
  // Append the list item to the list
  navList.appendChild(li);
});

//Make Nav Active when Clicked and scrolls down to section
document.addEventListener("click", function (event) {
  let active = document.querySelector(".menu-list.active");
  if (active) active.classList.remove("active");
  if (event.target.classList.contains("menu-list")) {
    event.target.classList.add("active");
    window.location.href = "#section" + event.target.id;
  }
});