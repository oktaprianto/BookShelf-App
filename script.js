// Inisialisasi data buku dari localStorage atau data kosong jika belum ada
let books = JSON.parse(localStorage.getItem('books')) || [];

// Fungsi untuk menyimpan data buku ke localStorage
function saveBooks() {
  localStorage.setItem('books', JSON.stringify(books));
}

function displayBooks(booksToDisplay) {
    const unfinishedShelf = document.getElementById('unfinished-shelf');
    const finishedShelf = document.getElementById('finished-shelf');
  
    unfinishedShelf.innerHTML = 'Belum Dibaca';
    finishedShelf.innerHTML = 'Sudah Dibaca';
  
    booksToDisplay.forEach((book) => {
      const bookItem = document.createElement('li');
      bookItem.innerHTML = `
        <div>${book.title} ${book.author}  ${book.year}</div>
        <div>
          <button onclick="moveToShelf(${book.id}, ${!book.isComplete})">${
            book.isComplete ? 'Belum Selesai Dibaca' : 'Selesai Dibaca'
          }</button>
          <button onclick="deleteBook(${book.id})">Hapus</button>
        </div>
      `;
  
      if (book.isComplete) {
        finishedShelf.appendChild(bookItem);
      } else {
        unfinishedShelf.appendChild(bookItem);
      }
    });
  }
  

// Fungsi untuk menambahkan buku baru
function addBook() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const yearInput = document.getElementById('year');
  const isCompleteInput = document.getElementById('isComplete');

  const title = titleInput.value;
  const author = authorInput.value;
  const year = parseInt(yearInput.value);
  const isComplete = isCompleteInput.checked;

  if (title && author && year) {
    const newBook = {
      id: +new Date(),
      title,
      author,
      year,
      isComplete,
    };

    books.push(newBook);
    saveBooks();
    displayBooks(books);

    titleInput.value = '';
    authorInput.value = '';
    yearInput.value = '';
    isCompleteInput.checked = false;
  }
}

// Fungsi untuk memindahkan buku antar rak buku atau menghapusnya
function moveToShelf(bookId, isComplete) {
  const index = books.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    books[index].isComplete = isComplete;
    saveBooks();
    displayBooks(books);
  }
}

// Custom dialog ketika menghapus buku
function deleteBook(bookId) {
    const index = books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      const confirmDialog = confirm('Apakah Anda yakin ingin menghapus buku ini?');
      if (confirmDialog) {
        books.splice(index, 1);
        saveBooks();
        displayBooks(books);
      }
    }
  }




// Fungsi untuk melakukan pencarian buku
function searchBooks() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm)
  );

  displayBooks(filteredBooks);
}

// Menampilkan buku saat halaman dimuat
window.onload = () => {
  displayBooks(books);
};


// Event listener untuk tombol "Tambah Buku"
const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Ini sangat penting untuk mencegah pengiriman formulir standar.
  addBook();
});

// Event listener untuk kolom pencarian
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', searchBooks);


