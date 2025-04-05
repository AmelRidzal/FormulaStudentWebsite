import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formula Student Team</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#team">The Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>We are a Formula Student team competing in various motorsport competitions!</p>
        </section>
        <section id="team">
          <h2>Meet the Team</h2>
          <p>Our team consists of talented engineers and designers working together to create a competitive race car.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email us at: contact@formula-student.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Formula Student Team</p>
      </footer>
    </div>
  );
}

export default App;
