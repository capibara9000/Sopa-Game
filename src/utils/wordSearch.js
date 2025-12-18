// Temas de palabras para la sopa de letras
export const themes = {
    animales: {
        name: 'Animales',
        icon: '🐾',
        color: '#22c55e',
        keywords: ['animales', 'animal', 'mascota', 'fauna', 'zoo'],
        words: ['perro', 'gato', 'leon', 'tigre', 'elefante', 'jirafa', 'mono', 'oso', 'lobo', 'zorro', 'aguila', 'serpiente', 'conejo', 'caballo', 'delfin']
    },
    comida: {
        name: 'Comida',
        icon: '🍕',
        color: '#f97316',
        keywords: ['comida', 'comidas', 'alimentos', 'comer', 'gastronomia'],
        words: ['pizza', 'pasta', 'arroz', 'pollo', 'carne', 'ensalada', 'sopa', 'pan', 'queso', 'huevo', 'fruta', 'helado', 'tarta', 'galleta', 'cafe']
    },
    deportes: {
        name: 'Deportes',
        icon: '⚽',
        color: '#3b82f6',
        keywords: ['deportes', 'deporte', 'sport', 'juegos', 'atletico'],
        words: ['futbol', 'tenis', 'basket', 'natacion', 'golf', 'boxeo', 'rugby', 'hockey', 'voley', 'surf', 'esqui', 'ciclismo', 'atletismo', 'karate', 'judo']
    },
    paises: {
        name: 'Países',
        icon: '🌍',
        color: '#8b5cf6',
        keywords: ['paises', 'pais', 'naciones', 'mundo', 'geografia'],
        words: ['espana', 'francia', 'italia', 'alemania', 'portugal', 'mexico', 'canada', 'brasil', 'japon', 'china', 'india', 'rusia', 'egipto', 'peru', 'chile']
    },
    tecnologia: {
        name: 'Tecnología',
        icon: '💻',
        color: '#06b6d4',
        keywords: ['tecnologia', 'tech', 'informatica', 'ordenadores', 'computadoras'],
        words: ['internet', 'codigo', 'software', 'hardware', 'robot', 'digital', 'pixel', 'virus', 'datos', 'nube', 'wifi', 'app', 'web', 'servidor', 'programa']
    },
    musica: {
        name: 'Música',
        icon: '🎵',
        color: '#ec4899',
        keywords: ['musica', 'musical', 'canciones', 'instrumentos', 'melodia'],
        words: ['guitarra', 'piano', 'bateria', 'violin', 'flauta', 'rock', 'jazz', 'pop', 'salsa', 'opera', 'coro', 'ritmo', 'nota', 'banda', 'disco']
    },
    naturaleza: {
        name: 'Naturaleza',
        icon: '🌿',
        color: '#10b981',
        keywords: ['naturaleza', 'natural', 'medio ambiente', 'ecologia', 'paisaje'],
        words: ['bosque', 'rio', 'montana', 'playa', 'lago', 'oceano', 'selva', 'desierto', 'isla', 'volcan', 'cascada', 'pradera', 'cueva', 'arbol', 'flor']
    },
    espacio: {
        name: 'Espacio',
        icon: '🚀',
        color: '#6366f1',
        keywords: ['espacio', 'universo', 'astronomia', 'cosmos', 'planetas'],
        words: ['planeta', 'estrella', 'luna', 'sol', 'galaxia', 'cometa', 'cohete', 'satelite', 'marte', 'venus', 'jupiter', 'orbita', 'nasa', 'alien', 'cosmos']
    },
    peliculas: {
        name: 'Películas',
        icon: '🎬',
        color: '#eab308',
        keywords: ['peliculas', 'pelicula', 'cine', 'films', 'hollywood'],
        words: ['actor', 'director', 'escena', 'guion', 'camara', 'cine', 'drama', 'accion', 'comedia', 'terror', 'oscar', 'cartel', 'estreno', 'taquilla', 'efecto']
    },
    colores: {
        name: 'Colores',
        icon: '🎨',
        color: '#f43f5e',
        keywords: ['colores', 'color', 'tonos', 'pintura', 'cromático'],
        words: ['rojo', 'azul', 'verde', 'amarillo', 'naranja', 'morado', 'rosa', 'negro', 'blanco', 'gris', 'marron', 'violeta', 'celeste', 'dorado', 'plateado']
    },
    frutas: {
        name: 'Frutas',
        icon: '🍎',
        color: '#ef4444',
        keywords: ['frutas', 'fruta', 'fruteria'],
        words: ['manzana', 'naranja', 'platano', 'fresa', 'uva', 'pera', 'melon', 'sandia', 'kiwi', 'mango', 'limon', 'cereza', 'coco', 'piña', 'papaya']
    },
    verduras: {
        name: 'Verduras',
        icon: '🥦',
        color: '#22c55e',
        keywords: ['verduras', 'verdura', 'vegetales', 'hortalizas'],
        words: ['tomate', 'lechuga', 'cebolla', 'zanahoria', 'pepino', 'patata', 'pimiento', 'calabaza', 'espinaca', 'brocoli', 'coliflor', 'ajo', 'maiz', 'apio', 'remolacha']
    },
    profesiones: {
        name: 'Profesiones',
        icon: '👨‍⚕️',
        color: '#0ea5e9',
        keywords: ['profesiones', 'profesion', 'trabajos', 'trabajo', 'oficios', 'carreras'],
        words: ['medico', 'abogado', 'maestro', 'ingeniero', 'cocinero', 'piloto', 'bombero', 'policia', 'enfermero', 'dentista', 'arquitecto', 'escritor', 'musico', 'actor', 'pintor']
    },
    familia: {
        name: 'Familia',
        icon: '👨‍👩‍👧‍👦',
        color: '#f472b6',
        keywords: ['familia', 'familiar', 'parientes', 'parentesco'],
        words: ['madre', 'padre', 'hermano', 'hermana', 'abuelo', 'abuela', 'tio', 'tia', 'primo', 'prima', 'hijo', 'hija', 'sobrino', 'nieto', 'cuñado']
    },
    cuerpo: {
        name: 'Cuerpo Humano',
        icon: '🫀',
        color: '#dc2626',
        keywords: ['cuerpo', 'anatomia', 'humano', 'partes del cuerpo'],
        words: ['cabeza', 'brazo', 'pierna', 'mano', 'pie', 'corazon', 'ojo', 'nariz', 'boca', 'oreja', 'dedo', 'rodilla', 'hombro', 'espalda', 'cuello']
    },
    ropa: {
        name: 'Ropa',
        icon: '👕',
        color: '#8b5cf6',
        keywords: ['ropa', 'vestimenta', 'moda', 'prendas', 'vestir'],
        words: ['camisa', 'pantalon', 'zapato', 'sombrero', 'vestido', 'falda', 'chaqueta', 'abrigo', 'bufanda', 'guantes', 'calcetin', 'corbata', 'cinturon', 'gorra', 'jersey']
    },
    casa: {
        name: 'Casa',
        icon: '🏠',
        color: '#a3e635',
        keywords: ['casa', 'hogar', 'vivienda', 'habitaciones', 'muebles'],
        words: ['cocina', 'salon', 'dormitorio', 'banyo', 'jardin', 'terraza', 'sotano', 'ventana', 'puerta', 'escalera', 'tejado', 'garaje', 'balcon', 'pasillo', 'comedor']
    },
    vehiculos: {
        name: 'Vehículos',
        icon: '🚗',
        color: '#0891b2',
        keywords: ['vehiculos', 'vehiculo', 'coches', 'coche', 'autos', 'transporte'],
        words: ['coche', 'moto', 'bicicleta', 'autobus', 'tren', 'avion', 'barco', 'camion', 'taxi', 'metro', 'helicoptero', 'patinete', 'furgoneta', 'tranvia', 'yate']
    },
    mar: {
        name: 'Vida Marina',
        icon: '🐠',
        color: '#0284c7',
        keywords: ['mar', 'marino', 'oceano', 'peces', 'acuatico', 'submarino'],
        words: ['pez', 'tiburon', 'ballena', 'delfin', 'pulpo', 'medusa', 'cangrejo', 'estrella', 'coral', 'tortuga', 'foca', 'caballito', 'salmon', 'atun', 'langosta']
    },
    insectos: {
        name: 'Insectos',
        icon: '🐛',
        color: '#84cc16',
        keywords: ['insectos', 'insecto', 'bichos', 'bicho', 'invertebrados'],
        words: ['hormiga', 'abeja', 'mariposa', 'mosca', 'mosquito', 'arana', 'escarabajo', 'grillo', 'cucaracha', 'libelula', 'mariquita', 'saltamontes', 'cigarra', 'polilla', 'avispa']
    },
    aves: {
        name: 'Aves',
        icon: '🦅',
        color: '#7dd3fc',
        keywords: ['aves', 'ave', 'pajaros', 'pajaro', 'birds'],
        words: ['aguila', 'loro', 'buho', 'paloma', 'gorrion', 'pavo', 'pinguino', 'flamenco', 'cuervo', 'halcon', 'cigueña', 'avestruz', 'colibri', 'cisne', 'pelicano']
    },
    escuela: {
        name: 'Escuela',
        icon: '📚',
        color: '#fb923c',
        keywords: ['escuela', 'colegio', 'educacion', 'estudios', 'clase'],
        words: ['libro', 'lapiz', 'mochila', 'pizarra', 'examen', 'tarea', 'profesor', 'alumno', 'aula', 'recreo', 'nota', 'deberes', 'borrador', 'regla', 'cuaderno']
    },
    navidad: {
        name: 'Navidad',
        icon: '🎄',
        color: '#16a34a',
        keywords: ['navidad', 'navideño', 'christmas', 'fiestas'],
        words: ['arbol', 'regalo', 'nieve', 'trineo', 'reno', 'estrella', 'campana', 'angel', 'belen', 'villancico', 'turron', 'papa noel', 'muerdago', 'adorno', 'guirnalda']
    },
    halloween: {
        name: 'Halloween',
        icon: '🎃',
        color: '#f97316',
        keywords: ['halloween', 'terror', 'miedo', 'sustos'],
        words: ['calabaza', 'fantasma', 'bruja', 'vampiro', 'momia', 'zombie', 'murcielago', 'araña', 'calavera', 'esqueleto', 'disfraz', 'dulces', 'monstruo', 'lobo', 'sangre']
    },
    superhéroes: {
        name: 'Superhéroes',
        icon: '🦸',
        color: '#dc2626',
        keywords: ['superheroes', 'superheroe', 'heroes', 'marvel', 'dc', 'comics'],
        words: ['batman', 'superman', 'spiderman', 'ironman', 'hulk', 'thor', 'flash', 'robin', 'aquaman', 'wolverine', 'capitan', 'viuda', 'pantera', 'antman', 'venom']
    },
    videojuegos: {
        name: 'Videojuegos',
        icon: '🎮',
        color: '#7c3aed',
        keywords: ['videojuegos', 'videojuego', 'gaming', 'gamer', 'juegos'],
        words: ['mario', 'zelda', 'pokemon', 'sonic', 'minecraft', 'fortnite', 'tetris', 'pacman', 'kirby', 'link', 'pikachu', 'luigi', 'yoshi', 'peach', 'bowser']
    },
    harry_potter: {
        name: 'Harry Potter',
        icon: '⚡',
        color: '#7c2d12',
        keywords: ['harry potter', 'hogwarts', 'magia', 'potter'],
        words: ['harry', 'hermione', 'ron', 'hogwarts', 'varita', 'quidditch', 'magia', 'dumbledore', 'snape', 'draco', 'dobby', 'hagrid', 'slytherin', 'gryffindor', 'voldemort']
    },
    disney: {
        name: 'Disney',
        icon: '🏰',
        color: '#3b82f6',
        keywords: ['disney', 'princesas', 'mickey', 'pixar'],
        words: ['mickey', 'minnie', 'donald', 'goofy', 'pluto', 'elsa', 'simba', 'nemo', 'woody', 'buzz', 'rapunzel', 'ariel', 'moana', 'stitch', 'olaf']
    },
    futbol: {
        name: 'Fútbol',
        icon: '⚽',
        color: '#16a34a',
        keywords: ['futbol', 'football', 'soccer', 'equipos'],
        words: ['gol', 'portero', 'arbitro', 'balon', 'corner', 'penalti', 'defensa', 'delantero', 'campo', 'grada', 'liga', 'mundial', 'champion', 'aficion', 'entrenador']
    },
    cocina: {
        name: 'Cocina',
        icon: '👨‍🍳',
        color: '#f59e0b',
        keywords: ['cocina', 'cocinar', 'chef', 'recetas', 'gastronomia'],
        words: ['sarten', 'olla', 'cuchillo', 'horno', 'nevera', 'batidora', 'receta', 'plato', 'tenedor', 'cuchara', 'copa', 'delantal', 'fuego', 'ingrediente', 'mezcla']
    },
    creador: {
        name: 'El Creador',
        icon: '👑',
        color: '#ffd700',
        keywords: ['creador', 'nelo', 'jefe', 'boss'],
        words: ['nelo', 'creador', 'sopa', 'letras', 'react', 'codigo', 'genio', 'jefe', 'master', 'programador', 'developer', 'frontend', 'logica', 'bug', 'feature']
    }
};

