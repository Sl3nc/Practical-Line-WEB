function copyCode(button) {
  const codeBlock = button.nextElementSibling;
  const code = codeBlock.textContent;

  navigator.clipboard
    .writeText(code)
    .then(() => {
      button.classList.add("copied");
      button.textContent = "Copiado!";

      setTimeout(() => {
        button.classList.remove("copied");
        button.textContent = "Copiar";
      }, 2000);
    })
    .catch((err) => {
      console.error("Erro ao copiar:", err);
    });
}
