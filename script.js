// Variáveis
const pixelboard = document.getElementById('pixel-board');
const coresDaPaleta = document.getElementsByClassName('color');
coresDaPaleta[0].style.backgroundColor = 'black';
coresDaPaleta[1].style.backgroundColor = 'yellow';
coresDaPaleta[2].style.backgroundColor = 'red';
coresDaPaleta[3].style.backgroundColor = 'green';
// Funções
function constroiTituloH1() {
  const geraH1 = document.createElement('h1');
  const pegaHeader = document.querySelector('header');
  pegaHeader.appendChild(geraH1);
  geraH1.id = 'title';
  const pegaH1 = document.getElementById('title');
  pegaH1.innerHTML = 'Paleta de Cores';
}

// const savePaletta = () => {
//   saveStagePaletta = [];
//   for (let index = 0; index < coresDaPaleta.length; index += 1) {
//     saveStagePaletta.push(coresDaPaleta[index].style.backgroundColor);
//   }
//   localStorage.setItem('colorPalette', JSON.stringify(saveStagePaletta));
// };
function btnrandonColor() {
  const btnRandonColor = document.createElement('button');
  document.body.appendChild(btnRandonColor);
  btnRandonColor.id = 'button-random-color';
  btnRandonColor.innerHTML = 'Cores aleatórias';

  btnRandonColor.addEventListener('click', () => {
    for (let index = 1; index < coresDaPaleta.length; index += 1) {
      const r = Math.floor(Math.random() * 255).toString(10);
      const g = Math.floor(Math.random() * 255).toString(10);
      const b = Math.floor(Math.random() * 255).toString(10);
      const coresRGB = `rgb(${r},${g},${b})`;
      coresDaPaleta[index].style.backgroundColor = coresRGB;
    }
  });
}
const squarePixel = (value) => {
  for (let i = 1; i <= value; i += 1) {
    const pixels = document.createElement('pixel');
    pixels.className = 'pixel';
    pixelboard.appendChild(pixels);
  }
  localStorage.setItem('squarePx', JSON.stringify(squarePixel));
};
squarePixel(25);
// requisito 8, 9 e 10
for (let i = 0; i < coresDaPaleta.length; i += 1) {
  coresDaPaleta[i].addEventListener('click', (cor) => {
    coresDaPaleta[0].classList.remove('selected');
    coresDaPaleta[1].classList.remove('selected');
    coresDaPaleta[2].classList.remove('selected');
    coresDaPaleta[3].classList.remove('selected');
    cor.target.classList.add('selected');
  });
}

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
  localStorage.setItem('corSelcted', JSON.stringify(corSelected));
};
corSelected();

function pixelToColor() {
  const tdPixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < tdPixel.length; index += 1) {
    tdPixel[index].addEventListener('click', (evento) => {
      const selectedColor = document.querySelector('.selected');
      const color = selectedColor.getAttribute('style');
      console.log(color);
      evento.target.setAttribute('style', color);
    });
  }
  localStorage.setItem('pixelToColor', JSON.stringify(pixelToColor));
}
pixelToColor();
// Executa funções
window.onload = () => {
  constroiTituloH1();
  btnrandonColor();
};
