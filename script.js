const perguntas = [
    {
        pergunta: "Qual é uma das principais funções do sabão?",
        respostas: [
            "Ajudar na limpeza",
            "Produzir eletricidade",
            "Congelar a água",
            "Aumentar a temperatura"
        ],
        correta: 0
    },

    {
        pergunta: "Com qual substância o sabão interage durante a lavagem?",
        respostas: [
            "Somente com óleo",
            "Somente com água",
            "Com água e substâncias oleosas",
            "Com fogo"
        ],
        correta: 2
    },

    {
        pergunta: "Por que devemos ter cuidado com produtos químicos?",
        respostas: [
            "Porque todos são doces",
            "Porque alguns podem ser perigosos",
            "Porque eles sempre congelam",
            "Porque não possuem cheiro"
        ],
        correta: 1
    },

    {
        pergunta: "O que ajuda a remover a sujeira durante a lavagem?",
        respostas: [
            "A interação do sabão com água e sujeira",
            "A luz do Sol",
            "O ar",
            "O som"
        ],
        correta: 0
    },

    {
        pergunta: "Onde devemos aprender sobre procedimentos químicos?",
        respostas: [
            "Sem nenhuma orientação",
            "Com orientação adequada",
            "Misturando produtos aleatoriamente",
            "Testando produtos desconhecidos"
        ],
        correta: 1
    }
];


let perguntaAtual = 0;
let pontos = 0;


/* COMEÇAR O JOGO */

function iniciarJogo() {

    perguntaAtual = 0;
    pontos = 0;

    document.getElementById("botaoJogo").style.display = "none";

    mostrarPergunta();
}


/* MOSTRAR PERGUNTA */

function mostrarPergunta() {

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("pergunta").textContent =
        pergunta.pergunta;

    const areaRespostas =
        document.getElementById("respostas");

    areaRespostas.innerHTML = "";

    /* Limpa o feedback */

    document.getElementById("feedback").textContent = "";

    document.getElementById("feedback").className = "";


    pergunta.respostas.forEach((resposta, indice) => {

        const botao = document.createElement("button");

        botao.textContent = resposta;

        botao.classList.add("resposta");

        botao.onclick = function() {
            responder(indice);
        };

        areaRespostas.appendChild(botao);
    });


    document.getElementById("pontuacao").textContent =
        "Pergunta " + (perguntaAtual + 1) +
        " de " + perguntas.length;
}


/* VERIFICAR RESPOSTA */

function responder(indice) {

    const pergunta = perguntas[perguntaAtual];

    const botoes =
        document.querySelectorAll(".resposta");

    /* Desativa os botões */

    botoes.forEach(botao => {
        botao.disabled = true;
    });


    const feedback =
        document.getElementById("feedback");


    if (indice === pergunta.correta) {

        pontos++;

        feedback.textContent =
            "✅ Acertou! Muito bem!";

        feedback.className = "acertou";

    } else {

        feedback.textContent =
            "❌ Errou! A resposta correta era: " +
            pergunta.respostas[pergunta.correta];

        feedback.className = "errou";
    }


    /* Espera um pouco antes de passar */

    setTimeout(() => {

        perguntaAtual++;

        if (perguntaAtual < perguntas.length) {

            mostrarPergunta();

        } else {

            terminarJogo();
        }

    }, 1800);
}


/* FINAL DO JOGO */

function terminarJogo() {

    document.getElementById("pergunta").textContent =
        "🎉 Quiz terminado!";

    document.getElementById("respostas").innerHTML = "";

    document.getElementById("feedback").textContent =
        "Você acertou " + pontos +
        " de " + perguntas.length + " perguntas!";

    document.getElementById("feedback").className =
        "resultado";


    const botao =
        document.getElementById("botaoJogo");

    botao.textContent =
        "Jogar novamente";

    botao.style.display =
        "inline-block";
}