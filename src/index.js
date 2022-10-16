import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import SignUp from './components/SignUp';
import Linking from './components/Linking';
import Dashboard from './components/Dashboard'
import Quiz from './components/Quiz'
const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  render(
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<App />}/>
  // </Routes>
  // </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<p>invalid path</p>}/>
      <Route path='SignUp' element={<SignUp/>}/>
      <Route path='Linking' element={<Linking/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='Quiz' element={<Quiz/>}/>
      <Route path='/' element={<App />}/>
    </Routes>

  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


