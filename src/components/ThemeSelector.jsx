import { useState } from 'react';
import { themes, searchTheme } from '../utils/wordSearch';
import './ThemeSelector.css';

function ThemeSelector({ onSelectTheme }) {
    const themeKeys = Object.keys(themes);
    const [customTheme, setCustomTheme] = useState('');
    const [showCustomInput, setShowCustomInput] = useState(false);
    const [searchError, setSearchError] = useState(null);

    const handleRandomTheme = () => {
        const randomIndex = Math.floor(Math.random() * themeKeys.length);
        onSelectTheme(themeKeys[randomIndex]);
    };

    const handleCustomSubmit = () => {
        if (!customTheme.trim()) {
            setSearchError('Escribe un tema');
            return;
        }

        const result = searchTheme(customTheme);

        if (result.found) {
            setSearchError(null);
            onSelectTheme(result.themeKey);
        } else {
            setSearchError(`No encontrado. Prueba: ${result.suggestions.join(', ')}`);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleCustomSubmit();
        }
    };

    return (
        <div className="theme-selector">
            <div className="theme-header">
                <h1 className="theme-title">🔤 Sopa de Letras</h1>
                <p className="theme-subtitle">Selecciona un tema para comenzar</p>
            </div>

            {/* Action Buttons */}
            <div className="theme-actions">
                <button className="random-button" onClick={handleRandomTheme}>
                    🎲 Tema Aleatorio
                </button>
                <button
                    className="custom-button"
                    onClick={() => {
                        setShowCustomInput(!showCustomInput);
                        setSearchError(null);
                    }}
                >
                    ✏️ Buscar Tema
                </button>
            </div>

            {/* Custom Theme Input */}
            {showCustomInput && (
                <div className="custom-theme-section">
                    <p className="custom-hint">
                        Escribe el tema que quieras (ej: frutas, disney, pokemon...):
                    </p>
                    <input
                        type="text"
                        className="custom-input"
                        placeholder="Escribe un tema..."
                        value={customTheme}
                        onChange={(e) => {
                            setCustomTheme(e.target.value);
                            setSearchError(null);
                        }}
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                    {searchError && (
                        <p className="search-error">{searchError}</p>
                    )}
                    <button className="custom-submit" onClick={handleCustomSubmit}>
                        🔍 Buscar
                    </button>
                </div>
            )}

            <p className="theme-section-title">O elige un tema:</p>

            <div className="theme-grid">
                {themeKeys.map((key, index) => {
                    const theme = themes[key];
                    return (
                        <button
                            key={key}
                            className="theme-card"
                            onClick={() => onSelectTheme(key)}
                            style={{
                                '--theme-color': theme.color,
                                animationDelay: `${index * 0.03}s`
                            }}
                        >
                            <span className="theme-icon">{theme.icon}</span>
                            <span className="theme-name">{theme.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ThemeSelector;
