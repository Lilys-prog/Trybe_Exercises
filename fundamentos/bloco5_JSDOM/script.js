/* function gerarCor(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}
 */

// const paragraph = document.getElementById("paragraph");
      // paragraph.style.color = "red";

      // let movie = document.getElementById('page-title'); /* id ou class chamados assim devem estar entre aspas */
      // movie.innerText = "Dead Poets Society";

      // let sad = document.getElementById('second-paragraph');
      // sad.innerText = 'nem isso, nem flores.'

      // let dream = document.getElementById('subtitle');
      // dream.innerText = 'Era um sonho, mas...'


/* js do exercício sobre seleção por class name */
let legend = document.getElementsByClassName('lenda')[0];
legend.style.color = 'red';
/* como é criado um array, precisa especificar o index. Para passar por todos, pode-se usar o for */

let pilotosF1 = document.getElementsByClassName('piloto-f1-atual');
for (let i = 0; i < pilotosF1.length; i += 1) {
  pilotosF1[i].innerText = 'Excluindo os pilotos usando for';
}

/* exercício sobre seleção por tag name */
let allPilots = document.getElementsByTagName('p');
for (let i = 0; i < allPilots.length; i += 1) {
  allPilots[i].style.border = 'black solid 1px'; 
  allPilots[i].style.padding = '20px';
  allPilots[i].style.width = '150px'; 
}

