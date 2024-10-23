$(document).ready(function() {
    // Resaltar el texto al tocar
    $('.scroll-container p').on('touchstart', function() {
        $(this).toggleClass('highlight'); // Alternar clase de resaltado
        setTimeout(() => {
            $(this).removeClass('highlight'); // Remover resaltado después de un tiempo
        }, 1000);
    });
});
