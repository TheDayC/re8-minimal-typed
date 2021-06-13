import React, { useEffect } from 'react';

import './App.css';
import Health from './components/Health';
import { getData } from './services/data';

const App: React.FC = () => {

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="App">
            <Health />
        </div>
    );
}

export default App;
