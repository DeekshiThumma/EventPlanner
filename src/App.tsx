import { useState } from "react";
import "./style.css";

function App() {
  const [] = useState(0);

  return (
    <>
      <header>
        <div className="wrapper1">
          <div className="container1">
            <div className="logo">
              <img src="logo.png" alt="Cafe Logo" />
            </div>
            <div className="navbar">
              <div>
                <a href="#home">Home</a>
                <a href="#about">Menu</a>
                <a href="#services">Photo Gallery</a>
                <a href="#">About us</a>
                <a href="#contact">Contact us</a>
              </div>
            </div>
            <div className="mybutton">
              <button className="cta-button">Order Now</button>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to
            <br />
            BALLOONS PARTY PLANNERS
          </h1>
          <p>Your imagination we create.</p>
          <button className="cta-button">View Menu</button>
        </div>
      </section>

      <section className="menu">
        <h2>Our memories with you</h2>
        <div className="container">
          <div className="menu-items">
            <div className="menu-item">
              <img src="memory1.png" alt="Birthday" />
              <h3>Birthday</h3>
              <p>Birthday.</p>
              <span></span>
            </div>
            <div className="menu-item">
              <img src="memory2.png" alt="Anniversary" />
              <h3>Anniversary</h3>
              <p>Anniversary.</p>
              <span></span>
            </div>
            <div className="menu-item">
              <img src="memory3.png" alt="Birthday" />
              <h3>Birthday</h3>
              <p>Birthday</p>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="container">
          <div className="about-content">
            <h2>About Us</h2>
            <p>An app insight </p>
            <button className="cta-button">Order Now</button>
          </div>
          <div className="cafeInterior">
            <img src="event.png" alt="Cafe Interior" className="about-image" />
          </div>
        </div>
      </section>

      <section className="gallery">
        <h2>Photo Gallery</h2>
        <div className="container">
          <div className="gallery-images">
            <img src="Gallery Image 1.jpg" alt="Gallery Image 1" />
            <img src="Gallery Image 2.jpg" alt="Gallery Image 2" />
            <img src="Gallery Image 3.jpg" alt="Gallery Image 3" />
            <img src="Gallery Image 4.jpg" alt="Gallery Image 4" />
            <img src="Gallery Image 5.jpg" alt="Gallery Image 5" />
            <img src="Gallery Image 6.jpg" alt="Gallery Image 6" />
            <img src="Gallery Image 1.jpg" alt="Gallery Image 1" />
            <img src="Gallery Image 2.jpg" alt="Gallery Image 2" />
            <img src="Gallery Image 3.jpg" alt="Gallery Image 3" />
            <img src="Gallery Image 4.jpg" alt="Gallery Image 4" />
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <div className="container">
          <div className="contact-form">
            <form id="contactForm" method="post">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
            <div id="statusMessage"></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Menu</a>
              <a href="#">Photo Gallery</a>
              <a href="#">About Us</a>
              <a href="#">Contact</a>
            </div>
            <div className="social-links">
              <a href="#">
                <img src="facebook.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="twitter.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
