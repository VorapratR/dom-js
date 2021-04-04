// document.write('<p id="syndicated-content">Here is some syndicated content.</p>');
// var newcontent = document.createElement('p');
// newcontent.id = 'syndicated-content';
// newcontent.className = "dsfsf"
// newcontent.appendChild(document.createTextNode('Here is some syndicated content.'));
// var demoModalbtn = document.createElement('button')
// demoModalbtn.type = "button"
// demoModalbtn.className = "btn btn-primary"
// demoModalbtn.setAttribute("data-toggle", "modal")
// demoModalbtn.setAttribute("data-target", "#exampleModal")
// demoModalbtn.appendChild(document.createTextNode('Here is some syndicated content.'));
// var scr = document.getElementById('syndication');
// scr.parentNode.insertBefore(newcontent, scr);
// scr.parentNode.insertBefore(demoModalbtn, scr);

document.write(`
<div id="cookieBar" class="container-fluid p-2 d-flexjustify-content-center fixed-bottom ">
<div class="row">
    <div class="col-sm-8 d-flex align-items-center">
        <span id="messageInCookieBar">
            <a id="privacyPolicy" target="_blank"></a>
            <span id="and" class="ml-1">
                <a id="cookiePolicy" target="_blank"></a>
            </span>
        </span>
    </div>
    <div class="col-sm my-1 d-flex align-items-center">
        <button id="editCookie" type="button" class="btn btn-outline-primary btn-block " data-toggle="modal" data-target="#modalModifyCookie">
        </button>
    </div>
    <div class="col-sm  my-1  d-flex align-items-center">
        <button id="submitCookie" type="button" class="btn btn-primary btn-block" onclick="saveCookie()"></button>
    </div>
</div>
</div>


<button id="modifyModal" type="button" class="btn fixed-bottom mb-2 ml-1" data-toggle="modal" data-target="#modalModifyCookie">
<img src="/assets/images/cookies.png" width="30px" >
</button>
<div class="modal fade" id="modalModifyCookie" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="modalModifyCookie" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="modalModifyCookieTitle"></h5>
            <button type="button" class="close" aria-label="Close" onclick="closeModal(this)">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div class="container">
                <div class="row">
                    <div class="col-8">
                        Strictly Necessary Cookies
                    </div>
                    <div class="col-4 text-right">
                        <input type="checkbox" id="strictlyCheckbox">
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        Analytics Cookies
                    </div>
                    <div class="col-4 text-right">
                        <input type="checkbox" id="analyticsCheckbox">
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-8">
                        Preference Cookies
                    </div>
                    <div class="col-4">
                        <input type="checkbox" id="preferenceCheckbox">
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        Advertising Cookies
                    </div>
                    <div class="col-4">
                        <input type="checkbox" id="advertisingCheckbox">
                    </div>
                </div> -->
            </div>
            <div class="container my-3">
                <div id="modalBodyMessage"></div>
            </div>
        </div>
        <div class="modal-footer">
            <button id="saveAccept" type="button" class="btn btn-outline-dark  mx-1 px-2" onclick="saveAcceptClick()">
            </button>
            <button id="allAccept" type="button" class="btn btn-primary px-2" onclick="saveAllAcceptClick()">
            </button>
        </div>
    </div>
</div>
`)



window.onload = function() {
    checkedConsentInApp();
    setDefaultInnerHTML();
    setDefaultHref();
    setDefaultCheckBox();
    setDefaultStyle();
}

function saveAcceptClick() {
    let dataCookie = {
        analytics: document.getElementById("analyticsCheckbox").checked
    }
    let newCookie = " consent-cookie-preference" + '=' + JSON.stringify(dataCookie) + ";"
    if (readCookie('consent-cookie')) {
        document.cookie = newCookie
        console.log(document.cookie);
    } else {
        document.cookie = "consent-cookie" + "=" + "allows" + ";"
        document.cookie = newCookie
        console.log(document.cookie);
    }
    $('#modalModifyCookie').modal('hide');
    checkedConsentInApp();

}

function saveAllAcceptClick() {
    document.getElementById("analyticsCheckbox").checked = true;
    saveAcceptClick();
}

function saveCookie() {
    // document.cookie = "consent-cookie" + "=" + "allows" + ";";
    // checkedConsentInApp();
    document.getElementById("analyticsCheckbox").checked = true;
    saveAcceptClick();
}

function checkedConsentInApp() {
    document.getElementById("cookieBar").style.cssText = "display:block"
    document.getElementById("modifyModal").style.cssText = 'display:none'
    if (readCookie('consent-cookie')) {
        if (readCookie('consent-cookie') == "allows") {
            document.getElementById("cookieBar").style.cssText = 'display:none!important';
            document.getElementById("modifyModal").style.cssText = 'display:block'
        }
    }
}

function setDefaultInnerHTML() {
    let dataText = CONSENTCOOKIE.getArgs();

    document.getElementById("messageInCookieBar").innerHTML = `
    ${dataText.messageInCookieBarText} 
    <a id="privacyPolicy" target="_blank"></a>
    <span id="and" class="ml-1">
        <a id="cookiePolicy" target="_blank"></a>
    </span>
    `;
    document.getElementById("privacyPolicy").innerHTML = `${dataText.privacyPolicyText}`
    document.getElementById("and").innerHTML =
        `${dataText.andText} <a id="cookiePolicy" target="_blank"></a>`
    document.getElementById("cookiePolicy").innerHTML = `${dataText.cookiePolicyText}`
    document.getElementById("editCookie").innerHTML = dataText.editCookieText;
    document.getElementById("submitCookie").innerHTML = dataText.submitCookieText;
    document.getElementById("modalModifyCookieTitle").innerHTML = dataText.modalModifyCookieTitleText;
    document.getElementById("modalBodyMessage").innerHTML = dataText.modalBodyMessageText

    document.getElementById("saveAccept").innerHTML = dataText.saveAcceptText;
    document.getElementById("allAccept").innerHTML = dataText.allAcceptText;
}

function setDefaultCheckBox() {
    document.getElementById("strictlyCheckbox").disabled = true
    document.getElementById("strictlyCheckbox").checked = true
}

function setDefaultHref() {
    document.getElementById("privacyPolicy").href = "https://nawaplastic.com/th/privacy-policy.php";
    document.getElementById("cookiePolicy").href = "https://nawaplastic.com/th/privacy-policy.php";
}

function setDefaultStyle() {
    document.getElementById("modifyModal").style.zIndex = "5";
    document.getElementById("cookieBar").style.zIndex = "5";
    document.getElementById("cookieBar").style.backgroundColor = "rgb(239, 239, 239)";
}



function closeModal() {
    if (!readCookie("consent-cookie-preference")) {
        document.getElementById("analyticsCheckbox").checked = false;
    }
    $('#modalModifyCookie').modal('hide');
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}