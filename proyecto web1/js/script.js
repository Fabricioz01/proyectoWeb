// Seleccionando elementos HTML y asignándoles eventos
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

// Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");
const registerForm = document.querySelector(".formulario__register");
const passwordInput = document.querySelector('input[type="password"]');
const repeatPasswordInput = document.querySelector('input[placeholder="Repita la contraseña"]');
const emailInput = document.querySelector('input[type="text"][placeholder="Correo Electronico"]');

// Función para detectar el ancho de la ventana y hacer cambios en los elementos
function anchoPage(){
    // Si el ancho de la ventana es mayor a 850px, muestra ambas cajas traseras
    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        // Si el ancho de la ventana es menor a 850px, muestra solo la caja trasera de registro y oculta la de inicio de sesión
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

// Ejecutando la función anchoPage para hacer cambios en la página en función del tamaño de la ventana
anchoPage();

// Función para mostrar el formulario de inicio de sesión y ocultar el de registro
function iniciarSesion(){
    if (window.innerWidth > 850){
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    }else{
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

// Función para mostrar el formulario de registro y ocultar el de inicio de sesión
function register(){
    if (window.innerWidth > 850){
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    }else{
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}
