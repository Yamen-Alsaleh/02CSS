const titleElement = document.getElementById("main-title");
const descElement = document.querySelector(".description");

titleElement.textContent = "Title Updated via JavaScript!";
descElement.textContent = "The DOM manipulation was successful.";

titleElement.style.color = "blue";

descElement.classList.add("active");
