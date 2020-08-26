import React from 'react';
import atta from './image/atta.png';
 

const Header = () =>{
  return(
    <>
    <div className="header">
     <img src={atta} alt="atta" height="85" width="90" />
     <h1>Kasuri Developers</h1>
    </div>
      
    </>
  );
};

export default Header;
