function findMember(callback) {
    let req = new XMLHttpRequest();
    req.onload = function () {
    
    let id = Number(document.getElementById("1").value);
    req.open("GET", "http://localhost:8080/SoloProj/api/members/findMember/"+id);
    req.send();
    }
callback();
function log(){
    console.log(req.responseText);
}
}

function deleteMember(){
   
    let req = new XMLHttpRequest();
    req.onload = function () {
       console.log(req.responseText);
    }
    let id = Number(document.getElementById("2").value);
    req.open("DELETE", "http://localhost:8080/SoloProj/api/members/deleteMember/"+id);
    req.send();
}

function createMember(){
    let user = {
         firstname: document.getElementById('firstname').value,
         lastname: document.getElementById('lastname').value
    };

    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(req.responseText);
    }
    
    req.open("POST","http://localhost:8080/SoloProj/api/members/createMember/");
    req.send(JSON.stringify(user));
}

function getAllMembers(){
    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(req.responseText)
    }
    req.open("GET","http://localhost:8080/SoloProj/api/members/getAllMembers")
    req.send();
}

function updateMember(){
    let user = {
         firstname: document.getElementById('firstname2').value,
         lastname: document.getElementById('lastname2').value
    };
    
    let req = new XMLHttpRequest();
    req.onload = function(){
        console.log(req.responseText);
    }
    let id = Number(document.getElementById("3").value);
    req.open("PUT","http://localhost:8080/SoloProj/api/members/updateMember/"+id);
    req.send(JSON.stringify(user));
}