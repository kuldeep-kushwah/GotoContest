import React from 'react';
import go from './go2.png';

import './Body.css';
function Navbar(){
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light ">
              <a href="/"><img src={go}></img></a>
           
  <a className="navbar-brand" href="/" style={{margin:'20px'}}>GotoContest</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="g/">Home </a>
     
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;