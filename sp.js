function createIframe(port) {
    document.write('<iframe src="http://127.0.0.1:' + port + '" style="display:none;"></iframe>');
}

var commonPorts = [
    21,     // FTP
    22,     // SSH
    23,     // Telnet
    25,     // SMTP
    53,     // DNS
    80,     // HTTP
    110,    // POP3
    143,    // IMAP
    443,    // HTTPS
    3389,   // RDP
    3306,   // MySQL
    5432,   // PostgreSQL
    6379,   // Redis
    8080,   // HTTP Alternate
    8443,   // HTTPS Alternate
];

for (var i = 0; i < commonPorts.length; i++) {
    createIframe(commonPorts[i]);
}
