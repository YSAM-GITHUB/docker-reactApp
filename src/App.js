import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


 <h1> SIMPLE REACT APP DEMO PROJECT</h1>

<p> This project demonstrates complete development and production work-flow  usging</p>
    <p> - React and Nginx app </p>
    <p> - Version control System : Git and Github</p>
    <p> - Continuous integration system : Travis CI</p>
    <p> - Containerizaton Plaltform: Docker Images and docker hub</p>
    <p> - Container Orchastration : Kubernnetes</p>

<h2> Sucessfully completed, Thank You !! </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
