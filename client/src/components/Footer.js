import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/icons8-github (1).svg';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} lg={12}  className="text-center">
            <h6 className="text-uppercase p-0 m-0 logo mb-3" style={{color:"#B8B8B8"}}>ahmed m3atty</h6>
            <div className="social-icon d-flex align-items-center justify-content-center">
              <a href="#" className="mx-2"><img src={navIcon1} alt="Icon" /></a>
              <a href="#" className="mx-2"><img className="githubIcon" src={navIcon2} alt="" /></a>
              <a href="#" className="mx-2"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
