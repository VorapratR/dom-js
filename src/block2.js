function unblock() {
    console.log('unblock');
    window.yett.unblock(/www\.google-analytics\.com/)
    window.yett.unblock(/www\.googletagmanager\.com/)
}
let scr = document.getElementById('my-block');
let modifyModal = document.createElement('button');
modifyModal.id = "modifyModal";
modifyModal.className = "btn btn-light fixed-bottom mb-2 ml-1 ";

modifyModal.setAttribute("type", "button");
modifyModal.setAttribute("data-toggle", "modal");
modifyModal.setAttribute("data-target", "#modalModifyCookie");
modifyModal.setAttribute("onclick", "unblock()")
let imgCookie = document.createElement('img');
imgCookie.className = "fixed-bottom m-2";
imgCookie.setAttribute("src", "https://cdn.jsdelivr.net/gh/VorapratR/dom-js@main/assets/images/cookies.png");
imgCookie.setAttribute("width", "30px");

modifyModal.appendChild(imgCookie);
scr.parentNode.insertBefore(modifyModal, scr);
document.getElementById("modifyModal").style.zIndex = "5";