const splide = new Splide('#splide', {
    drag: false,
    arrows: false,
    pagination: false,
  }),
  btnProximoAbaServico = document.querySelector('#btn-proximo-aba-servico'),
  abas = {
    DadosIniciais: 0,
    DadosDataHora: 1,
    DadosUsuario: 2,
  };

btnProximoAbaServico.addEventListener('click', () => {
  splide.go(abas.DadosDataHora);
});

splide.mount();
