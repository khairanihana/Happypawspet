document.getElementById("time").innerHTML =
    "Waktu Akses: " + new Date().toLocaleString();

function kirimPesan() {
    var layanan = document.getElementById("layanan").value;

    if (layanan === "") {
        alert("Silakan pilih layanan terlebih dahulu!");
    } else {
        alert("Pesanan untuk " + layanan + " berhasil dikirim.");
    }
}
