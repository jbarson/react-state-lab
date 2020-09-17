import React from 'react';
import '../styles/style.css';
import Header from './Header';
import CardList from './CardList';

function App() { 
    return (
      <div>
        <Header logo="BrainStation"/>
        <CardList/>
      </div>
    );
}

export default App;
