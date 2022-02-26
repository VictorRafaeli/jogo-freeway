let xAtor = 100;
let yAtor = 368;
let colisao = false;

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
            colidiu();
        }
    }
}

function colidiu() {
    yAtor = 368;
}
