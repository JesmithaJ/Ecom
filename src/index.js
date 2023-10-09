import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Login from './Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
); */

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/*var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
var element2 = React.createElement('h1', { className: 'greeting' }, 'Hi, world!');
ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(element2, document.getElementById('root'));*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

