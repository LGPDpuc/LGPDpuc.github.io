let titulos = {
    "tituloEquipe": "Vídeos da Equipe",
    "tituloOutros": "Vídeos"
}

let descricaoDosVideos = {
    descricaoVideosEquipe: {
        "video1": "Autenticação de Dois Fatores",
        "video2": "Explicando Criptografia",
        "video3": `Tudo sobre <span style="color:red">LGPD</span>  com o <span style="color:red">ROD</span>`,
        "video4": `Assegurando sua <span style="color:red">SENHA</span>`
    },
    descricaoOutrosVideos: {
        "video1": "Saiba como se proteger",
        "video2": "Risco dos Vazamentos",
        "video3": "O que fazer?",
        "video4": "Como se proteger?"
    }
}

let srcsDoSite = {
    equipe: {
        "video1": "https://www.youtube.com/embed/YWmpwuC9n5k",
        "video2": "https://www.youtube.com/embed/zlrSfUm65C4",
        "video3": "https://www.youtube.com/embed/8gg-8y38-yE",
        "video4": "https://www.youtube.com/embed/sj4rDkMVuVc"
    },
    outros: {
        "video1":"https://www.youtube.com/embed/dpUDdhBC8_c",
        "video2":"https://www.youtube.com/embed/f5vygiM5-00",
        "video3":"https://www.youtube.com/embed/mk-s0tA_F-k",
        "video4":"https://www.youtube.com/embed/LdpPidcjFsU"
    }
}

document.getElementById('tituloEquipe').innerHTML = titulos.tituloEquipe;
document.getElementById('videosEquipe1').src = srcsDoSite.equipe.video1;
document.getElementById('descricaoEquipe1').innerHTML = descricaoDosVideos.descricaoVideosEquipe.video1;
document.getElementById('videosEquipe2').src = srcsDoSite.equipe.video2;
document.getElementById('descricaoEquipe2').innerHTML = descricaoDosVideos.descricaoVideosEquipe.video2;
document.getElementById('videosEquipe3').src = srcsDoSite.equipe.video3;
document.getElementById('descricaoEquipe3').innerHTML = descricaoDosVideos.descricaoVideosEquipe.video3;
document.getElementById('videosEquipe4').src = srcsDoSite.equipe.video4;
document.getElementById('descricaoEquipe4').innerHTML = descricaoDosVideos.descricaoVideosEquipe.video4;


document.getElementById('tituloOutros').innerHTML += titulos.tituloOutros
document.getElementById('videoOutros1').src = srcsDoSite.outros.video1
document.getElementById('descricaoOutros1').innerHTML = descricaoDosVideos.descricaoOutrosVideos.video1;
document.getElementById('videoOutros2').src = srcsDoSite.outros.video2
document.getElementById('descricaoOutros2').innerHTML = descricaoDosVideos.descricaoOutrosVideos.video2;
document.getElementById('videoOutros3').src = srcsDoSite.outros.video3
document.getElementById('descricaoOutros3').innerHTML = descricaoDosVideos.descricaoOutrosVideos.video3;
document.getElementById('videoOutros4').src = srcsDoSite.outros.video4
document.getElementById('descricaoOutros4').innerHTML = descricaoDosVideos.descricaoOutrosVideos.video4;