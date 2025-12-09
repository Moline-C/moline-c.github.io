import './App.css';

//typing effect
import { useState, useEffect } from 'react';





function App() {
  const words = [
    "is an Engineer",
    "is a Creaetor",
    "is a Visionary",
    "is an Innovator",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);



  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      //typing characters
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      // if word is complete, pause, then delete
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      } 

      //deleting characters

      else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        //once complete, move on to next word
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 100); // delete faster than typing

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);


  return (
    <div className="App">
      <nav className="navbar">
        <h1 className = "logo">Moline Charles</h1>
        <ul className = "nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#leadership">Leadership</a></li>
        </ul>
        </nav>
        
        <header className = "top-display">
          <h1 className = "display-title">
            <span className = "name">Moline Charles</span>{" "}
            <spann className="typing">{text}</spann>
          </h1>
        </header>

        <section id="about" className = "section">
          <h2>About Me</h2>
          <p>...</p>
        </section>

        <section id ="experience" className="section">
          <h2>Experience</h2>

          <div className = "card">
            <h3>----</h3>
            <p>---</p>
            <p>description</p>
          </div>
        </section>

        <section id = "leadership" className = "section">
          <h2>Leadership</h2>

          <div className = "card">
            <h3>---</h3>
            <p>Org Name</p>
            <p>description</p>
          </div>
        </section>

        

        <footer>
          <p>© {new Date().getFullYear()} Moline Charles</p>
        </footer>
    </div>
  );
}

export default App;
