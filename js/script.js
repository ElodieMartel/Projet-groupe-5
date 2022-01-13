// Fonction du back to top pour scroller en haut
function topFunction() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE et Opera
  }

  function toggleMenu() {
    const liensMenu = document.getElementById("liensMenu");
    if (liensMenu.style.display === "block") {
      liensMenu.style.display = "none";
    } else {
      liensMenu.style.display = "block";
    }
  }