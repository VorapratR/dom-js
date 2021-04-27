// setBlackList();
// console.log(window.YETT_BLACKLIST);

function setBlackList() {
    window.YETT_BLACKLIST = [
        /www\.google-analytics\.com/,
        /www\.googletagmanager\.com/,
    ];
    // var request = new XMLHttpRequest()
    // request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
    // request.onload = function() {
    //     var data = JSON.parse(this.response)
    //     if (request.status >= 200 && request.status < 400) {
    //         console.log(data);
    //         window.YETT_BLACKLIST = [
    //             /www\.google-analytics\.com/,
    //             /www\.googletagmanager\.com/,
    //         ];
    //     }
    // }
    // request.send()
}
document.addEventListener("DOMContentLoaded", setBlackList());