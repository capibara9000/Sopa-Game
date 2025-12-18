import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { generateWordSearch, checkSelection, getCellsInLine } from '../utils/wordSearch';
import Grid from './Grid';
import WordList from './WordList';
import './Game.css';

// Colores para resaltar palabras encontradas
const HIGHLIGHT_COLORS = [
    '#ef4444', '#22c55e', '#a855f7', '#06b6d4', '#f97316',
    '#ec4899', '#eab308', '#6366f1', '#14b8a6', '#f43f5e',
    '#84cc16', '#8b5cf6', '#0891b2', '#d946ef', '#fb923c'
];

function Game({ themeKey, onBack, onNewGame }) {
    const [gameData, setGameData] = useState(null);
    const [selection, setSelection] = useState([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [startCell, setStartCell] = useState(null);
    const [foundWords, setFoundWords] = useState([]);
    const [colorIndex, setColorIndex] = useState(0);
    const [showWin, setShowWin] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const timerRef = useRef(null);

    // Generar juego al montar
    useEffect(() => {
        const data = generateWordSearch(themeKey, 10, 10);
        setGameData(data);
        setFoundWords([]);
        setColorIndex(0);
        setShowWin(false);
        setElapsedTime(0);
        setIsTimerRunning(true);
    }, [themeKey]);

    // Temporizador
    useEffect(() => {
        if (isTimerRunning) {
            timerRef.current = setInterval(() => {
                setElapsedTime(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isTimerRunning]);

    // Formatear tiempo
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    // Verificar victoria
    useEffect(() => {
        if (gameData && foundWords.length === gameData.words.length && foundWords.length > 0) {
            setIsTimerRunning(false);
            setTimeout(() => setShowWin(true), 500);
        }
    }, [foundWords, gameData]);

    // Mapa de celdas encontradas para resaltado
    const foundCellsMap = useMemo(() => {
        const map = {};
        foundWords.forEach(fw => {
            fw.positions.forEach(pos => {
                const key = `${pos.row}-${pos.col}`;
                map[key] = fw.color;
            });
        });
        return map;
    }, [foundWords]);

    // Manejar inicio de selección
    const handleCellMouseDown = useCallback((row, col) => {
        if (!gameData) return;
        setIsSelecting(true);
        setStartCell({ row, col });
        setSelection([{ row, col, letter: gameData.grid[row][col] }]);
    }, [gameData]);

    // Manejar movimiento durante selección
    const handleCellMouseEnter = useCallback((row, col) => {
        if (!isSelecting || !startCell || !gameData) return;

        const cells = getCellsInLine(startCell, { row, col }, gameData.grid);
        if (cells.length > 0) {
            setSelection(cells);
        }
    }, [isSelecting, startCell, gameData]);

    // Manejar fin de selección
    const handleMouseUp = useCallback(() => {
        if (!isSelecting || !gameData) {
            setIsSelecting(false);
            return;
        }

        // Verificar si la selección es una palabra válida
        const foundWord = checkSelection(selection, gameData.words);

        if (foundWord && !foundWord.found) {
            // Marcar palabra como encontrada
            foundWord.found = true;
            const color = HIGHLIGHT_COLORS[colorIndex % HIGHLIGHT_COLORS.length];

            setFoundWords(prev => [...prev, {
                word: foundWord.word,
                positions: foundWord.positions,
                color
            }]);
            setColorIndex(prev => prev + 1);
        }

        setIsSelecting(false);
        setSelection([]);
        setStartCell(null);
    }, [isSelecting, selection, gameData, colorIndex]);

    // Resolver automáticamente
    const handleSolve = useCallback(() => {
        if (!gameData) return;

        const newFoundWords = [];
        let currentColorIndex = colorIndex;

        gameData.words.forEach(wordData => {
            if (!wordData.found) {
                wordData.found = true;
                const color = HIGHLIGHT_COLORS[currentColorIndex % HIGHLIGHT_COLORS.length];
                newFoundWords.push({
                    word: wordData.word,
                    positions: wordData.positions,
                    color
                });
                currentColorIndex++;
            }
        });

        // Añadir con delay para animación
        newFoundWords.forEach((fw, index) => {
            setTimeout(() => {
                setFoundWords(prev => [...prev, fw]);
            }, index * 200);
        });

        setColorIndex(currentColorIndex);
    }, [gameData, colorIndex]);

    if (!gameData) {
        return (
            <div className="game-loading">
                <div className="loading-spinner"></div>
                <p>Generando sopa de letras...</p>
            </div>
        );
    }

    return (
        <div className="game" onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
            {/* Header */}
            <div className="game-header">
                <button className="back-button" onClick={onBack}>
                    ← Volver
                </button>
                <div className="game-title">
                    <span className="game-icon">{gameData.themeIcon}</span>
                    <h2>{gameData.themeName}</h2>
                </div>
                <div className="timer">
                    <span className="timer-icon">⏱️</span>
                    <span className="timer-value">{formatTime(elapsedTime)}</span>
                </div>
                <button className="new-game-button" onClick={onNewGame}>
                    🔄 Nueva
                </button>
            </div>

            {/* Solve Button */}
            <button className="solve-button" onClick={handleSolve}>
                Solve
            </button>

            {/* Grid */}
            <Grid
                grid={gameData.grid}
                selection={selection}
                foundCellsMap={foundCellsMap}
                onCellMouseDown={handleCellMouseDown}
                onCellMouseEnter={handleCellMouseEnter}
            />

            {/* Word List */}
            <WordList
                words={gameData.words}
                foundWords={foundWords}
            />

            {/* Progress */}
            <div className="game-progress">
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${(foundWords.length / gameData.words.length) * 100}%`,
                            backgroundColor: gameData.themeColor
                        }}
                    ></div>
                </div>
                <span className="progress-text">
                    {foundWords.length} / {gameData.words.length} palabras
                </span>
            </div>

            {/* Win Modal */}
            {showWin && (
                <div className="win-overlay">
                    <div className="win-modal">
                        <h2>🎉 ¡Felicidades!</h2>
                        <p>Has encontrado todas las palabras</p>
                        <p className="win-time">⏱️ Tiempo: {formatTime(elapsedTime)}</p>
                        <div className="win-buttons">
                            <button onClick={onNewGame}>Nueva Partida</button>
                            <button onClick={onBack}>Cambiar Tema</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Game;
