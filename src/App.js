import './App.css';
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
      if (!isDeleting) {
        // Typing characters
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // If word is complete, pause then delete
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting characters
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        // Once complete, move on to next word
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  // Progression within NSBE (LinkedIn-style compact timeline, nested in the card)
  const nsbeJourney = [
    {
      date: "Sep 2025 - April 2026",
      title: "Trailblazers Cohort Member",
      current: false,
    },
    {
      date: "May 2026 - Present",
      title: "Technical Software Director, Executive Board",
      current: true,
    },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MC</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#leadership">Leadership</a></li>
        </ul>
      </nav>

      {/* Header / Top Section */}
      <header className="section top-display">
        <h1 className="display-title">
          <span className="name">Moline Charles</span>{" "}
          <span className="typing">{text}</span>
        </h1>
        <p className="description">
          Computer Engineering Student • RTL &amp; FPGA Design <br />
          • Full-Stack Developer • AI Enthusiast
        </p>
        <div className="top-buttons">
          <a
            href="https://github.com/Moline-C"
            className="btn github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" className="icon" /> View GitHub
          </a>
          <a
            href="https://linkedin.com/in/molinecharles"
            className="btn linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="icon" /> Connect on LinkedIn
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="section-content">
          <h2>About Me</h2>
          <p>
            I am Moline Charles, a Computer Engineering major at the University of Florida with a
            passion for hardware design, full-stack software development, and the intersection of
            AI with both. I currently work as a Quality Control, Hardware &amp; Software Engineer
            at SpinCore Technologies, where I test and validate FPGA-based systems while building
            internal tooling that blends embedded systems with modern software. As Technical
            Software Director on the Executive Board of the National Society of Black Engineers
            (NSBE), and a General Body Member of ColorStack, I am proud to be part of communities
            that emphasize diversity, empowerment, and excellence in tech. I am always looking for
            opportunities to grow as an engineer, and I am committed to using my skills, from RTL
            design to full-stack development, to make a positive impact. Whether it is through
            collaboration or involvement in community-driven projects, I am passionate about giving
            back and supporting others on their journey. I am always enthusiastic about connecting
            with individuals, organizations, and innovators who are dedicated to advancing
            technology in ways that promote equity and create meaningful impact.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience" id="experience">
        <div className="section-content">
          <h2>Experience</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <img
                  src="/spincore-logo.png"
                  alt="SpinCore Technologies"
                  className="card-logo"
                />
                <div className="card-title-info">
                  <h3 className="job-title">Quality Control, Hardware &amp; Software Engineer</h3>
                  <p className="company-name">SpinCore Technologies</p>
                </div>
              </div>
              <p className="date-box">February 2026 - Present</p>
              <p className="job-description">
                Perform quality control and functional testing on 10+ FPGA-based pulse generation
                boards, diagnosing hardware and software issues at the board level to ensure
                reliability and specification compliance. Configure and validate digital timing and
                control systems using C/C++ for TTL pulse and pattern generation across multiple
                board configurations. Develop internal tooling and automation, including an
                LLM-powered system to surface relevant responses from historical customer emails,
                reducing manual support lookup time. Improve and maintain company web presence as
                part of independent technical project work.
              </p>
            </div>

            <div className="card">
              <div className="card-header">
                <img
                  src="/company-logo.png"
                  alt="Moe's Chiropractic and & Rehab Center"
                  className="card-logo"
                />
                <div className="card-title-info">
                  <h3 className="job-title">Freelance Web Developer</h3>
                  <p className="company-name">Moe's Chiropractic &amp; Rehab Center</p>
                </div>
              </div>
              <p className="date-box">November 2024 - December 2024</p>
              <p className="job-description">
                Designed and launched a responsive Shopify website to enhance client access and online
                visibility, driving a 40% increase in site traffic within the first month. Registered
                and configured a custom domain with SSL to ensure secure and consistent user
                experiences. Integrated third-party booking and contact form applications to
                streamline scheduling, reducing manual administrative work by 60%. Collaborated
                closely with a five-person office team to refine content and optimize user flow,
                strengthening the clinic's overall digital presence and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="projects">
        <div className="section-content">
          <h2>Featured Projects</h2>

          <div className="project-card">
            <img src="/axi4-preview.png" alt="AXI4-Lite Crossbar Interconnect" className="project-image" />
            <div className="project-text">
              <h3 className="project-title">AXI4-Lite Crossbar Interconnect</h3>
              <p className="project-description">
                Designed a parameterizable N-initiator M-target AXI4-Lite crossbar in SystemVerilog
                with address-based target routing, round-robin arbitration with a zero-deadlock
                guarantee, and full 5-channel handshake compliance. Authored 11 SystemVerilog
                Assertions across the arbiter, target, and crossbar modules, and built a layered UVM
                testbench with a randomized sequence, driver, monitor, and scoreboard. Synthesized
                and validated on a DE10-Lite FPGA, confirming end-to-end AXI read/write data flow on
                real silicon.
              </p>
              <div className="project-badges">
                <span className="badge systemverilog">SystemVerilog</span>
                <span className="badge modelsim">ModelSim</span>
                <span className="badge uvm">UVM</span>
                <span className="badge quartus">Quartus</span>
              </div>
              <a
                href="https://github.com/Moline-C"
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/external-link.png" className="project-btn-icon" alt="" /> View Project
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src="/face-recognition-preview.png" alt="AI Face Recognition App" className="project-image" />
            <div className="project-text">
              <h3 className="project-title">AI Face Recognition App</h3>
              <p className="project-description">
                Built a real-time face recognition application using OpenCV for image processing,
                MediaPipe for 478-point landmark extraction, and dlib embeddings for accurate face
                identification. Designed a modular architecture with a Qt6 GUI and a filesystem-based
                image storage layer with JSON indexing, and implemented Euclidean distance similarity
                search across stored 128-D embeddings for accurate face detection.
              </p>
              <div className="project-badges">
                <span className="badge python">Python</span>
                <span className="badge qt">Qt</span>
                <span className="badge opencv">OpenCV</span>
                <span className="badge mediapipe">MediaPipe</span>
                <span className="badge dlib">Dlib</span>
              </div>
              <a
                href="https://github.com/Moline-C"
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/external-link.png" className="project-btn-icon" alt="" /> View Project
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src="/nsbe-gator-preview.png" alt="NSBE Gator App" className="project-image" />
            <div className="project-text">
              <h3 className="project-title">NSBE Gator App</h3>
              <p className="project-description">
                Contributed to a team-built mobile application using React Native with a
                Firebase/Firestore backend. Collaborated in a 10-person software team using GitHub
                for version control, code reviews, and feature integration.
              </p>
              <div className="project-badges">
                <span className="badge reactnative">React Native</span>
                <span className="badge firebase">Firebase</span>
              </div>
              <a
                href="https://github.com/Moline-C"
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/external-link.png" className="project-btn-icon" alt="" /> View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section leadership" id="leadership">
        <div className="section-content">
          <h2>Leadership &amp; Involvement</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <img
                  src="/nsbe-logo.png"
                  alt="National Society of Black Engineers"
                  className="card-logo"
                />
                <div className="card-title-info">
                  <h3 className="job-title">Technical Software Director, Executive Board</h3>
                  <p className="company-name">National Society of Black Engineers</p>
                </div>
              </div>
              <p className="date-box">May 2026 - Present</p>
              <p className="job-description">
                Lead a team of 10+ student developers in designing and maintaining chapter software
                projects. Coordinate technical workshops, coding initiatives, and project development
                efforts for chapter members. Collaborate with chapter leadership and 30+ student
                organizations to support technical and professional programming.
              </p>

              <div className="mini-timeline">
                {nsbeJourney.map((item, index) => (
                  <div
                    className={`mini-timeline-item${item.current ? " current" : ""}`}
                    key={index}
                  >
                    <span className="mini-timeline-dot" />
                    <div className="mini-timeline-text">
                      <span className="mini-timeline-title">{item.title}</span>
                      <span className="mini-timeline-date">{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <img src="/colorstack-logo.png" alt="ColorStack" className="card-logo" />
                <div className="card-title-info">
                  <h3 className="job-title">National Member</h3>
                  <p className="company-name">ColorStack</p>
                </div>
              </div>
              <p className="date-box">September 2025 - Present</p>
              <p className="job-description">
                Attended 10+ technical workshops covering data structures, resume optimization, and
                frontend development with HTML/CSS and JavaScript. Engaged with a growing network of
                100+ peers and professionals through mentorship, office hours, and virtual meetups
                with recruiters from leading tech companies to strengthen technical skills and
                industry exposure.
              </p>
            </div>

            <div className="card">
              <div className="card-header">
                <img src="/naacp-logo.png" alt="NAACP Gator Chapter" className="card-logo" />
                <div className="card-title-info">
                  <h3 className="job-title">Executive Assistant to the Internal Vice President</h3>
                  <p className="company-name">NAACP, Gator Chapter</p>
                </div>
              </div>
              <p className="date-box">2026 - Present</p>
              <p className="job-description">
                Serve as a point of contact for the Programming, Community Service, and Black Hair
                Expo committee chairs, supporting the Internal Vice President across chapter
                initiatives. Attend all Executive Board, Committee Chair, and General Body meetings,
                reorganizing meeting notes into clear summaries for the broader membership. Maintain
                the organization's calendar and help coordinate announcements to keep members
                informed and engaged.
              </p>
            </div>
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