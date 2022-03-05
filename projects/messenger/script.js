let msg = document.querySelector(".input__message");

msg.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    send();
  }
});

function send() {
  if (msg.value != "") {
  let newWrap = document.createElement("div");
  newWrap.classList.add("message-wrap");
  let newMessage = document.createElement("div");
  newMessage.classList.add("message");
  newMessage.innerHTML = msg.value;
  msg.value = "";
  newWrap.appendChild(newMessage);
  document.querySelector(".messages__sent").appendChild(newWrap);
  }
}
