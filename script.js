const password = document.getElementById("password");
const strength = document.getElementById("strength");

password.addEventListener("input", () => {
  let value = password.value;
  let score = 0;

  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  if (score <= 1) {
    strength.textContent = "Strength: Weak";
    strength.style.color = "red";
  } else if (score <= 3) {
    strength.textContent = "Strength: Medium";
    strength.style.color = "orange";
  } else {
    strength.textContent = "Strength: Strong";
    strength.style.color = "green";
  }
});
