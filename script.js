// Variáveis
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
function btnrandonColor() {
  const btnRandonColor = document.createElement('button');
  document.body.appendChild(btnRandonColor);
  btnRandonColor.id = 'button-random-color';
  btnRandonColor.innerHTML = 'Cores aleatórias';

  const saveStagePaletta = [];
  btnRandonColor.addEventListener('click', () => {
    for (let index = 1; index < coresDaPaleta.length; index += 1) {
      const r = Math.floor(Math.random() * 255).toString(10);
      const g = Math.floor(Math.random() * 255).toString(10);
      const b = Math.floor(Math.random() * 255).toString(10);
      const coresRGB = `rgb(${r},${g},${b})`;
      coresDaPaleta[index].style.backgroundColor = coresRGB;
      saveStagePaletta.push(coresRGB);
    }
    localStorage.setItem('colorPalette', JSON.stringify(saveStagePaletta));
  });
}
// Executa funções
window.onload = () => {
  constroiTituloH1();
  btnrandonColor();
};
