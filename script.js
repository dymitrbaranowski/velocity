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
