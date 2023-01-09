import React from 'react';
import './Body.css';
import { SocialIcon } from 'react-social-icons';

function Footer(){
    return (
      <div>
      <footer className="bg-light text-center text-white">
  
  <div className=" container p-4 pb-0">
    
  <section className="mb-4">
      {/* <!-- Facebook --> */}
      <SocialIcon className='socialicon' url="https://www.facebook.com/kuldeep.kushwah.376" />
      <SocialIcon className='socialicon' url="https://www.instagram.com/kuldeep._.kushwah/" />
      <SocialIcon className='socialicon' url="https://github.com/kuldeep-kushwah" />

    </section>
    
  </div>
 
  <div className="bg-dark text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
    kuldeep kushwah
  </div>
 
      </footer>
    </div>
  )
}
export default Footer;


