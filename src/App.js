import './App.css';

//typing effect
import { useState, useEffect } from 'react';





function App() {
  const words = [
    "is an Engineer",
    "is a Creator",
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
          setTimeout(() => setIsDeleting(true), 2000);
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
    }, isDeleting ? 40 : 100); // delete faster than typing

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);


  return (
    <div className="App">
      <nav className="navbar">
        <h1 className = "logo">MC</h1>
        <ul className = "nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#leadership">Leadership</a></li>

        </ul>
        </nav>
        
        <header className = "section top-display">
          <h1 className = "display-title">
            <span className = "name">Moline Charles</span>{" "}
            <span className="typing">{text}</span>
          </h1>
          
          <p className="description">Computer Science Student • Full-Stack Developer <br />• AI Enthusiast • Future Tech Leader</p>

          <div className = "top-buttons">
            <a href="https://github.com/Moline-C" className="btn github" target = "_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className="icon" />
            View GitHub
            </a>

            <a href = "https://linkedin.com/in/molinecharles" className = "btn linkedin" target = "_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className = "icon" />
            Connect on LinkedIn
            </a>
          </div>
        </header>

        <section className = "section about" id= "about">
          <div className = "section-content">
          <h2>About Me</h2>
          <p>I am Moline Charles, a Computer Science Major at the University of Florida with a deep passion for software engineering, web development, and game development. I am excited about the potential development of these fields through the use of AI and relatred tecnologies. As an active member of National Society of Black Engineers (NSBE) and Colorstack, I am proud to be a part of communities that emphasize diversity, empowerment, and excellence in  tech. In addition to my academic pursuits, I am always looking for opportunities to grow as a developer, and I am committed to using my skills to make a positive impact. Whether it is through, collaboration or involvement in community-driven projects, I am passionate about giving back and supporting others on their journey. I am always enthusiastic about connecting with individuals, organizaitons, and innovators who are dedicated to advancing technology in ways that promote equity and create meaningful impact. </p>
          </div>
        </section>

        <section className = "section experience" id="experience">
          <div className="section-content">
            <h2>Experience</h2>

            <div className = "card-container">
              <div className = "card">
                <div className = "card-header">
                  <img 
                  src="/company-logo.jpg"
                  alt = "Moe's Chiropractic and & Rehab Center"
                  className = "card-logo"
                  />
                  <div className="card-title-info">
                    <h3 className="job-title">Web Developer</h3>
                    <p className="company-name">Moe's Chiropractic & Rehab Center</p>
                    
                  </div>
                </div>
                <p className = "date-box">November 2024 - December 2024</p>
                <p className = "job-description">
                    Designed and launched a responsive Shopify website to enhance client access and online visibility, driving a 40% increase in site traffic within the first month. Registered and configured a custom domain with SSL to ensure secure and consistent user experiences. Integrated third-party booking and contact form applications to streamline scheduling, reducing manual administrative work by 60%. Collaborated closely with a five-person office team to refine content and optimize user flow, strengthening the clinic’s overall digital presence and engagement.
                  </p>
                </div>
              </div>
              
          </div>
        </section>


        <section className="section projects" id="projects">
          <div className = "section-content">
            <h2>Featured Projects</h2>
              <div className="card">Project1</div>
              <div className = "card">Project 2</div>
          </div>
         
        </section>

        <section className = "section leadership" id = "leadership">
          <div className="section-content">
            <h2>Leadership & Involvement</h2>
            <div className = "card-container">
              <div className = "card"> Leadership 1 </div>
            </div>
          </div>
        </section>

        
      
        <footer>
          <p>© {new Date().getFullYear()} Moline Charles</p>
        </footer>
    </div>
  );
}

export default App;
