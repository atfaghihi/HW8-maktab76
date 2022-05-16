let userInfo = [];

function myFunction(username, password) { 

    let userName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;
    let obj = {username, password};
    userInfo.push(obj);

    localStorage.setItem('user', JSON.stringify(userInfo)); 
    localStorage.getItem(userName);
    localStorage.getItem(password);
}

// function retrieveRecords(){ //retrieves items in the localStorage
//     console.log("retrieve records");
//      var key = document.getElementById('retrieveKey').value;
//     var records = window.localStorage.getItem(key);
//     var paragraph = document.createElement("p");
//     var infor = document.createTextNode(records);
//     paragraph.appendChild(infor);
//     var element = document.getElementById("retrieve");
//     element.appendChild(paragraph);
// }



