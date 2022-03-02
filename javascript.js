window.addEventListener("load", function () {

    /* boton que aparece y desaparece y al clicar vuelve arriba */

    /* comprobamos la posición del scroll y si es superior a 100, aparece el botón */
    let boton_volver = document.getElementById("boton_volver");

    boton_volver.style = "display: none";
    boton_volver.addEventListener("mousedown", volver);
    var scrollPos = 0;
    window.addEventListener("scroll", function () {
        let top = window.pageYOffset;

        if (top > 100 && (document.body.getBoundingClientRect()).top > scrollPos) {
            boton_volver.style = "display: block";

        } else {
            boton_volver.style = "display: none";

            boton_volver.style.opacity = 1;

            scrollPos = (document.body.getBoundingClientRect()).top;

        }
    });


    function volver() {
        window.scrollTo(0, 0);

    }



    //botones footer

    document.getElementById("instagram").addEventListener("mousedown", function () {
        window.open("https://www.instagram.com/?hl=es");
    });
    document.getElementById("facebook").addEventListener("mousedown", function () {
        window.open("https://www.facebook.com");
    });
    document.getElementById("twitter").addEventListener("mousedown", function () {
        window.open("https://www.twitter.com/");
    });
    document.getElementById("linkedin").addEventListener("mousedown", function () {
        window.open("https://www.linkedin.com/");
    });



    // modo oscuro

    document.getElementById('btn-mode-night').addEventListener("mousedown", function () {
        let bodyClass = document.body;
        if (!(bodyClass.classList.contains("dark-mode"))) {
            bodyClass.classList.add('dark-mode')
            document.getElementById('id-mode').classList.remove('fa-moon')
            document.getElementById('id-mode').classList.add('fa-sun')
            document.getElementById('btn-mode').classList.remove('btn-dark')
            document.getElementById('btn-mode').classList.add('btn-light')
        } else {
            bodyClass.classList.remove('dark-mode')
            document.getElementById('id-mode').classList.remove('fa-sun')
            document.getElementById('id-mode').classList.add('fa-moon')
            document.getElementById('btn-mode').classList.remove('btn-light')
            document.getElementById('btn-mode').classList.add('btn-dark')
        }

    });

    //escondemos boton modo oscuro
    window.addEventListener("scroll", function () {
        let top = window.pageYOffset;
        if (top > 500 && (document.body.getBoundingClientRect()).bottom > 500) {
            document.getElementById("btn-mode-night").style.display = "none";
        } else {
            document.getElementById("btn-mode-night").style.display = "";
        }
    });


    //botones card

    document.getElementById("card-movil-webcommerce").addEventListener("click", function () {
        window.open("Webcommerce/index.html")
    });

    document.getElementById("card-movil-imgoptimiced").addEventListener("click", function () {
        window.open("optimiced/index.html")
    });

    document.getElementById("card-movil-reproductor").addEventListener("click", function () {
        window.open("reproductor/video-controller2.html")
    });

    document.getElementById("card-movil-formulario").addEventListener("click", function () {
        window.open("contacto/index.html")
    });

    document.getElementById("card-movil-bootstrap").addEventListener("click", function () {
        window.open("Bootstrap/index.html")
    });




    /* Esconder Formulario */
    /* 
        let contactoBtn = document.getElementById("contactoBtn");
        let contacto = document.getElementById("contacto");
        let booleanoContacto = true;
        contactoBtn.addEventListener("mousedown", function () {
            if (booleanoContacto === true ) {
               // formContacto.style.visibility = "visible"; 
                
                contacto.style.translate = "20vw";
                contacto.style.webkitTransition = "20vw"
                booleanoContacto = false;
                contacto.style.overflow = "hidden";
                
                contacto.style.visibility = "visible";
            } else {
                
                booleanoContacto = true;
                contacto.style.overflow = "hidden";
                contacto.style.visibility = "hidden";
                contacto.style.translate = "-50vw"; 
                // formContacto.style.visibility = "hidden"; 
            }
    
        });
     */

});
