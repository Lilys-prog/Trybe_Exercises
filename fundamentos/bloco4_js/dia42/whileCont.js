// EXEMPLO DE WHILE


function dice () { 
  return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
  d2 = dice();
}
// esta função rola dois dados e vai continuar rodando até que os 2 sejam diferentes. Ou seja, não se sabe o número de vezes em que ela vai precisar se repetir. Daí não se pode usar o 'for', pois ele necessita saber o número de repetições, não importa quantas sejam.
