// Selectors
const card = document.querySelector(".card");
const card2 = document.querySelector(".thank");
const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".card--submit-button");
const thankRating = document.querySelector(".thank--rating");
const backBtn = document.querySelector(".back");

let choice = false;
let rating;
let submitted;

// Funtions
function onLoad() {
  if (localStorage.getItem("card")) {
    card.style.display = "none";
    card2.style.display = "flex";
    thankRating.textContent = `You selected ${localStorage.getItem(
      "rating"
    )} out of 5`;
  }
}
onLoad();

// EventListeners
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    rating = e.target.textContent;
    localStorage.setItem("rating", rating);
    choice = true;
    btns.forEach((btn) => {
      btn.classList.remove("btn--active");
    });
    btn.classList.add("btn--active");
    console.log(rating, choice);
  });
});

submitBtn.addEventListener("click", () => {
  if (choice) {
    card.style.display = "none";
    card2.style.display = "flex";
    thankRating.textContent = `You selected ${rating} out of 5`;
    submitted = true;
    localStorage.setItem("card", submitted);
  } else {
    console.log("error");
  }
});

backBtn.addEventListener("click", () => {
  card.style.display = "flex";
  card2.style.display = "none";
  submitted = false;
});
