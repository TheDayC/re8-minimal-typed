import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import App from './App';
import store from './store';
import theme from './theme';

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
);