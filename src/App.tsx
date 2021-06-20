import React, { useEffect } from 'react';

import './App.css';
import Health from './components/Health';
import DA from './components/DA';
import EnemyHealth from './components/EnemyHealth';
import { getData } from './services/data';

const App: React.FC = () => {
    const pollingRate = process.env.REACT_APP_POLLING_RATE ? parseInt(process.env.REACT_APP_POLLING_RATE) : 1000;

    useEffect(() => {
        getData();
        setInterval(getData, pollingRate);
    }, []);

    return (
        <div className="App">
            <Health />
            <DA />
            <EnemyHealth />
        </div>
    );
}

export default App;
