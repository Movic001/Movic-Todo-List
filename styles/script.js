function todoBtn(){

    let todo=document.getElementById("todoInput").value;
    if(todo==""){
        alert("please add task")
    }
    else{
        todo
    }
    
    let ul=document.getElementById("todoUl");

    let li=document.createElement('li');
    
    li.className='todoItem'

    li.innerHTML= todo + "<button class='btnClass' onclick='removeBtn(this)'>Remove</button>"
    
    ul.appendChild(li)
 
}
 function removeBtn(button){
    let buton=button.parentNode;
    buton.remove()
 }

 //get current location using the html5API

 function locationBtn(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        alert("this browser cannot get your current position")
    }
    
 }
 function showPosition(position){
    let resultBtn=document.getElementById('location').innerHTML;
    
    resultBtn="longitude:" + position.coords.longitude + "latitude:" + position.coords.latitude;
 }