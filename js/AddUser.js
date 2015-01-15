"use strict";
var JOSZEP = JOSZEP || {};
JOSZEP.AddUser = function (){
    
    var saveUser = document.getElementById("saveuserbutton");
    
    saveUser.addEventListener("click", function(e){
        e.preventDefault();
        console.log("Användaren sparades");
    });
    
};
window.onload = JOSZEP.AddUser;