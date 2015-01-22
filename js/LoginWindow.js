var JOSZEP = JOSZEP || {};
JOSZEP.LoginWindow = function (){
    console.log("You´ve pressed the login button");
    var body = document.querySelector("body");
    var wrapper = document.createElement("div");
    wrapper.id = "loginwrapper";
    body.appendChild(wrapper);
    
    var userName = document.createElement("input");
    userName.type = "text";
    userName.id = "username";
    userName.placeholder = "Användarnamn";
    userName.name = "username";
    wrapper.appendChild(userName);
    
    var pwd = document.createElement("input");
    pwd.type = "text";
    pwd.id = "pwd";
    pwd.placeholder = "Lösenord";
    pwd.name = "username";
    wrapper.appendChild(pwd);
    
    var submitBtn = document.createElement("input");
    submitBtn.type = "submit";
    submitBtn.id = "submitBtn";
    submitBtn.Value = "OK";
    wrapper.appendChild(submitBtn);
    
    submitBtn.addEventListener("click", function(e){
        var sendLogin = new JOSZEP.Login(userName.value, pwd.value);
    });
    
    
};