import React from 'react';
 

const Footer = () =>{
    const year=new Date().getFullYear();
  return(
    <>
      <footer>
          <p className="atta">copyright© {year}</p>
      </footer>
      
    </>
  );
};

export default Footer;
