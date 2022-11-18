//   making connection
var socket = io.connect("localhost:4000/");

// Query DOM
var message = document.getElementById("message");
var handle = document.getElementById("handle");
var output = document.getElementById("output");
var btn = document.getElementById("send");
var feedback = document.getElementById("feedback");

//  window.setInterval(function() {
//   var scrollMsg = document.getElementById('output');
//   scrollMsg.scrollTop = scrollMsg.scrollHeight;
// }, 10);

const chatMessage = document.querySelector(".chat-messages");

message.addEventListener('keypress',(event)=>{

  if(event.key ==="Enter"){
    socket.emit('chat',{
      handle:handle.value,
     // handle:'you',
      message:message.value
      
    })
    chatMessage.scrollTop = chatMessage.scrollHeight;
    message.value = ""
  }
  
})

 //Emit Event
 btn.addEventListener('click',()=>{
   socket.emit('chat',{
     handle:handle.value,
    // handle:'you',
    message: message.value,
  });
  chatMessage.scrollTop = chatMessage.scrollHeight;
});

message.addEventListener("keypress", () => {
  socket.emit("typing", handle.value);
});

// Listen for event
socket.on("chat", (data) => {
  feedback.innerHTML = "";
  addMessage(data, "me")
});

function addMessage(data, user) {
  var element = document.createElement("div")
  element.innerHTML =  data.handle[0] + data.message 
  element.classList.add("rounded-pill", "card","mb-2",'p-2', "shadow-md")
  output.append(element)
}

socket.on("typing", (data) => {
  feedback.innerHTML = "<p><em>" + data + " is typing message..." + "</em></p>";
  topic.innerHTML = data +" is in chat"
});

var termsAndConditions = document.getElementById("terms");

FormData.addEventListener("submit", (event) => {});
