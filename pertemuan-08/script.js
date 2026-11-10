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