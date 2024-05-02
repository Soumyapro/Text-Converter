import React, { useState } from "react";

function TextConverter() {

    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);

    const handleTextChange = (e) => {
        setText(e.target.value)
    };

    const UpperCase = () => {

        const capital = text.toUpperCase()
        setText(capital)
    }

    const LowerCase = () => {

        const small = text.toLowerCase()
        setText(small)
    }

    const ClearText = () => {
        setText('');
    }

    const ReverseText = () => {

        const reverse = text.split(' ').reverse().join(' ')
        setText(reverse)
    }

    const CopyText = () => {
        navigator.clipboard.writeText(text);
        setCopied(true)
        setTimeout(() => setCopied(false), 2000);
    }
    return (
        <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '30px', marginTop: '20px', color: '#5F374B' }}><b>Text Converter</b></h1>
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
            <button onClick={UpperCase} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#EEE4B1', cursor: 'pointer', marginRight: '20px' }}>
                UpperCase
            </button>
            <button onClick={LowerCase} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#EEE4B1', cursor: 'pointer', marginRight: '20px' }}>
                LowerCase
            </button>
            <button onClick={ClearText} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#EEE4B1', cursor: 'pointer', marginRight: '20px' }}>
                Clear
            </button>
            <button onClick={ReverseText} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#EEE4B1', cursor: 'pointer', marginRight: '20px' }}>
                Reverse
            </button>
            <button onClick={CopyText} style={{ padding: '10px 20px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#EEE4B1', cursor: 'pointer' }}>
                Copy
            </button>
            {copied && <p style={{ color: '#5F374B', marginTop: '10px' }}>Successfully copied!</p>}
        </div>
    );
}

export default TextConverter