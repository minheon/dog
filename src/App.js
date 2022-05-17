import React from 'react';
import Footer from './components/Footer';

import Header from './components/Header';
import Section from './components/Section';

import './App.scss';
import Title from './components/Title';
import Gnb from './components/Gnb';

function App(props){
  return(
    <>
      <Header>
        <Title />
        <Gnb />
      </Header>

<Section />
<Footer />
    </>
  );
}

export default App;