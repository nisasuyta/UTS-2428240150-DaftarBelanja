// simpan ke lokal storage
localStorage.setItem("NamaBarang",abc);

// baca data local storage
// tampilkan di console
console.log(localStorage.getItem("NamaBarang"))

// tampilkan di paragraf id=NamaBarang 
document.getElementById("NamaBarang").innerHTML=localStorage.getItem("NamaBarang");