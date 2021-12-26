import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// const app = require("express")()
// const http = require('http').createServer(app)
// const io = require('socket.io')(http, {
//   cors: {
//     origin: "*",
//     method: "*",
//   }
// })
// io.on('connection', socket =>{
//   console.log("A user has connected")
//   socket.on('chat message', message =>{
//     io.emit('chat message', message)
//   })
// })
// http.listen(4000, () =>{
//   console.log("I am listening on port 4000!")
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
