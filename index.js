var backgroundState = 1; // Variable para mantener el estado del fondo

function changeBackground() {
  var element1 = document.getElementById("background1");
  var element2 = document.getElementById("background2");
  var element3 = document.getElementById("background3");

  if (backgroundState === 1) {
    element1.style.backgroundImage = "url('./img/background.png')";
    element2.style.backgroundImage = "url('./img/bg-grid.png')";
    element3.style.backgroundColor = "rgb(179, 216, 204)";
    backgroundState = 2;
  } else {
    element1.style.backgroundImage = "url('./img/background2.png')";
    element2.style.backgroundImage = "url('./img/bg-grid2.png')";
    element3.style.backgroundColor = "pink";
    backgroundState = 1;
  }
}
