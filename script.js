const tombol = document.getElementById("tombol");
const judul = document.getElementById("judul");
const teks = document.getElementById("teks");
const kotak = document.getElementById("kotak");
const footer = document.getElementById("footer");

let ganti = false;

tombol.addEventListener("click", function() {
  if (!ganti) {
    // 10 style yang diubah
    document.body.style.backgroundColor = "#222";         // 1
    judul.style.color = "purple";                         // 2
    teks.style.fontSize = "20px";                         // 3
    teks.style.color = "lightgreen";                      // 4
    kotak.style.backgroundColor = "tomato";               // 5
    kotak.style.borderRadius = "30px";                    // 6
    kotak.style.boxShadow = "0 0 20px white";             // 7
    tombol.style.backgroundColor = "orange";              // 8
    footer.style.color = "white     ";                         // 9
    footer.style.fontWeight = "bold";                     // 10
    ganti = true;
  } else {
    // Kembalikan ke awal
    location.reload();
  }
});
