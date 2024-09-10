document.getElementById('send-btn').addEventListener('click', function() {
    const message = document.getElementById('chat-input').value;
    if (message.trim() !== "") {
        const chatList = document.getElementById('chat-list');
        const newMessage = document.createElement('li');
        newMessage.textContent = message;
        chatList.appendChild(newMessage);
        document.getElementById('chat-input').value = "";
    }
});
