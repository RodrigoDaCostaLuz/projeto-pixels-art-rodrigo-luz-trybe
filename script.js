// Variáveis
const pixelboard = document.getElementById('pixel-board');
// const coresAleatorias = document.getElementById('color-palette');
const coresDaPaleta = document.getElementsByClassName('color');
const btnRandonColor = document.getElementById('button-random-color');
// Paleta de Cores pré-definida
coresDaPaleta[0].style.backgroundColor = 'black';
coresDaPaleta[1].style.backgroundColor = 'yellow';
coresDaPaleta[2].style.backgroundColor = 'red';
coresDaPaleta[3].style.backgroundColor = 'green';

// Função gera cores aletórias
const geraCoresAleatorias = () => {
  btnRandonColor.addEventListener('click', () => {
    for (let index = 1; index < coresDaPaleta.length; index += 1) {
      const r = Math.floor(Math.random() * 255).toString(10);
      const g = Math.floor(Math.random() * 255).toString(10);
      const b = Math.floor(Math.random() * 255).toString(10);
      const coresRGB = `rgb(${r},${g},${b})`;
      coresDaPaleta[index].style.backgroundColor = coresRGB;

      localStorage.setItem('colorPalette', coresRGB);
    }
  });
};

// Função constrói quadro de pixels
const constroiQuadroPixel = (value) => {
  for (let index = 1; index <= value; index += 1) {
    const pixels = document.createElement('pixel');
    pixels.className = 'pixel';
    pixelboard.appendChild(pixels);
  }
};
// nomear
const removeselected = () => {
  for (let indice = 0; indice < coresDaPaleta.length; indice += 1) {
    coresDaPaleta[indice].addEventListener('click', (cor) => {
      coresDaPaleta[0].classList.remove('selected');
      coresDaPaleta[1].classList.remove('selected');
      coresDaPaleta[2].classList.remove('selected');
      coresDaPaleta[3].classList.remove('selected');
      cor.target.classList.add('selected');
    });
  }
};
// Funções: seleciona cor aleatoria na paleta e pinta pixels
const corSelected = () => {
  for (let index = 0; index < coresDaPaleta.length; index += 1) {
    coresDaPaleta[index].addEventListener('click', () => {
      for (let ind = 0; ind < coresDaPaleta.length; ind += 1) {
        coresDaPaleta[ind].classList.remove('selected');
      }
      coresDaPaleta[index].classList.add = 'selected';
      coresDaPaleta[index].classList.toggle('selected');
    });
  }
};
function pixelToColor() {
  const tdPixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < tdPixel.length; index += 1) {
    tdPixel[index].addEventListener('click', (evento) => {
      const selectedColor = document.querySelector('.selected');
      const color = selectedColor.getAttribute('style');
      // console.log(color);
      evento.target.setAttribute('style', color);
    });
  }
}
// Função que limpa o quadro de pixels
function clearboard() {
  const btnClearBoard = document.getElementById('clear-board');
  btnClearBoard.addEventListener('click', () => {
    const tdPixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < tdPixel.length; index += 1) {
      tdPixel[index].style.backgroundColor = 'white';
    }
  });
}
// Executa funções
window.onload = () => {
  geraCoresAleatorias();
  constroiQuadroPixel(25);
  removeselected();
  corSelected();
  pixelToColor();
  clearboard();
};
