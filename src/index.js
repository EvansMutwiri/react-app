import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card'


const root = ReactDOM.createRoot(document.getElementById('root'));

let tick = () =>
  root.render(
    <React.StrictMode>
      <App/>
      <Card/>
    </React.StrictMode>
  )

setInterval(tick, 1000);

reportWebVitals();
