import React from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Main from './layout/Main/Main';

const App: React.FC = () => (
  <div className='App'>
    <Header/>
    <Main/>
    <Footer/>
  </div>
);

export default App;
