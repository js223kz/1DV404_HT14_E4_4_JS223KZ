"use strict";

var JOSZEP = JOSZEP || {};
JOSZEP.Login = function (username, pwd){
    console.log("Sending logininformation");
    
    //Temporary object to test validation of userlogin
    var user = {
        username:"joszep",
        pwd:"js@powerapp.se",
        authority: "administrator",
    };
    var validatedPwd = false;
    var validatedUserName = false;
    
    this.getUserName = function(){
        return username;
    };
    this.getPwd = function(){
        return pwd;
    };
    this.setUserName = function(_username){
        if(username === user.username){
             username = _username;
             validatedUserName = true;
        }else if(username === ""){
            alert("Fältet för användarnamn kan inte vara tomt");
        }else{
            alert("Användarnamnet är fel");
        }
    };
    this.setPwd = function(_pwd){
        if(pwd === user.pwd){
             pwd = _pwd;
             validatedPwd = true;
        }else if(pwd === ""){
            alert("Fältet för lösenord kan inte vara tomt");
        }else{
            alert("Lösenordet är fel");
        }
        
    };
    
    this.setUserName(username);
    this.setPwd(pwd);
    
    if(validatedPwd === true && validatedUserName ===true){
        var loginWindow = document.getElementById("loginwrapper");
            loginWindow.style.visibility = "hidden";
        var loginBtn = document.getElementById("loginbutton");
        loginBtn.style.visibility = "hidden";
    
        if(user.authority === "administrator"){
            console.log("You´re viewing this page as Admin");
            var admin = new JOSZEP.UserAdmin();
        }
    }
};
