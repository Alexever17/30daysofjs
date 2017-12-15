var sheet = window.document.styleSheets[0];

function timeGET() {
    var d = new Date();
    var h= d.getHours();
    var m= d.getMinutes();
    var s= d.getSeconds();
    console.log(d);
    console.log(h);
    console.log(m);
    console.log(s);
    calculateDEG(h,m,s);
}

function calculateDEG(h,m,s) {
    var hours_deg = 0;
    var minutes_deg = 0;
    var seconds_deg = 0;

    seconds_deg = s*6;
    minutes_deg = m*6 + seconds_deg/60;
    if (h<13) {
        hours_deg = h*30 + minutes_deg/12;
    } else {
        hours_deg = (h-12)*30 + minutes_deg/12;
    }
    console.log(seconds_deg);
    console.log(minutes_deg);
    console.log(hours_deg);
    seconds(seconds_deg);
    minutes(minutes_deg);
    hours(hours_deg);

}

function hours(deg) {
    deg += 90;
    var deg2 = deg + 180;
    var deg3 = deg + 360;
    var hour_rule = "@keyframes hour { 0% {transform: rotate("+ deg + "deg" + ");} 50% {transform: rotate(" + deg2 + "deg" + ");} 100% {transform: rotate(" + deg3 + "deg" + ");} }";
    sheet.insertRule(hour_rule , 0);
}

function minutes(deg) {
    deg += 90;
    var deg2 = deg + 180;
    var deg3 = deg + 360;
    var min_rule = "@keyframes min { 0% {transform: rotate("+ deg + "deg" + ");} 50% {transform: rotate(" + deg2 + "deg" + ");} 100% {transform: rotate(" + deg3 + "deg" + ");} }";
    sheet.insertRule(min_rule , 0);
}

function seconds(deg) {
    deg += 90;
    var deg2 = deg + 180;
    var deg3 = deg + 360;
    var sec_rule = "@keyframes sec { 0% {transform: rotate("+ deg + "deg" + ");} 50% {transform: rotate(" + deg2 + "deg" + ");} 100% {transform: rotate(" + deg3 + "deg" + ");} }";
    sheet.insertRule(sec_rule , 0);
}


// hour-hand
// min-hand
// second-hand




timeGET();
