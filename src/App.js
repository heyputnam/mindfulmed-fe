//import statements
import{ useState, useEffect } from 'react';
import './styles.css';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h1>MindfulMed</h1>
      </header>
    </div>
  );
}

export default App;
