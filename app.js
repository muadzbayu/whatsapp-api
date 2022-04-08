const { Client, LocalAuth } = require('whatsapp-web.js');
var qrcode = require('qrcode-terminal');
const client = new Client();



client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr);
});

client.on('ready', () => {
    console.log('Whatsapp is ready!');
});

client.on('message', msg => {
    if (msg.body == 'p') {
        msg.reply('Ada apa?');
    }
});

client.initialize();