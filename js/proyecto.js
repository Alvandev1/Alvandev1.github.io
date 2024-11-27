window.onload = function() {
    var videoPlayer = document.getElementById('video-background');
    var videos = ['../videos/descargar.mp4', '../videos/bo6.mp4', '../videos/tekken8.mp4', '../videos/minecraft.mp4' , '../videos/rainbowtrailer.mp4', '../videos/fc25.mp4' , '../videos/gta.mp4', '../videos/naruto.mp4' , '../videos/residente.mp4'];
    var currentVideo = 0;

    setInterval(function() {
        currentVideo = (currentVideo + 1) % videos.length;
        videoPlayer.src = videos[currentVideo];
        videoPlayer.play();
    }, 3100); // Cambia de video cada 3 segundos
}
