(function () {
    init()
    addListener()
})()

let TitleWidth = 1200

function init() {
    console.log('-- wcmd init')
    //todo 特殊blog形式初始化

}

function addListener() {
    addWindowListener()
    addIFrameListener()
}

function addWindowListener() {
    function adjustScale() {
        document.documentElement.style.setProperty('--title-scale-x', Math.min(1, window.innerWidth / TitleWidth));
        document.documentElement.style.setProperty('--view-width', window.innerWidth + 'px');
    }
    // 初始化和监听窗口大小变化
    window.onload = adjustScale;
    window.onresize = adjustScale;
}

function addIFrameListener() {
    const iframe = document.getElementById("page_frame");
    iframe.onload = () => {
        const body = iframe.contentWindow.document.body;
        const cssLink = document.createElement("link");
        cssLink.href = "../../../assets/css/main.css";
        cssLink.rel = "stylesheet";
        cssLink.type = "text/css";
        body.appendChild(cssLink);
        updateViewMiniState(iframe.contentWindow.document.location.search)
    }
}

let mini_status = true

let running = 'running'
let paused = 'paused'

function updateViewMiniState(search) {
    const iframe = document.getElementById("custom-title");
    let bak = mini_status
    mini_status = search.includes("mini=true")
    if (bak != mini_status) {
        iframe.classList.remove('title-animation')
        iframe.classList.remove('title-animation-reverse')
        setTimeout(() => {
            iframe.classList.add(!mini_status ? 'title-animation' : 'title-animation-reverse')
        }, 1);
    }
}

// function addTitleListener() {
//     const iframe = document.getElementById("custom-title");
//     iframe.addEventListener("webkitAnimationEnd", callfunction, false);
//     iframe.addEventListener("animationend", callfunction, false);
//     iframe.addEventListener("oanimationend", callfunction, false);

//     let callfunction = () => {

//     }
// }
