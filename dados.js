let dados = {
    titulo: "jett" ,
    descricao: "" ,
    link: "https://playvalorant.com/pt-br/agents/jett/ "
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const content = card.querySelector('.card-content');
  const title = card.querySelector('.card-title');

  title.addEventListener('click', () => {
    content.classList.toggle('active');
  });
});
