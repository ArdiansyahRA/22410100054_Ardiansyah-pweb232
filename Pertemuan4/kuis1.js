function tampil(type) {
    var formVBalok = document.getElementById('formVBalok');
    var formVKubus = document.getElementById('formVKubus');
    var formVTabung = document.getElementById('formVTabung');
    var formlpBalok = document.getElementById('formlpBalok');
    var formlpKubus = document.getElementById('formlpKubus');
    var formlpTabung = document.getElementById('formlpTabung');

    if(type === 'vbalok'){
        formVBalok.style.display = 'block';
        formVKubus.style.display = 'none';
        formVTabung.style.display = 'none';
        formlpBalok.style.display = 'none';
        formlpKubus.style.display = 'none';
        formlpTabung.style.display = 'none';
        hasil.innerHTML = " ";
    } else if(type === 'vkubus'){
        formVKubus.style.display = 'block';
        formVBalok.style.display = 'none';
        formVTabung.style.display = 'none';
        formlpBalok.style.display = 'none';
        formlpKubus.style.display = 'none';
        formlpTabung.style.display = 'none';
    } else if(type === 'vtabung'){
        formVTabung.style.display = 'block';
        formVKubus.style.display = 'none';
        formVBalok.style.display = 'none';
        formlpBalok.style.display = 'none';
        formlpKubus.style.display = 'none';
        formlpTabung.style.display = 'none';
    } else if(type === 'lpbalok'){
        formVBalok.style.display = 'none';
        formVKubus.style.display = 'none';
        formVTabung.style.display = 'none';
        formlpBalok.style.display = 'block';
        formlpKubus.style.display = 'none';
        formlpTabung.style.display = 'none';
    } else if(type === 'lpkubus'){
        formVBalok.style.display = 'none';
        formVKubus.style.display = 'none';
        formVTabung.style.display = 'none';
        formlpKubus.style.display = 'block';
        formlpBalok.style.display = 'none';
        formlpTabung.style.display = 'none';
    } else if(type === 'lptabung'){
        formVBalok.style.display = 'none';
        formVKubus.style.display = 'none';
        formVTabung.style.display = 'none';
        formlpTabung.style.display = 'block';
        formlpKubus.style.display = 'none';
        formlpBalok.style.display = 'none';
    }
}

function volume(type){
    var hasil = document.getElementById('hasil');

    if(type === 'vbalok'){
        var panjang = parseFloat(document.querySelector('.formVBalok .panjang').value);
        var lebar = parseFloat(document.querySelector('.formVBalok .lebar').value);
        var tinggi = parseFloat(document.querySelector('.formVBalok .tinggi').value);

        var volume = panjang*lebar*tinggi;
        hasil.innerHTML = "Volume Balok = " + volume;
    } else if(type === 'vkubus'){
        var sisi = parseFloat(document.querySelector('.formVKubus .sisi').value);

        var volume = sisi*sisi*sisi;
        hasil.innerHTML = "Volume Kubus = " + volume;
    } else if(type === 'vtabung'){
        var jarijari = parseFloat(document.querySelector('.formVTabung .jarijari').value);
        var tinggi = parseFloat(document.querySelector('.formVTabung .tinggi').value)
        var volume = 3.14*jarijari*jarijari*tinggi;
        hasil.innerHTML = "Volume Tabung = " + volume;
        
    } 
}

function luaspermukaan(type){
    var hasil = document.getElementById('hasil');

    if(type === 'lpbalok'){
        var panjang = parseFloat(document.querySelector('.formlpBalok .panjang').value);
        var lebar = parseFloat(document.querySelector('.formlpBalok .lebar').value);
        var tinggi = parseFloat(document.querySelector('.formlpBalok .tinggi').value);

        var luaspermukaan = 2*[(panjang*lebar)+(panjang*tinggi)+(lebar*tinggi)];
        hasil.innerHTML = "Luas Permukaan Balok = " + luaspermukaan;
    } else if(type === 'lpkubus'){
        var sisi = parseFloat(document.querySelector('.formlpKubus .sisi').value);
    
        var luaspermukaan = 6 * sisi * sisi;
        hasil.innerHTML = "Luas Permukaan Kubus = " + luaspermukaan;
    
    } else if(type === 'lptabung'){
        var jarijari = parseFloat(document.querySelector('.formlpTabung .jarijari').value);
        var tinggi = parseFloat(document.querySelector('.formlpTabung .tinggi').value)

        var luaspermukaan = 2*Math.PI*jarijari*(jarijari+tinggi);
        hasil.innerHTML = "Luas Permukaan Tabung = " + luaspermukaan;
    } 
}

function checkIfMultipleChecked() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (checkboxes.length > 1) {
        alert("Anda hanya boleh memilih satu opsi.");
    }
}
