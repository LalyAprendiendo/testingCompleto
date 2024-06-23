const { readFile, createFile } = require("../models/books-model");
const uuid = require("uuid");
const validate = require("../utils/validations.js");

// guardo la funcion readFile() en una variable para reutilizarla en las demas funciones
const allBooks = readFile();

const getAll = () => {
  return allBooks;
};

const getById = (id) => {
  const bookId = allBooks.find((book) => book.id.toString() === id.toString());
  return bookId
    ? bookId
    : `El ID ${id} no se encuentra en nuestra base de datos`;
};

const getByName = (name) => {
  const bookName = allBooks.filter((book) =>
    book.name.toUpperCase().includes(name.toUpperCase())
  );
  return bookName.length
    ? bookName
    : `El nombre del libro ${name} no se encuentra en nuestra base de datos`;
};

const getByAuthor = (author) => {
  const bookAuthor = allBooks.filter((book) =>
    book.author.toUpperCase().includes(author.toUpperCase())
  );
  return bookAuthor.length
    ? bookAuthor
    : `El autor ${author} no se encuentra en nuestra base de datos`;
};

const createBook = (book) => {
  const isValidate = validate(book);

  if (typeof isValidate === "string") {
    return isValidate;
  }

  book.id = uuid.v4();
  allBooks.push(book);
  createFile(allBooks);
  return "Libro creado exitosamente.";
};

const updateById = (bookToModify) => {

  const isValidate = validate(bookToModify);
  if (typeof isValidate === "string") {
    return isValidate;
  }

  const bookId = allBooks.find((book) => book.id.toString() === bookToModify.id.toString());
  if (!bookId) {
    console.log("Ese ID no existe en nuestra base de datos.");
  }
  if (bookToModify.name) {
    bookId.name = bookToModify.name;
  }
  if (bookToModify.author) {
    bookId.author = bookToModify.author;
  }
  if (bookToModify.tags) {
    bookId.tags = bookToModify.tags;
  }
  createFile(allBooks);
  return "Libro modificado exitosamente.";
};

const deleteById = (id) => {
  const searchBook = allBooks.filter(
    (book) => book.id.toString() !== id.toString()
  ); //guardo los elementos que no tengan el id pasado por param

  if (searchBook.length === allBooks.length) {
    //cant de elementos guardados con el filter igual cant original
    return `El ID ${id} no existe en nuestra base de datos`;
  } else {
    createFile(searchBook); //lo sobreescribo
    return `El libro con ID ${id} fué eliminado exitosamente`;
  }
};

module.exports = {
  getAll,
  getById,
  getByName,
  getByAuthor,
  createBook,
  updateById,
  deleteById,
};
