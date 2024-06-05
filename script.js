function showModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Adicionar o vídeo do YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        videoId: 'p-EThRKoW5E', // Substitua este ID pelo ID do vídeo desejado
        events: {
            'onReady': onPlayerReady
        }
    });
}

function playVideo() {
    var player = document.getElementById('player');
    var container = document.querySelector('.container');
    var btnplay = document.querySelector('.btn-play');
    container.style.display = "block" 
    btnplay.style.display = "none" 
    player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}


function onPlayerReady(event) {
    event.target.playVideo();
}
