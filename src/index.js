import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import './App.scss';
import reducer from './reducers/reducer';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  composeWithDevTools ? composeWithDevTools() : f => f
));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
