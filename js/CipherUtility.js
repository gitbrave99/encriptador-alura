class CipherUtility {

    encrypt(text, shift) {
        // Convertir el texto a minúsculas para evitar problemas con las mayúsculas
        return text.split('').map(char => {
            // Verificar si el carácter es una letra
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt();

                // Letra mayúscula
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
                }

                // Letra minúscula
                if (code >= 97 && code <= 122) {
                    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
                }
            }
            return char; // Retornar el carácter sin cambios si no es una letra
        }).join('');
    }

    decrypt(text, shift) {
        // Convertir el texto a minúsculas para evitar problemas con las mayúsculas
        return text.split('').map(char => {
            // Verificar si el carácter es una letra
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt();

                // Letra mayúscula
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
                }

                // Letra minúscula
                if (code >= 97 && code <= 122) {
                    return String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
                }
            }
            return char; // Retornar el carácter sin cambios si no es una letra
        }).join('');
    }


}
