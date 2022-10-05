import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

//ReactDom.render(<App />, document.getElementById('root'));