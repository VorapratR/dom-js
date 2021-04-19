window.onload = function () {
    writeHTML();
    checkedConsentInApp(true);
    setDefaultInnerHTML();
    setDefaultHref();
    setDefaultStyle();
    collapseDescription();
}

function writeHTML() {
    let data = CONSENTCOOKIE.getArgs();
    let ccmain = document.getElementById('cookieconsent');
    // cookie bar start
    let cookieBar = document.createElement('div');
    cookieBar.id = "cookieBar";
    cookieBar.className = "container-fluid px-3 py-3 px-lg-4 py-lg-3  my-2 d-flexjustify-content-center fixed-bottom ";

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
    cookieBarColEdit.className = "col-md my-1 py-0 d-flex align-items-center";
    let editCookie = document.createElement('button');
    editCookie.id = "editCookie";
    editCookie.className = "btn btn-outline-primary btn-block";
    editCookie.setAttribute("type", "button");
    editCookie.setAttribute("data-toggle", "modal");
    editCookie.setAttribute("data-target", "#modalModifyCookie");

    cookieBarColEdit.appendChild(editCookie);

    let cookieBarColSubmit = document.createElement('div');
    cookieBarColSubmit.className = "col-md my-1 py-0 d-flex align-items-center";
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

    // modifyModal start (cookie edit btn)
    let toolTipCookie = document.createElement('div');
    toolTipCookie.className = 'tool-tip-cookie'
    let modifyModal = document.createElement('button');
    modifyModal.id = "modifyModal";
    modifyModal.className = "btn cookie-btn btn-light fixed-bottom mb-2 ml-1 btn-fixed ";
    modifyModal.setAttribute("data-toggle", "modal");
    modifyModal.setAttribute("data-target", "#modalModifyCookie");
    let imgCookie = document.createElement('img');
    imgCookie.setAttribute("src", "https://cdn.jsdelivr.net/gh/VorapratR/dom-js@main/assets/images/cookies.png");
    imgCookie.setAttribute("width", "30px");
    let toolTipCookieText = document.createElement('span')
    toolTipCookieText.id = 'toolTipCookieText'
    toolTipCookieText.className = 'tool-tip-cookie-text'

    modifyModal.appendChild(imgCookie);
    modifyModal.appendChild(toolTipCookieText)
    toolTipCookie.appendChild(modifyModal)
    ccmain.parentNode.insertBefore(toolTipCookie, ccmain);
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
    modalDialog.className = "modal-dialog modal-dialog-centered";
    modalDialog.setAttribute("role", "document");

    let modalContent = document.createElement('div');
    modalContent.className = "modal-content";

    let modalHeader = document.createElement('div');
    modalHeader.className = "model-header-no-bottom";

    let elementOverModalTitle = document.createElement('div');
    elementOverModalTitle.className = "d-flex align-items-center"
    let modalModifyCookieTitle = document.createElement('h5');
    modalModifyCookieTitle.id = "modalModifyCookieTitle";
    modalModifyCookieTitle.className = "modal-title mr-3";
    let allAccept = document.createElement('button');
    allAccept.id = "allAccept";
    allAccept.className = "btn btn-primary px-md-3";
    allAccept.setAttribute("type", "button");
    allAccept.setAttribute('onclick', "saveAllAcceptClick()")

    elementOverModalTitle.appendChild(modalModifyCookieTitle);
    elementOverModalTitle.appendChild(allAccept);

    let closeBtn = document.createElement('button');
    closeBtn.className = "close";
    closeBtn.setAttribute('type', "button");
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.setAttribute('onclick', "closeModal()")
    let spanClose = document.createElement('span');
    spanClose.id = "closeIcon";
    spanClose.setAttribute("aria-hidden", "true");

    closeBtn.appendChild(spanClose);
    modalHeader.appendChild(elementOverModalTitle);
    modalHeader.appendChild(closeBtn);

    let modalBody = document.createElement('div')
    modalBody.className = "px-3"
    // Strictly Necessary Cookies
    let modalNecessaryCard = document.createElement('div');
    modalNecessaryCard.className = "card-black";
    let modalNecessaryCardBody = document.createElement('div');
    modalNecessaryCardBody.className = 'card-body';
    let headNecessaryElement = document.createElement('div');
    headNecessaryElement.className = "d-flex justify-content-between align-items-center"
    let necessaryTitle = document.createElement('b');
    necessaryTitle.textContent = data.necessaryTitleText;
    let necessaryStatus = document.createElement('b')
    necessaryStatus.className = "text-primary"
    necessaryStatus.textContent = data.necessaryStatusText;

    headNecessaryElement.appendChild(necessaryTitle)
    headNecessaryElement.appendChild(necessaryStatus)

    let necessaryDescription = document.createElement('div')
    necessaryDescription.className = "mt-1"
    necessaryDescription.textContent = data.necessaryDescriptionText
    let necessaryMoreMessage = document.createElement('a')
    necessaryMoreMessage.id = "necessaryMoreMessage"
    necessaryMoreMessage.className = "collapse"
    necessaryMoreMessage.textContent = data.necessaryMoreMessageText
    let necessaryMore = document.createElement('a')
    necessaryMore.id = "necessaryMoreId"
    necessaryMore.className = 'text-primary ml-1'
    necessaryMore.setAttribute('data-toggle', 'collapse')
    necessaryMore.setAttribute('data-target', '#necessaryMoreMessage')

    necessaryDescription.appendChild(necessaryMoreMessage);
    necessaryDescription.appendChild(necessaryMore)

    modalNecessaryCardBody.appendChild(headNecessaryElement)
    modalNecessaryCardBody.appendChild(necessaryDescription)
    modalNecessaryCard.appendChild(modalNecessaryCardBody)

    // Analytics Cookies
    let modalAnalyticsCard = document.createElement('div');
    modalAnalyticsCard.className = "card-black";
    let modalAnalyticsCardBody = document.createElement('div');
    modalAnalyticsCardBody.className = 'card-body';
    let headAnalyticsElement = document.createElement('div');
    headAnalyticsElement.className = "d-flex justify-content-between align-items-center"
    let analyticsTitle = document.createElement('b');
    analyticsTitle.textContent = data.analyticsTitleText;

    let analyticsCheckbox = document.createElement('input');
    analyticsCheckbox.id = "analyticsCheckbox";
    analyticsCheckbox.setAttribute('type', 'checkbox');
    analyticsCheckbox.setAttribute('data-toggle', 'toggle')
    analyticsCheckbox.setAttribute('data-size', 'sm')

    headAnalyticsElement.appendChild(analyticsTitle)
    headAnalyticsElement.appendChild(analyticsCheckbox)

    let analyticsDescription = document.createElement('div')
    analyticsDescription.className = "mt-1"
    analyticsDescription.textContent = data.analyticsDescriptionText;
    let analyticsMoreMessage = document.createElement('a')
    analyticsMoreMessage.id = "analyticsMoreMessage"
    analyticsMoreMessage.className = "collapse"
    analyticsMoreMessage.textContent = data.analyticsMoreMessageText
    let analyticsMore = document.createElement('a')
    analyticsMore.id = 'analyticsMoreId'
    analyticsMore.className = 'text-primary ml-1'
    analyticsMore.setAttribute('data-toggle', 'collapse')
    analyticsMore.setAttribute('data-target', '#analyticsMoreMessage')

    analyticsDescription.appendChild(analyticsMoreMessage);
    analyticsDescription.appendChild(analyticsMore)

    modalAnalyticsCardBody.appendChild(headAnalyticsElement)
    modalAnalyticsCardBody.appendChild(analyticsDescription)
    modalAnalyticsCard.appendChild(modalAnalyticsCardBody)

    modalBody.appendChild(modalNecessaryCard)
    modalBody.appendChild(modalAnalyticsCard)

    let modalFooter = document.createElement('div');
    modalFooter.className = "modal-footer";
    let saveAccept = document.createElement('button');
    saveAccept.id = "saveAccept";
    saveAccept.className = "btn btn-primary mx-1 px-2";
    saveAccept.setAttribute("type", "button");
    saveAccept.setAttribute('onclick', "saveAcceptClick()")

    modalFooter.appendChild(saveAccept);

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
    let data = CONSENTCOOKIE.getArgs();

    document.getElementById("messageInCookieBar").innerHTML = `
    ${data.messageInCookieBarText} 
    <a id="privacyPolicy" target="_blank"></a>
    <span id="and" class="ml-1">
        <a id="cookiePolicy" target="_blank"></a>
    </span>
    `;
    document.getElementById("privacyPolicy").innerHTML = `${data.privacyPolicyText}`;
    document.getElementById("and").innerHTML =
        `${data.andText} <a id="cookiePolicy" target="_blank"></a>`;
    document.getElementById("cookiePolicy").innerHTML = `${data.cookiePolicyText}`;
    document.getElementById("editCookie").innerHTML = data.editCookieText;

    document.getElementById("submitCookie").innerHTML = data.submitCookieText;
    document.getElementById("toolTipCookieText").innerHTML = data.modalModifyCookieTitleText
    document.getElementById("modalModifyCookieTitle").innerHTML = data.modalModifyCookieTitleText;

    document.getElementById("saveAccept").innerHTML = data.saveAcceptText;
    document.getElementById("allAccept").innerHTML = data.allAcceptText;

    document.getElementById("necessaryMoreId").innerHTML = data.showMoreText;
    document.getElementById("analyticsMoreId").innerHTML = data.showMoreText;

    document.getElementById("closeIcon").innerHTML = "&times;";
    // document.getElementById("necessaryTitle").textContent = data.necessaryTitleText;
    // document.getElementById("necessaryStatus").textContent = data.necessaryStatusText;
    // document.getElementById("necessaryDescription").textContent = data.necessaryDescriptionText;
    // console.log(document.getElementById("necessaryMoreMessageId"));
    // document.getElementById("necessaryMoreMessageId").textContent = data.necessaryMoreMessageText;

    // document.getElementById("analyticsTitle").innerHTML = data.analyticsTitleText;
    // document.getElementById("analyticsDescription").innerHTML = data.analyticsDescriptionText;
    // document.getElementById("analyticsMoreMessageId").innerHTML = data.analyticsMoreMessageText;
}

function collapseDescription() {
    let data = CONSENTCOOKIE.getArgs();

    $('#necessaryMoreId').click(function () {
        $(this).text(function (i, old) {
            return old.includes(data.showMoreOperator) ? data.showLessText : data.showMoreText;
        });
    });
    $('#analyticsMoreId').click(function () {
        $(this).text(function (i, old) {
            return old.includes(data.showMoreOperator) ? data.showLessText : data.showMoreText;
        });
    });
}

function setDefaultHref() {
    let data = CONSENTCOOKIE.getArgs();
    document.getElementById("privacyPolicy").href = data.privacyPolicyURL;
    document.getElementById("cookiePolicy").href = data.cookiePolicyURL;
}

function setDefaultStyle() {
    document.getElementById("modifyModal").style.zIndex = "5";
    document.getElementById("cookieBar").style.zIndex = "5";
    document.getElementById("cookieBar").style.border = "1px solid black";
    document.getElementById("cookieBar").style.borderRadius = "7px";
    document.getElementById("cookieBar").style.backgroundColor = "white";
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