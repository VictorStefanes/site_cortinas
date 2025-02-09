const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  document.querySelector('.slide').appendChild(items[0]);
});

$prev.addEventListener('click', () => {
  const items = document.querySelectorAll('.item');
  document.querySelector('.slide').prepend(items[items.length - 1]);
});

document.addEventListener("DOMContentLoaded", () => {
  const imageRow = document.querySelector(".image-row");
  imageRow.classList.add("animate");

  // Adicionar evento de clique para o link "Contato"
  const contatoLink = document.querySelector('.nav-menu a[href="#contato"]');
  if (contatoLink) {
    contatoLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#contato').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Adicionar evento de clique para o link "Cortina"
  const cortinaLink = document.querySelector('.nav-menu a[href="#cortina"]');
  if (cortinaLink) {
    cortinaLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#cortina').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Adicionar evento de clique para o link "Persiana"
  const persianaLink = document.querySelector('.nav-menu a[href="#persiana"]');
  if (persianaLink) {
    persianaLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#persiana').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Adicionar evento de clique para o link "Medidas"
  const medidasLink = document.querySelector('.nav-menu a[href="#medidas"]');
  if (medidasLink) {
    medidasLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#medidas').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Adicionar evento de clique para abrir a imagem em um modal
  const images = document.querySelectorAll('.image-container img');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalContent = document.createElement('img');
  modalContent.classList.add('modal-content');
  const closeModal = document.createElement('span');
  closeModal.classList.add('close');
  closeModal.innerHTML = '&times;';
  modal.appendChild(closeModal);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  images.forEach(image => {
    image.addEventListener('click', () => {
      modal.style.display = 'block';
      modalContent.src = image.src;
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  function trackButtonClick(event) {
    // Substitua 'trackEvent' pela função de rastreamento do seu pixel
    fbq('track', 'ButtonClick', {
      buttonId: event.target.id,
      buttonText: event.target.innerText,
      token: 'EAAIymfUhgqABOzC4khOHSTQdvyZBRIbuNSIL5tKW04DPLCe0MYkN3ZAVFQjXZAQnpOhcBlDuN3wThPTZBJdWoLje5IVaJJmqLvGjTBoxk21G1CzJwoJbBdIYOZAGo3HEs73uqneEh7XPSJGPG71fEuA71pZCc78IZCWRES3ti8ZCrSHPAZBV2HZCpmNzPvZBZBTnuEvaIAZDZD'
    });
  }

  document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('click', trackButtonClick);
  });

  // Enviar informações de medidas para o WhatsApp
  const medidasForm = document.getElementById('medidas-form');
  medidasForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const produto = document.getElementById('produto').value;
    const altura = document.getElementById('altura').value;
    const largura = document.getElementById('largura').value;
    const mensagem = `Olá, gostaria de solicitar um orçamento para:\n\nProduto: ${produto}\nAltura: ${altura} m\nLargura: ${largura} m`;
    const whatsappUrl = `https://wa.me/5582988858584?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  });

  // Gerenciar a mensagem de cookies
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');

  acceptCookiesButton.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
  });

  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
  } else {
    cookieBanner.style.display = 'flex'; // Certifique-se de que a mensagem de cookies está sendo exibida
  }
});


