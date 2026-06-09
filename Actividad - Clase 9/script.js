const formulario = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPasswordCheck = document.getElementById('password-check');
const inputEdad = document.getElementById('edad');
const inputTelefono = document.getElementById('telefono');
const inputDireccion = document.getElementById('direccion');
const inputCiudad = document.getElementById('ciudad');
const inputCp = document.getElementById('cp');
const inputDni = document.getElementById('dni');

function validarNombre() {
    const errorContenedor = document.getElementById('error-nombre');
    const valorNombre = inputNombre.value.trim();
    if (valorNombre.length <= 6 || !valorNombre.includes(' ')) {
        errorContenedor.textContent = "El nombre debe tener más de 6 letras y al menos un espacio.";
        return false;
    }
    return true;
}

function validarEmail() {
    const errorContenedor = document.getElementById('error-email');
    const valorEmail = inputEmail.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regexEmail.test(valorEmail)) {
        errorContenedor.textContent = "Formato de email inválido.";
        return false;
    }
    return true;
}

function validarPassword() {
    const errorContenedor = document.getElementById('error-password');
    const valorPassword = inputPassword.value;
    let tieneLetras = false;
    let tieneNumeros = false;
    
    if(valorPassword.length < 8){
        errorContenedor.textContent = "La contraseña debe tener al menos 8 caracteres";
        return false;
    }

    for(let i=0; i < valorPassword.length; i++) {
        let caracter = valorPassword[i];
        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        }
        else {
            let charUpper = caracter.toUpperCase();
            if (charUpper >= 'A' && charUpper <= 'Z') {
                tieneLetra = true;
            }
        }
    }

    if (!tieneLetra || !tieneNumero) {
        errorContenedor.textContent = "La contraseña debe contener letras y números.";
        return false;
    }

    return true;
}

function validarPasswordCheck() {
    const errorContenedor = document.getElementById('error-password-check');
    const valorRepetirPassword = inputPasswordCheck.value;
    const valorPassword = inputPassword.value;
    if(valorRepetirPassword !== valorPassword){
        errorContenedor.textContent = "Las contraseñas no coinciden";
        return false;
    }
    return true;
}

function validarEdad() {
    const errorContenedor = document.getElementById('error-edad');
    const valorEdad = inputEdad.value.trim();

    const numero = Number(valorInput);
    if (valorInput === "" || isNaN(numero)) {
        errorContenedor.textContent = "Debe ingresar un número válido.";
        return false;
    }
    if (!Number.isInteger(numero)) {
        errorContenedor.textContent = "El número no puede tener decimales.";
        return false;
    }
    if (numero < 18) {
        errorContenedor.textContent = "Debe ser mayor o igual a 18 años.";
        return false;
    }
    return true;
}

function validarTelefono() {
    const errorContenedor = document.getElementById('error-telefono');
    const valorTelefono = inputTelefono.value;
    if (valor.length < 7) {
        errorContenedor.textContent = "El teléfono debe tener al menos 7 dígitos.";
        return false;
    }
    for (let i = 0; i < valor.length; i++) {
        let caracter = valor[i];

        if (caracter < '0' || caracter > '9') {
            errorContenedor.textContent = "El teléfono no debe contener espacios, guiones ni paréntesis (solo números).";
            return false;
        }
    }
    return true;
}

function validarDireccion() {
    const errorContenedor = document.getElementById('error-direccion');
    const valorDireccion = inputDireccion.value;

    if (valor.length < 5) {
        errorContenedor.textContent = "La dirección debe tener al menos 5 caracteres.";
        return false;
    }

    if (!valor.includes(' ') || valor.startsWith(' ') || valor.endsWith(' ')) {
        errorContenedor.textContent = "La dirección debe incluir un espacio en el medio (Ej: Mitre 123).";
        return false;
    }

    let tieneLetra = false;
    let tieneNumero = false;

    for (let i = 0; i < valor.length; i++) {
        let caracter = valor[i];

        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        } 
        else {
            let charUpper = caracter.toUpperCase();
            if (charUpper >= 'A' && charUpper <= 'Z') {
                tieneLetra = true;
            }
        }
    }

    if (!tieneLetra || !tieneNumero) {
        errorContenedor.textContent = "La dirección debe contener letras y números.";
        return false;
    }

    return true;
}

