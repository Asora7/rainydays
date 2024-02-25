document.addEventListener("DOMContentLoaded", function () {
    const writeToUsForm = document.getElementById("writeToUsForm");
    const sendMessageButton = writeToUsForm.querySelector("button");

    writeToUsForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const firstName = document.getElementById("name").value.trim();
      const lastName = document.getElementById("last-name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("write-message").value.trim();

      if (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("Please fill out all fields before sending the message.");
        return; 
      }

      sendMessageButton.textContent = "Message Sent!";
      sendMessageButton.style.backgroundColor = "#4CAF50"; 
    });
    
  });