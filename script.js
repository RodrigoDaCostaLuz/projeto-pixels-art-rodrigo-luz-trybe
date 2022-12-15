// Variáveis
const pixelboard = document.getElementById('pixel-board');
// const coresAleatorias = document.getElementById('color-palette');
const coresDaPaleta = document.getElementsByClassName('color');
const btnRandonColor = document.getElementById('button-random-color');
// Paleta de Cores
coresDaPaleta[0].style.backgroundColor = 'black';
coresDaPaleta[1].style.backgroundColor = 'yellow';
coresDaPaleta[2].style.backgroundColor = 'red';
coresDaPaleta[3].style.backgroundColor = 'green';
// Função gera cores aletórias
const geraCoresAleatorias = btnRandonColor.addEventListener('click', () => {
  for (let index = 1; index < coresDaPaleta.length; index += 1) {
    const r = Math.floor(Math.random() * 255).toString(10);
    const g = Math.floor(Math.random() * 255).toString(10);
    const b = Math.floor(Math.random() * 255).toString(10);
    const coresRGB = `rgb(${r},${g},${b})`;
    coresDaPaleta[index].style.backgroundColor = coresRGB;
  }
});
// Constrói quadro de pixels
const constroiQuadroPixel = (value) => {
  for (let index = 1; index <= value; index += 1) {
    const pixels = document.createElement('pixel');
    pixels.className = 'pixel';
    pixelboard.appendChild(pixels);
  }
};
constroiQuadroPixel(25);

window.onload = () => {
  geraCoresAleatorias();
  constroiQuadroPixel();
};
