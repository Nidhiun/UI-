import React from "react";

const Navbar = () => {
  return (
    <div>

<div className="navbar" style={{display:'flex'}}>
      <div style={{fontSize:'40px',marginTop:'0px'}} >*<span  className="logo" style={{fontSize:'20px'}} > / support@grew.mail </span> </div>
      <div className="nav-link" style={{ display: "flex", gap:'20px' }}>
        <a  style={{fontSize:'20px',textDecorationLine:'none',color:'black'}} href="/">Automation</a>
         <a  style={{fontSize:'20px',textDecorationLine:'none',color:'black'}} href="/">Solutions</a>
         <a  style={{fontSize:'20px',textDecorationLine:'none',color:'black'}} href="/">Pricing</a>
         <a  style={{fontSize:'20px',textDecorationLine:'none',color:'black'}} href="/">Email Templates</a>
        <a  style={{fontSize:'20px',textDecorationLine:'none',color:'black'}} href="/">FAQ</a>

        <a  style={{fontSize:'20px',textDecorationLine:'none',color:'black'}} href="/">Login</a>

        <div class="container">
        <button lassName="button1" style={{borderRadius:'50px', backgroundColor:'black', color:'white',fontSize:'20px'}}> Try Now</button>

        <button className="button" style={{borderRadius:'50px', backgroundColor:'black', color:'white',fontSize:'20px'}}> Try Demo </button>
      </div>
      </div>
    </div>
    </div>

    
  );
};

export default Navbar;
