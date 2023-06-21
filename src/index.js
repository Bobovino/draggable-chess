import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import Knight from './Components/Knight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<Knight />, document.getElementById('root'))