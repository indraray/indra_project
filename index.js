function clickMenu() {
   x.classList.toggle("change");
 }

 //adding the responsive menu bar
 function myFunction() {
  var x= document.getElementById("menu_container_id");
  if(x.className==="menu_container"){
    x.className += " responsive";
  }
  else{
    x.className = "menu_container";
  }
 }