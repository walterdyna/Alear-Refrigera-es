// script.js

// Botão principal abre o formulário
const btnWhats = document.getElementById('whatsapp-button');
const btnAtendimento = document.getElementById('btn-atendimento');
const formBox = document.getElementById('formulario-flutuante');
const closeBtn = document.getElementById('fechar-form');
const formContato = document.getElementById('form-contato');

btnWhats.addEventListener('click', () => {
  formBox.classList.add('aberto');
});

btnAtendimento.addEventListener('click', () => {
  formBox.classList.add('aberto');
});

closeBtn.addEventListener('click', () => {
  formBox.classList.remove('aberto');
});

formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  const empresa = document.getElementById('empresa').value;
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;
  const descricao = document.getElementById('descricao').value;

  const mensagem = `*Pré-Cadastro - Site ClimaTech*%0A%0A` +
    `*Empresa:* ${empresa}%0A` +
    `*Nome:* ${nome}%0A` +
    `*Telefone:* ${telefone}%0A` +
    `*Email:* ${email}%0A` +
    `*Serviço/Problema:* ${descricao}`;

  const telefoneDestino = '5521964657727';
  const url = `https://wa.me/${telefoneDestino}?text=${mensagem}`;
  window.open(url, '_blank');
});
