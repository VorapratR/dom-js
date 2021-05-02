var cookies = [
    // /www\.google-analytics\.com/,
    // /www\.googletagmanager\.com/
];

var url = 'http://dev-cookie-consent.dosetech.co/api/cookie/1';

function getBlockScript(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                var data = JSON.parse(xhr.response);
                var result = data.detail[0];
                var arr = [];
                for (let index = 0; index < result.blackListScripts.length; index++) {
                    arr.push(new RegExp(result.blackListScripts[index].trim()));
                }
                resolve(arr);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

function setBlockScript() {
    console.log("--setBlockScript--");

    let result = getBlockScript("GET", url);

    console.log("--result--", result);

    window.YETT_BLACKLIST = result;
    console.log("--setBlockScript--");
}

document.addEventListener("DOMContentLoaded", setBlockScript());