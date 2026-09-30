# Pertemuan 3 - Formulir HTML dan CSS Dasar

## Baseline
- Menggunakan baseline dari P2 sebagai dasar pengembangan P3.
- Menyalin berkas dari `pertemuan-02/` ke `pertemuan-03/`.

## Implementasi Formulir
- Elemen form yang digunakan: `<form>`, `<label>`, `<input>`, `<select>`, `<textarea>`, dan `<button>`.
- Tipe input yang digunakan: `text`, `email`, `number`, `date`, `radio`, dan `checkbox`.
- Atribut validasi: `required`, `minlength`, `maxlength`, `min`, `max`.

## Pengujian GET dan POST
- Hasil pengujian GET: Data parameter dari formulir terkirim dan dapat dilihat pada URL (query string).
- Karakter URL Encoding: Spasi diubah menjadi `+`, serta karakter `@` diubah menjadi `%40`.
- Hasil pengujian POST: Data dikirim pada body request sehingga tidak terlihat di URL. Pada GitHub Pages mengembalikan response status 405 Not Allowed karena merupakan hosting statis.

## CSS Dasar
- Selector elemen: `h2`, `h3`, `p`, `ol`, `button`, `label`
- Selector class: `.form-group`, `.input-form`
- Selector ID: `#about`, `#contact`
- Properti CSS yang digunakan: `background-color`, `color`, `font-family`, `padding`, `margin`, `border`, `border-bottom`.

## Pengujian dan Perbaikan
- Galat yang ditemukan: Penulisan atribut `for` pada label sempat tidak sama dengan `id` pada input.
- Perbaikan yang dilakukan: Menyediakan dan menyamakan atribut `id` serta `for` agar kursor fokus ke input ketika label diklik.

## GitHub Pages
URL: https://2622500044keyla.github.io/2622500044-PWD-SI1J-262710/pertemuan-03/