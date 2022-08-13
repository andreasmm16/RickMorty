const clases = [
  {
    id: 1,
    titulo: "Estructura de Datos I",
    slug: "estructura-de-datos-i",
    profesorId: 1,
    categoria: "Algoritmo",
  },
  {
    id: 2,
    titulo: "Teoria de Base de Datos I",
    slug: "teoria-de-base-de-datos-i",
    profesorId: 1,
    categoria: "Base de datos",
  },
  {
    id: 3,
    titulo: "Teoria de Base de Datos II",
    slug: "teoria-de-base-de-datos-ii",
    profesorId: 1,
    categoria: "Base de datos",
  },
  {
    id: 4,
    titulo: "Experiencia de usuario",
    slug: "experienciaide-usuario",
    profesorId: 1,
    categoria: "Frontend",
  },
  {
    id: 5,
    titulo: "Ingenieria de Software I",
    slug: "ingenieria-de-software-i",
    profesorId: 1,
    categoria: "Backend",
  },
  {
    id: 6,
    titulo: "Ingenieria de Software II",
    slug: "ingenieria-de-software-ii",
    profesorId: 1,
    categoria: "Backend",
  },
  {
    id: 7,
    titulo: "Desarrollo de Aplicaciones de Vanguardia",
    slug: "desarrollo-de-aplicaciones-de-vanguardia",
    profesorId: 1,
    categoria: "Software",
  },
  {
    id: 8,
    titulo: "Sistemas Operativos",
    slug: "sistemas-operativos",
    profesorId: 1,
    categoria: "Software",
  },
  {
    id: 9,
    titulo: "Sistemas Operativos II",
    slug: "sistemas-operativos-ii",
    profesorId: 1,
    categoria: "Software",
  },
  {
    id: 10,
    titulo: "Redes",
    slug: "redes",
    profesorId: 1,
    categoria: "Networking",
  },
];

const profesores = [
  {
    id: 1,
    nombre: "Juan Romero",
  },
  {
    id: 2,
    nombre: "Ivan Deras",
  },
  {
    id: 3,
    nombre: "Cesar Orellana",
  },
];

const newClase = {
  id: null,
  titulo: "",
  profesorId: null,
  categoria: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newClase,
  clases,
  profesores,
};
