// Variáveis
const pixelboard = document.getElementById('pixel-board');
const coresDaPaleta = document.getElementsByClassName('color');
const btnRandonColor = document.getElementById('button-random-color');
// Funções
function constroiTituloH1() {
  const geraH1 = document.createElement('h1');
  const pegaHeader = document.querySelector('header');
  pegaHeader.appendChild(geraH1);
  geraH1.id = 'title';
  const pegaH1 = document.getElementById('title');
  pegaH1.innerHTML = 'Paleta de Cores';
}
// Paleta de Cores
coresDaPaleta[0].style.backgroundColor = 'black';
coresDaPaleta[1].style.backgroundColor = 'yellow';
coresDaPaleta[2].style.backgroundColor = 'red';
coresDaPaleta[3].style.backgroundColor = 'green';
// Gera cores aleatórias na paleta
const geraCoresAleatorias = btnRandonColor.addEventListener('click', () => {
  for (let index = 1; index < coresDaPaleta.length; index += 1) {
    const r = Math.floor(Math.random() * 255).toString(10);
    const g = Math.floor(Math.random() * 255).toString(10);
    const b = Math.floor(Math.random() * 255).toString(10);
    const coresRGB = `rgb(${r},${g},${b})`;
    coresDaPaleta[index].style.backgroundColor = coresRGB;
  }
});
// Gera quadrado de pixels
const squarePixel = (value) => {
  for (let i = 1; i <= value; i += 1) {
    const pixels = document.createElement('pixel');
    pixels.className = 'pixel';
    pixelboard.appendChild(pixels);
  }
};
squarePixel(25);
// Executa funções
window.onload = () => {
  constroiTituloH1();
  geraCoresAleatorias();
};
