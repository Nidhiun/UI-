import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <h1 style={{ fontSize: "80px" }}>
          Grow Your Business,<br/> No Matter The Size.
        </h1>
      </div>
      <div className='header' style={{display:'flex', gap:'40px',marginLeft:'400px'}}>
        <div>
          <img src="https://m.media-amazon.com/images/I/41pRnzJ9kdL._AC_UF1000,1000_QL80_.jpg"  style={{width:'150px',height:'150px', color:'black'}}/>
        </div>
        <div>
          <div style={{fontSize:'30px'}}>Websites</div>
          <div style={{fontSize:'30px'}}>Social Media</div>
          <div style={{fontSize:'30px'}}>Newsletters</div>
        </div>

        <div>
          <div style={{fontSize:'30px'}}>Marketing API</div>
          <div style={{fontSize:'30px'}}>Release Notes</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
