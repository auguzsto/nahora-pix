const url = localStorage.getItem('url')
document.getElementById('qrcode').innerHTML = "<img src=https://chart.googleapis.com/chart?chs=450x450&cht=qr&chl="+url+">"
setTimeout(function(){
    window.location.reload(1);
 }, 1000);