function validarCiudad() {
    const errorContenedor = document.getElementById('error-ciudad');
    const valorCiudad = inputCiudad.value;

    if(valorCiudad.length < 3){
        errorContenedor.textContent = "La ciudad debe tener al menos 3 caracteres";
    }
    return true;
}

function validarCp() {
    const errorContenedor = document.getElementById('error-cp');
    const valorCp = inputCp.value;

    if(valorCp.length < 3) {
        errorContenedor.textContent = "El código postal debe tener al menos 3 caracteres";
    }
    return true;
}

function validarDni() {
    const errorContenedor = document.getElementById('error-dni');
    const valor = inputDni.value.trim();
    if (valor.length < 7 || valor.length > 8) {
        errorContenedor.textContent = "El DNI debe tener 7 u 8 dígitos.";
        return false;
    }
    for (let i = 0; i < valor.length; i++) {
        if (valor[i] < '0' || valor[i] > '9') {
            errorContenedor.textContent = "El DNI solo debe contener números.";
            return false;
        }
    }
    return true;
}

inputNombre.addEventListener('blur', validarNombre);
inputNombre.addEventListener('focus', () => limpiarError('error-nombre'));

inputEmail.addEventListener('blur', validarEmail);
inputEmail.addEventListener('focus', () => limpiarError('error-email'));

inputPassword.addEventListener('blur', validarPassword);
inputPassword.addEventListener('focus', () => limpiarError('error-password'));

inputPasswordCheck.addEventListener('blur', validarPasswordCheck);
inputPasswordCheck.addEventListener('focus', () => limpiarError('error-password-check'));

inputEdad.addEventListener('blur', validarEdad);
inputEdad.addEventListener('focus', () => limpiarError('error-edad'));

inputTelefono.addEventListener('blur', validarTelefono);
inputTelefono.addEventListener('focus', () => limpiarError('error-telefono'));

inputDireccion.addEventListener('blur', validarDireccion);
inputDireccion.addEventListener('focus', () => limpiarError('error-direccion'));

inputCiudad.addEventListener('blur', validarCiudad);
inputCiudad.addEventListener('focus', () => limpiarError('error-ciudad'));

inputCp.addEventListener('blur', validarCp);
inputCp.addEventListener('focus', () => limpiarError('error-cp'));

inputDni.addEventListener('blur', validarDni);
inputDni.addEventListener('focus', () => limpiarError('error-dni'));

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const vNombre = validarNombre();
    const vEmail = validarEmail();
    const vPass = validarPassword();
    const vPassCheck = validarPasswordCheck();
    const vEdad = validarEdad();
    const vTel = validarTelefono();
    const vDir = validarDireccion();
    const vCiu = validarCiudad();
    const vCp = validarCp();
    const vDni = validarDni();

    if (vNombre && vEmail && vPass && vPassCheck && vEdad && vTel && vDir && vCiu && vCp && vDni) {
        let mensaje = "Formulario enviado con éxito:\n\n" +
            "Nombre: " + inputNombre.value + "\n" +
            "Email: " + inputEmail.value + "\n" +
            "Edad: " + inputEdad.value + "\n" +
            "Teléfono: " + inputTelefono.value + "\n" +
            "Dirección: " + inputDireccion.value + "\n" +
            "Ciudad: " + inputCiudad.value + "\n" +
            "Código Postal: " + inputCp.value + "\n" +
            "DNI: " + inputDni.value;
        alert(mensaje);
    } else {
        let errores = "El formulario contiene errores. Por favor verifique los siguientes campos:\n";
        if (!vNombre) errores += "- Nombre completo\n";
        if (!vEmail) errores += "- Email\n";
        if (!vPass) errores += "- Contraseña\n";
        if (!vPassCheck) errores += "- Repetir contraseña\n";
        if (!vEdad) errores += "- Edad\n";
        if (!vTel) errores += "- Teléfono\n";
        if (!vDir) errores += "- Dirección\n";
        if (!vCiu) errores += "- Ciudad\n";
        if (!vCp) errores += "- Código Postal\n";
        if (!vDni) errores += "- DNI\n";
        alert(errores);
    }
});

inputNombre.addEventListener('keydown', function() {
    setTimeout(() => {
        const valor = inputNombre.value.toUpperCase();
        tituloHola.textContent = valor === "" ? "HOLA" : "HOLA " + valor;
    }, 0);
});
inputNombre.addEventListener('focus', function() {
    const valor = inputNombre.value.toUpperCase();
    tituloHola.textContent = valor === "" ? "HOLA" : "HOLA " + valor;
});