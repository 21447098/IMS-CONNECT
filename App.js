import React, { useState, useEffect } from 'react';

function App() {
    const [ideas, setIdeas] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch('/api/Idea')
            .then(response => response.json())
            .then(data => setIdeas(data));
    }, []);

    const submitIdea = async () => {
        const response = await fetch('/api/Idea', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        });
        const newIdea = await response.json();
        setIdeas([...ideas, newIdea]);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h1>IMS-Connect</h1>
            <h2>Submit an Idea</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button onClick={submitIdea}>Submit</button>

            <h2>Submitted Ideas</h2>
            <ul>
                {ideas.map(idea => (
                    <li key={idea.id}>
                        <strong>{idea.title}</strong>: {idea.description} (Status: {idea.status}, Submitted: {idea.timestamp})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

