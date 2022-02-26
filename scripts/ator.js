let xAtor = 234;
let yAtor = 368;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, 28, 28);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yAtor += 3;
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25);
        if (colisao) {
            voltaAtorPosicaoInicial();
            if (pontosMaiorQueZero()) {
                meusPontos -= 1;
            }
        }
    }
}

function voltaAtorPosicaoInicial() {
    yAtor = 368;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(color(255, 240, 60));
    text(meusPontos, width / 5, 27);
}

function marcaPonto() {
    if (yAtor < 15) {
        meusPontos += 1;
        voltaAtorPosicaoInicial();
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0;
}
