import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
       <section class="info">
  <img src="https://codetheweb.blog/assets/img/icon2.png" />
  <h1>Learn HTML &mdash; <a href="https://codetheweb.blog/" target="_blank">Code The Web</a></h1>
</section>
<section class="cards-wrapper">
  <div class="card-grid-space">
    <a class="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" 
    
    style={{backgroundImage : `url(${'http://localhost:4000/assets/images/hotel-03.jpg'})`}}
    
    >
      
      <div>
        <h1>HTML Syntax</h1>
        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
        <div class="date">6 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
</section>

    </div>
  );
}

export default App;
