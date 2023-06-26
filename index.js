const cat = document.querySelector(".header__logo");
const btn = document.querySelector(".header__btn")

function rotateCat() {
  cat.classList.toggle("header__logo_down")
}

const colors = 

cat.addEventListener('click', rotateCat)
btn.addEventListener('click', () => {
  btn.classList.toggle("header__btn_clicked")
})