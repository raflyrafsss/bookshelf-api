import { books } from '../books.model.js';

export const filterById = (id) => {
  return books.filter((book) => book.id === id)[0];
};

export const getIndex = (id) => {
  return books.findIndex((book) => book.id === id);
};
