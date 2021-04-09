window.onload = function() {
    writeHTML();
    checkedConsentInApp(true);
    setDefaultInnerHTML();
    setDefaultHref();
    setDefaultCheckBox();
    setDefaultStyle();
}

function writeHTML() {
    let ccmain = document.getElementById('cookieconsent');
    // cookie bar start
    let cookieBar = document.createElement('div');
    cookieBar.id = "cookieBar";
    cookieBar.className = "container-fluid p-2 d-flexjustify-content-center fixed-bottom";

    let cookieBarRow = document.createElement('div');
    cookieBarRow.className = "row";

    let cookieBarColTitle = document.createElement('div');
    cookieBarColTitle.className = "col-lg-8 col-md-12 d-flex align-items-center";
    let messageInCookieBar = document.createElement('span');
    messageInCookieBar.id = "messageInCookieBar";
    let privacyPolicyTitle = document.createElement('a');
    privacyPolicyTitle.id = "privacyPolicy";
    privacyPolicyTitle.setAttribute("target", "_blank");
    let andTitle = document.createElement('span');
    andTitle.id = "and";
    andTitle.className = "ml-1";
    let cookiePolicyTitle = document.createElement('a');
    cookiePolicyTitle.id = "cookiePolicy";
    cookiePolicyTitle.setAttribute("target", "_blank");

    andTitle.appendChild(cookiePolicyTitle);
    messageInCookieBar.appendChild(privacyPolicyTitle);
    messageInCookieBar.appendChild(andTitle);
    cookieBarColTitle.appendChild(messageInCookieBar);

    let cookieBarColEdit = document.createElement('div');
    cookieBarColEdit.className = "col-md my-1 d-flex align-items-center";
    let editCookie = document.createElement('button');
    editCookie.id = "editCookie";
    editCookie.className = "btn btn-outline-primary btn-block";
    editCookie.setAttribute("type", "button");
    editCookie.setAttribute("data-toggle", "modal");
    editCookie.setAttribute("data-target", "#modalModifyCookie");

    cookieBarColEdit.appendChild(editCookie);

    let cookieBarColSubmit = document.createElement('div');
    cookieBarColSubmit.className = "col-md my-1  d-flex align-items-center";
    let submitCookie = document.createElement('button');
    submitCookie.id = "submitCookie";
    submitCookie.className = "btn btn-primary btn-block";
    submitCookie.setAttribute("type", "button");
    submitCookie.setAttribute("onclick", "saveCookie()")

    cookieBarColSubmit.appendChild(submitCookie);

    cookieBarRow.appendChild(cookieBarColTitle);
    cookieBarRow.appendChild(cookieBarColEdit);
    cookieBarRow.appendChild(cookieBarColSubmit);

    cookieBar.appendChild(cookieBarRow);
    ccmain.parentNode.insertBefore(cookieBar, ccmain);
    // cookie bar end

    // modifyModal start
    let modifyModal = document.createElement('button');
    modifyModal.id = "modifyModal";
    modifyModal.className = "btn btn-light fixed-bottom mb-2 ml-1 ";
    modifyModal.setAttribute("type", "button");
    modifyModal.setAttribute("data-toggle", "modal");
    modifyModal.setAttribute("data-target", "#modalModifyCookie");
    let imgCookie = document.createElement('img');
    imgCookie.className = "fixed-bottom m-2";
    imgCookie.setAttribute("src", "https://cdn.jsdelivr.net/gh/VorapratR/dom-js@main/assets/images/cookies.png");
    imgCookie.setAttribute("width", "30px");

    modifyModal.appendChild(imgCookie);
    ccmain.parentNode.insertBefore(modifyModal, ccmain);
    // modifyModal end

    // cookie modal start
    let modalModifyCookie = document.createElement('div');
    modalModifyCookie.id = "modalModifyCookie";
    modalModifyCookie.className = "modal fade";
    modalModifyCookie.setAttribute("data-backdrop", "static");
    modalModifyCookie.setAttribute("tabindex", "-1");
    modalModifyCookie.setAttribute("role", "dialog");
    modalModifyCookie.setAttribute("aria-labelledby", "modalModifyCookie");
    modalModifyCookie.setAttribute("aria-hidden", "true");

    let modalDialog = document.createElement('div');
    modalDialog.className = "modal-dialog";
    modalDialog.setAttribute("role", "document");

    let modalContent = document.createElement('div');
    modalContent.className = "modal-content";

    let modalHeader = document.createElement('div');
    modalHeader.className = "modal-header";

    let modalModifyCookieTitle = document.createElement('h5');
    modalModifyCookieTitle.id = "modalModifyCookieTitle";
    modalModifyCookieTitle.className = "modal-title";
    let closeBtn = document.createElement('button');
    closeBtn.className = "close";
    closeBtn.setAttribute('type', "button");
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.setAttribute('onclick', "closeModal()")
    let spanClose = document.createElement('span');
    spanClose.id = "closeIcon";
    spanClose.setAttribute("aria-hidden", "true");

    closeBtn.appendChild(spanClose);
    modalHeader.appendChild(modalModifyCookieTitle);
    modalHeader.appendChild(closeBtn);

    let modalBody = document.createElement('div');
    modalBody.className = "modal-body";
    let modalBodyContainer = document.createElement('div');
    modalBodyContainer.className = "container";

    let modalBodyRowStrictly = document.createElement('div');
    modalBodyRowStrictly.className = "row";
    let modalStrictlyTitle = document.createElement('div');
    modalStrictlyTitle.className = "col-8";
    modalStrictlyTitle.appendChild(document.createTextNode("Strictly Necessary Cookies"));
    let modalColStrictly = document.createElement('div');
    modalColStrictly.className = "col-4 text-right";
    let strictlyCheckbox = document.createElement('input');
    strictlyCheckbox.id = "strictlyCheckbox";
    strictlyCheckbox.setAttribute("type", "checkbox");

    modalColStrictly.appendChild(strictlyCheckbox);
    modalBodyRowStrictly.appendChild(modalStrictlyTitle);
    modalBodyRowStrictly.appendChild(modalColStrictly);

    let modalBodyRowAnalytics = document.createElement('div');
    modalBodyRowAnalytics.className = "row";
    let modalAnalyticsTitle = document.createElement('div');
    modalAnalyticsTitle.className = "col-8";
    modalAnalyticsTitle.appendChild(document.createTextNode("Analytics Cookies"));
    let modalColAnalytics = document.createElement('div');
    modalColAnalytics.className = "col-4 text-right";
    let analyticsCheckbox = document.createElement('input');
    analyticsCheckbox.id = "analyticsCheckbox";
    analyticsCheckbox.setAttribute("type", "checkbox");

    modalColAnalytics.appendChild(analyticsCheckbox);
    modalBodyRowAnalytics.appendChild(modalAnalyticsTitle);
    modalBodyRowAnalytics.appendChild(modalColAnalytics);

    modalBodyContainer.appendChild(modalBodyRowStrictly);
    modalBodyContainer.appendChild(modalBodyRowAnalytics);

    let modalBodyContainerMessage = document.createElement('div');
    modalBodyContainerMessage.className = "container my-3";
    let modalBodyMessage = document.createElement('div');
    modalBodyMessage.id = "modalBodyMessage";

    modalBodyContainerMessage.appendChild(modalBodyMessage);

    modalBody.appendChild(modalBodyContainer);
    modalBody.appendChild(modalBodyContainerMessage);

    let modalFooter = document.createElement('div');
    modalFooter.className = "modal-footer";
    let saveAccept = document.createElement('button');
    saveAccept.id = "saveAccept";
    saveAccept.className = "btn btn-outline-dark mx-1 px-2";
    saveAccept.setAttribute("type", "button");
    saveAccept.setAttribute('onclick', "saveAcceptClick()")
    let allAccept = document.createElement('button');
    allAccept.id = "allAccept";
    allAccept.className = "btn btn-primary px-2";
    allAccept.setAttribute("type", "button");
    allAccept.setAttribute('onclick', "saveAllAcceptClick()")

    modalFooter.appendChild(saveAccept);
    modalFooter.appendChild(allAccept);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);
    modalModifyCookie.appendChild(modalDialog);

    ccmain.parentNode.insertBefore(modalModifyCookie, ccmain);
    // cookie modal end
}

