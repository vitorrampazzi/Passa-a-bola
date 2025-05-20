function scrollToBottom() {
    document.getElementById('cadastro').scrollIntoView({ behavior: 'smooth' });
  }

  function handleCadastro(event) {
    event.preventDefault();
    const msg = document.getElementById('mensagemCadastro');
    msg.classList.remove('d-none');
    setTimeout(() => msg.classList.add('d-none'), 3000);
    event.target.reset();
  }
