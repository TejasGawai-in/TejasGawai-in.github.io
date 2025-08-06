function submitForm() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const gender = document.getElementById("gender").value;
  const address = document.getElementById("address").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();

  if (!name || !age || !gender || !address || !whatsapp) {
    alert("Please fill in all required fields.");
    return;
  }

  let lastToken = localStorage.getItem("lastToken");
  lastToken = lastToken ? parseInt(lastToken) : 0;
  const newToken = lastToken + 1;
  localStorage.setItem("lastToken", newToken);

  const now = new Date();
  const formattedDateTime = now.toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: true
  });

  document.getElementById("formSection").style.display = "none";
  document.getElementById("thankYouBox").style.display = "block";

  document.getElementById("tokenDisplay").textContent = "Your Token Number: " + newToken;
  document.getElementById("nameDisplay").textContent = "Name: " + name;
  document.getElementById("ageDisplay").textContent = "Age: " + age;
  document.getElementById("genderDisplay").textContent = "Gender: " + gender;
  document.getElementById("addressDisplay").textContent = "Address: " + address;
  document.getElementById("whatsappDisplay").textContent = "WhatsApp No: " + whatsapp;
  document.getElementById("dateTimeDisplay").textContent = "Submitted on: " + formattedDateTime;
}
