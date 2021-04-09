const observer = new MutationObserver(mutations => {
    mutations.forEach(({ addedNodes }) => {
        console.log(addedNodes);
        addedNodes.forEach(node => {
            // For each added script tag
            if (node.nodeType === 1 && node.tagName === 'SCRIPT') {
                const src = node.src || ''
                if (src == 'https://www.googletagmanager.com/gtag/js?id=UA-192511574-2' || src == 'https://www.google-analytics.com/analytics.js') {
                    node.type = 'text/plain'
                    node.setAttribute("data-categories", "analytics");
                }
            }
        })
    })
})
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
})

function unblock() {
    console.log('unblock');
    var all = document.getElementsByTagName('SCRIPT')

    for (var i = 0, max = all.length; i < max; i++) {
        // Do something with the element here
        if (all[i].outerHTML.includes('data-categories="analytics"')) {
            all[i].type = 'text/javascript'
        }
    }
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