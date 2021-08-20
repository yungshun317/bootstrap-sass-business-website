import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "@google/model-viewer";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import aboutImg from "../public/assets/asset-3.svg";
import professionalImg from "../public/assets/asset-2.svg";
import progressiveImg from "../public/assets/asset-1.svg";
import dataDrivenImg from "../public/assets/wordcloud.png";
import teamImg from "../public/assets/Team.png";
import typographicSystemImg from "../public/assets/TypographicSystem.png";
import colorSystemImg from "../public/assets/ColorSystem.png";
import dashboardImg from "../public/assets/GrafanaDashboard.png";
import wireframeImg from "../public/assets/Wireframe&Sitemap.png";
import model from "../public/assets/Model.glb";
import logo from "../public/assets/logo-3.svg";
import addressIcon from "../public/assets/asset-122.svg";
import emailIcon from "../public/assets/asset-111.svg";
import phoneIcon from "../public/assets/asset-112.svg";

export default function App() {

    const rowStyle = {
        marginTop: "40px",
        marginBottom: "20px"
    };

    const fontStyle = {
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const hrStyle = {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: "#FBFBFD",
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const imgStyle = {
        width: "100%"
    };

    const iconStyle = {
        height: "64px",
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const brandingImages = [
        {
            original: typographicSystemImg,
            thumbnail: typographicSystemImg
        },
        {
            original: colorSystemImg,
            thumbnail: colorSystemImg
        }
    ];

    const uxImages = [
        {
            original: wireframeImg,
            thumbnail: wireframeImg
        },
        {
            original: dashboardImg,
            thumbnail: dashboardImg
        }
    ];

    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="sm" variant="dark" style={{zIndex:"100"}}>
                <Navbar.Brand href="#home"><img src={logo} style={{width:"32px"}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" style={{color:"#00C6D6",marginTop:"3px"}}><h6>HOME</h6></Nav.Link>
                        <Nav.Link href="#services" style={{color:"#00C6D6",marginTop:"3px"}}><h6>SERVICES</h6></Nav.Link>
                        <Nav.Link href="#team" style={{color:"#00C6D6",marginTop:"3px"}}><h6>TEAM</h6></Nav.Link>
                        <Nav.Link href="#contact" style={{color:"#00C6D6",marginTop:"3px"}}><h6>CONTACT</h6></Nav.Link>
                        <Nav.Link href="#phone" style={{color:"#00C6D6",marginTop:"1px"}}><img src={phoneIcon} style={{display:"inline-block",height:"16px",paddingRight:"8px"}} /><h6 style={{display:"inline-block"}}>0900 615 379</h6></Nav.Link>
                        {/*
                        <NavDropdown title="Dropdown" id="basic-navbar-dropdown">
                            <NavDropdown.Item href="#action/3.1"><h6 style={{color:"#FBFBFD"}}>Action</h6></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><h6 style={{color:"#FBFBFD"}}>Another action</h6></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"><h6 style={{color:"#FBFBFD"}}>Something</h6></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4"><h6 style={{color:"#FBFBFD"}}>Separated link</h6></NavDropdown.Item>
                        </NavDropdown>
                        */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* [1] Hero Video */}
            <div className="bg-light" style={{height:"900px"}}>
            </div>
            {/* [2] About */}

            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>ABOUT</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={aboutImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* [3] Service - Development Section 1 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>PROFESSIONAL</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={professionalImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [4] Service - Development Section 2 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>PROGRESSIVE</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={progressiveImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [5] Service - Development Section 3 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>DATA-DRIVEN</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} className="d-flex align-items-center">
                        <div>
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare arcu. Curabitur suscipit accumsan tellus ac ornare. Curabitur ac ligula ligula.</p>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                            <img src={dataDrivenImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [6] Service - Design Section 1 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>INNOVATIVE</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <div>
                            <model-viewer src={model}
                                          alt="A 3D model of an astronaut"
                                          ar
                                          ar-modes="webxr scene-viewer quick-look"
                                          environment-image="neutral"
                                          auto-rotate
                                          camera-controls
                                          orientation="0 0 -45deg"
                                          style={{width:"100%",height:"820px"}}>
                            </model-viewer>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="d-flex align-items-center">
                        <div>
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare arcu. Curabitur suscipit accumsan tellus ac ornare. Curabitur ac ligula ligula.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [7] Service - Design Section 2 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>CREATIVE</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <ImageGallery items={brandingImages} autoplay={true} showBullets={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [8] Service - Design Section 3 */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>PROACTIVE</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <ImageGallery items={uxImages} autoplay={true} showBullets={true} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [9] Team */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>TEAM</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={teamImg} style={imgStyle} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [10] Statistics */}
            <Container>
                <Row style={rowStyle}>
                    <Col sm={{span:6, offset:0}} md={{span:2, offset:2}}>
                        <div className="text-center">
                            <h4 style={fontStyle}>100</h4>
                            <h6 style={fontStyle}>PROJECTS</h6>
                        </div>
                    </Col>
                    <Col sm={6} md={2}>
                        <div className="text-center">
                            <h4 style={fontStyle}>100</h4>
                            <h6 style={fontStyle}>PROJECTS</h6>
                        </div>
                    </Col>
                    <Col sm={6} md={2}>
                        <div className="text-center">
                            <h4 style={fontStyle}>100</h4>
                            <h6 style={fontStyle}>PROJECTS</h6>
                        </div>
                    </Col>
                    <Col sm={6} md={2}>
                        <div className="text-center">
                            <h4 style={fontStyle}>100</h4>
                            <h6 style={fontStyle}>PROJECTS</h6>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [11] Clients & Partners */}
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                    <Col xs={3} md={1}>
                        <div style={fontStyle}>
                            <img src="https://picsum.photos/64/64" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* [12] Pricing Table */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>SERVICES</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>
                        <div className="text-center" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h2 style={fontStyle}>Lorem Ipsum</h2>
                            <h1 style={fontStyle}>Lorem Ipsum</h1>
                            <p style={fontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus. Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum dolor eu varius varius.</p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a className="btn btn-success" style={{marginBottom:"16px"}}>START</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="text-center" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h2 style={fontStyle}>Lorem Ipsum</h2>
                            <h1 style={fontStyle}>Lorem Ipsum</h1>
                            <p style={fontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus. Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum dolor eu varius varius.</p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a className="btn btn-success" style={{marginBottom:"16px"}}>START</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="text-center" style={{borderStyle:"solid",borderWidth:"1px",borderColor:"#FBFBFD",borderRadius:"6px"}}>
                            <h2 style={fontStyle}>Lorem Ipsum</h2>
                            <h1 style={fontStyle}>Lorem Ipsum</h1>
                            <p style={fontStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus quis massa vel tempus. Nunc laoreet dolor sit amet massa pulvinar, ac tempor nibh pretium. Quisque interdum dolor eu varius varius.</p>
                            <hr style={hrStyle} />
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <h6 style={fontStyle}>Lorem Ipsum</h6>
                            <hr style={hrStyle} />
                            <Row>
                                <Col md={{span:8, offset:2}}>
                                    <div>
                                        <a className="btn btn-success" style={{marginBottom:"16px"}}>START</a>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [13] Form */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>CONTACT</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} d-flex align-items-center>
                        <div className="text-center">
                            <img src={addressIcon} style={iconStyle} />
                            <h5>Our Address</h5>
                            <p>2F, No. 72, Sec. 1, Zhongxiao West Rd., Taipei City, Taiwan, 10041</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} d-flex align-items-center>
                        <div className="text-center">
                            <img src={emailIcon} style={iconStyle} />
                            <h5>Email Us</h5>
                            <p>seraph317@gmail.com</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} d-flex align-items-center>
                        <div className="text-center">
                            <img src={phoneIcon} style={iconStyle} />
                            <h5>Call Us</h5>
                            <p>0900 615 379</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{marginTop:"20px"}}>
                    <Col sm={12} md={6}>
                        <div className="bg-danger" style={{height:"410px"}}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6233994319273!2d121.51182041483307!3d25.046851543930458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90d3282310d%3A0xc2b9c3de555ad07f!2sNo.%2072%2C%20Section%201%2C%20Zhongxiao%20W%20Rd%2C%20Zhongzheng%20District%2C%20Taipei%20City%2C%20100!5e0!3m2!1sen!2stw!4v1629616436613!5m2!1sen!2stw"
                                width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div>
                            <form>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <div>
                                            <label style={fontStyle}>NAME</label>
                                            <input type="text" className="form-control" placeholder="Enter Your Name" />
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div>
                                            <label style={fontStyle}>PHONE</label>
                                            <input type="text" className="form-control" placeholder="Enter Your Phone Number" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div>
                                            <label style={fontStyle}>EMAIL</label>
                                            <input type="email" className="form-control" placeholder="Enter Your Mail" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div>
                                            <label style={fontStyle}>CONTENT</label>
                                            <textarea name="comment" style={{width:"100%",height:"120px",marginBlockEnd:"16px",padding:"12px",borderRadius:"6px"}}>Enter Content Here</textarea>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{backgroundColor:"rgba(112,112,112,0.25)"}}>
                <Container>
                    <Row style={{marginTop:"60px",paddingTop:"40px",paddingBottom:"40px"}}>
                        <Col sm={12} md={4}>
                            <div>
                                <h4 style={fontStyle}>ChouQin Info Co.</h4>
                                <p style={fontStyle}>Lorem Ipsum</p>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div>
                                <h5 style={fontStyle}>Our Services</h5>
                                <p style={fontStyle}>Web Development</p>
                                <p style={fontStyle}>Big Data</p>
                                <p style={fontStyle}>Cloud Computing</p>
                                <p style={fontStyle}>Artificial Intelligence</p>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className="d-flex align-items-end">
                            <div>
                                <p>©Copyright <b>ChouQin Info Co.</b> All Rights Reserved</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}