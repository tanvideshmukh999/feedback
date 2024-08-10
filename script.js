const emojis = document.querySelectorAll(".emoji-des");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

emojis.forEach((emoji) => {
  emoji.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
         <br>
          <br>

        <p>We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  emojis.forEach((emoji) => {
    emoji.classList.remove("active");
  });
}