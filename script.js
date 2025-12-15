const password = document.getElementById("password");
const strengthText = document.getElementById("strength");
const level = document.getElementById("strength-level");

password.addEventListener("input", () => {
  const value = password.value;
  let score = 0;

  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  if (score <= 1) {
    strengthText.textContent = "Strength: Weak";
    strengthText.style.color = "red";
    level.style.width = "25%";
    level.style.background = "red";
  } 
  else if (score <= 3) {
    strengthText.textContent = "Strength: Medium";
    strengthText.style.color = "orange";
    level.style.width = "60%";
    level.style.background = "orange";
  } 
  else {
    strengthText.textContent = "Strength: Strong";
    strengthText.style.color = "green";
    level.style.width = "100%";
    level.style.background = "green";
  }
});
