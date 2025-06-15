import React from 'react';
import './App.css';
import logo from './logo.svg'; // create-react-app includes this by default

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from my React App!</h1>
        <p>
          This application is running inside a Docker container, served by NGINxQQQQQQ.
        </p>
        <p>
          Next stop: Kubernetes via FluxCD!
        </p>
      </header>
    </div>
  );
}

export default App;
