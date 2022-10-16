
import React from "react";
import styled from "styled-components";
import Maps from "../MapComponent/Map";
import Clientslider from '../Elements/ClientSlider'
//files
import myfile from '../../assets/files/privacy.docx'
import myfile2 from '../../assets/files/dot.docx'
import myfile3 from '../../assets/files/edi.docx'
import myfile4 from '../../assets/files/ad.docx'
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import ClientLogo01 from "../../assets/img/clients/google_logo.png"
import ClientLogo02 from "../../assets/img/clients/microsoft_logo.png";
import ClientLogo03 from "../../assets/img/clients/paypal_logo.png";
import Abouttable from "../Elements/Abouttable";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="container">  
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Corporate Partners</h1>
          </HeaderInfo>
           <div className="row" style={{ paddingBottom: "30px" }}>
    
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <ImgStyle src={ClientLogo02} alt="client logo" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <ImgStyle src={ClientLogo01} alt="client logo" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <ImgStyle src={ClientLogo03} alt="client logo" />
            </div>
            </div>
        </div>
      <div className="lightBg">
        <div className="container ">
          <HeaderInfo>
            <h1 className="font60 extraBold">About</h1>
            <p className="font20">
            All of our free community services are provided in alignment with our policies to help drive positive social integration .
              <br />
              within the European Union.
            </p>
            <Abouttable/>
            <p className="font20 textLeft">
            We manage our projects and free community services in alignment with our organizational policies.
            <li>
             <a href={myfile}>Privacy </a> 
              </li>
              <li>
              <a href={myfile2}>Democratization of Technology</a>
              </li>
              <li>
              <a href={myfile3}>Equality, Diversity, and Inclusion</a> 
              </li>
              <li>
              <a href={myfile4}>Anti-Discrimination</a>  
              </li>
            </p>
            <p className="font20 textLeft">
            We look forward to supporting you, your projects, and to helping improve the human condition through the use of technology. 
            </p>
            <p className="font20 textLeft">
            All of our free community services are provided in alignment with our policies to help drive positive social integration .
              <br />
              within the European Union.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="my-5">
                  <h2>Address</h2>
                  <p>10 rue Willy Goergen, 1636 Luxembourg </p>
                  <h2>Phone Number</h2>
                  <p>Phone: +352691622368</p>
                  <h2>Email</h2>
                  <p>unity@303overwatch.org</p>
                  <h2>Social Media Links</h2>
                  <div style={{display:'flex'}}>
                  <a href="https://m.facebook.com/303-Overwatch-104003638624565/" class="fa fa-facebook"></a>
                  <a href="https://www.instagram.com/303_ow_team/" class="fa fa-instagram"></a>
                  <a href="https://www.youtube.com/channel/UCmWJZ1AbHbpFeIbsDHIQKAQ" class="fa fa-youtube"></a>
                  <a href="https://linkedin.com/in/william-ferguson-961810229" class="fa fa-linkedin"></a>
                  <a href=" https://github.com/303-OW" class="fa fa-github"></a>
                  <a href="mailto:mentor@303overwatch.org" class="fa fa-envelope"></a>
                  
                  <a href="https://www.tiktok.com/@303_overwatch" class="fa-tiktok"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                   <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                  </svg></a>
                  </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <iframe width="600vh" height="100%" frameborder="0" scrolling="no" marginheight="-20" marginwidth="50" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.1511171023203!2d6.130219126904683!3d49.61375565506766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954f2b8736d51b%3A0x66ab1325e3dde77e!2s10%20Rue%20Willy%20Goergen%2C%201636%20Luxembourg!5e0!3m2!1sen!2s!4v1664661385788!5m2!1sen!2s"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe>  
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  text-align: center;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const ImgStyle = styled.img`
  width: 80%;
  height: 90%;
  padding: 10%;
  @media (max-width: 860px) {
  
  }
`;










