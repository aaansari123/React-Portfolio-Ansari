import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import '../assets/style.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <footer className='footer'>
      <section className="page-section contact" id="contact">

      <div>
        <address>
          <a href="tel:+16102027776">610.202.7776</a>
          <a href="mailto:asadali1029@gmail.com">asadali1029@gmail.com</a>
          <a href="https://github.com/aaansari123">GitHub</a>
          <a href="https://www.linkedin.com/in/asad-ansari-b21053230/">LinkedIn</a>
        </address>
      </div>
    </section>
    </footer>
    </div>
  );
}
