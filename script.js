// Botão GitHub e LinkedIn
document.getElementById("githubBtn").addEventListener("click", () => {
  window.open("https://github.com/juvenaljunior3781-blip", "_blank");
});
document.getElementById("linkedinBtn").addEventListener("click", () => {
  window.open("https://linkedin.com/in/juvenaljunior-dev-", "_blank");
});

// Header muda ao rolar
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Dark Mode
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Formulário (validação simples)
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Obrigado pela mensagem! Em breve entro em contato.");
});

// Efeito de digitação no texto do hero
const heroText = "Desenvolvedor Front-End| Criando soluções com tecnologia";
const heroElement = document.getElementById("heroText");
let index = 0;
heroElement.textContent = "";
function typeEffect() {
  if (index < heroText.length) {
    heroElement.textContent += heroText.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();
