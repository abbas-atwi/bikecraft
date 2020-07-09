if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal"
    // nav: true, //se deve ou nao mostrar a navegacao
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transicao dos slides a cada 5 segundos
  });
  new SimpleSlide({
    slide: "portifolio",
    time: 5000,
    nav: true,
  });
}
if (window.SimpleAnime) {
  new SimpleAnime();
}
if (window.SimpleForm) {
  new SimpleForm({
    form: ".formphp",
    button: "#enviar",
    erro:
      "<div id='form-erro'><h2>Erro no envio !</h2><p> Um erro ocorreu, tente para o email contato@bikecraft.com</p></div>",
    sucesso:
      "<div id='form-sucesso'><h2>Formularo enviado com sucesso</h2><p> Em breve eu entro em contato</p>",
  });
}
