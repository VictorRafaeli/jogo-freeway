let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
    imagemDaEstrada = loadImage("./resources/img/estrada.png");
    imagemDoAtor = loadImage("./resources/img/ator-1.png");
    imagemCarro = loadImage("./resources/img/carro-1.png");
    imagemCarro2 = loadImage("./resources/img/carro-2.png");
    imagemCarro3 = loadImage("./resources/img/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

    somDaTrilha = loadSound("./resources/sound/trilha.mp3");
    somDaColisao = loadSound("./resources/sound/colidiu.mp3");
    somDoPonto = loadSound("./resources/sound/pontos.wav");
}