// Buscar tema por nombre introducido por el usuario
export const searchTheme = (query) => {
    const normalizedQuery = query.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Buscar coincidencia exacta en keys
    if (themes[normalizedQuery]) {
        return { found: true, themeKey: normalizedQuery, theme: themes[normalizedQuery] };
    }

    // Buscar en keywords de cada tema
    for (const [key, theme] of Object.entries(themes)) {
        const normalizedKeywords = theme.keywords.map(k =>
            k.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        );

        if (normalizedKeywords.some(keyword =>
            keyword.includes(normalizedQuery) || normalizedQuery.includes(keyword)
        )) {
            return { found: true, themeKey: key, theme: theme };
        }
    }

    // Buscar coincidencia parcial en nombre del tema
    for (const [key, theme] of Object.entries(themes)) {
        const normalizedName = theme.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (normalizedName.includes(normalizedQuery) || normalizedQuery.includes(normalizedName)) {
            return { found: true, themeKey: key, theme: theme };
        }
    }

    return { found: false, suggestions: getRandomThemes(3) };
};

// Obtener temas aleatorios para sugerencias
const getRandomThemes = (count) => {
    const keys = Object.keys(themes);
    const shuffled = keys.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count).map(key => themes[key].name);
};

// Direcciones posibles para colocar palabras
const DIRECTIONS = [
    { dx: 1, dy: 0, name: 'horizontal' },     // →
    { dx: 0, dy: 1, name: 'vertical' },       // ↓
    { dx: 1, dy: 1, name: 'diagonal-down' },  // ↘
    { dx: 1, dy: -1, name: 'diagonal-up' },   // ↗
    { dx: -1, dy: 0, name: 'horizontal-rev' }, // ←
    { dx: 0, dy: -1, name: 'vertical-rev' },   // ↑
    { dx: -1, dy: -1, name: 'diagonal-up-rev' }, // ↖
    { dx: -1, dy: 1, name: 'diagonal-down-rev' } // ↙
];

