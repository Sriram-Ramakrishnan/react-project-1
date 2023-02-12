import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Connect from './components/Connect';
import Info from './components/Info';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
      <Header/>
      <div className='otherinfo'>
      <Connect/>
      <Info/>
      <Footer/>
      </div>
    </div>
);
