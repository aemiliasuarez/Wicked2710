 const body = document.getElementById('body');
    const btnElphaba = document.getElementById('btn-elphaba');
    const btnGlinda = document.getElementById('btn-glinda');

    function resetState() {
      body.classList.remove('elphaba', 'glinda');
      btnElphaba.classList.remove('active');
      btnGlinda.classList.remove('active');
    }

    btnElphaba.addEventListener('click', () => {
      if (body.classList.contains('elphaba')) {
        // ya estaba elegida -> volver al estado inicial
        resetState();
      } else {
        resetState();
        body.classList.add('elphaba');
        btnElphaba.classList.add('active');
      }
    });

    btnGlinda.addEventListener('click', () => {
      if (body.classList.contains('glinda')) {
        // ya estaba elegida -> volver al estado inicial
        resetState();
      } else {
        resetState();
        body.classList.add('glinda');
        btnGlinda.classList.add('active');
      }
    });

/* ---------- mostrar o no sinopsis y contexto ---------- */

function mostrarSinopsis() {
    document.getElementById("guia-sinopsis").style.display = "block";
    document.getElementById("guia-contexto").style.display = "none";
}

function mostrarContexto() {
    document.getElementById("guia-sinopsis").style.display = "none";
    document.getElementById("guia-contexto").style.display = "block";
}

const galeria = [
    "galeria-galeria1",
    "galeria-galeria2",
    "galeria-galeria3",
    "galeria-galeria4",
    "galeria-galeria5",
    "galeria-galeria6",
    "galeria-galeria7",
    "galeria-galeria8"
];
  /*fuente del mouse: https://webdesign.tutsplus.com/javascript-sparkle-cursor--cms-109158t*/

document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = (e.clientX - 4) + 'px';
    sparkle.style.top = (e.clientY - 4) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  });

mostrarSinopsis();
