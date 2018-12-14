let md = document.querySelector('#md')
let resultado = document.querySelector('#resultado');
let imagem = document.querySelector('#imagem');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  calcular(md);
});

function calcular() {

  resultado.className = 'mt-4 alert';
  imagem.className = '';

  if (md.value < 60) {

    let ef = Math.round((500 - (md.value * 6)) / 4);

    if (ef <= 50){
      resultado.classList.add('alert-warning');
      imagem.src = 'assets/images/professor-me-ajuda-com-esses-pontos-que-faltaram.jpg';
    } else if (ef > 50){
      resultado.classList.add('alert-danger');
      imagem.src = 'assets/images/sera-que-da.jpg';
    }

    if (ef <= 100){
      resultado.innerHTML = `Com ${md.value} de média na disciplina você precisa de <strong>${ef}</strong> pontos no exame final.`;
    } else {
      resultado.innerHTML = 'Nem com 100 pontos no exame final você será aprovado!';
      imagem.src = 'assets/images/ano-que-vem-tem-de-novo.jpg';
    }
    
  } else {
    resultado.classList.add('alert-success');
    resultado.innerHTML = `Com <strong>${md.value}</strong> pontos você está aprovado!`;
    imagem.src = 'assets/images/boa-garotoa.jpg';
  }
  md.value = '';
  md.focus();
}

let modal = document.querySelector('#modal');
document.querySelector('#ajuda').addEventListener('click', (event) => {
  $('#modal').modal('toggle');
});
