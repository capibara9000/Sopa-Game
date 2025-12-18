import './WordList.css';

function WordList({ words, foundWords }) {
    const foundWordsMap = {};
    foundWords.forEach(fw => {
        foundWordsMap[fw.word] = fw.color;
    });

    return (
        <div className="word-list">
            {words.map((wordData, index) => {
                const foundColor = foundWordsMap[wordData.word];
                const isFound = !!foundColor;

                return (
                    <span
                        key={index}
                        className={`word-item ${isFound ? 'found' : ''}`}
                        style={isFound ? {
                            '--found-color': foundColor,
                            textDecorationColor: foundColor
                        } : {}}
                    >
                        {wordData.word}
                    </span>
                );
            })}
        </div>
    );
}

export default WordList;
