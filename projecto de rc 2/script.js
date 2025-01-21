document.addEventListener("DOMContentLoaded", () => {
    const subject = document.getElementById("subject");
    const dynamicFields = document.getElementById("dynamic-fields");
  
    subject.addEventListener("change", () => {
      dynamicFields.innerHTML = ""; // Limpa os campos dinâmicos
      const selectedValue = subject.value;
  
      if (selectedValue === "suporte") {
        // Campos para suporte técnico
        const productLabel = document.createElement("label");
        productLabel.setAttribute("for", "product");
        productLabel.textContent = "Produto Relacionado:";
  
        const productInput = document.createElement("input");
        productInput.setAttribute("type", "text");
        productInput.setAttribute("id", "product");
        productInput.setAttribute("name", "product");
        productInput.setAttribute("placeholder", "Descreva o produto ou serviço");
  
        dynamicFields.appendChild(productLabel);
        dynamicFields.appendChild(productInput);
      } else if (selectedValue === "feedback") {
        // Campos para feedback
        const ratingLabel = document.createElement("label");
        ratingLabel.setAttribute("for", "rating");
        ratingLabel.textContent = "Classificação do Serviço (1-5):";
  
        const ratingInput = document.createElement("input");
        ratingInput.setAttribute("type", "number");
        ratingInput.setAttribute("id", "rating");
        ratingInput.setAttribute("name", "rating");
        ratingInput.setAttribute("min", "1");
        ratingInput.setAttribute("max", "5");
  
        dynamicFields.appendChild(ratingLabel);
        dynamicFields.appendChild(ratingInput);
      } else if (selectedValue === "outros") {
        // Campos para outros
        const detailLabel = document.createElement("label");
        detailLabel.setAttribute("for", "details");
        detailLabel.textContent = "Detalhes Adicionais:";
  
        const detailInput = document.createElement("textarea");
        detailInput.setAttribute("id", "details");
        detailInput.setAttribute("name", "details");
        detailInput.setAttribute("placeholder", "Forneça mais informações...");
        detailInput.setAttribute("rows", "4");
  
        dynamicFields.appendChild(detailLabel);
        dynamicFields.appendChild(detailInput);
      }
    });
  });
  