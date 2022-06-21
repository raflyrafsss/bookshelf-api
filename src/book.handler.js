import { nanoid } from 'nanoid';
import { Books } from './books.js';
import { HttpException } from './exception/exception.js';
import { filterBookId } from './filter/book.filter.js';

export const addBook = (req, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.payload;
  let finished = false;

  // Generate ID
  const id = nanoid(16);

  // Create Timestamp
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  if (pageCount === readPage) {
    finished = true;
  }

  const data = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  // Push data to Book Model
  Books.push(data);

  const isSuccess = Books.filter((book) => book.id === id).length > 0;
  console.log(isSuccess);

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: data,
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'error',
    message: 'Buku gagal ditambahkan',
  });
  response.code(500);
  return response;
};

export const getBooks = () => ({
  status: 'success',
  data: Books,
});

export const getBookById = (req, h) => {
  const { id } = req.params;
  console.log(filterBookId(1));
  if (filterBookId(id) == null) {
    const response = h.response({
      status: 'success',
      data: filterBookId(id),
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

export const updateBook = (req, h) => {
  const { id } = req.params;
};

export const deleteBook = (req, h) => {
  const { id } = req.params;
};
