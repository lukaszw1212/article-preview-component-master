let openButton = document.querySelector(".share-btn-open");
let closeButton = document.querySelector(".share-btn-close");
let sharePopup = document.querySelector(".share-popup");
let shareFooter = document.querySelector(".share-content");

let ifOpen = false;

openButton.addEventListener("click", () => {
  ifOpen = true;

  if (ifOpen) {
    sharePopup.classList.remove("hidden");
    shareFooter.classList.add("hidden");
  } else {
    sharePopup.classList.add("hidden");
    shareFooter.classList.remove("hidden");
  }
});

closeButton.addEventListener("click", () => {
  ifOpen = false;

  if (ifOpen) {
    sharePopup.classList.remove("hidden");
    shareFooter.classList.add("hidden");
  } else {
    sharePopup.classList.add("hidden");
    shareFooter.classList.remove("hidden");
  }
});
