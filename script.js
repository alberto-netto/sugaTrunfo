var carta1 = {
  nome: "Berubola",
  imagem:"https://i.imgur.com/AHEBWJm.png",
  atributos: {
    Ousadia:8,
    Desenrolo:3,
    Lindeza:5,
    Nerdice:10,
  }
} 
var carta2 = {
  nome: "Rod",
  imagem:"https://i.imgur.com/cT19dwq.png",
  atributos: {
    Ousadia:9,
    Desenrolo:10,
    Lindeza:7,
    Nerdice:1,
  }
}

var carta3 = {
  nome: "Mario",
  imagem:"https://i.imgur.com/URke8du.png",
  atributos: {
    Ousadia:5,
    Desenrolo:6,
    Lindeza:6,
    Nerdice:10,
  }
}
var carta4 = {
  nome: "Caverde",
  imagem:"https://i.imgur.com/XXXO1Nt.png",
  atributos: {
    Ousadia:7,
    Desenrolo:8,
    Lindeza:8,
    Nerdice:6,
  }
}
var carta5 = {
  nome: "Nathzinha",
   imagem:"https://i.imgur.com/gO79lRV.png",
  atributos: {
    Ousadia:5,
    Desenrolo:7,
    Lindeza:9,
    Nerdice:6,
  }
}
var carta6 = {
  nome: "Sérgio Japa",
   imagem:"https://i.imgur.com/xqsDmM1.png",
  atributos: {
    Ousadia:10,
    Desenrolo:3,
    Lindeza:6,
    Nerdice:3,
  }
}
var carta7 = {
  nome: "Titio",
   imagem:"https://i.imgur.com/AhyOErY.png",
  atributos: {
    Ousadia:10,
    Desenrolo:7,
    Lindeza:6,
    Nerdice:8,
  }
}
var carta8 = {
  nome: "Mamadinha",
   imagem:"https://i.imgur.com/GdGpcQB.png",
  atributos: {
    Ousadia:4,
    Desenrolo:10,
    Lindeza:6,
    Nerdice:5,
  }
}
var carta9 = {
  nome: "Guilermin",
   imagem:"https://i.imgur.com/cT19dwq.png",
  atributos: {
    Ousadia:6,
    Desenrolo:7,
    Lindeza:10,
    Nerdice:5,
  }
}
;

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9];
var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }

  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  //Habilitando/desabilitando botões Sortear e Jogar
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  //Após o sorteio, exibe as opções de atributos. Puxa da outra função.
  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for (var i = 0; i < radioAtributos.length; i++){
    if (radioAtributos[i].checked ==  true){
    return radioAtributos[i].value   
    }
  }
   
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado()
  var elementoResultado = document.getElementById("resultado")
  console.log(atributoSelecionado)
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
  
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = "<p class='resultado-final'>Você amassou/p>"
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'>Você amassou/p>Você tomou um pau seu otário/p>"
  } else {
    htmlResultado = "<p class='resultado-final'>Você amassou/p>Bateu Cabeça/p>"
  }
  htmlResultado.innerHTML = htmlResultado;
  document.getElementById('btnJogar').disabled = true
  document.getElementById("btnSortear").disabled = false;
 console.log(htmlResultado)
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você amassou! =D</p>";
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado = "<p class='resultado-final'>Você tomou um pau, seu animal! =(</p>";
  } else {
    htmlResultado = "<p class='resultado-final'>Xiiii, empatou!</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  document.getElementById("btnSortear").disabled = false;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    //botao para seleção de atributos
    opcoesTexto +=
      "<input type='radio' name= 'atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    //botao para seleção de atributos
    opcoesTexto +=
      "<p type='text' name=  'atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}