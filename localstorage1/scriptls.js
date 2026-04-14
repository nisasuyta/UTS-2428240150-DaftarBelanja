let npm = document.getElementById("NamaBarang");
let nama = document.getElementById("JumlahBarang");
let image = document.getElementById("Keterangan");

function simpan() {
    console.log(NamaBarang.value)
    console.log(JumlahBarang.value)
    console.log(Keterangan.value)

    //localStorage.setItem("Nama Barang", NamaBarang.value)
    //localStorage.setItem("Jumlah Barang", JumlahBarang.value)
    //localStorage.setItem("Keterangan", Keterangan.value)

    //jika local storage belum da isi/value 
    if (localStorage.getItem("Nama Barang") === null) {
        //simpan array kosong []
        localStorage.setItem("Nama Barang", "[]")
    }

    //panggil local storage  (konersi string => object)
    let data = JSON.parse(localStorage.getItem("Nama Barang"))
    console.log(data)

    //simpan value npm dan nama ke dalam object data 
    data.push({
        NamaBarang: NamaBarang.value,
        JumlahBarang: JumlahBarang.value,
        Keterangan: Keterangan.value
    })
    console.log(data)

    //simpan data terbaru ke local storage 
    //konversi object => string 
    localStorage.setItem('Nama Barang', JSON.stringify(data))

    //panggil tampol()
    tampil()
}

function tampil(){
    //panggil local storage
    let hasil = JSON.parse(localStorage.getItem('Nama Barang'));

    // clear element ul id=list-mhs 
    document.getElementById("list-mhs").innerHTML = '';

    //lakukan perulangan untuk menampilkan data mahasiswa (forEach)
    hasil.forEach((element) => {
        //console.log(element)
        document.getElementById("list-mhs").innerHTML += `
        <div class= "container card mb-3 shadow col-12 col-md-6 col-lg-4"> 
        <div class= "card-body">
        <img src="${element.image}" alt="Image" class="img-fluid" />
        <h5 class="card-title">${element.npm}</h5>
        <p class="card-text">${element.nama}</p>
        </div>
        </div>
        `.trim()
    })
}

//jalankan function tampil()
tampil()

