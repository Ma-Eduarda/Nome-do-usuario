function mensagem(event) {

  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let = boasVindas = document.getElementById("boasVindas");

  document.title = `Seja Bem-vindo(a), ${nome}!`;


  boasVindas.innerHTML = `<div class="alert alert-primary align-items-center" role="alert">
  <h4 class="alert-heading">Seja Bem-vindo(a), ${nome}!</h4>
    <hr>
    <p class="mb-0">Obrigado por nos visitar!</p>
    </div>`;
}

