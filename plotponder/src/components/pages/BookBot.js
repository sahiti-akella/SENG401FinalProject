import React, { useState } from 'react';
import axios from 'axios';

function BookBot() {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            const res = await axios.post('http://localhost:8020/chat', { prompt });
            setResponse(res.data); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>

            <div>
                <h2>Response:</h2>
                <p>{response}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Prompt:
                    <input 
                        type="text" 
                        value={prompt} 
                        onChange={(e) => setPrompt(e.target.value)} 
                    />
                </label>
                <button type="submit">Submit</button>
            </form>

            
        </div>
    );
};

export default BookBot;
