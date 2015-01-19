var JOSZEP = JOSZEP || {};
JOSZEP.AddUser = function (){
    
        var saveBtn = document.getElementById("saveuserbutton");
        var form = document.getElementById("adduserform");
        var firstName = document.getElementById("firstname");
        var lastName = document.getElementById("lastname");
        var socialSecNumber = document.getElementById("socialsecnumber");
        var email = document.getElementById("email");
        var pwd = document.getElementById("pwd");
        var administrator = document.getElementById('administrator');
        var leader = document.getElementById('leader');
        var judge = document.getElementById('judge');
        var authority;
        var userArray = [];
        
        saveBtn.addEventListener("click", function(e){
            e.preventDefault();
            if(administrator.checked) {
            authority = administrator.value;
            }else if(leader.checked){
            authority = leader.value;
            }else if(judge.checked){
            authority = judge.value;  
            }else{
                
            }
            console.log("Användaren sparades");
            userArray.push({"firstname":firstName.value, "lastName":lastName.value, "ssn": socialSecNumber.value,"pwd": pwd.value, "email":email.value, "authority": authority});
            renderUserList();
            
        });
        
        function renderUserList(){
            var table = document.getElementById("userlist");
            table.innerHTML = "";
            userArray.forEach(function(item){
               var row = document.createElement("tr");
               var text = document.createElement("td");
               text.innerHTML =  item.firstname + " " + item.lastName +" " + item.ssn;
               row.appendChild(text);
               table.appendChild(row);
           }); 
        }
      
};
window.onload = JOSZEP.AddUser;
