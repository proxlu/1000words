// Array de palavras e traduções
const words = [
    { word: "Hello", translation: "Olá" },
    { word: "Goodbye", translation: "Adeus" },
    { word: "Thank you", translation: "Obrigado" },
    { word: "Please", translation: "Por favor" },
    { word: "Yes", translation: "Sim" },
    { word: "No", translation: "Não" },
    // Adicione mais palavras aqui
];

// Função para exibir a lista de palavras
function renderWordList() {
    const wordList = document.getElementById("word-list");
    wordList.innerHTML = ""; // Limpa a lista

    words.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.word}</span>
            <button class="button" onclick="showTranslation('${item.translation}')">Ver Tradução</button>
        `;
        wordList.appendChild(li);
    });
}

// Função para exibir a tradução em um modal
function showTranslation(translation) {
    const modal = document.getElementById("translation-modal");
    const modalContent = document.querySelector(".modal-content p");
    modalContent.textContent = translation;
    modal.style.display = "flex";
}

// Fechar o modal
function closeModal() {
    const modal = document.getElementById("translation-modal");
    modal.style.display = "none";
}

// Carregar a lista de palavras ao abrir a página
document.addEventListener("DOMContentLoaded", renderWordList);
