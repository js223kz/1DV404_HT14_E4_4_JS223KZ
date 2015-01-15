"use strict";
var JOSZEP = JOSZEP || {};
JOSZEP.StartWindow = JOSZEP.StartWindow || {
    
    start : function (){
        console.log("Starting page that can be viewed by everyone");
        var login = document.getElementById("loginbutton");
        
            login.addEventListener("click", function(e){
                var he = new JOSZEP.LoginWindow();
                console.log("hello");

            });
        
    }
};
window.onload = JOSZEP.StartWindow.start;