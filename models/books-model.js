const fs = require("fs");

const path = ("./db/db.json");

const createFile = (data) => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
  fs.writeFileSync(path, JSON.stringify(data)); //exista o no la sobrescribe con la data
};

const readFile = () => {
  const readFileJs = fs.readFileSync(path, { encoding: "Utf-8" }); //Esta función lee el contenido del archivo de la base de datos
  return JSON.parse(readFileJs); // Lo convierte y lo devuelve
};

module.exports = { createFile, readFile };
