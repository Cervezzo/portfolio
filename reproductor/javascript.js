window.addEventListener("load", function () {

    let progress = document.getElementById("progreso");
    let timer = document.getElementById("tiempo");
    let buttonSkipMas = document.getElementById("skipMas");
    let buttonSkipMenos = document.getElementById("skipMenos");
    let buttonStop = document.getElementById("stop");
    let buttonPlay = document.getElementById("play");

    function progressLoop() {
        setInterval(function () {
            progress.value = Math.round((video.currentTime / video.duration) * 100);
            timer.innerHTML = Math.round(video.currentTime) + " segundos";
        });
    }

    function playPause() {
        if (video.paused) {
            video.play();
            buttonPlay.innerHTML = "&#10073;&#10073;";
        } else {
            video.pause();
            buttonPlay.innerHTML = "&#x25BA;";
        }
    }

    function skip(value) {
        video.currentTime += value;
    }

    function stop() {
        video.pause();
        video.currentTime = 0;
        buttonPlay.innerHTML = "&#x25BA;";
    }

    //función para maximizar según navegador
    function getFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }


    buttonPlay.addEventListener("click", playPause);
    video.addEventListener("play", progressLoop);
    video.addEventListener("click", playPause);
    buttonStop.addEventListener("click", stop);
    buttonSkipMas.addEventListener("click", progressLoop);
    buttonSkipMas.addEventListener("click", () => skip(5));
    buttonSkipMenos.addEventListener("click", () => skip(-5));

    //evento que captura el click y maximiza
    document.getElementById("maximizar").addEventListener("click", function (e) {
        getFullscreen(document.getElementById("video"));
    }, false);

    //evento que captura el doble click y maximiza
    document.getElementById("video").addEventListener("dblclick", function (e) {
        getFullscreen(document.getElementById("video"));
    }, false);

    
});
