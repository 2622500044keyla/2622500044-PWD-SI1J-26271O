// 1. Fungsi untuk mengatur perpindahan halaman (Beranda, Profile, Pendaftaran)
function tampilHalaman(evt, namaHalaman) {
    // Mencegah browser melakukan reload halaman
    evt.preventDefault();

    // Sembunyikan semua bagian konten
    let sections = document.querySelectorAll('.section-content');
    sections.forEach(function(sec) {
        sec.classList.remove('active');
    });

    // Hapus status aktif dari semua menu navigasi di sebelah kiri
    let links = document.querySelectorAll('.menu-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    // Tampilkan bagian konten yang diklik dan tandai menu navigasinya
    document.getElementById(namaHalaman).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// 2. Fungsi untuk menangani saat tombol "Kirim Pendaftaran" diklik
function submitForm(evt) {
    evt.preventDefault(); // Mencegah form mereload halaman

    // Ambil nama dari inputan formulir
    let namaInput = document.getElementById('nama').value;
    let kategoriInput = document.getElementById('kategori').value;

    // Tampilkan pesan konfirmasi berhasil
    alert('Terima kasih ' + namaInput + '! Pendaftaran Anda untuk kelas "' + kategoriInput + '" berhasil terkirim.');

    // Kosongkan kembali isian form
    document.getElementById('formPendaftaran').reset();
}