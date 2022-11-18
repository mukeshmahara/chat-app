//   making connection
var socket = io.connect("localhost:4000/");

// Query DOM
var chatWindow = document.getElementById("chat-window")
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
    chatMessage.scrollTop = output.scrollTop + chatMessage.scrollHeight;
    console.log(output.scrollTop)
    message.value = ""
  }
  
})

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
  chatMessage.scrollTop = chatMessage.scrollHeight
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
  var span = document.createElement("span")
  span.append(element)
  element.classList.add("col-md-6", "d-flex", "col-sm-6", "col-lg-6","mb-2",'p-3')
  var div = document.createElement("div")
  div.classList.add("text-dark", "bg-light","d-table","text-center","shadow-sm",  "border", "border-secondary", "rounded-circle" ,"col-1", 'p-3')
  div.innerHTML =  data.handle[0]
  let clonediv = div.cloneNode(true)
  clonediv.innerHTML = data.message
  clonediv.classList.remove("border", "rounded-circle")
  element.append(div)
  element.append(clonediv)
  output.append(element)
}

socket.on("typing", (data) => {
  feedback.innerHTML = "<p><em>" + data + " is typing message..." + "</em></p>";
  topic.innerHTML = data +" is in chat"
});

var termsAndConditions = document.getElementById("terms");

FormData.addEventListener("submit", (event) => {});