// Genera una letra aleatoria
const randomLetter = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[Math.floor(Math.random() * letters.length)];
};

// Intenta colocar una palabra en una posición y dirección específicas
const tryPlaceWord = (grid, word, startRow, startCol, direction) => {
    const size = grid.length;
    const positions = [];

    for (let i = 0; i < word.length; i++) {
        const row = startRow + i * direction.dy;
        const col = startCol + i * direction.dx;

        // Verificar límites
        if (row < 0 || row >= size || col < 0 || col >= size) {
            return null;
        }

        // Verificar si la celda está vacía o tiene la misma letra
        if (grid[row][col] !== null && grid[row][col] !== word[i]) {
            return null;
        }

        positions.push({ row, col, letter: word[i] });
    }

    return positions;
};

// Coloca una palabra en el grid
const placeWord = (grid, word) => {
    const size = grid.length;
    const shuffledDirections = [...DIRECTIONS].sort(() => Math.random() - 0.5);

    // Intentar múltiples posiciones aleatorias
    for (let attempt = 0; attempt < 100; attempt++) {
        const startRow = Math.floor(Math.random() * size);
        const startCol = Math.floor(Math.random() * size);

        for (const direction of shuffledDirections) {
            const positions = tryPlaceWord(grid, word, startRow, startCol, direction);

            if (positions) {
                // Colocar la palabra
                positions.forEach(({ row, col, letter }) => {
                    grid[row][col] = letter;
                });

                return {
                    word,
                    positions,
                    direction: direction.name,
                    found: false
                };
            }
        }
    }

    return null;
};

