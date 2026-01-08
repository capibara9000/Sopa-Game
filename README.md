# 🔤 Sopa de Letras (Word Search Game)

Una aplicación web moderna y dinámica de Sopa de Letras construida con **React** y **Vite**. Disfruta de una experiencia de juego clásica con un diseño visual atractivo y funcionalidades interactivas.

![Sopa de Letras Preview](public/puzzle.svg)

## ✨ Características

-   **Múltiples Temas**: Elige entre una gran variedad de temas predefinidos (Frutas, Disney, Pokemon, etc.).
-   **Buscador Inteligente**: Escribe el nombre de un tema para encontrarlo rápidamente.
-   **Modo Aleatorio**: ¿No sabes qué jugar? Deja que el juego elija un tema por ti con el botón "🎲 Tema Aleatorio".
-   **Modo Especial "El Creador"**: Un modo de juego único dedicado al creador.
-   **Interfaz Moderna**: Diseño limpio y responsivo con animaciones fluidas y una paleta de colores vibrante.
-   **Feedback Visual**: Indicadores claros al encontrar palabras y completar el juego.

## 🛠️ Tecnologías Utilizadas

-   **[React](https://reactjs.org/)**: Biblioteca de JavaScript para construir interfaces de usuario.
-   **[Vite](https://vitejs.dev/)**: Entorno de desarrollo rápido y ligero.
-   **CSS3**: Estilizado personalizado con variables CSS y animaciones (sin frameworks pesados).
-   **Google Fonts**: Tipografía moderna usando la fuente 'Outfit'.

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1.  **Clonar el repositorio** (si aún no lo has hecho):
    ```bash
    git clone <tu-repositorio-url>
    cd Sopa
    ```

2.  **Instalar dependencias**:
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador**:
    Visita la URL que aparece en la terminal (generalmente `http://localhost:5173`).

## 📁 Estructura del Proyecto

```
Sopa/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes y recursos multimedia
│   ├── components/  # Componentes de React (Game, Grid, ThemeSelector...)
│   ├── utils/       # Lógica del juego y generación de palabras
│   ├── App.jsx      # Componente principal
│   └── main.jsx     # Punto de entrada
├── index.html       # Archivo HTML principal
└── package.json     # Configuración y dependencias
```

## 🎮 Cómo Jugar

1.  Selecciona un tema de la lista o busca uno específico.
2.  Busca las palabras listadas en la cuadrícula de letras.
3.  Arrastra el cursor (o el dedo en móvil) sobre las letras para seleccionar una palabra.
4.  ¡Encuentra todas las palabras para ganar!

---

Desarrollado con ❤️ por **Nelo**.
