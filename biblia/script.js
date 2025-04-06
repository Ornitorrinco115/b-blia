// Função para consumir o JSON e exibir o versículo do dia
function displayVerse() {
    const date = new Date();
    const day = date.getDate(); // Obter o dia atual

    // Fazer o fetch para pegar os dados do arquivo JSON
    fetch('versiculos.json')
        .then(response => response.json())
        .then(data => {
            // Acessar os versículos do JSON
            const verses = data.versiculos;

            // Encontrar o versículo do dia
            const verseOfTheDay = verses[day - 1].texto; // day - 1 porque o array começa em 0

            // Exibir o versículo do dia na página
            document.getElementById("verse").textContent = verseOfTheDay;
        })
        .catch(error => {
            console.error('Erro ao carregar o arquivo JSON:', error);
            document.getElementById("verse").textContent = 'Erro ao carregar versículo do dia.';
        });
}

// Chamar a função quando a página carregar
window.onload = displayVerse;

//ver mais
document.querySelectorAll('.ver-mais').forEach(button => {
    button.addEventListener('click', () => {
      const extraVerses = button.previousElementSibling;
      const isVisible = extraVerses.style.display === 'block';
      extraVerses.style.display = isVisible ? 'none' : 'block';
      button.textContent = isVisible ? 'Ver mais versículos' : 'Ocultar versículos';
    });
  });