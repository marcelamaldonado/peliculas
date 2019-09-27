import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'


import reducers from './redux/reducers'
import App from './componentes/App';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle } from 'styled-components'


createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Anton|Cinzel|Rock+Salt&display=swap');
body{
    margin:0;
}
`
const store = createStore(reducers,{},applyMiddleware(promise(),reduxThunk,logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
