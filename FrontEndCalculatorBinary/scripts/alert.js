const btn = document.querySelector("button");
const divAlert = document.querySelector(".alert");

function ativar(msg){
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divAlert.appendChild(message);

    setTimeout(() =>{
        message.style.display = "none"
    }, 3000);
}

function showAlert(message) {
   
    const alertBox = document.createElement("div");
    alertBox.classList.add("message");
    alertBox.innerText = message;
    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}