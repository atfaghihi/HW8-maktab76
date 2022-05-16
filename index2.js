let userInfo = [];

function myFunction(username, password) { 

    let userName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;
    let obj = {username, password};
    userInfo.push(obj);

    localStorage.setItem('user', JSON.stringify(userInfo));  
}

// let infoUser = { username: "atefeh", password: 123456 };

// myFunction(username, password);




