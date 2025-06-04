// script.js

document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".order-btn");
    orderButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Thank you for your order! 🌸 Your coffee is being prepared.");
      });
    });
  });