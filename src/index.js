import React from 'react';
import ReactDOM from 'react-dom/client';
import Movies from './components/movie/movies';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Menu from './components/Menu/menu';
import Body from './components/Body/body';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Menu />
    <Body />
    <Footer />
  </React.StrictMode>
);
