const url = localStorage.getItem('url')
const info = localStorage.getItem('info')
var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 450,
    height : 450
});
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}
function makeCode () {		  
    qrcode.makeCode(url);
}
makeCode();
$("#qrcode").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    }).
    center();
//document.getElementById('qrcode').innerHTML = "<img src=https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl="+url+" class=img-fluid>"
setTimeout(function(){
    window.location.reload(1);
 }, 1000);
document.getElementById('info').innerHTML = "Valor inserido no QRCode R$"+info