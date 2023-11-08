const elementos = {
    telaInicial: document.getElementById('inicial'),
    telaCadastro: document.getElementById('cadastro'),
    telaJogo: document.getElementById('jogo'),
    teleMensagem: document.querySelector('jogo'),
    telaMensagem: document.querySelector('mensagem .texto'),
    teclado: document.querySelector('.teclado'),
    palavra: document.querySelector('.palavra'),
    dica: document.querySelector('.dica'),
    botoes: {
        facil: document.querySelector('.botao-facil'),
        medio: document.querySelector('.botao-medio'),
        dificil: document.querySelector('.botao-dificil'),
        cadastrar: document.querySelector('.botao-cadastrar'),
        realizarCadastro: document.querySelector('.botao-realizar-cadastro'),
        voltar: document.querySelector('.botao-voltar'),
        reiniciar:  document.querySelector('.reiniciar'),
    },
    campos: {
        dificuldade: {
            facil: document.getElementById('facil'),
            medio: document.getElementById('medio'),
            dificil: document.getElementById('difcil'),
        },
        palavra: document.getElementById('palavra'),
        dica: document.getElementById('dica')
    },
    boneco: [
        document.querySelector('.boneco-cabeça'),
        document.querySelector('.boneco-corpo'),
        document.querySelector('.boneco-braco-esquerdo'),
        document.querySelector('.boneco-braco-direito'),
        document.querySelector('.boneco-perna-esquerda'),
        document.querySelector('.boneco-perna-direita'),
    ],
     
};