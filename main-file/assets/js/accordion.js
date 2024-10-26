$(document).ready(function() {
    $('.item__body').hide(); // Oculta todas las respuestas inicialmente

    $('.head__item__title').click(function() {
        const card = $(this).closest('.accordion-item');

        if (card.hasClass("active")) {
            card.removeClass("active").find(".item__body").slideUp();
            card.find("#arrow").removeClass("rotate-180");

        } else {
            $(".accordion-item.active .item__body").slideUp();
            card.addClass("active").find(".item__body").slideDown();
            card.find("#arrow").addClass("rotate-180");
        }
        return false;
    });
});


$(document).ready(function() {
    const menu = document.querySelector(".menu");
    const content_tab = document.querySelector(".content-tab");
    $(".open").click(function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto
        $(".pop-outer").fadeIn("slow");
        menu.classList.toggle("hidden");
        content_tab.classList.toggle("opacity-50");
    });

    $(".close").click(function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto
        $(".pop-outer").fadeOut("slow");
        menu.classList.toggle("hidden");
        content_tab.classList.toggle("opacity-50");
    });
});



const btn = document.querySelector('#button');

document.querySelector('#form-container')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_vese0vo';
   const namePerson = document.querySelector("#name");
   const phonePerson = document.querySelector("#phone");
   const messagePerson = document.querySelector("#message");
   const emailPerson = document.querySelector("#email");
   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        icon: "success",
        title: "El email ha sido enviado",
        showConfirmButton: false,
        timer: 1500
      });

      namePerson.value = "";
        phonePerson.value = "";
        messagePerson.value = "";
        emailPerson.value = "";
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});