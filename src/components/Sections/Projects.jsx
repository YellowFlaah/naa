import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import project0 from "../../assets/img/newimages/ethicallyHackingspace.jpg";
import project1 from "../../assets/img/newimages/metaHumanity.jpg";
import ProjectImg1 from "../../assets/img/overwatch.jpg";
import ProjectImg2 from "../../assets/img/overwatch.jpg";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/overwatch.jpg";
import ProjectImg5 from "../../assets/img/overwatch.jpg";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/overwatch.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font60 extraBold">Our Projects</h1>
            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6">
              <ProjectBox
                img={project0}
                title="EthicallyHacking.Space"
                text=" If you are interested in developing cyber security skills to defend and assess space assets, contact us. We have an ongoing Space Cybersecurity Professional (SCP) program and Science, Technology, Engineering, and Mathematics skills incubator."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-6">
              <ProjectBox
                img={project1}
                title="Meta.Humanity (mH)"
                text="The Meta Humanity (mH) project is an innovative Extended Reality (xR) mission dedicated to a growing list of objectives. mH is being brought to life by the global Hightech Humanity (H2) community."
                action={() => alert("clicked")}
              />
            </div>
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div> */}
          </div>
          <div className="row textCenter">
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
              <ProjectBox
                img="https://www.youtube.com/embed/Btwj2hSdhe0"
                title="Hotspot for Humanity (HFH)"
                text="Hotspots for Humanity are either virtual or physical locations that are provided to help deliver our free community services in your area. An HfH is operated under the concepts of THINK, FEEL, and UNITE to ensure that everyone is welcomed, treated equally, and placed in an environment of trust. If you would like to establish a HfH to help extend our free community services to your area contact us today."
                action={() => alert("clicked")}
              />
            </div> */}
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-6">
              <ProjectBox
                img="https://www.youtube.com/embed/Btwj2hSdhe0"
                title="Meta.Humanity (mH)"
                text="Web3, the Metaverse and other immersive platforms are growing in number and volumes of users. Our meta.Humanity (mH) project is designed to help ensure consumers of these services understand and have tools to help fill gaps in privacy and exploitation threat protection. Our focus is on protecting children in these environments."
                action={() => alert("clicked")} 
              />
          
            </div> */}
            {/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Awesome Project"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => alert("clicked")}
              />
            </div> */}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "300px" }}>
              <a href="https://calendly.com/eu_hightechhumanity/mctclasses"><FullButton title="Join an H2 Community Project"  /></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                <iframe width="949" height="534" src="https://www.youtube.com/embed/Ue4uspIiCQ4" title="Hightech Humanity (H2) Quick Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">Hightech Humanity</h4>
              <h2 className="font40 extraBold">Main Video</h2>
              <p className="font12">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </p>
              <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                <a href="https://calendly.com/eu_hightechhumanity/mctclasses"> <FullButton title="Get Started" action={() => alert("clicked")} /></a>
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                 <a href="#"><FullButton title="Contact Us" border /></a>
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
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
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
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
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
