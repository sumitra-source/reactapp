import React, { useState } from 'react';

export const Hello = () => {
    return <div>Hello from Hello component</div>;
};

export function App() {
    //* state
    const [buttonText, setButtonText] = useState('Before');

    function getButtonText() {
        setButtonText('After');
    }

    return (
        <div>
            <Hello />
            <button onClick={getButtonText}>{buttonText}</button>
        </div>
    );
}

export default App;