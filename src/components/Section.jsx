import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Section = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", marginLeft: "50px" }}>
            <img
              src="https://forgeglobal.com/site/assets/files/1813/ghost-1.png"
              alt="Illustration"
              style={{ width: "50px", height: "50px", marginTop: "10px" }}
            />
            <div class="badge">
              Organic
              <br />
              +65.5% • $25,530
            </div>
          </div>

          <div>
            <img
              src=" https://cdn-icons-png.flaticon.com/256/347/347148.png"
              alt="Illustration"
              style={{ width: "100px", height: "100px", marginTop: "100px" }}
            />
          </div>

        
          <div>
            <img
              src=" https://th.bing.com/th/id/OIP.TLKeemxvy0dbZ7Kv5AU7QAHaHa?rs=1&pid=ImgDetMain"
              alt="Illustration"
              style={{ width: "50px", height: "50px" }}
            />

            <img
              src="https://img.freepik.com/premium-vector/simple-thin-line-mailbox-icon-flat-vector-design-message-post-office-related-design-element_581136-227.jpg"
              alt="Illustration"
              style={{ width: "300px", height: "300px", marginLeft: "400px" }}
            />
          </div>

          <div>
            <FaArrowRightLong />
          </div>


          <div>
            <img
              className="section-image-4"
              src="https://shiftart.com/wp-content/uploads/2017/04/RC-Profile-Square-1000x1000.jpg"
              alt="Illustration"
              style={{ width: "300px", height: "300px", marginLeft: "20px" }}
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Section;
