let socket = io('http://localhost:3000');

  let  form = document.getElementById('form')

  function renderMessage(message){
    let msg = document.createTextNode(message.message)
    let boxMsgTxt = document.createElement('div')
    let strong = document.createElement('strong')
    let user = document.createTextNode(message.author+': ')
    boxMsgTxt.setAttribute('class','boxMsgTxt')
    strong.appendChild(user)
    boxMsgTxt.appendChild(strong)
    boxMsgTxt.appendChild(msg)
    let div = document.getElementById('boxMsg')
    div.appendChild(boxMsgTxt)
  }

  socket.on('previus',function(messages){
    for(message of messages){
      renderMessage(message)
    }
  })


  socket.on('receivedMessage',function(message){
       renderMessage(message)  
      })
   

   form.addEventListener('submit',function(e){
    e.preventDefault();
    
      let message = document.getElementById('input').value
      let author = document.getElementById('inputName').value

    if (input.value && inputName.value){
      let messageObject={
        author :author,
        message:message
      }
      renderMessage(messageObject)  
      socket.emit('sendMessage',messageObject);
     
      input.value=''
    }
    
  
  })

