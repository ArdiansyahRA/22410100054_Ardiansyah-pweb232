<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>

<form>
start :
<input type="number" name="start" id="start"><br><br>
end :
<input type="number" name="end" id="end"><br><br>

<button type="button" onclick = "myfungsi()">Tampil</button>
</form>
<div id="hasil"></div>

<script>

function myfungsi()
{
let start = document.getElementById("start").value;
let end = document.getElementById("end").value;
let hasil = document.getElementById("hasil");

hasil.innerHTML = "";
for(let i = start; i<= end; i++) {
  hasil.innerHTML += i + "<br>"; 
}
}
</script>

</body>
</html>
