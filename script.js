//Tabs-----------------

const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

//--Скрывает табы и убирает Active у кнопок---

function hideTabs() {
  tabsItems.forEach((item) => {
    item.classList.add("hide");
  });
  tabsBtns.forEach((item) => {
    item.classList.remove("active");
  });
}

// Ф-ция показывает переданый номер таба и делает соответственную ему кнопку активной.

function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  })
);

//Anchors-----------
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach((anc) => {
  anc.addEventListener("click", function (event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);
    window.scroll({
      top: elem.offsetTop - 80,
      behavior: "smooth",
    });
  });
});
