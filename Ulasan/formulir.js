document.getElementById("kirim").onclick = function () {
  var v = id => document.getElementById(id).value.trim();
  var pesan = document.getElementById("pesan");
  var rating = document.querySelector('input[name="r"]:checked');

  if (!v("nama")) pesan.textContent = "Nama wajib diisi.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) pesan.textContent = "Format email tidak valid.";
  else if (!rating) pesan.textContent = "Pilih rating bintang dulu.";
  else if (!v("ulasan")) pesan.textContent = "Ulasan wajib diisi.";
  else window.location.href = "tx.html";
};