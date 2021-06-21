import React from 'react';
import { GlobalStyles } from './App.styles.js';
import Header from './components/header/Header.component';

const App = () => {
  console.log();
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
};

export default App;
