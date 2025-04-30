const slider = document.getElementById("frase-slider");
const span = document.getElementById("spanHero");
const totalSlides = slider.children.length;
const cores = ["#00FFFF", "#00FF7F", "#B388FF", "#FFD740"]; // azul neon, verde, roxo, dourado
let index = 0;

function trocarSlide() {
  const altura = slider.children[0].offsetHeight;

  // Aplica a nova cor de acordo com o índice
  slider.style.color = cores[index];
  span.style.color = cores[index];

  if (index === totalSlides - 1) {
    slider.style.transition = "transform 0.3s ease-in";
    span.style.transition = "color 0.3s ease-in";
    index = 0;
  } else {
    slider.style.transition = "transform 0.8s ease-in-out";
    span.style.transition = "color 0.8s ease-in";
    index++;
  }

  slider.style.transform = `translateY(-${index * altura}px)`;
  slider.style.color = cores[index]; // troca a cor novamente após mudar índice
  span.style.color = cores[index];
}

setInterval(trocarSlide, 3000);