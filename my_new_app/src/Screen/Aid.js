import React, { useEffect } from "react";
import { Navbar } from "react-bootstrap";
import Header from "../components/Header";
import Aos from "aos";
import 'aos/dist/aos.css';



const Aid=()=> {
  useEffect(() =>{
    Aos.init({duration:2000});
  },[]);

  return (
    <>
      <Header />

      
     



<div data-aos="zoom-out-up" className="jomla">you will love our simplicity</div>

<div data-aos="fade-right">
      <div  className="find">1 - Find your perfect teacher</div>
      <div  className="findd">
        Consult the profiles freely and contact your fantastic teacher according
        to your criteria (prices, diploma, opinion, lessons at home or by
        webcam).
      </div>
      <div>
     <img className="searching" src="/images/ss.png"></img>
     </div>

     <br/>

     <div data-aos="fade-left">
      <div  className="Organize">2 - Organize your lessons</div>
      <div className="Organizee">
        Talk to your teacher to tell him about your needs and availability.
        Schedule your lessons and pay them securely from your email.
      </div>
      </div>
      <img className="orgnaize" src="/images/orgnaize.png"></img>
      </div>


<div data-aos="fade-right">
      <div  className="Live">3 - Live new experiences</div>
      <div className="Livee">
        The Student Pass gives you unlimited access to all teachers, coaches and
        masterclasses for 30 days. Take the opportunity to discover new
        passions!
      </div>
      <img className="liv" src="/images/live.png"></img>
      
     
     </div>



    </>
  );
}

export default Aid;

