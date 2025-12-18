import { memo } from 'react';
import './Grid.css';

const Cell = memo(function Cell({
    letter,
    row,
    col,
    isSelected,
    foundColor,
    onMouseDown,
    onMouseEnter
}) {
    const style = {};

    if (foundColor) {
        style.backgroundColor = foundColor;
        style.color = 'white';
    }

    return (
        <div
            className={`cell ${isSelected ? 'selected' : ''} ${foundColor ? 'found' : ''}`}
            style={style}
            onMouseDown={() => onMouseDown(row, col)}
            onMouseEnter={() => onMouseEnter(row, col)}
        >
            {letter}
        </div>
    );
});

function Grid({ grid, selection, foundCellsMap, onCellMouseDown, onCellMouseEnter }) {
    const selectionSet = new Set(selection.map(s => `${s.row}-${s.col}`));

    return (
        <div className="grid-container">
            <div className="grid" style={{ gridTemplateColumns: `repeat(${grid[0].length}, 1fr)` }}>
                {grid.map((row, rowIndex) =>
                    row.map((letter, colIndex) => {
                        const key = `${rowIndex}-${colIndex}`;
                        const isSelected = selectionSet.has(key);
                        const foundColor = foundCellsMap[key];

                        return (
                            <Cell
                                key={key}
                                letter={letter}
                                row={rowIndex}
                                col={colIndex}
                                isSelected={isSelected}
                                foundColor={foundColor}
                                onMouseDown={onCellMouseDown}
                                onMouseEnter={onCellMouseEnter}
                            />
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Grid;
