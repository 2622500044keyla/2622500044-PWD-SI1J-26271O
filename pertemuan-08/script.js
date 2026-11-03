function tampilHalaman(evt, namaHalaman) {
    evt.preventDefault();

    let sections = document.querySelectorAll('.section-content');
    sections.forEach(function(sec) {
        sec.classList.remove('active');
    });

    let links = document.querySelectorAll('.menu-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    document.getElementById(namaHalaman).classList.add('active');
    evt.currentTarget.classList.add('active');
}

function submitForm(evt) {
    evt.preventDefault(); 

    
    let namaInput = document.getElementById('nama').value;
    let kategoriInput = document.getElementById('kategori').value;

    alert('Terima kasih ' + namaInput + '! Pendaftaran Anda untuk kelas "' + kategoriInput + '" berhasil terkirim.');

    document.getElementById('formPendaftaran').reset();
}