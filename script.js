// Cores da Paleta
const coresDaPaleta = document.getElementsByClassName('color');
coresDaPaleta[0].style.backgroundColor = 'black';
coresDaPaleta[1].style.backgroundColor = 'yellow';
coresDaPaleta[2].style.backgroundColor = 'red';
coresDaPaleta[3].style.backgroundColor = 'green';

// Botão gera paleta com cores aleatórias + salvar em localStorage
const btnRandom = document.getElementById('button-random-color');
const saveStatePalette = [];
btnRandom.addEventListener('click', () => {
  for (let index = 1; index < coresDaPaleta.length; index += 1) {
    const r = Math.floor(Math.random() * 255).toString(10);
    const g = Math.floor(Math.random() * 255).toString(10);
    const b = Math.floor(Math.random() * 255).toString(10);
    const coresRGB = `rgb(${r},${g},${b})`;
    coresDaPaleta[index].style.backgroundColor = coresRGB;
    saveStatePalette.push(coresRGB);
  }
  localStorage.setItem('colorPalette', JSON.stringify(saveStatePalette));
});

// Função que cria quadrado de pixels
const pixelBoard = document.getElementById('pixel-board');
const squarePixel = (value) => {
  for (let i = 1; i <= value; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
};
squarePixel(50);

// Adicionar a classe "selected" à cor selecionada
for (let i = 0; i < coresDaPaleta.length; i += 1) {
  coresDaPaleta[i].addEventListener('click', () => {
    for (let j = 0; j < coresDaPaleta.length; j += 1) {
      coresDaPaleta[j].classList.remove('selected');
    }
    coresDaPaleta[i].classList.add('selected');
  });
}

// Pintar pixel do quadro com a cor selecionada
function paintPixel() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      const color = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
      event.target.style.backgroundColor = color;
    });
  }
}
paintPixel();

// Botão para limpar o quadro
const btnClearBoard = document.getElementById('clear-board');
btnClearBoard.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

function toggleAudio() {
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
