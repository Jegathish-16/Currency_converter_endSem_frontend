import React from 'react';
import './App.css';
import ConverterComponent from './components/ConverterComponent/ConverterComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
function App() {
  return (
    <React.Fragment>
      <HeaderComponent/>
      <ConverterComponent/>
    </React.Fragment>
  );
}

export default App;
