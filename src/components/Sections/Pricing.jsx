import React from "react";
import styled from "styled-components";
//image
import Paypal from '../../assets/img/paypal/Paypal.jpg'
import trainingimg from "../../assets/img/newimages/donations.jpg";
// Components
import PricingTable from "../Elements/PricingTable";
import FullButton from "../Buttons/FullButton";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
      <div className="container">
            
          </div>
          <div className="container">
            
       <Advertising className="flexSpaceCenter">
              <AddLeft>
              <HeaderInfo>
            <h1 className="font60 extraBold">Donate</h1>
            <p className="font13">
            Please consider a one-time 1-euro certified PayPal charity donation to help fund our free community services. These funds are applied directly to the course material for our students, exam vouchers, and other technology resources that they would otherwise not be able to afford.
              <br />
            
            </p>
          </HeaderInfo>
                <ButtonsRow className="flexNullCenter">
                  <div style={{ width: "290px" }}>
                  <a href="https://www.paypal.com/donate/?hosted_button_id=YVLU56GFVGD74"> <FullButton title="Donate" /></a> 
                  </div>
                  {/* <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div> */}
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexLeft">
                  <AddImgWrappp2><img src={trainingimg}/></AddImgWrappp2>  
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
    </Wrapper>
 
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const FreeboxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const FreeboxWrapper = styled.div`
  width: 90%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
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
  margin: 80px 0px 30px 0px;
  @media (max-width: 860px) {
    margin: 15% 6% 10px 0%;
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
const AddImage1 = styled.div`
  width: 100%;
  margin: 15% 6% 10px 6%;
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
