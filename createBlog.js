
const dataBase = firebase.database().ref();

const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-btn");

sendButton.onclick = updateDB; 
function updateDB(event){
    event.preventDefault();
    const entry ={
        username: usernameInput.value,
        message: messageInput.value
    };

    
    dataBase.push(entry);

    messageInput.value = "";
    window.location.href = "index.html";
}





