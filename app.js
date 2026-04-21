// ========== BAGIAN 1: SELEKSI ELEMEN DOM ==========
// Mengambil elemen form dari HTML berdasarkan id "form-pendaftaran" untuk dimanipulasi
const formPendaftaran = document.getElementById('form-pendaftaran');
// Mengambil elemen input nama lengkap berdasarkan id "namaLengkap"
const inputNama = document.getElementById('namaLengkap');
// Mengambil elemen input email berdasarkan id "email"
const inputEmail = document.getElementById('email');
// Mengambil elemen dropdown program peminatan berdasarkan id "peminatan"
const selectPeminatan = document.getElementById('peminatan');
// Mengambil elemen div output-data tempat data peserta akan ditampilkan
const outputData = document.getElementById('output-data');
// Mengambil elemen paragraf pesan error untuk menampilkan pesan validasi
const pesanError = document.getElementById('pesan-error');

// ========== BAGIAN 2: MENAMBAHKAN EVENT LISTENER ==========
// Menambahkan event listener 'submit' pada form, dijalankan saat tombol submit diklik
formPendaftaranTekan.addEventListener('submit', function(event) {
    // Mencegah browser melakukan reload/refresh halaman ketika form disubmit (perilaku default)
    event.preventDefault();

    // ========== BAGIAN 3: MENGAMBIL NILAI INPUT ==========
    // Mengambil nilai input nama, trim() untuk menghilangkan spasi sebelum dan sesudah teks
    const nama = inputNama.value.trim();
    // Mengambil nilai input email, trim() untuk menghilangkan spasi
    const email = inputEmail.value.trim();
    // Mengambil nilai yang dipilih di dropdown peminatan
    const peminatan = selectPeminatan.value;

    // ========== BAGIAN 4: VALIDASI FORM ==========
    // Mengecek apakah ada field yang kosong (nama, email, atau peminatan belum dipilih)
    if (nama === '' || email === '' || peminatan === '') {
        // Jika ada yang kosong, set teks pesan error dengan pesan "Gagal: Semua kolom wajib diisi!"
        pesanError.textContent = "Gagal: Semua kolom wajib diisi!";
        // Menghilangkan class "hidden" sehingga pesan error terlihat
        pesanError.classList.remove('hidden');
        // Menghentikan eksekusi kode selanjutnya dan keluar dari fungsi
        return;
    }

    // ========== BAGIAN 5: SEMBUNYIKAN PESAN ERROR ==========
    // Jika validasi lolos (semua field terisi), sembunyikan pesan error dengan menambah class "hidden"
    pesanError.classList.add('hidden');

    // ========== BAGIAN 6: HAPUS TEKS PLACEHOLDER ==========
    // Mencari elemen dengan class "empty-state" (teks "Belum ada data pendaftar")
    if (outputData.querySelector('.empty-state')) {
        // Jika ditemukan, kosongkan semua isi dari outputData
        outputData.innerHTML = ''; 
    }

    // ========== BAGIAN 7: MEMBUAT ELEMEN KARTU PESERTA BARU ==========
    // Membuat elemen div baru yang akan menjadi kartu untuk menampilkan data peserta
    const kartuBaru = document.createElement('div');
    // Menambahkan class "card-peserta" ke div baru untuk styling CSS
    kartuBaru.classList.add('card-peserta');
    
    // ========== BAGIAN 8: MEMASUKKAN DATA KE KARTU MENGGUNAKAN TEMPLATE LITERAL ==========
    // Mengisi konten kartu dengan HTML yang berisi data nama, email, dan peminatan
    // Template literal (backtick) memungkinkan menyisipkan variabel dengan ${variabel}
    kartuBaruTampil.innerHTML = `
        <!-- Menampilkan nama peserta sebagai heading level 3 -->
        <h3>${nama}</h3>
        <!-- Menampilkan email dengan label "Email:" -->
        <p><strong>Email:</strong> ${email}</p>
        <!-- Menampilkan program peminatan dengan label "Peminatan:" -->
        <p><strong>Peminatan:</strong> ${peminatan}</p>
    `;

    // ========== BAGIAN 9: MENAMBAHKAN KARTU KE HALAMAN ==========
    // Menambahkan kartu baru ke dalam container outputData sebagai elemen anak terakhir
    outputData.appendChild(kartuBaru);

    // ========== BAGIAN 10: KOSONGKAN FORM UNTUK INPUT BARU ==========
    // Mengosongkan semua nilai input form agar siap untuk pendaftaran berikutnya (reset form)
    formPendaftaran.reset();
});
