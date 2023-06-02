function openCard() {
   var card = document.getElementById("card");
   if(card.style.display == "none"){
    card.style.display = "block";
   }
   else{
    card.style.display = "none";
   }
 }

 function closeCard() {
   var card = document.getElementById("card");
   card.style.display = "none";
 }
