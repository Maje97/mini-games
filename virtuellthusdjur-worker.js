let i = 0;

function spelTimer() {
    i++;
    postMessage(i);
    setTimeout("spelTimer()",1000);
}

spelTimer();