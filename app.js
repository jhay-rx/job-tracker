// event listener that waits for HTML document to be completely loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
  // after HTML document is loaded and parsed get the form from html
  const form = document.querySelector("#application-form");

  // when submit button is clicked/pressed
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //store data from the form to a FormData obj
    const formData = new FormData(form);

    // this display the content of formData to the console
    console.log(Object.fromEntries(formData));

    const newApplication = document.createElement("p");
    const companyName = document.createTextNode(formData.get("company"));
    const positionName = document.createTextNode(formData.get("position"));
    const applicationStatus = document.createTextNode(formData.get("status"));
    newApplication.appendChild(companyName);
    newApplication.appendChild(positionName);
    newApplication.appendChild(applicationStatus);

    const applications = document.getElementById("applications");
    applications.appendChild(newApplication);
  });
});

const modal = document.getElementById("modal");
const newApplicationBtn = document.getElementById("new-application-btn");

function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

newApplicationBtn.addEventListener("click", openModal);

/* close when clicking outside the modal box */
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

/* close when pressing esc */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeModal;
});
