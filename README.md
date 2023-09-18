# BookShelf-App
Belajar Membuat Front-End Web untuk Pemula
aplikasi web yang dapat memasukan data buku ke dalam rak, memindahkan data buku antar rak, dan menghapus data buku dari rak. 

 Terdapat 5 fitur utama pada Bookshelf Apps

1.Mampu Menambahkan Data Buku
Bookshelf Apps harus mampu menambahkan data buku baru.
Data buku yang disimpan merupakan objek JavaScript dengan struktur berikut:
{
  id: string | number,
  title: string,
  author: string,
  year: number,
  isComplete: boolean,
}

2. Memiliki Dua Rak Buku
Bookshelf Apps memiliki 2 Rak buku. Yakni, “Belum selesai dibaca” dan “Selesai dibaca”.
Rak buku "Belum selesai dibaca" hanya menyimpan buku jika properti isComplete bernilai false.
Rak buku "Selesai dibaca" hanya menyimpan buku jika properti isComplete bernilai true.

3: Dapat Memindahkan Buku antar Rak
Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" harus dapat dipindahkan di antara keduanya.

4: Dapat Menghapus Data Buku
Buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" dapat dihapus.

5: localStorage dalam Menyimpan Data Buku
Data buku yang ditampilkan pada rak, baik itu "Belum selesai dibaca" maupun "Selesai dibaca" dapat bertahan walaupun halaman web ditutup.
