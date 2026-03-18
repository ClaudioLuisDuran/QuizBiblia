// Data extracted from the Catholic Bible structure image
// 73 books total: 46 Old Testament + 27 New Testament

export const bibleBooks = [
  // === ANTIGUO TESTAMENTO (46 libros) ===

  // El Pentateuco (5 libros)
  { name: "Génesis", abbr: "Gn", group: "El Pentateuco", testament: "Antiguo Testamento" },
  { name: "Éxodo", abbr: "Ex", group: "El Pentateuco", testament: "Antiguo Testamento" },
  { name: "Levítico", abbr: "Lv", group: "El Pentateuco", testament: "Antiguo Testamento" },
  { name: "Números", abbr: "Nm", group: "El Pentateuco", testament: "Antiguo Testamento" },
  { name: "Deuteronomio", abbr: "Dt", group: "El Pentateuco", testament: "Antiguo Testamento" },

  // Libros Históricos (16 libros)
  { name: "Josué", abbr: "Jos", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Jueces", abbr: "Jue", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Rut", abbr: "Rut", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Primer libro de Samuel", abbr: "1 Sam", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Segundo libro de Samuel", abbr: "2 Sam", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Primer libro de los Reyes", abbr: "1 Re", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Segundo libro de los Reyes", abbr: "2 Re", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Primer libro de las Crónicas", abbr: "1 Cro", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Segundo libro de las Crónicas", abbr: "2 Cro", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Esdras", abbr: "Esd", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Nehemías", abbr: "Neh", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Tobías", abbr: "Tob", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Judit", abbr: "Jdt", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Ester", abbr: "Est", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Primer libro de los Macabeos", abbr: "1 Mac", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },
  { name: "Segundo libro de los Macabeos", abbr: "2 Mac", group: "Libros Históricos (AT)", testament: "Antiguo Testamento" },

  // Libros Poéticos y Sapienciales (7 libros)
  { name: "Job", abbr: "Job", group: "Libros Poéticos y Sapienciales", testament: "Antiguo Testamento" },
  { name: "Salmos", abbr: "Sal", group: "Libros Poéticos y Sapienciales", testament: "Antiguo Testamento" },
  { name: "Proverbios", abbr: "Pr", group: "Libros Poéticos y Sapienciales", testament: "Antiguo Testamento" },
  { name: "Eclesiastés/Qahélet", abbr: "Ecl", group: "Libros Poéticos y Sapienciales", testament: "Antiguo Testamento" },
  { name: "Cantar de los Cantares", abbr: "Cant", group: "Libros Poéticos y Sapienciales", testament: "Antiguo Testamento" },
  { name: "Sabiduría", abbr: "Sab", group: "Libros Poéticos y Sapienciales", testament: "Antiguo Testamento" },
  { name: "Eclesiástico/Sirácida", abbr: "Eclo", group: "Libros Poéticos y Sapienciales", testament: "Antiguo Testamento" },

  // Libros Proféticos (18 libros)
  { name: "Isaías", abbr: "Is", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Jeremías", abbr: "Jer", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Lamentaciones", abbr: "Lam", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Baruc", abbr: "Bar", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Ezequiel", abbr: "Ez", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Daniel", abbr: "Dan", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Oseas", abbr: "Os", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Joel", abbr: "Jl", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Amós", abbr: "Am", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Abdías", abbr: "Ab", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Jonás", abbr: "Jon", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Miqueas", abbr: "Miq", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Nahún", abbr: "Nah", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Habacuc", abbr: "Hab", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Sofonías", abbr: "Sof", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Ageo", abbr: "Ag", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Zacarías", abbr: "Zac", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },
  { name: "Malaquías", abbr: "Mal", group: "Libros Proféticos (AT)", testament: "Antiguo Testamento" },

  // === NUEVO TESTAMENTO (27 libros) ===

  // Los Evangelios (4 libros)
  { name: "Evangelio según San Mateo", abbr: "Mt", group: "Los Evangelios", testament: "Nuevo Testamento" },
  { name: "Evangelio según San Marcos", abbr: "Mc", group: "Los Evangelios", testament: "Nuevo Testamento" },
  { name: "Evangelio según San Lucas", abbr: "Lc", group: "Los Evangelios", testament: "Nuevo Testamento" },
  { name: "Evangelio según San Juan", abbr: "Jn", group: "Los Evangelios", testament: "Nuevo Testamento" },

  // El Libro Histórico (1 libro)
  { name: "Hechos de los Apóstoles", abbr: "Hch", group: "Libro Histórico (NT)", testament: "Nuevo Testamento" },


  // Cartas Paulinas (13 libros + Hebreos)
  { name: "Carta a los Romanos", abbr: "Rom", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Primera Carta a los Corintios", abbr: "1 Cor", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Segunda Carta a los Corintios", abbr: "2 Cor", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Carta a los Gálatas", abbr: "Gál", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Carta a los Efesios", abbr: "Ef", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Carta a los Filipenses", abbr: "Flp", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Carta a los Colosenses", abbr: "Col", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Primera Carta a los Tesalonicenses", abbr: "1 Tes", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Segunda Carta a los Tesalonicenses", abbr: "2 Tes", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Primera Carta a Timoteo", abbr: "1 Tim", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Segunda Carta a Timoteo", abbr: "2 Tim", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Carta a Tito", abbr: "Tit", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Carta a Filemón", abbr: "Flm", group: "Cartas Paulinas", testament: "Nuevo Testamento" },
  { name: "Hebreos", abbr: "Hb", group: "Cartas Paulinas", testament: "Nuevo Testamento" },

  // Cartas Católicas o Epístolas (7 libros)
  { name: "Carta de Santiago", abbr: "St", group: "Cartas Católicas", testament: "Nuevo Testamento" },
  { name: "Primera Carta de Pedro", abbr: "1 Pe", group: "Cartas Católicas", testament: "Nuevo Testamento" },
  { name: "Segunda Carta de Pedro", abbr: "2 Pe", group: "Cartas Católicas", testament: "Nuevo Testamento" },
  { name: "Primera Carta de Juan", abbr: "1 Jn", group: "Cartas Católicas", testament: "Nuevo Testamento" },
  { name: "Segunda Carta de Juan", abbr: "2 Jn", group: "Cartas Católicas", testament: "Nuevo Testamento" },
  { name: "Tercera Carta de Juan", abbr: "3 Jn", group: "Cartas Católicas", testament: "Nuevo Testamento" },
  { name: "Carta de Judas Tadeo", abbr: "Jd", group: "Cartas Católicas", testament: "Nuevo Testamento" },

  // Libro Profético (1 libro)
  { name: "Apocalipsis", abbr: "Ap", group: "Libro Profético (NT)", testament: "Nuevo Testamento" },

];

