// simpan ke lokal storage
localStorage.setItem("nama barang", "Beras");

// baca data local storage
// tampilkan di console
console.log(localStorage.getItem("nama barang"))

// tampilkan di paragraf id=nama barang 
document.getElementById("nama barang").innerHTML=localStorage.getItem("nama barang");