import React from 'react';
import '../assets/style.css'

function NavTabs({ currentPage, handlePageChange }) {
  return (
<>
    <header >
      <h1> Asad Ansari</h1>
      <nav>
        <a 
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
        <a
          href="https://docs.google.com/document/d/12NktFO0frkjEjm58jKEAhNgXJrHTbkghLlqQeD8wbqA/edit?usp=sharing"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>

        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>


        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
    </nav>
    </header>
  
    </>
  );
}

export default NavTabs;
