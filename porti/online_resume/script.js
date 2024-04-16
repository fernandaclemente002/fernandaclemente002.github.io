$(document).ready(function() {
    // Inicialização do RateYo
    $("#input_14").rateYo({
        starWidth: "25px",
        ratedFill: "#ffc107",
        numStars: 5
    });

    // Inicialização do Slick Carousel para imagens
    $('.container-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });

    // Inicialização do Slick Carousel para conteúdo
function toggleForm() {
    var form = document.getElementById("designForm");
    form.style.display = form.style.display === "none" ? "block" : "none";
}
});
// Configuração de tema e manipulação de eventos de clique
document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    var themeButton = document.getElementById('themeButton');
    var profilePic = document.querySelector('.profile-pic');

    // Definindo o tema inicial como light
    body.classList.add('light-theme');
    themeButton.textContent = 'Light Theme'; // Inicialmente, o botão mostra "Light Theme"
    profilePic.src = 'src/eu.jpeg'; // Imagem de perfil padrão

    // Adicionando um ouvinte de eventos de clique ao botão de tema
    themeButton.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            // Se o tema atual for light, troca para dark
            body.classList.replace('light-theme', 'dark-theme');
            themeButton.textContent = 'Dark Theme'; // Atualiza o texto do botão para "Light Theme"
            profilePic.src = 'src/☆.jpeg'; // Altera a imagem de perfil para o tema escuro
        } else {
            // Se o tema atual for dark, troca para light
            body.classList.replace('dark-theme', 'light-theme');
            themeButton.textContent = 'Light Theme'; // Atualiza o texto do botão para "Dark Theme"
            profilePic.src = 'src/eu.jpeg'; // Retorna a imagem de perfil padrão para o tema claro
        }
    });
});
