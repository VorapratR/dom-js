function setBlackList() {
    window.YETT_BLACKLIST = [
        /www\.google-analytics\.com/,
        /www\.googletagmanager\.com/,
    ];

    var request = new XMLHttpRequest()
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
    request.onload = function() {

        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            window.yett.unblock(/www\.googletagmanager\.com/)
        }
    }
    request.send()
}
document.addEventListener("DOMContentLoaded", setBlackList());
// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }
// document.addEventListener("DOMContentLoaded",
//     readTextFile("/src/test.json", function(text) {
//         var data = JSON.parse(text);
//         console.log(data);
//         window.YETT_BLACKLIST = [
//             /www\.google-analytics\.com/,
//             /www\.googletagmanager\.com/,
//         ];
//     })
// );