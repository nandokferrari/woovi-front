import { useState } from 'react';
import './App.css';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>Hello woovi, let's dale</h1>
        </div>
    );
};

export default App;
