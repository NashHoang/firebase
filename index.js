
const data = firebase.database().ref();
 const chatDiv = document.getElementById("all-messages");

data.on("child_added", addMessageToBoard);

function addMessageToBoard(rowData){
    const messageObject = rowData.val();
    console.log(messageObject);

    let messageDiv = makeSingleMessageHTML(messageObject.username, messageObject.message);

    chatDiv.appendChild(messageDiv);
}
 function makeSingleMessageHTML(usernameTxt, messageTxt) {
    
    let parentDiv = document.createElement("div");
    
    parentDiv.classList.add("single-message");

    
    let usernameP = document.createElement("p");
    
    usernameP.classList.add("single-message-username");
    
    usernameP.innerHTML = usernameTxt + ":";
   
    parentDiv.appendChild(usernameP);

    
    let messageP = document.createElement("p");
    
    messageP.innerHTML = messageTxt;
    
    parentDiv.appendChild(messageP);

    
    return parentDiv;
}