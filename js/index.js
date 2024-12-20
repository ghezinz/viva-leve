// Scripts

// Função que cria a lógica do carrosel de imagens

const track = document.getElementById('carouselTrack');
const images = document.querySelectorAll('.carousel-image');
const imageWidth = images[0].clientWidth;
let index = 1; // Começa na segunda imagem (primeira "real")

function moveCarousel() {
    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * imageWidth}px)`;

    if (index === images.length - 1) {
        setTimeout(() => {
            track.style.transition = 'none'; // Remove transição temporariamente
            index = 1; // Volta para a primeira imagem "real"
            track.style.transform = `translateX(-${index * imageWidth}px)`;
        }, 500); // Tempo igual ao da transição
    }
}

setInterval(moveCarousel, 2000); // Altere o intervalo para ajustar o tempo


// Função: se o usuário tentar acessar os treinos sem estar autenticado, essa função será chamada
function alertarCadastro() {
  alert("Para acessar os treinos, é necessário realizar o cadastro.");
}

// Função: redireciona o usuário para a página de produtos
function irParaProdutos() {
    window.location.href = "produtos.html";
  } 