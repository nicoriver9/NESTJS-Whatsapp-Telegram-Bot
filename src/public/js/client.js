// public/client.js
var socket = io.connect('http://localhost:3000');

socket.on('qr', function (data) {
  document.getElementById('qrcode').innerHTML = '<img src="' + data + '">';
});
