const url = localStorage.getItem('url')
const info = localStorage.getItem('info')
document.getElementById('qrcode').innerHTML = "<img src=https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl="+url+" class=img-fluid>"
setTimeout(function(){
    window.location.reload(1);
 }, 1000);
document.getElementById('info').innerHTML = "Valor inserido no QRCode R$"+info