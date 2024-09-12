// Luas Segitiga
function hitungLuasSegitiga() {
    let alas = document.getElementById("alas-segitiga").value;
    let tinggi = document.getElementById("tinggi-segitiga").value;
    let hasilLuasSegitiga = document.getElementById("hasil-Luas"); 
    let rumusluas = document.getElementById("rumus-luas-segitiga");

    if (alas > 0 && tinggi > 0) {
        let luas = 0.5 * alas * tinggi;
        rumusluas.textContent = "L = 1/2 (a x t)";
        hasilLuasSegitiga.innerHTML = "L = 1/2 ("+ alas +" x "+ tinggi +") <br> "+ "L = "+ luas;
    } else {
        alert('Mohon Isi Form Terlebih Dahulu');
    }
}

//Keliling Segitiga
function hitungKelilingSegitiga() {
    let sisi1 = parseFloat(document.getElementById("sisi1").value);
    let sisi2 = parseFloat(document.getElementById("sisi2").value);
    let sisi3 = parseFloat(document.getElementById("sisi3").value);
    let hasilKeliling = document.getElementById("hasilKelilingSegitiga");
    let rumusKeliling = document.getElementById("rumus-keliling-segitiga");

    if (sisi1 > 0 && sisi2 > 0 && sisi3 >0) {
        let keliling = sisi1 + sisi2 + sisi3;
        rumusKeliling.textContent = "K = S + S + S";
        hasilKeliling.innerHTML = "K = "+ sisi1 + "+"+ sisi2+ "+"+ sisi3 + "<br> K = " + keliling;
    } else {
        alert('Mohon Isi Form Terlebih Dahulu');
    }
}

//---------------------------------------------------Rumus Jajar Genjang
//Luas Jajar Genjang
function hitungLuasJajargenjang(){
    let alas = parseFloat(document.getElementById("alas-jajargenjang").value);
    let tinggi = parseFloat(document.getElementById("tinggi-jajargenjang").value);
    let hasilLuas = document.getElementById("hasil-luas-jajargenjang");
    let rumusluas =  document.getElementById("rumus-luas-jajargenjang");

    if (alas > 0 && tinggi > 0) {
        let luas = alas * tinggi;
        rumusluas.textContent = "L = a x t";
        hasilLuas.innerHTML = "L = "+ alas +" x " + tinggi + "<br>L = " + luas;
    } else {
        alert('Mohon Isi Form Terlebih Dahulu');
    }
}

//Keliling Jajar Genjang
function hitungKelilingJajargenjang(){
    let a = parseFloat(document.getElementById("a-jajargenjang").value);
    let b = parseFloat(document.getElementById("b-jajargenjang").value);
    let hasilkeliling = document.getElementById("hasil-keliling-jajargenjang");
    let rumuskeliling =  document.getElementById("rumus-keliling-jajargenjang");

    if (a > 0 && b > 0) {
        let keliling = 2 * (a + b);
        rumuskeliling.textContent = "K = 2 (a + b)";
        hasilkeliling.innerHTML = "K = 2 ("+ a +" + " + b + ")<br>K = " + keliling;
    } else {
        alert('Mohon Isi Form Terlebih Dahulu');
    }
}

// Reset Form
function resetLuasSegitiga(){
    document.getElementById("alas-segitiga").value = "";
    document.getElementById("tinggi-segitiga").value = "";
    document.getElementById("hasil-Luas").textContent = "";
    document.getElementById("rumus-luas-segitiga").textContent = "";
}

function resetKelilingSegitiga() {
    document.getElementById("sisi1").value = "";
    document.getElementById("sisi2").value = "";
    document.getElementById("sisi3").value = "";
    document.getElementById("hasilKelilingSegitiga").textContent = "";
    document.getElementById("rumus-keliling-segitiga").textContent = "";
}

function resetFormLuasJajarGenjang(){
    document.getElementById("alas-jajargenjang").value = "";
    document.getElementById("tinggi-jajargenjang").value = "";
    document.getElementById("rumus-luas-jajargenjang").textContent = "";
    document.getElementById("hasil-luas-jajargenjang").textContent = "";
}

function resetFormKelilingJajarGenjang() {
    document.getElementById("a-jajargenjang").value = "";
    document.getElementById("b-jajargenjang").value = "";
    document.getElementById("rumus-keliling-jajargenjang").textContent = "";
    document.getElementById("hasil-keliling-jajargenjang").textContent = "";
}

// Fungsi Untuk Menampilkan Konten
function tampilkanSegitiga() {
    // Mengambil elemen dengan class 'main-content-segitiga'
    const segitigaContent = document.querySelector('.main-content-segitiga');
    const jajargenjangContent = document.querySelector('.main-content-jajargenjang');

    segitigaContent.style.display = 'flex';
    jajargenjangContent.style.display = 'none';
    
}

function tampilkanJajargenjang() {
    // Mengambil elemen dengan class 'main-content-jajargenjang'
    const jajargenjangContent = document.querySelector('.main-content-jajargenjang');
    const segitigaContent = document.querySelector('.main-content-segitiga');
    
    segitigaContent.style.display = 'none';
    jajargenjangContent.style.display = 'flex';
}