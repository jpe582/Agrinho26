// Array com os dados das etapas do ciclo da soja sustentável
const etapas = [
    {
        emoji: "🌱",
        titulo: "Fase 1: Plantio Direto",
        descricao: "A semente é colocada na palhada do cultivo anterior. Isso protege o solo contra a erosão, mantém a umidade e sequestra carbono do ar."
    },
    {
        emoji: "💧",
        titulo: "Fase 2: Irrigação Inteligente",
        descricao: "Uso de sensores de umidade no solo e gotejamento. Água aplicada na quantidade exata de que a planta precisa, evitando desperdícios."
    },
    {
        emoji: "🐞",
        titulo: "Fase 3: Manejo Biológico (MIP)",
        descricao: "Em vez de excesso de defensivos químicos, utilizam-se inimigos naturais (como pequenas vespas ou fungos do bem) para controlar as pragas da soja."
    },
    {
        emoji: "🚜",
        titulo: "Fase 4: Colheita de Precisão",
        descricao: "Máquinas modernas monitoradas por satélite (GPS) colhem o grão mapeando a produtividade e evitando a compactação do solo e desperdício de combustível."
    },
    {
        emoji: "🌍",
        titulo: "Resultado: Agro Forte e Sustentável!",
        descricao: "A soja é colhida alimentando o mundo com baixa pegada de carbono, preservando as florestas e mostrando a força tecnológica do nosso campo."
    }
];

let etapaAtual = 0;

// Seleção dos elementos do HTML
const emojiElemento = document.getElementById("fase-imagem");
const tituloElemento = document.getElementById("fase-titulo");
const descricaoElemento = document.getElementById("fase-descricao");
const botaoAvançar = document.getElementById("btn-avancar");

// Função para mudar a etapa
botaoAvançar.addEventListener("click", () => {
    // Avança para a próxima etapa (volta para 0 se chegar ao fim)
    etapaAtual = (etapaAtual + 1) % etapas.length;
    
    // Atualiza a tela com os novos dados
    emojiElemento.textContent = etapas[etapaAtual].emoji;
    tituloElemento.textContent = etapas[etapaAtual].titulo;
    descricaoElemento.textContent = etapas[etapaAtual].descricao;
    
    // Altera o texto do botão na última tela para indicar o recomeço
    if (etapaAtual === etapas.length - 1) {
        botaoAvançar.textContent = "Reiniciar Ciclo";
        botaoAvançar.style.backgroundColor = "#2e6f40";
    } else {
        botaoAvançar.textContent = "Avançar Etapa Sustentável";
        botaoAvançar.style.backgroundColor = "#8cbb3a";
    }
});