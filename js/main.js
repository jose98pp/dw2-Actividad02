$(document).ready(function () {
  // Load Contributers
  function appendContributor(element) {
    $("#contributor").append(`
                        <div class="col-sm-12 col-md-4 col-lg-3">
                            <div class="contributor-wrap">
                                <a href="${element.html_url}" target="_blank">
                                    <img src="${
                                      element.avatar_url
                                    }" alt="" class="image-wrap">
                                    <h6 class="name-wrap">${
                                      element.name == null
                                        ? element.login
                                        : res.name
                                    }</h6>
                                </a>
                            </div>
                        </div>
                    `);
  }
  $.ajax({
    url: "https://api.github.com/repos/Tharindu37/ProSolutions/contributors",
    type: "GET",
    dataType: "json", // added data type
    success: function (res) {
      if (res.length > 8) {
        for (let i = 0; i < 8; i++) {
          appendContributor(res[i]);
        }
        $("#btnShowMore").css("display", "block");
        $("#btnShowMore").click(function () {
          for (let i = 8; i < res.length; i++) {
            appendContributor(res[i]);
          }
          $("#btnShowMore").css("display", "none");
        });
      } else {
        res.forEach((element) => {
          appendContributor(element);
        });
      }
    },
  });
});

// Scroll up arrow
let scrollArrow = document.getElementById("scrollArrow");

window.onscroll = function () {
  showScrollArrow();
};

scrollArrow.onclick = function () {
  scrollToTop();
};

function showScrollArrow() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollArrow.style.display = "block";
  } else {
    scrollArrow.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Manejo del formulario de contacto
$('#formulario-contacto').submit(function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  // Obtiene los datos del formulario
  var nombre = $('#nombre').val();
  var email = $('#email').val();
  var mensaje = $('#mensaje').val();
  var loading = document.getElementById('loading-animation');

  if (nombre === '' || email === '' || mensaje === '') {
    alert('Por favor complete todos los campos del formulario.');
    return;
  }

  // Muestra la animación de carga
  loading.style.display = 'block';

  // Simula el envío del formulario (aquí puedes agregar tu lógica de envío AJAX)

  // Después de que el formulario se haya enviado correctamente, oculta la animación de carga
  setTimeout(function () {
    loading.style.display = 'none';
    // Restablece el formulario
    $('#formulario-contacto')[0].reset();
  }, 3000); // Ocultar la animación después de 3 segundos
});

// Agregar un efecto de desplazamiento suave a los enlaces internos de la página
$(document).ready(function () {
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));

    if (target.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});

// Agregar un efecto de hover a las imágenes de tecnología en la sección "Tecnología"
$(document).ready(function () {
  $('.img-tech').hover(
    function () {
      $(this).css('transform', 'scale(1.1)');
    }, function () {
      $(this).css('transform', 'scale(1)');
    }
  );
});
