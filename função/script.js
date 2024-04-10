function alterarEstado() {
    var imagem = document.getElementById("imagem");
    var botao = document.querySelector("button");
  
    
    if (imagem.style.filter === "grayscale(100%)") {
      
      imagem.style.filter = "none";
      botao.textContent = "Bloquear imagem"; 
    } else {
      
      imagem.style.filter = "grayscale(100%)";
      botao.textContent = "Liberar imagem";
    }
  }