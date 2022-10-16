import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import Freebox from "../Elements/Freebox";
import FullButton from "../Buttons/FullButton";
// Assets
import trainingimg from "../../assets/img/newimages/training.jpg";
import mentoring from "../../assets/img/newimages/mentor.jpg";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "1px 0" }}>
        <div className="container">
          {/* <ClientSlider /> */}
        </div>
      </div>
      <div className="whiteBg">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-5">
                <AddLeftContent>
              <h4 className="font15 semiBold">Attend free official Microsoft or EC-Council cyber security training</h4>
                <h2 className="font40 extraBold">Free Cybersecurity Training</h2>
                <p className="font12">
                We provide free official Microsoft and EC-Council training to help close the digital skills gap in the European Union. You can also receive the training you need to become a certified Microsoft or EC-Council instructor. </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "290px" }}>
                  <a href="https://calendly.com/eu_hightechhumanity/mctclasses"> <FullButton title="Free Cybersecurity Training" /></a> 
                  </div>
                  {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div> */}
                </ButtonsRow> </AddLeftContent> 
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <AddImgWrappp2><img src={trainingimg}/></AddImgWrappp2>   
              </div>
            </div>
          </div>
        </div>
      <div className="lightBg">
         <div className="container">
         <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 my-5">
              <AddImgWrappp2><img src={mentoring}/></AddImgWrappp2> 
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <AddLeftContent>
              <h4 className="font15 semiBold">Attend free official Microsoft or EC-Council cyber security training</h4>
                <h2 className="font40 extraBold">Free Cybersecurity Training</h2>
                <p className="font12">
                We provide free official Microsoft and EC-Council training to help close the digital skills gap in the European Union. You can also receive the training you need to become a certified Microsoft or EC-Council instructor. </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "290px" }}>
                  <a href="https://calendly.com/eu_hightechhumanity/mctclasses"> <FullButton title="Free Cybersecurity Training" /></a> 
                  </div>
                  {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div> */}
                </ButtonsRow> </AddLeftContent> 
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


const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 80%;
  p {
    max-width: 575px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddLeft2 = styled.div`
  width: 100%;
  p {
    max-width: 575px;
  }
  @media (max-width: 860px) {
    width:100%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
  
  }
`;
const AddRight2 = styled.div`
  width: 48%;
  position: absolute;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddLeftContent = styled.div`
  width: 100%;
  margin: 15% 6% 10px 0%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddVideo1 = styled.div`
  width: 100%;
  margin: 15% 6% 10px 0%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddVideo2 = styled.div`
  width: 100%;
  margin: 0% 0% 0px 0%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrappp2 = styled.div`
  width: 100%;
  height: 20%:
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height : auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
