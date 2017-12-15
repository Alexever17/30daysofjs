var sheet = window.document.styleSheets[0];

function timeGET() {
    var d = new Date();
    var h= d.getHours();
    var m= d.getMinutes();
    var s= d.getSeconds();
    calculateDEG(h,m,s);
}

function calculateDEG(h,m,s) {
    var hours_deg = 0;
    var seconds_deg = s*6;
    var minutes_deg = m*6 + seconds_deg/60;

    if (h<13) {
        hours_deg = h*30 + minutes_deg/12;
    } else {
        hours_deg = (h-12)*30 + minutes_deg/12;
    }
    seconds(seconds_deg+90);
    minutes(minutes_deg+90);
    hours(hours_deg+90);
}

function hours(deg) {
    var hour_rule = "@keyframes hour { 0% {transform: rotate("+ deg + "deg" + ");} 50% {transform: rotate(" + (deg+180) + "deg" + ");} 100% {transform: rotate(" + (deg+360) + "deg" + ");} }";
    sheet.insertRule(hour_rule , 0);
}

function minutes(deg) {
    var min_rule = "@keyframes min { 0% {transform: rotate("+ deg + "deg" + ");} 50% {transform: rotate(" + (deg+180) + "deg" + ");} 100% {transform: rotate(" + (deg+360) + "deg" + ");} }";
    sheet.insertRule(min_rule , 0);
}

function seconds(deg) {
    var sec_rule = "@keyframes sec { 0% {transform: rotate("+ deg + "deg" + ");} 50% {transform: rotate(" + (deg+180) + "deg" + ");} 100% {transform: rotate(" + (deg+360) + "deg" + ");} }";
    sheet.insertRule(sec_rule , 0);
}

timeGET();
