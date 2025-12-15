const level = document.getElementById("strength-level");

if (score <= 1) {
  strength.textContent = "Strength: Weak";
  strength.style.color = "red";
  level.style.width = "33%";
  level.style.background = "red";
} 
else if (score <= 3) {
  strength.textContent = "Strength: Medium";
  strength.style.color = "orange";
  level.style.width = "66%";
  level.style.background = "orange";
} 
else {
  strength.textContent = "Strength: Strong";
  strength.style.color = "green";
  level.style.width = "100%";
  level.style.background = "green";
}
