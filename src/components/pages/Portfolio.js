import React from 'react';
import '../../assets/style.css'
export default function Portfolio() {
  return (
    <section class="page-section" id="work">
    <h2>Work</h2>
    <div class="flex-container">

      <a href="https://aaansari123.github.io/Anime-List/" class="flex-item anime-list">
        <div>
          <h3>Anime Finder</h3>
          <span>HTML/CSS/Javascript</span>
        </div>
      </a>
      
      <a href="https://vast-temple-92235.herokuapp.com/" class="flex-item project-2">
        <div>
          <h3>Campaign manager</h3>
          <span>Node/Javascript/Handlebars</span>
          <span></span>
        </div>
      </a>
      <a href="https://gentle-depths-95732.herokuapp.com/" class="flex-item project-3">
        <div>
          <h3>Vapor</h3>
          <span>Node/Javascript/Mongo</span>
        </div>
      </a>

      <a href="#" class="flex-item project-4">
        <div>
          <h3>Project 4</h3>
          <span></span>
        </div>
      </a>

  
      <a href="#" class="flex-item project-5">
        <div>
          <h3>Project 5</h3>
          <span></span>
        </div>
      </a>

    </div>
  </section>

  );
}
