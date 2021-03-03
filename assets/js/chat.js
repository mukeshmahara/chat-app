 //   making connection
 var socket = io.connect("http://localhost:4000");

 // Query DOM
 var message =  document.getElementById('message');
 var handle = document.getElementById('handle');
 var output = document.getElementById('output');
 var btn =document.getElementById('send');
 var feedback = document.getElementById('feedback')

//  window.setInterval(function() {
//   var scrollMsg = document.getElementById('output');
//   scrollMsg.scrollTop = scrollMsg.scrollHeight;
// }, 10);

const chatMessage = document.querySelector('.chat-messages');

 //Emit Event
 btn.addEventListener('click',()=>{
   socket.emit('chat',{
     handle:handle.value,
    // handle:'you',
     message:message.value
     
   })
   chatMessage.scrollTop = chatMessage.scrollHeight;
   
 });

 message.addEventListener('keypress',()=>{
   socket.emit('typing',handle.value);

 })



 // Listen for event
 socket.on('chat',(data)=>{
   feedback.innerHTML = ""
 
   output.innerHTML +='<p>'+'<strong>'+data.handle+': </strong> '+data.message +'</p>'

 })



 socket.on('typing',(data)=>{
  feedback.innerHTML = '<p><em>'+data+ ' is typing message...'+'</em></p>'
})

