var JOSZEP = JOSZEP || {};
JOSZEP.AddUser = function (){
        var body = document.querySelector("body");
        var previewBtn = document.getElementById("previewbutton");
        var form = document.getElementById("adduserform");
        var firstName = document.getElementById("firstname");
        var lastName = document.getElementById("lastname");
        var socialSecNumber = document.getElementById("socialsecnumber");
        var email = document.getElementById("email");
        var pwd = document.getElementById("pwd");
        var administrator = document.getElementById('administrator');
        var leader = document.getElementById('leader');
        var judge = document.getElementById('judge');
        var authority = "";
        var userArray = [];
        
        previewBtn.addEventListener("click", function(e){
            e.preventDefault();
            if(administrator.checked) {
            authority = administrator.value;
            }else if(leader.checked){
            authority = leader.value;
            }else if(judge.checked){
            authority = judge.value;  
            }else{
            }
            previewUser(authority);
            });
        
        function clearInputFields(){
            firstName.value = "";
            lastName.value = "";
            socialSecNumber.value = "";
            pwd.value = "";
            email.value = "";
            administrator.checked = false;
            judge.checked = false;
            leader.checked = false;
        }
        
        function addLineBreak(container){
            var linebreak = document.createElement('br');
            container.appendChild(linebreak);
        }
        function previewUser(authority){
            var container = document.createElement("div");
            container.setAttribute("class", "previewusercontainer");
            container.appendChild(document.createTextNode("Förnamn: " + firstName.value));
            addLineBreak(container);
            container.appendChild(document.createTextNode("Efternamn: " + lastName.value));
            addLineBreak(container);
            container.appendChild(document.createTextNode("Personnr: " + socialSecNumber.value));
            addLineBreak(container);
            container.appendChild(document.createTextNode("Email: " + email.value));
            addLineBreak(container);            
            container.appendChild(document.createTextNode("Lösenord: " + pwd.value));
            addLineBreak(container);
            container.appendChild(document.createTextNode("Behörighet: " + authority));
            addLineBreak(container);
            
            var saveBtn = document.createElement("button");
            saveBtn.innerHTML = "Spara";
            saveBtn.addEventListener("click", function(e){
                saveUser(container, authority);
                clearInputFields();
            });
            
            var cancelBtn = document.createElement("button");
            cancelBtn.innerHTML = "Avbryt";
            cancelBtn.addEventListener("click", function(e){
                container.innerHTML = "";
                container.style.visibility = "hidden";
            });
            
            container.appendChild(saveBtn);
            container.appendChild(cancelBtn);
            
            body.appendChild(container);
        }
        
        function saveUser(container, authority){
            var inputFields = document.querySelectorAll("adduserinput");
            userArray.push({"firstname":firstName.value, "lastname":lastName.value, "ssn": socialSecNumber.value,"pwd": pwd.value, "email":email.value, "authority": authority});
            renderUserList();
            clearInputFields();
            container.innerHTML = "";
            container.style.visibility = "hidden";
        }
        
        function renderUserList(){
            var table = document.getElementById("userlist");
            table.innerHTML = "";
            userArray.forEach(function(item){
                var index = userArray.indexOf(item);
                var row = document.createElement("tr");
                var text = document.createElement("td");
                var changeBtn = document.createElement("button");
                changeBtn.innerHTML = "Change";
                var deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = "Delete";
                text.innerHTML =  item.firstname + " " + item.lastname +" " + item.ssn;
               
                changeBtn.addEventListener("click", function(e){
                   changeUser(index);
                });
                deleteBtn.addEventListener("click", function(e){
                   deleteUser(index);
                });
                row.appendChild(text);
                row.appendChild(changeBtn);
                row.appendChild(deleteBtn);
                table.appendChild(row);
           }); 
        }
        function deleteUser(index){
            var dialogMessage = confirm("Sure you want to delete user?");
            if(dialogMessage === true ){
                userArray.splice(index, 1);
                renderUserList();
                return true;
            }else{
                return false;
            }
        }
        function changeUser(index){
            firstName.value = userArray[index].firstname;
            lastName.value = userArray[index].lastname;
            socialSecNumber.value = userArray[index].ssn;
            pwd.value = userArray[index].pwd;
            email.value = userArray[index].email;
            administrator.checked = false;
            judge.checked = false;
            leader.checked = false;
        }
};
window.onload = JOSZEP.AddUser;
