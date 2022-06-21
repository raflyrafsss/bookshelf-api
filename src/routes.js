import {
  addBook,
  getBooks,
  getBookById,
  // deleteBook,
  // updateBook,
} from './book.controller.js';

export const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookById,
  },
  // {
  //   method: 'PUT',
  //   path: '/books/{bookId}',
  //   handler: updateBook,
  // },
  // {
  //   method: 'DELETE',
  //   path: '/books/{bookId}',
  //   handler: deleteBook,
  // },
];
