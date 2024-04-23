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
    } else if(type === 'vkubus'){
        formVKubus.style.display = 'block';
        formVBalok.style.display = 'none';
        formVTabung.style.display = 'none';
    } else if(type === 'vtabung'){
        formVTabung.style.display = 'block';
        formVKubus.style.display = 'none';
        formVBalok.style.display = 'none';
    } else if(type === 'lpbalok'){
        formlpBalok.style.display = 'block';
        formlpKubus.style.display = 'none';
        formlpTabung.style.display = 'none';
    } else if(type === 'lpkubus'){
        formlpKubus.style.display = 'block';
        formlpBalok.style.display = 'none';
        formlpTabung.style.display = 'none';
    } else if(type === 'lptabung'){
        formlpTabung.style.display = 'block';
        formlpKubus.style.display = 'none';
        formlpBalok.style.display = 'none';
    }
}

function volume(type){
    var hasil = document.getElementById('hasil');

    if(type === 'vbalok'){
        var panjang = parseFloat(document.querySelector('.formBalok .panjang').value);
        var lebar = parseFloat(document.querySelector('.formBalok .lebar').value);
        var tinggi = parseFloat(document.querySelector('.formBalok .tinggi').value);
        var volume = panjang*lebar*tinggi;
        hasil.innerHTML = "Volume Balok = " + volume;
    } else if(type === 'vkubus'){
        var sisi = parseFloat(document.querySelector('.formKubus .sisi').value);
        var volume = sisi*sisi*sisi;
        hasil.innerHTML = "Volume Kubus = " + volume;
    } else if(type === 'vtabung'){
        var jarijari = parseFloat(document.querySelector('.formTabung .jarijari').value);
        var tinggi = parseFloat(document.querySelector('.formTabung .tinggi').value)
        var volume = 3.14*jarijari*tinggi;
        hasil.innerHTML = "Volume Tabung = " + volume;
        
    } 
}

function luaspermukaan(type){
    var hasil = document.getElementById('hasil');

    if(type === 'lpbalok'){
        var panjang = parseFloat(document.querySelector('.formBalok .panjang').value);
        var lebar = parseFloat(document.querySelector('.formBalok .lebar').value);
        var tinggi = parseFloat(document.querySelector('.formBalok .tinggi').value);
        var luaspermukaan = 2*[(p*l)+(p*t)+(l*t)];
        hasil.innerHTML = "Volume Balok = " + luaspermukaan;
    } else if(type === 'lptabung'){
        var jarijari = parseFloat(document.querySelector('.formTabung .jarijari').value);
        var tinggi = parseFloat(document.querySelector('.formTabung .tinggi').value)
        var luaspermukaan = 3.14*jarijari*tinggi;
        hasil.innerHTML = "Volume Tabung = " + luaspeermukaan;
    } else if(type === 'vtabung'){
        var jarijari = parseFloat(document.querySelector('.formTabung .jarijari').value);
        var tinggi = parseFloat(document.querySelector('.formTabung .tinggi').value)
        var luaspermukaan = 3.14*jarijari*tinggi;
        hasil.innerHTML = "Volume Tabung = " + luaspermukaan;
    } 
}