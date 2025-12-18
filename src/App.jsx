import { useState, useCallback } from 'react';
import ThemeSelector from './components/ThemeSelector';
import Game from './components/Game';
import './App.css';

function App() {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [gameKey, setGameKey] = useState(0);

    const handleThemeSelect = useCallback((themeKey) => {
        setSelectedTheme(themeKey);
        setGameKey(prev => prev + 1);
    }, []);

    const handleBackToMenu = useCallback(() => {
        setSelectedTheme(null);
    }, []);

    const handleNewGame = useCallback(() => {
        setGameKey(prev => prev + 1);
    }, []);

    return (
        <div className="app">
            {selectedTheme === null ? (
                <ThemeSelector onSelectTheme={handleThemeSelect} />
            ) : (
                <Game
                    key={gameKey}
                    themeKey={selectedTheme}
                    onBack={handleBackToMenu}
                    onNewGame={handleNewGame}
                />
            )}
        </div>
    );
}

export default App;