// Genera el grid completo con palabras
export const generateWordSearch = (themeKey, gridSize = 10, wordCount = 8) => {
    const theme = themes[themeKey];
    if (!theme) {
        throw new Error(`Theme "${themeKey}" not found`);
    }

    // Filtrar palabras que quepan en el grid
    const validWords = theme.words.filter(word => word.length <= gridSize);

    // Seleccionar palabras aleatorias
    const shuffledWords = [...validWords].sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, Math.min(wordCount, shuffledWords.length));

    // Crear grid vacío
    const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

    // Colocar palabras
    const placedWords = [];
    for (const word of selectedWords) {
        const result = placeWord(grid, word.toLowerCase());
        if (result) {
            placedWords.push(result);
        }
    }

    // Rellenar espacios vacíos con letras aleatorias
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (grid[row][col] === null) {
                grid[row][col] = randomLetter();
            }
        }
    }

    return {
        grid,
        words: placedWords,
        theme: themeKey,
        themeName: theme.name,
        themeIcon: theme.icon,
        themeColor: theme.color
    };
};

// Genera el grid con palabras personalizadas
export const generateCustomWordSearch = (customWords, gridSize = 10) => {
    // Filtrar palabras que quepan en el grid
    const validWords = customWords.filter(word => word.length <= gridSize && word.length >= 2);

    // Crear grid vacío
    const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

    // Colocar palabras
    const placedWords = [];
    for (const word of validWords) {
        const result = placeWord(grid, word.toLowerCase());
        if (result) {
            placedWords.push(result);
        }
    }

    // Rellenar espacios vacíos con letras aleatorias
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (grid[row][col] === null) {
                grid[row][col] = randomLetter();
            }
        }
    }

    return {
        grid,
        words: placedWords,
        theme: 'custom',
        themeName: 'Personalizado',
        themeIcon: '✏️',
        themeColor: '#a855f7'
    };
};

