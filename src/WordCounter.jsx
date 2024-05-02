import React, { useState } from "react";

function WordCounter() {
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const countWords = () => {
        const value = text.trim().split(/\s+/);
        console.log(value);
        setWordCount(value.length);
    };

    const clearWords = () => {
        setText("");
        setWordCount(0);
    }

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '30px', marginTop: '20px', color: '#5F374B' }}><b>Word Counter</b></h1>
            <textarea
                name="TextInput"
                value={text}
                onChange={handleTextChange}
                cols="70"
                rows="20"
                style={{ borderRadius: '8px', padding: '10px', marginBottom: '20px' }}
                placeholder="Enter your text here..."
            />
            <br />
            <button onClick={clearWords} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#EEE4B1', cursor: 'pointer', marginRight: '20px' }}>
                Clear
            </button>
            <button onClick={countWords} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#EEE4B1', cursor: 'pointer' }}>
                Count Words
            </button>
            {wordCount > 0 && (
                <p style={{ marginTop: '15px', fontSize: '28px', color: '#430A5D' }}>
                    <b>Total words: {wordCount}</b>
                </p>
            )}
        </div>
    );
}

export default WordCounter;
