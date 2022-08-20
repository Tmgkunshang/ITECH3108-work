import Book from './book.js'
import Author from './author.js'


let bookDesc = new Book("Dog Man: Mothering Heights", "Dav Pilkey", 'USA')
document.getElementById('book').innerHTML = bookDesc.toDOM()