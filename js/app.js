$(document).foundation();
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#fullscreen-slider', {
        type       : 'loop',
        autoplay   : true,
        interval   : 10000, // Tempo di cambio slide in millisecondi
        arrows     : false, // Nascondi le frecce
        pagination : false, // Opzionale: nascondi la paginazione se desiderato
        cover      : true, // Assicura che le immagini coprano la slide
        heightRatio: 1, // Imposta il rapporto di altezza per rendere lo slider fullscreen
    }).mount();
});