function saveAcceptClick() {
    let dataCookie = {
        analytics: document.getElementById("analyticsCheckbox").checked
    }
    let newCookie = " consent-cookie-preference" + '=' + JSON.stringify(dataCookie) + ";"
    if (readCookie('consent-cookie')) {
        document.cookie = newCookie
            // console.log(document.cookie);
    } else {
        document.cookie = "consent-cookie" + "=" + "allows" + ";"
        document.cookie = newCookie
            // console.log(document.cookie);
    }
    $('#modalModifyCookie').modal('hide');
    checkedConsentInApp(false);

}

function saveAllAcceptClick() {
    document.getElementById("analyticsCheckbox").checked = true;
    saveAcceptClick();
}

function saveCookie() {
    console.log('saveCookie');
    document.cookie = "consent-cookie" + "=" + "allows" + ";";
    checkedConsentInApp(false);
    document.getElementById("analyticsCheckbox").checked = true;
    saveAcceptClick();
}

function checkedConsentInApp(fromWindowLoad) {
    document.getElementById("cookieBar").style.cssText = "display:block";
    document.getElementById("modifyModal").style.cssText = 'display:none';
    if (readCookie('consent-cookie')) {
        if (readCookie('consent-cookie') == "allows") {
            document.getElementById("cookieBar").style.cssText = 'display:none!important';
            document.getElementById("modifyModal").style.cssText = 'display:inline';
        }
    }

    let consentCookiePreference = readCookie('consent-cookie-preference');

    if (consentCookiePreference) {
        consentCookiePreference = JSON.parse(consentCookiePreference);
        let data = CONSENTCOOKIE.getArgs();
        blockAnalytics();
        if (consentCookiePreference.analytics) {
            unblockAnalytics();
        }
        // else {
        //     if (fromWindowLoad == false) {
        //         blockAnalytics();
        //     }
        // }
    }

}

