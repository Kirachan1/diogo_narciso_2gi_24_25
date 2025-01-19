document.addEventListener("DOMContentLoaded", () => {
    const categoryFilters = document.getElementById("category-filters");
    const gallery = document.getElementById("gallery");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
    // Função para carregar categorias e imagens
    async function loadGallery() {
      const response = await fetch("gallery.json");
      const data = await response.json();
      displayCategories(data.categories);
      displayImages(data.images, data.categories[0]); // Exibe a primeira categoria por padrão
    }
  
    // Exibir categorias como botões
    function displayCategories(categories) {
      categories.forEach((category, index) => {
        const button = document.createElement("button");
        button.textContent = category;
        button.classList.add(index === 0 ? "active" : "");
        button.addEventListener("click", () => {
          document.querySelectorAll("#category-filters button").forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
          displayImages(data.images, category);
        });
        categoryFilters.appendChild(button);
      });
    }
  
    // Exibir imagens de uma categoria
    function displayImages(images, category) {
      gallery.innerHTML = "";
      images[category].forEach(image => {
        const img = document.createElement("img");
        img.src = `images/${image}`;
        img.alt = category;
        if (favorites.includes(image)) img.classList.add("favorite");
        img.addEventListener("click", () => toggleFavorite(image, img));
        gallery.appendChild(img);
      });
    }
  
    // Alternar favorito
    function toggleFavorite(image, imgElement) {
      if (favorites.includes(image)) {
        favorites.splice(favorites.indexOf(image), 1);
        imgElement.classList.remove("favorite");
      } else {
        favorites.push(image);
        imgElement.classList.add("favorite");
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  
    // Inicializar galeria
    loadGallery();
  });
  