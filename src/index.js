import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import reducer from './reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();