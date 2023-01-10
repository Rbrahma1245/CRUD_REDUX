import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import Store from './store/Store';


// Store.subscribe(() => console.log(Store.getState()));


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
