(function () {
  emailjs.init("bK5nVJ3nP11ftMzh4");
  console.log("EmailJS initialized");
})();

function showMessage(message, type) {
  const outputMessage = document.getElementById("output-message");
  outputMessage.textContent = message;
  outputMessage.className =
    "output-message " + (type === "success" ? "success" : "error");
  outputMessage.style.display = "block";
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const hobby = document.getElementById("hobbies").value;

  console.log(name, age, email, hobby);

  const user = { name, age, email, hobby };
  const myJSON = JSON.stringify(user, null, 2);

  console.log(user, myJSON);
  document.getElementById("jsonOutput").innerHTML = `<pre>${myJSON}</pre>`;

  emailjs.sendForm("service_391karm", "template_1oerx7s", this).then(
    function () {
      console.log("Email sent successfully");
      showMessage("Thank you! Your message has been sent.", "success");
    },
    function (error) {
      console.error("Error sending email:", error);
      showMessage("Failed to send the message: " + JSON.stringify(error), "error");
    }
  );
});
