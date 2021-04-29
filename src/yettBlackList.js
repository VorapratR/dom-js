var cookies = [
    // /www\.google-analytics\.com/,
    // /www\.googletagmanager\.com/
];

var url = 'http://dev-cookie-consent.dosetech.co/api/cookie/1';

async function getBlockScript(method, url) {
    return await new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = async function() {
            if (this.status >= 200 && this.status < 300) {
                var data = JSON.parse(xhr.response);
                var result = data.detail[0];
                var arr = [];
                result.blackListScripts.forEach(element => {
                    arr.push(new RegExp(element.trim()));
                });
                resolve(arr);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

async function setBlockScript() {
    console.log("--setBlockScript--");

    let result = await getBlockScript("GET", url);

    console.log("--result--", result);

    window.YETT_BLACKLIST = result;
    console.log("--setBlockScript--");
}

document.addEventListener("DOMContentLoaded", setBlockScript());