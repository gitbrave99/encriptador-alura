const ipherUtility= new CipherUtility()
const inputtext = document.getElementById("inputtext");
const wrongMessage = document.getElementById("wrong-message");
const resultencdes = document.getElementById("resultencdes");


document.getElementById("btnEncrypt").addEventListener("click", () => {
    if (inputtext.value.length > 0) {
        wrongMessage.style.display = "none";
        resultencdes.innerHTML=ipherUtility.encrypt(inputtext.value.toLowerCase(), 3)
    }
});

document.getElementById("btnDecrypt").addEventListener("click", () => {
    if (inputtext.value.length > 0) {
        wrongMessage.style.display = "none";
        resultencdes.innerHTML=ipherUtility.decrypt(inputtext.value.toLowerCase(), 3)
    }
});

document.getElementById("btnReset").addEventListener("click", () => {
    inputtext.value="";
    resultencdes.innerHTML="";
});


