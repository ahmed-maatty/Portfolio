import 'animate.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Tours from "../assets/img/Tours.png";
import SocialMedia from "../assets/img/SocialMedia.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import resume from "../assets/img/CV.pdf"
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tours Company",
      description: "Development",
      imgUrl: Tours,
      url:"https://tours-e53e.onrender.com"
    },
    {
      title: "Social Media",
      description: "Development",
      imgUrl: SocialMedia,
      url:"https://socialmediaclient-kwku.onrender.com"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div data-aos="zoom-in">
                <h2>about</h2>
                <p>
                    Hello! I'm Ahmed Maatty, a passionate  junior MERN stack developer
                    I have a keen interest in building robust and user-friendly
                    web applications using the MERN (MongoDB, Express.js, React, Node.js)
                    stack. My journey in web development began with a curiosity to understand how 
                    things work in the digital realm, and it has evolved into a continuous learning adventure.
                  </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">resume</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" data-aos="fade-up">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      <div className="mySkills px-5 d-flex justify-content-around text-center flex-wrap gap-4">
                        <div>
                          <h5>Front End Technologies</h5>
                          <h6>HTML</h6>
                          <h6>CSS</h6>
                          <h6>Sass</h6>
                          <h6>BootStrap</h6>
                          <h6>JQuery</h6>
                          <h6>JavaScript</h6>
                          <h6>React.js</h6>
                          <h6>Redux & ReduxToolkit</h6>
                        </div>
                        <div>
                          <h5>Back End Technologies</h5>
                          <h6>Node.js</h6>
                          <h6>Express.js</h6>
                          <h6>MongoDB</h6>
                          <h6>postgress</h6>
                        </div>
                        <div>
                          <h5>Extra Technologies</h5>
                          <h6>Git & Github</h6>
                          <h6>Postman</h6>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className='d-flex justify-content-center'>
                        <a href={resume} target='_blank'>
                          <button className='download-btn'>
                            <span>Show Resume</span>
                          </button>
                        </a>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
