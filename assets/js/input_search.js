document.addEventListener("DOMContentLoaded", function() {
  var searchButton = document.querySelector(".search-button");
  var searchBox = document.getElementById("searchBox");
  var closeSearch = document.getElementById("closeSearch");
  var header = document.querySelector(".header");

  // Calcula la altura del header y ajusta la posición de la caja de búsqueda
  function adjustSearchBoxPosition() {
    var headerHeight = header.offsetHeight;
    searchBox.style.top = headerHeight + "px";
  }

  // Inicialmente oculta la caja de búsqueda
  searchBox.style.display = "none";

  searchButton.addEventListener("click", function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del botón
    if (searchBox.style.display === "none" || searchBox.style.display === "") {
      searchBox.style.display = "block";
      adjustSearchBoxPosition(); // Ajusta la posición nuevamente en caso de que cambie el tamaño del header
    } else {
      searchBox.style.display = "none";
    }
  });

  closeSearch.addEventListener("click", function(event) {
    event.preventDefault(); // Previene el comportamiento predeterminado del botón
    searchBox.style.display = "none";
  });

  // Ajusta la posición de la caja de búsqueda al redimensionar la ventana
  window.addEventListener("resize", adjustSearchBoxPosition);
});

