"use strict";

var JOSZEP = JOSZEP || {};
JOSZEP.UserAdmin = function (){
    
    console.log("You´re viewing this page as Admin");
    var body = document.querySelector("body");
    var addUserBtn = document.createElement("button");
    addUserBtn.id = "adduserbutton";
    addUserBtn.innerHTML = "Lägg till användare";
    body.appendChild(addUserBtn);
    
    addUserBtn.addEventListener("click", function(e){
       location.href='adduser.html' 
    });
    
};