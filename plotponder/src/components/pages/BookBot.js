// BookBot.js

import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import bookBotAnimation from '../../Bookbot.json';
import Navbar from '../Navbar';
import '../BookBot.css';
import { Link } from 'react-router-dom';

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
            <Navbar />
            <div className='welcome-page'>
                <div className='welcome-message'> 
                <h2 >Welcome to BookBot! 🤖</h2>
                </div>
                <div className="back-to-recommendations"> 
                    <Link to="/Recommendations"> {"\u2190"} Back to Recommendations </Link>
                </div>
                
                <div className='bookbot-description'> 
                    Discover your next literary obsession with BookBot, your ultimate guide 
                    to personalized book and TV show recommendations! Utilizing cutting-edge AI technology,
                    BookBot seamlessly integrates with OpenAI's ChatGPT, ensuring each suggestion is finely 
                    tuned to your unique interests. Simply enter a book name, and let BookBot work its 
                    magic, delivering tailored recommendations in seconds. 
                </div>
            </div>
            <div className='chat-container'> 
                <div className="lottie-container">
                    <Lottie 
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: bookBotAnimation,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'
                            }
                        }}
                        height={window.innerHeight / 2} // Adjust height to take up half of the bottom half of the page
                        width="100%"
                    />
                </div>
                <div className="prompt-response-container">
                   <p>BookBot's Recommendations:</p>
                    <div> 
                    <div className='chatgpt-response'></div>
                    <p>{response}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="input-form">
                        <input 
                            type="text" 
                            value={prompt} 
                            onChange={(e) => setPrompt(e.target.value)} 
                            className="prompt-input"
                            placeholder="Enter Book Name for Recommendations......"
                        />
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
              
            </div>
        </div>
    );
};

export default BookBot;
