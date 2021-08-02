'use strict'

function sendMsg() {
    var elMail = document.querySelector('[name=Email]');
    var elSub = document.querySelector('[name=Subject]');
    var elMess = document.querySelector('[name=Message]');
    var mail = elMail.value;
    var sub = elSub.value;
    var mess = elMess.value;
    if (!mail) return
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=adirco123@gmail.com&su=${sub}&body=${mess}`
    elMail.value = '';
    elSub.value = '';
    elMess.value = '';
}