// ドロワーメニューの開閉
document
  .getElementById("js-drawer-icon")
  .addEventListener("click", function () {
    this.classList.toggle("is-opened");
    document.getElementById("js-drawer").classList.toggle("is-opened");
  });

// ページトップボタンの表示
const pageTop = document.querySelector("#js-pagetop");
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});
