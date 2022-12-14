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
// Executa funções
window.onload = () => {
  constroiTituloH1();
};
