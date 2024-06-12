var play = false;
var musicFile = document.getElementById("myAudio");

    function music() {
        if (play) {
            musicFile.pause();
            document.getElementById("musicButton").innerHTML = "Play audio";
        } else {
            musicFile.play();
            document.getElementById("musicButton").innerHTML = "Pause audio";

        }
        play = !play;
    }
