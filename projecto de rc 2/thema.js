// Selecionar o botão de alternar tema
const themeToggleButton = document.getElementById("theme-toggle");

// Função para aplicar o tema
function applyTheme(theme) {
  document.body.className = theme;
}

// Alternar entre claro e escuro
function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme); // Salvar a preferência no Local Storage
}

// Verificar a preferência salva no Local Storage
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Adicionar o evento de clique ao botão
themeToggleButton.addEventListener("click", toggleTheme);
