const wisata = [
  { nama: "Pantai Senggigi", foto: "senggigi.jpg", harga: 10000 },
  { nama: "Gunung Rinjani", foto: "rinjani.jpg", harga: 150000 },
  { nama: "Gili Trawangan", foto: "gili.jpg", harga: 25000 },
  { nama: "Pantai Kuta Mandalika", foto: "kuta.jpg", harga: 10000 },
  { nama: "Desa Sade", foto: "sade.jpg", harga: 20000 }
];
const $ = id => document.getElementById(id);
const rp = n => "Rp " + n.toLocaleString("id-ID");

// ===== Halaman katalog (katalog.html) =====
if ($("grid")) {
  $("grid").innerHTML = wisata.map(w =>
    `<div class="kartu"><img src="${w.foto}" alt="${w.nama}"><h3>${w.nama}</h3><p>Tiket: ${rp(w.harga)}</p></div>`).join("");
  $("tujuan").innerHTML = wisata.map((w, i) => `<option value="${i}">${w.nama}</option>`).join("");

  function hitung() {
    const h = wisata[$("tujuan").value].harga;
    const total = h * $("dewasa").value + h * 0.5 * $("anak").value;
    $("total").textContent = "Total: " + rp(total);
    return total;
  }
  document.querySelectorAll("select, input[type=number]").forEach(e => e.oninput = hitung);
  hitung();

  // Saat form dikirim: validasi, lalu pindah ke hasil.html membawa datanya
  $("form").onsubmit = e => {
    e.preventDefault();
    if (!$("nama").value.trim() || !$("telp").value.trim() || !$("tanggal").value || +$("dewasa").value + +$("anak").value < 1) {
      $("pesan-error").textContent = "Semua kolom wajib diisi dan minimal 1 pengunjung.";
      return;
    }
    const data = new URLSearchParams({
      nama: $("nama").value.trim(), telp: $("telp").value.trim(), tujuan: $("tujuan").value,
      tanggal: $("tanggal").value, dewasa: $("dewasa").value, anak: $("anak").value, total: hitung()
    });
    location.href = "hasil.html?" + data;
  };
}

// ===== Halaman hasil (hasil.html) =====
if ($("hasil")) {
  const d = new URLSearchParams(location.search);
  if (!d.get("nama")) {
    $("hasil").textContent = "Belum ada pesanan. Silakan isi formulir di halaman Destinasi.";
  } else {
    const baris = [
      ["Nama", d.get("nama")], ["Telepon", d.get("telp")], ["Destinasi", wisata[d.get("tujuan")].nama],
      ["Tanggal", d.get("tanggal")], ["Pengunjung", d.get("dewasa") + " dewasa, " + d.get("anak") + " anak"],
      ["Total Bayar", rp(+d.get("total"))]
    ];
    $("hasil").innerHTML = "<h3>Pesanan Berhasil!</h3>";
    baris.forEach(([k, v]) => {
      const p = document.createElement("p");
      p.textContent = k + ": " + v;
      $("hasil").appendChild(p);
    });
  }
}
