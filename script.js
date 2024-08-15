const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje") ;
const regex = /^[a-z0-9\s\,\.]+$/;

function btnEncriptar() {
    let textoUsuario = textArea.value ;
    if (!regex.test(textoUsuario)) {
        mensaje.value = "El texto contiene caractéres inválidos" ;    
    } else {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado ;
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
    }
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado ;
    textArea.value = '';
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase() ;
    let textoFinal ='';

    for (let x = 0; x < stringEncriptada.length; x++) {
        /* alert(textoUsuario[x]); */
        switch(stringEncriptada[x]) {
            case 'a':
                textoFinal=textoFinal+'ai';
                break ;
            case 'e':
                textoFinal=textoFinal+'enter';
                break ;
            case 'i':
                textoFinal=textoFinal+'imes';
                break ;
            case 'o':
                textoFinal=textoFinal+'ober';
                break ;
            case 'u':
                textoFinal=textoFinal+'ufat';
                break ;
            default :
                textoFinal=textoFinal+stringEncriptada[x];
        }
     }
    return textoFinal
}

function desencriptar(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase() ;
    
    let textoDes = stringDesencriptada.replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    
    return textoDes
}

function copiar() {
    var txtCopiado = document.querySelector(".mensaje");
    txtCopiado.select();
    document.execCommand("copy");
}