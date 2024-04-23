<!DOCTYPE html>
<html>
<head>
        <title> Volume kubus balok tabung </title>
        <script src="http://localhost/pweb232/Pertemuan4/kuis1.js">

        </script>
        <link rel="stylesheet" href="kuis1.css">
    </head>

<body>
    <h2> FORM HITUNG VOLUME </h2>

        <input type="radio" id="option1" name="pilihan" onclick="tampil('vbalok')">
        <label for="option1" class="balok"> Volume Balok </label>

        <input type="radio" id="option2" name="pilihan" onclick="tampil('vkubus')">
        <label for="option2" class="kubus"> Volume Kubus </label>

        <input type="radio" id="option3" name="pilihan" onclick="tampil('vtabung')">
        <label for="option3" class="tabung"> Volume Tabung </label><br><br>

        <input type="radio" id="option4" name="pilihan" onclick="tampil('lpbalok')">
        <label for="option4" class="balok"> lp Balok </label>

        <input type="radio" id="option5" name="pilihan" onclick="tampil('lpkubus')">
        <label for="option5" class="kubus"> lp Kubus </label>

        <input type="radio" id="option6" name="pilihan" onclick="tampil('lptabung')">
        <label for="option6" class="tabung"> lp Tabung </label>

        <form id ="formBalok" class="formBalok" style="display:none;">
            <label for="panjang"> Panjang: </label><br>
            <input type="text" class="panjang"></input><br><br>

            <label for="lebar"> Lebar: </label><br>
            <input type="text" class="lebar"></input><br><br>

            <label for="tinggi"> Tinggi: </label><br>
            <input type="text" class="tinggi"></input><br><br>

            <button type="button" class="hitung" onclick="volume('balok')"> Hitung </button>
            <br><br>
        </form><br>

        <form id="formKubus" class="formKubus" style="display:none;">
            <label for="sisi" class="balok"> Sisi: </label><br>
            <input type="text" class="sisi"></input><br><br>

            <button type="button" class="hitung" onclick="volume('kubus')"> Hitung </button>
            <br><br>
        </form><br>

        <form id ="formTabung" class="formTabung" style="display:none;">
            <label for="jarijari"> Jarijari: </label><br>
            <input type="text" class="jarijari"></input><br><br>

            <label for="tinggi"> Tinggi: </label><br>
            <input type="text" class="tinggi"></input><br><br>

            <button type="button" class="hitung" onclick="volume('tabung')"> Hitung </button>
            <br><br>
        </form><br>

        <div id="hasil"></div>
    </body>

</html>