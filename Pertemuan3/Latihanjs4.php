<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if</h2>

<p id="isi">Good Evening!</p>

<form>
30%uts
<input type="number" name="uts" id="uts"> <br><br> 
30%uas
<input type="number" name="uas" id="uas"> <br><br> 
40%tugas
<input type="number" name="tugas" id="tugas"> <br><br> 

<button type="button" onclick = "myfungsi()">hitung</button> <br>
<input type="number" name="hasil" id="hasil">
</form>

<script>
    function myfungsi()
{
let uts1 = document.getElementById("uts").value;
let uas1 = document.getElementById("uas").value;
let tugas1 = document.getElementById("tugas").value;
let total = parseInt (uts1)*0,3 + parseInt(uas1)*0,3 + parseInt(tugas1)*0,4;
document.getElementById("hasil").value = total;

let nilai = document.getElementById("hasil").value;

if (nilai >= 80) {
  document.getElementById("isi").innerHTML = "A";
}
else if (nilai >=70)
{
    document.getElementById("isi").innerHTML = "B";
}
else
{
    document.getElementById("isi").innerHTML = "C";
}
}

</script>
</body>
</html>