export const allGroups = [
  "El Pentateuco",
  "Libros Históricos (AT)",
  "Libros Poéticos y Sapienciales",
  "Libros Proféticos (AT)",
  "Los Evangelios",
  "Libro Histórico (NT)",
  "Cartas Paulinas",
  "Cartas Católicas",
  "Libro Profético (NT)",
];

export const groupEmojis = {
  "El Pentateuco": "📜",
  "Libros Históricos (AT)": "⚔️",
  "Libros Poéticos y Sapienciales": "🎵",
  "Libros Proféticos (AT)": "🔮",
  "Los Evangelios": "✝️",
  "Libro Histórico (NT)": "🏛️",
  "Cartas Paulinas": "✉️",
  "Cartas Católicas": "📨",
  "Libro Profético (NT)": "🌟",
};

// Utility: shuffle array
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generate a single question
function generateQuestion(books) {
  const questionTypes = [
    "name_to_abbr",
    "abbr_to_name",
    "name_to_group",
    "group_to_name",
    "name_to_testament",
    "group_to_testament",
    "not_in_group",
    "which_are_in_group",
  ];

  const weights = [2, 2, 2, 2, 1, 1, 1, 1];
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  let rand = Math.random() * totalWeight;
  let type = questionTypes[0];
  for (let i = 0; i < weights.length; i++) {
    rand -= weights[i];
    if (rand <= 0) { type = questionTypes[i]; break; }
  }

  const correctBook = books[Math.floor(Math.random() * books.length)];

  let question, correctAnswer, options;

  switch (type) {
    case "name_to_abbr": {
      question = `¿Cuál es la abreviatura de "${correctBook.name}"?`;
      correctAnswer = correctBook.abbr;
      const others = shuffle(books.filter(b => b.abbr !== correctBook.abbr))
        .slice(0, 3).map(b => b.abbr);
      options = shuffle([correctAnswer, ...others]);
      break;
    }
    case "abbr_to_name": {
      question = `¿A qué libro corresponde la abreviatura "${correctBook.abbr}"?`;
      correctAnswer = correctBook.name;
      const others = shuffle(books.filter(b => b.name !== correctBook.name))
        .slice(0, 3).map(b => b.name);
      options = shuffle([correctAnswer, ...others]);
      break;
    }
    case "name_to_group": {
      question = `¿A qué grupo pertenece "${correctBook.name}"?`;
      correctAnswer = correctBook.group;
      const otherGroups = shuffle(allGroups.filter(g => g !== correctBook.group)).slice(0, 3);
      options = shuffle([correctAnswer, ...otherGroups]);
      break;
    }
    case "group_to_name": {
      question = `¿Cuál de estos libros pertenece a "${correctBook.group}"?`;
      correctAnswer = correctBook.name;
      const others = shuffle(books.filter(b => b.group !== correctBook.group))
        .slice(0, 3).map(b => b.name);
      options = shuffle([correctAnswer, ...others]);
      break;
    }
    case "name_to_testament": {
      question = `¿A qué parte de la Biblia pertenece "${correctBook.name}"?`;
      correctAnswer = correctBook.testament;
      const allTestaments = ["Antiguo Testamento", "Nuevo Testamento", "Los Apócrifos", "Los Deuterocanónicos"];
      let opts = [correctAnswer, ...shuffle(allTestaments.filter(t => t !== correctAnswer)).slice(0, 3)];
      options = shuffle(opts);
      break;
    }
    case "group_to_testament": {
      question = `¿A qué parte de la Biblia pertenece el grupo "${correctBook.group}"?`;
      correctAnswer = correctBook.testament;
      const allTestaments = ["Antiguo Testamento", "Nuevo Testamento", "Los Apócrifos", "Los Deuterocanónicos"];
      let opts = [correctAnswer, ...shuffle(allTestaments.filter(t => t !== correctAnswer)).slice(0, 3)];
      options = shuffle(opts);
      break;
    }
    case "not_in_group": {
      const groupsWithMany = allGroups.filter(g => books.filter(b => b.group === g).length >= 3);
      const chosenGroup = groupsWithMany[Math.floor(Math.random() * groupsWithMany.length)];
      const booksInGroup = books.filter(b => b.group === chosenGroup);
      const booksOutGroup = books.filter(b => b.group !== chosenGroup);
      const threeFromGroup = shuffle(booksInGroup).slice(0, 3).map(b => b.name);
      const outsider = shuffle(booksOutGroup)[0];
      question = `¿Cuál de estos libros NO pertenece a "${chosenGroup}"?`;
      correctAnswer = outsider.name;
      options = shuffle([correctAnswer, ...threeFromGroup]);
      break;
    }
    case "which_are_in_group": {
      const chosenGroup = allGroups[Math.floor(Math.random() * allGroups.length)];
      const inGroup = books.filter(b => b.group === chosenGroup);
      const outGroup = books.filter(b => b.group !== chosenGroup);
      if (inGroup.length === 0) return generateQuestion(books);
      const correctBook2 = inGroup[Math.floor(Math.random() * inGroup.length)];
      question = `¿Cuál de estos libros SÍ pertenece a "${chosenGroup}"?`;
      correctAnswer = correctBook2.name;
      const wrongOnes = shuffle(outGroup).slice(0, 3).map(b => b.name);
      options = shuffle([correctAnswer, ...wrongOnes]);
      break;
    }
    default:
      return generateQuestion(books);
  }

  return { question, correctAnswer, options, type, book: correctBook };
}

// Generate a full quiz of N questions
export function generateQuiz(n = 15) {
  const questions = [];
  const usedKeys = new Set();
  let attempts = 0;
  while (questions.length < n && attempts < 300) {
    attempts++;
    const q = generateQuestion(bibleBooks);
    const key = `${q.type}-${q.book?.name || q.question.slice(0, 30)}`;
    if (!usedKeys.has(key)) {
      usedKeys.add(key);
      questions.push(q);
    }
  }
  return questions;
}