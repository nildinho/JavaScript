function sortearCarta() {
  let ninjas = [
    { nome: 'Temari', elemento: 'Vento', poderes: 'Poderes mais Utilizados: Técnica do Tornado,Técnica do Furacão,Técnica da Tempestade de Areia', foto: './img/temari.jpg' },
    { nome: 'Naruto', elemento: 'Vento', poderes: 'Poderes mais Utilizados: Rasengan, Clones das Sombras, Modo Sábio, Técnica do Deus Voador do Trovão, Modo com o Chakra da Nove-Caudas', foto: './img/naruto.png' },
    { nome: 'Sasuke', elemento: 'Fogo', poderes: 'Poderes mais Utilizados: Chidori, Amaterasu, Bola de Fogo, Susanoo', foto: './img/sasuke.png' },
    { nome: 'Jiraiya', elemento: 'Fogo', poderes: 'Poderes mais Utilizados: Modo Sábio dos Sapos, Técnica dos Mil Anos de Dor, Invocação de Sapos', foto: './img/jiraiya.jpg' },
    { nome: 'Tobirama', elemento: 'Água', poderes: 'Poderes mais Utilizados: Técnica do Deus Voador do Trovão, Edo Tensei, Liberação de Água', foto: './img/tobirama.png' },
    { nome: 'Kisame', elemento: 'Água', poderes: 'Poderes mais Utilizados: Hiramekarei, Peelings de Pele de Tubarão, Kenjutsu (Técnicas de Espada)', foto: './img/Kisame.jpg' },
    { nome: 'Onooki', elemento: 'Terra', poderes: 'Poderes mais Utilizados: Jutsu da Terra, Técnica de Detalhamento do Mundo Primitivo da Liberação de Poeira', foto: './img/onooki.png' },
    { nome: 'Kurotsuchi', elemento: 'Terra', poderes: 'Poderes mais Utilizados: Técnicas de Selamento, Técnicas de Imitação, Técnicas de Liberação de Pó', foto: './img/kurotsuchi.png' },
    { nome: 'Kakashi', elemento: 'Raio', poderes: 'Poderes mais Utilizados: Raikiri, Kamui, Chidori', foto: './img/kakashi.png' },
    { nome: 'Darui', elemento: 'Raio', poderes: 'Poderes mais Utilizados: Técnica da Armadilha de Espelhos de Relâmpago, Técnica da Espada de Raijin', foto: './img/darui.jpg' },
    { nome: 'Hashirama', elemento: 'Madeira', poderes: 'Poderes mais Utilizados: Técnica Dragão de Madeira, Parede de Madeira, Mil Mãos Verdadeiras do Mundo', foto: './img/Hashirama.jpg' }
  ];

  let ninjaSorteado = ninjas[Math.floor(Math.random() * 11)];

  document.getElementById('centro').innerHTML = `<img src="./img/${ninjaSorteado.nome}.jpg">`;
  document.getElementById('poderes').innerHTML = ninjaSorteado.poderes;
  document.getElementById('nome').innerHTML = ninjaSorteado.nome;
  // Atualizar a imagem do elemento sorteado
  if (ninjaSorteadoelemento === 'Fogo') {
    document.getElementById('supDir').innerHTML = `<img src="./img/fogo.png">`;
  } else if (ninjaSorteado.elemento === 'Água') {
    document.getElementById('supDir').innerHTML = `<img src="./img/agua.png">`;
  } else if (ninjaSorteado.elemento === 'Terra') {
    document.getElementById('supDir').innerHTML = `<img src="./img/terra.png">`;
  } else if (ninjaSorteado.elemento === 'Raio') {
    document.getElementById('supDir').innerHTML = `<img src="./img/relampago.png">`;
  } else if (ninjaSorteado.elemento === 'Vento') {
    document.getElementById('supDir').innerHTML = `<img src="./img/vento.png">`;
  } else if (ninjaSorteado.elemento === 'Madeira') {
    document.getElementById('supDir').innerHTML = `<img src="./img/madeira.jpg">`;
  }
}