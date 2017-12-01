
window.addEventListener("keypress", function(event){
  var x = event.charCode;
  soundDecider(x);
});

function soundDecider(number) {
  var audioID = "";
  var keyID = "";

  switch (number) {
    case 97:
        audioID = "eins";
        keyID = "A";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 115:
        audioID = "zwei";
        keyID = "S";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 100:
        audioID = "drei";
        keyID = "D";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 102:
        audioID = "vier";
        keyID = "F";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 32:
        audioID = "fuenf";
        keyID = "Space";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 104:
        audioID = "sechs";
        keyID = "H";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 106:
        audioID = "sieben";
        keyID = "J";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 107:
        audioID = "acht";
        keyID = "K";
        playingSound(audioID);
        animateButton(keyID);
        break;
    case 108:
        audioID = "neun";
        keyID = "L";
        playingSound(audioID);
        animateButton(keyID);
        break;
      }
}

function playingSound(keytrigger) {
    var treck = document.getElementById(keytrigger);
    treck.currentTime = 0;
    treck.play();
}

function animateButton(Letter) {
    var onscreenKEY = document.getElementById(Letter);
    onscreenKEY.classList.add('playing');
    setTimeout(function(){ onscreenKEY.classList.remove('playing'); }, 70);
}