// Verifica si una selección forma una palabra válida
export const checkSelection = (selection, words) => {
    if (selection.length === 0) return null;

    const selectedWord = selection.map(cell => cell.letter).join('');
    const reversedWord = selectedWord.split('').reverse().join('');

    for (const wordData of words) {
        if (wordData.found) continue;

        if (wordData.word === selectedWord || wordData.word === reversedWord) {
            // Verificar que las posiciones coincidan
            const matches = selection.every((cell, i) => {
                const pos = wordData.positions[wordData.word === selectedWord ? i : wordData.positions.length - 1 - i];
                return pos.row === cell.row && pos.col === cell.col;
            });

            if (matches) {
                return wordData;
            }
        }
    }

    return null;
};

// Obtiene las celdas en línea entre dos puntos
export const getCellsInLine = (start, end, grid) => {
    const cells = [];
    const dx = Math.sign(end.col - start.col);
    const dy = Math.sign(end.row - start.row);

    // Verificar que sea una línea válida (horizontal, vertical o diagonal)
    const deltaCol = Math.abs(end.col - start.col);
    const deltaRow = Math.abs(end.row - start.row);

    if (deltaCol !== 0 && deltaRow !== 0 && deltaCol !== deltaRow) {
        return []; // No es una línea válida
    }

    let row = start.row;
    let col = start.col;

    while (true) {
        if (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length) {
            cells.push({ row, col, letter: grid[row][col] });
        }

        if (row === end.row && col === end.col) break;

        row += dy;
        col += dx;
    }

    return cells;
};
