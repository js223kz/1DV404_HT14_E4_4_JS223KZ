"use strict";

var JOSZEP = JOSZEP || {};
JOSZEP.UserAdmin = function (){
    
    var body = document.querySelector("body");
    var addUserBtn = document.createElement("button");
    addUserBtn.id = "adduserbutton";
    addUserBtn.innerHTML = "Lägg till användare";
    body.appendChild(addUserBtn);
    
    addUserBtn.addEventListener("click", function(e){
       location.href='adduser.html' 
       console.log("You´ve pressed add user button");
    });
    
};