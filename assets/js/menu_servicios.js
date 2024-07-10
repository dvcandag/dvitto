document.addEventListener("DOMContentLoaded", function() {
    var servicesItem = document.getElementById('servicesItem');
    var closeButton = document.getElementById('closeButton');

    // Evento de click en el elemento de servicios
    document.querySelector('.services').addEventListener('click', function() {
        document.querySelector('.menu_oportunidades').classList.toggle('active');
        document.querySelector('.menu_servicios').classList.toggle('active');

        // Verificar si alguno de los menús está activo
        if (document.querySelector('.menu_oportunidades').classList.contains('active') ||
            document.querySelector('.menu_servicios').classList.contains('active')) {
            servicesItem.style.display = 'block'; // Mostrar servicesItem
            closeButton.style.display = 'block'; // Mostrar closeButton
        } else {
            servicesItem.style.display = 'block'; // Mantener servicesItem visible si ambos menús están inactivos
            closeButton.style.display = 'none'; // Ocultar closeButton
        }
    });

    // Evento de click en el botón de cerrar
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.querySelector('.menu_oportunidades').classList.remove('active');
        document.querySelector('.menu_servicios').classList.remove('active');
        servicesItem.style.display = 'block'; // Mostrar servicesItem al cerrar los menús
        closeButton.style.display = 'none'; // Ocultar closeButton
    });
});
