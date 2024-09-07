import React, { useEffect } from 'react';
import './css/landing.css';

// Import images
import logo from '../images/603logo (1).avif';
// import sunmillLoc from '../images/sunmill-loc_batcheditor_fotor.avif';
import sunmillLoc from '../images/sunmill-loc_batcheditor_fotor (1).avif'
import heroLocation from '../images/heroLocation (1).avif';
import sunshineLoc from '../images/sunshine-loc.webp';
import testAvatar from '../images/testi-avatar.jpg';
import footerBg from '../images/fae955e3-de29-4d6b-a41a-85563f86a931.avif';

// Import Ionicons (install via npm: npm install ionicons)
import { IonIcon } from '@ionic/react';
import { 
  callOutline, mailOutline, locationOutline, timeOutline, closeOutline,
  chevronBack, chevronForward, chevronUp
} from 'ionicons/icons';

const Landing = () => {

  useEffect(() => {
    // Preloader functionality
    const preloader = document.querySelector("[data-preaload]");
    window.addEventListener("load", () => {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    });

    // Navbar toggler functionality
    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navbar = document.querySelector("[data-navbar]");
    const overlay = document.querySelector("[data-overlay]");
    const toggleNavbar = () => {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("nav-active");
    };
    navTogglers.forEach(toggler => toggler.addEventListener("click", toggleNavbar));

    // Header and Back to Top Button functionality
    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");
    let lastScrollPos = 0;
    const hideHeader = () => {
      const isScrollDown = lastScrollPos < window.scrollY;
      if (isScrollDown) {
        header.classList.add("hide");
      } else {
        header.classList.remove("hide");
      }
      lastScrollPos = window.scrollY;
    };
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        hideHeader();
      } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
      }
    });

    // Hero Slider functionality
    const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");
    let currentSlidePos = 0;
    let lastActiveSliderItem = heroSliderItems[0];

    const updateSliderPos = () => {
      lastActiveSliderItem.classList.remove("active");
      heroSliderItems[currentSlidePos].classList.add("active");
      lastActiveSliderItem = heroSliderItems[currentSlidePos];
    };

    const slideNext = () => {
      if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }
      updateSliderPos();
    };

    const slidePrev = () => {
      if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
      } else {
        currentSlidePos--;
      }
      updateSliderPos();
    };

    heroSliderNextBtn.addEventListener("click", slideNext);
    heroSliderPrevBtn.addEventListener("click", slidePrev);

    // Auto slide
    let autoSlideInterval;
    const autoSlide = () => {
      autoSlideInterval = setInterval(slideNext, 7000);
    };

    [heroSliderNextBtn, heroSliderPrevBtn].forEach(btn => {
      btn.addEventListener("mouseover", () => clearInterval(autoSlideInterval));
      btn.addEventListener("mouseout", autoSlide);
    });

    window.addEventListener("load", autoSlide);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("load", autoSlide);
      heroSliderNextBtn.removeEventListener("click", slideNext);
      heroSliderPrevBtn.removeEventListener("click", slidePrev);
      window.removeEventListener("scroll", hideHeader);
      navTogglers.forEach(toggler => toggler.removeEventListener("click", toggleNavbar));
    };
  }, []);

  return (
    <div>
      {/* Preloader */}
      <div className="preload" data-preaload>
        <div className="circle"></div>
        <p className="text">603</p>
      </div>

      {/* Top Bar */}
      <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <IonIcon icon={locationOutline} aria-hidden="true" />
            </div>
            <span className="span">
              Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
            </span>
          </address>
          <div className="separator"></div>
          <div className="topbar-item item-2">
            <div className="icon">
              <IonIcon icon={timeOutline} aria-hidden="true" />
            </div>
            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>
          <a href="tel:+919136036603" className="topbar-item link">
            <div className="icon">
              <IonIcon icon={callOutline} aria-hidden="true" />
            </div>
            <span className="span">+91 9136036603</span>
          </a>
          <div className="separator"></div>
          <a href="mailto:sales@603thecoworkingspace.com" className="topbar-item link">
            <div className="icon">
              <IonIcon icon={mailOutline} aria-hidden="true" />
            </div>
            <span className="span">sales@603thecoworkingspace.com</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="header" data-header>
        <div className="container">
          <a href="#" className="logo">
            <img src={logo} width="160" height="50" alt="603 The Coworking Space - Home" />
          </a>

          <nav className="navbar" data-navbar>
            <button className="close-btn" aria-label="close menu" data-nav-toggler>
              <IonIcon icon={closeOutline} aria-hidden="true" />
            </button>
            <a href="#" className="logo">
              <img src={logo} width="160" height="50" alt="603 The Coworking Space - Home" />
            </a>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link hover-underline active">
                  <div className="separator"></div>
                  <span className="span">Home</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#menu" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Spaces</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#about" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">About Us</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Images</span>
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="navbar-link hover-underline">
                  <div className="separator"></div>
                  <span className="span">Contact</span>
                </a>
              </li>
            </ul>
            <div className="text-center">
              <p className="headline-1 navbar-title">Visit Us</p>
              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>
              <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
              <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">
                booking@grilli.com
              </a>
              <div className="separator"></div>
              <p className="contact-label">Booking Request</p>
              <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                +88-123-123456
              </a>
            </div>
          </nav>

          <a href="indexLayout.html" className="btn btn-secondary">
            <span className="text text-1">Make Your Space</span>
            <span className="text text-2" aria-hidden="true">
              Make Your Space
            </span>
          </a>

          <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
          </button>

          <div className="overlay" data-nav-toggler data-overlay></div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <article>
          {/* Hero Section */}
          <section className="hero text-center" aria-label="home" id="home">
            <ul className="hero-slider" data-hero-slider>
              <li className="slider-item active" data-hero-slider-item>
                <div className="container">
                  <div className="slider-bg">
                    <img src={sunmillLoc} width="1880" height="950" alt="" className="img-cover" />
                  </div>
                  <p className="label-2 section-subtitle slider-reveal">Classic Elegance</p>
                  <h1 className="display-1 hero-title slider-reveal">
                    Create Your Space <br />
                    that breathe creativity
                  </h1>
                  <p className="body-2 hero-text slider-reveal">
                    Best working environment that suits your business needs.
                  </p>
                  <a href="#" className="btn btn-primary slider-reveal">
                    <span className="text text-1">Make Your Space</span>
                    <span className="text text-2" aria-hidden="true">
                      Make Your Space
                    </span>
                  </a>
                </div>
              </li>

              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img src={heroLocation} width="1880" height="950" alt="" className="img-cover" />
                </div>
                <p className="label-2 section-subtitle slider-reveal">Delightful Experience</p>
                <h1 className="display-1 hero-title slider-reveal">
                  Transforming offices into <br />
                  vibrant stories
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Spaces that are occupied by Corporates and Start ups, designed with your business
                  in mind
                </p>
                <a href="#" className="btn btn-primary slider-reveal">
                  <span className="text text-1">Make Your Space</span>
                  <span className="text text-2" aria-hidden="true">
                    Make Your Space
                  </span>
                </a>
              </li>

              <li className="slider-item" data-hero-slider-item>
                <div className="slider-bg">
                  <img src={sunshineLoc} width="1880" height="950" alt="" className="img-cover" />
                </div>
                <p className="label-2 section-subtitle slider-reveal">Amazing & Elegance</p>
                <h1 className="display-1 hero-title slider-reveal">
                  Where Every Floor <br />
                  tells a story
                </h1>
                <p className="body-2 hero-text slider-reveal">
                  Come with your team & experience the joy of inspiring office design.
                </p>
                <a href="#" className="btn btn-primary slider-reveal">
                  <span className="text text-1">Make Your Space</span>
                  <span className="text text-2" aria-hidden="true">
                    Make Your Space
                  </span>
                </a>
              </li>
            </ul>

            <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
              <IonIcon icon={chevronBack} />
            </button>

            <button className="slider-btn next" aria-label="slide to next" data-next-btn>
              <IonIcon icon={chevronForward} />
            </button>

            <a href="indexLayout.html" className="hero-btn has-after">
              <img src="./assets/images/hero-icon.png" width="48" height="48" alt="booking icon" />
              <span className="label-2 text-center span">Book A Space</span>
            </a>
          </section>

          {/* Other sections can be added here following the same pattern */}

          {/* Testimonials Section */}
          <section
            className="section testi text-center has-bg-image"
            style={{ backgroundImage: `url(${sunshineLoc})` }}
            aria-label="testimonials"
          >
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
              <div className="quote"></div>
              <div className="glass-box">
                <p
                  className="headline-2 testi-text"
                  style={{ color: 'rgb(255, 255, 255)', fontSize: '30px' }}
                >
                  Creativity flows freely at 603 The Coworking Space. As a content creator, I find
                  the ambiance truly inspiring. Being surrounded by fellow creatives has led to
                  unexpected collaborations and projects. It's like working in a hub of innovation,
                  and I couldn't be happier with my choice.
                </p>
                <div className="profile">
                  <img
                    src={testAvatar}
                    width="100"
                    height="100"
                    loading="lazy"
                    alt="Sam Johnson"
                    className="img"
                  />
                  <p className="label-2 profile-name">Sam Johnson</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            className="footer section has-bg-image text-center"
            style={{ backgroundImage: `url(${footerBg})` }}
          >
            <div className="container">
              <div className="footer-top grid-list">
                <div className="footer-brand has-before has-after">
                  <a href="#" className="logo">
                    <img
                      src={logo}
                      width="160"
                      height="50"
                      loading="lazy"
                      alt="603 The Coworking Space - Home"
                    />
                  </a>
                  <address className="body-4">
                    Makhija Arcade, 35th Rd, Khar, Khar West, Mumbai, Maharashtra 400052
                  </address>
                  <a href="mailto:booking@grilli.com" className="body-4 contact-link">
                    booking@grilli.com
                  </a>
                  <a href="tel:+88123123456" className="body-4 contact-link">
                    Booking Request : +88-123-123456
                  </a>
                  <p className="body-4">Open : 09:00 am - 01:00 pm</p>
                  <div className="wrapper">
                    <div className="separator"></div>
                    <div className="separator"></div>
                    <div className="separator"></div>
                  </div>
                  <p className="title-1">Get News & Offers</p>
                  <p className="label-1">
                    Subscribe us & Get <span className="span">25% Off.</span>
                  </p>
                  <form action="" className="input-wrapper">
                    <div className="icon-wrapper">
                      <IonIcon icon={mailOutline} aria-hidden="true" />
                      <input
                        type="email"
                        name="email_address"
                        placeholder="Your email"
                        autoComplete="off"
                        className="input-field"
                      />
                    </div>
                    <button type="submit" className="btn btn-secondary">
                      <span className="text text-1">Subscribe</span>
                      <span className="text text-2" aria-hidden="true">
                        Subscribe
                      </span>
                    </button>
                  </form>
                </div>
                {/* Add other footer lists as needed */}
              </div>

              <div className="footer-bottom">
                <p className="copyright">
                  &copy; 2024 . All Rights Reserved | Crafted by{' '}
                  <a href="603thecoworkingspace.com" target="_blank" rel="noreferrer" className="link">
                    603 The Coworking Space
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </article>
      </main>

      {/* Back to Top Button */}
      <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
        <IonIcon icon={chevronUp} aria-hidden="true" />
      </a>
    </div>
  );
};

export default Landing;
