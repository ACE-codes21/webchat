function sendMessage() {
    let input = document.getElementById("message-input");
    let message = input.value.trim();
    
    if (message !== "") {
        let chatBox = document.getElementById("chat-box");
        let newMessage = document.createElement("p");
        newMessage.textContent = "You: " + message;
        chatBox.appendChild(newMessage);
        input.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}