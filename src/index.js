import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
const store = ConfigureStore();
ReactDOM.render(
  <React.StrictMode>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
