window.onload = function () {


    let email = document.getElementById("email");

    // diferentes eventos que debemos tener en cuenta para validar el campo email.
    document.getElementById("email").addEventListener('keyup', () => comprobarEmail(email.value));
    document.getElementById("email").addEventListener('paste', () => comprobarEmail(email.value));
    document.getElementById("email").addEventListener('click', () => comprobarEmail(email.value));
    document.getElementById("email").addEventListener('focusout', () => comprobarEmail(email.value));
    /* \w numeros o letras */


    let enviar = document.getElementById("enviar");
    let formulario = document.getElementById("form1");
    let cargando = document.getElementById('cargando')
    let confirmacion = document.getElementById('confirmacion');
    //expresión regular.
    // con \w para numero o letras a la vez
    let expRegEmail = /^\w+([\.-]?\w+)*@[aA-zZ]+([\.-]?[aA-zZ]+)*(\.)+(com|net|es|org)+$/;

    let emailCorrecto = document.getElementById("emailCorrecto");

    formulario.addEventListener('submit', function () {

        event.preventDefault(); //Cancelo el envío
        //mostramos el div que contiene la imagen que va a girar
        if (expRegEmail.test(email.value)) {

            cargando.style = "display: block;";
            document.getElementById('form1').style = "opacity: .5"
            setTimeout(function () { //Aplicamos el temporizador
                /* formulario.submit(); */ //Envío los datos
                // simulamos la carga del envío
                cargando.style = "display: none;";
                formulario.style = "display: none;";
                confirmacion.style = "visibility: visible";

                // COOKIES
                // Guardamos el Teléfono en una cookie
                let telefono = document.getElementById("telf").value;

                //encodeURIComponent(texto) sirve para codificar el mensaje, escapa caracteres especiales y simbolos

                document.cookie = "telefono=" + encodeURIComponent(telefono) + "; max-age=3600; path=/";

                // Guardamos el email en una cookie

                document.cookie = "email=" + encodeURIComponent(email.value) + "; max-age=3600; path=/";
                
                // aparece cartel de confirmacion
                
                //se envía el formulario
                // delay de 2.5 segundos
                document.getElementById("btnConfirm").addEventListener('click', function () {
                    confirmacion.style = "visibility: hidden;";
                    formulario.style = "display: block;";
                    formulario.submit();
                })
            }, 1500);
        }
    });
    

    // función que valida por js el email
  
    function comprobarEmail(valor) {

        if (expRegEmail.test(valor)) {
            emailCorrecto.innerHTML = "Email correcto.";
            emailCorrecto.style = "color:green";
            enviar.disabled = false;
        } else {
            emailCorrecto.style = "color:red";
            emailCorrecto.innerHTML = "Email incorrecto.";
            enviar.disabled = true;
        }
    }


    // mensaje cookie

    //para leer las cookies
    function readCookie(name) {

        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;

    };
    let aceptCookies = document.getElementById("aceptCookies");

    aceptCookies.addEventListener("click", crearCookieAceptarTerminos);



    function crearCookieAceptarTerminos() {
        let mes = 60 * 60 * 24 * 30;
        document.cookie = "aceptarCookie=cookies-aceptadas; max-age=" + mes;
        document.getElementById("aviso-cookies").style = "display: none;";
    }


    if (!readCookie("aceptarCookie")) {
        document.getElementById("aviso-cookies").style = "display: block;";
    } else {
        document.getElementById("aviso-cookies").style = "display: none;";
    }

}