// function blockAnalytics() {
//     window.location.reload();
// }

function unblockAnalytics() {
    window.yett.unblock(/www\.google-analytics\.com/)
    window.yett.unblock(/www\.googletagmanager\.com/)
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
    document.getElementById("privacyPolicy").innerHTML = `${dataText.privacyPolicyText}`;
    document.getElementById("and").innerHTML =
        `${dataText.andText} <a id="cookiePolicy" target="_blank"></a>`;
    document.getElementById("cookiePolicy").innerHTML = `${dataText.cookiePolicyText}`;
    document.getElementById("editCookie").innerHTML = dataText.editCookieText;
    document.getElementById("submitCookie").innerHTML = dataText.submitCookieText;
    document.getElementById("modalModifyCookieTitle").innerHTML = dataText.modalModifyCookieTitleText;
    document.getElementById("modalBodyMessage").innerHTML = dataText.modalBodyMessageText;

    document.getElementById("saveAccept").innerHTML = dataText.saveAcceptText;
    document.getElementById("allAccept").innerHTML = dataText.allAcceptText;

    document.getElementById("closeIcon").innerHTML = "&times;";
}

function setDefaultCheckBox() {
    document.getElementById("strictlyCheckbox").disabled = true;
    document.getElementById("strictlyCheckbox").checked = true;
}

function setDefaultHref() {
    let data = CONSENTCOOKIE.getArgs();
    document.getElementById("privacyPolicy").href = data.privacyPolicyURL;
    document.getElementById("cookiePolicy").href = data.cookiePolicyURL;
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