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

function validarEmail(email) {
  const re = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/;
  return re.test(email);
}

function validarTelefone(telefone) {
  const re = /^[0-9\\s\\-\\(\\)]+$/;
  return re.test(telefone);
}

formContato.addEventListener('submit', (e) => {
  e.preventDefault();
  const empresa = document.getElementById('empresa').value.trim();
  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const descricao = document.getElementById('descricao').value.trim();

  if (!empresa || !nome || !telefone || !email || !descricao) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (!validarEmail(email)) {
    alert('Por favor, insira um email válido.');
    return;
  }

  if (!validarTelefone(telefone)) {
    alert('Por favor, insira um telefone válido.');
    return;
  }

  const mensagem = `*Pré-Cadastro - Site Alear Refrigerações*%0A%0A` +
    `*Empresa:* ${empresa}%0A` +
    `*Nome:* ${nome}%0A` +
    `*Telefone:* ${telefone}%0A` +
    `*Email:* ${email}%0A` +
    `*Serviço/Problema:* ${descricao}`;

  const telefoneDestino = '5521964657727';
  const url = `https://wa.me/${telefoneDestino}?text=${mensagem}`;
  window.open(url, '_blank');

  alert('Formulário enviado com sucesso! Você será redirecionado para o WhatsApp.');
  formContato.reset();
  formBox.classList.remove('aberto');
});

// Script para modal de imagens ampliadas na seção serviços
const imagens = document.querySelectorAll('.servicos .imagem-secao');
const modal = document.getElementById('modal-imagem');
const modalImg = document.getElementById('imagem-modal');
const fecharModal = document.getElementById('fechar-modal');

if (imagens && modal && modalImg && fecharModal) {
  imagens.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalImg.focus();
    });
  });

  fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
    modalImg.alt = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
      modalImg.alt = '';
    }
  });

  // Fechar modal com tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      modalImg.src = '';
      modalImg.alt = '';
    }
  });
}
