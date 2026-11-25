function tampilkan(event) {
    event.preventDefault();

let hasil = `
    <div style="background: #f4faff; padding: 15px;">
        <h3>Pesanan Berhasil!</h3>
        <p><b>Nama:</b> ${document.getElementById("nama").value}</p>
        <p><b>Telepon:</b> ${document.getElementById("telepon").value}</p>
        <p><b>Email:</b> ${document.getElementById("email").value}</p>
        <p><b>Tanggal:</b> ${document.getElementById("tanggal").value}</p>
        <p><b>Pengunjung:</b> ${document.getElementById("peserta").value} orang</p>
        <p><b>Destinasi:</b> ${document.getElementById("destinasi").value}</p>
        <p><b>Keterangan:</b> ${document.getElementById("keterangan").value}</p>
    </div>
`;
    document.querySelector(".kontak-wrapper").innerHTML = hasil;
}
