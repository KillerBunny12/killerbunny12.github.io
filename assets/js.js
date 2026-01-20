document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const card = document.querySelector('#card');
    const pregunta = document.querySelector('.pregunta');
    const texto = document.querySelector('#textoPregunta');
    const botones = document.querySelector('.botones');
  
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const finalDiv = document.querySelector('.final');
    const music = document.getElementById('bgMusic');
    const humorImg = document.getElementById('humorImg');
  
    botones.style.opacity = '0';
    botones.style.visibility = 'hidden';
  
    const frases = [
      "Hola mi cielo",
      "Sé que ya somos novios",
      "pero igual quería preguntártelo..."
    ];
  
    const frasesNo = [
      "¿Segura?",
      "¿En serio?",
      "¿Positiva?",
      "Solo piénsalo",
      "Si dices que no estaré triste :c",
      "Pipipi",
      "Le diré a Sombra",
      "Y a Coco"
    ];
  
    let escalaSi = 1;
    let indexNo = 0;
  
    /* ---------- CLICK CORAZÓN ---------- */
    heart.addEventListener('click', () => {
      music.volume = 0;
      music.play().catch(() => {});
  
      let vol = 0;
      const fadeIn = setInterval(() => {
        if (vol < 0.15) {
          vol += 0.005;
          music.volume = vol;
        } else {
          clearInterval(fadeIn);
        }
      }, 180);
  
      card.classList.add('fade-out');
  
      card.classList.add('fade-out');

setTimeout(() => {
  card.style.display = 'none';
  pregunta.classList.add('show');
  iniciarFrases();
}, 3000); // mismo tiempo que el CSS
    });
  
    /* ---------- FRASES ---------- */
    function iniciarFrases() {
      let fraseIndex = 0;
      let letraIndex = 0;
      texto.textContent = "";
  
      function escribirFrase() {
        if (letraIndex < frases[fraseIndex].length) {
          texto.textContent += frases[fraseIndex][letraIndex++];
          setTimeout(escribirFrase, 60);
        } else {
  
          // 👉 MOSTRAR IMAGEN SOLO EN ESTA FRASE
          if (frases[fraseIndex] === "Sé que ya somos novios") {
            humorImg.classList.add('show');
  
            setTimeout(() => {
              humorImg.classList.remove('show');
            }, 1500);
          }
  
          setTimeout(() => {
            texto.classList.add('fade-out');
  
            setTimeout(() => {
              texto.classList.remove('fade-out');
              letraIndex = 0;
              fraseIndex++;
  
              if (fraseIndex < frases.length) {
                texto.textContent = "";
                escribirFrase();
              } else {
                escribirFinal();
              }
            }, 800);
          }, 1200);
        }
      }
  
      function escribirFinal() {
        const textoFinal = "¿Quieres ser mi San Valentín? ❤️";
        let i = 0;
        texto.textContent = "";
  
        function escribir() {
          if (i < textoFinal.length) {
            texto.textContent += textoFinal[i++];
            setTimeout(escribir, 70);
          } else {
            botones.style.visibility = 'visible';
            botones.style.opacity = '1';
          }
        }
  
        escribir();
      }
  
      escribirFrase();
    }
  
    /* ---------- BOTÓN NO ---------- */
    btnNo.addEventListener('click', () => {
      escalaSi += 0.45;
      btnSi.style.transform = `scale(${escalaSi})`;
  
      btnNo.textContent = frasesNo[indexNo];
      indexNo = (indexNo + 1) % frasesNo.length;
  
      if (escalaSi >= 5) {
        btnSi.style.position = 'fixed';
        btnSi.style.top = '50%';
        btnSi.style.left = '50%';
        btnSi.style.transform = 'translate(-50%, -50%) scale(8)';
        btnSi.style.zIndex = '9999';
      }
    });
  
    /* ---------- BOTÓN SÍ ---------- */
    btnSi.addEventListener('click', () => {
      pregunta.style.opacity = '0';
  
      setTimeout(() => {
        pregunta.style.display = 'none';
        finalDiv.classList.add('show');
      }, 800);
    });
  });
  