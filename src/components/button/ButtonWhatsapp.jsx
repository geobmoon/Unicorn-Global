import React from 'react';
import './button.scss';
import wsp from '../../assets/images/whatsapp/wsp.png'


const ButtonWhatsapp = () => {
    return (
          <a href="https://walink.co/1de824"  target="_blank" rel="noopener noreferrer" >        
             <img className="button-whatsapp" src={wsp} alt="iconoWhatsapp" />
          </a>
    );
  }
  
  export default ButtonWhatsapp;