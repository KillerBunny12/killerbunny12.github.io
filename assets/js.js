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
  

    botones.style.opacity = '0';
    botones.style.visibility = 'hidden';
  
    const frases = [
      "Hola mi cielo",
      "Sé que ya somos novios",
      "pero igual quería preguntártelo..."
    ];
  
    const frasesNo = [
      "Segura?",
      "En serio?",
      "Positiva?",
      "Solo piensalo",
      "Si dices que no estare triste :c",
      "Pipipi",
      "Le dire a Sombra",
      "Y a Coco"

    ];
  
    let escalaSi = 1;
    let indexNo = 0;
  
    heart.addEventListener('click', () => {
        // AUDIO — todo directo en el click
        music.muted = false;
        music.volume = 0.15; // volumen inicial bajo
        music.play().catch(e => console.log(e));
      
        card.classList.add('fade-out');
      
        card.addEventListener('transitionend', () => {
          card.style.display = 'none';
          pregunta.classList.add('show');
          iniciarFrases();
        }, { once: true });
      });
  
    function iniciarFrases() {
      let fraseIndex = 0;
      let letraIndex = 0;
      texto.textContent = "";
  
      function escribirFrase() {
        if (letraIndex < frases[fraseIndex].length) {
          texto.textContent += frases[fraseIndex][letraIndex++];
          setTimeout(escribirFrase, 60);
        } else {
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
  
   
    btnNo.addEventListener('click', () => {
      escalaSi += 0.35;
      btnSi.style.transform = `scale(${escalaSi})`;
  
      btnNo.textContent = frasesNo[indexNo];
      indexNo = (indexNo + 1) % frasesNo.length;
  
      if (escalaSi >= 4) {
        btnSi.style.position = 'fixed';
        btnSi.style.top = '50%';
        btnSi.style.left = '50%';
        btnSi.style.transform = 'translate(-50%, -50%) scale(8)';
        btnSi.style.zIndex = '9999';
      }
    });
  
   
    btnSi.addEventListener('click', () => {
      pregunta.style.opacity = '0';
  
      setTimeout(() => {
        pregunta.style.display = 'none';
        finalDiv.classList.add('show');
      }, 800);
    });
  });
  