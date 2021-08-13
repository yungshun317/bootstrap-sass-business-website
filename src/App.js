import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "@google/model-viewer";

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
    }

    const imgStyle = {
        width: "100%"
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
            {/* [1] Hero Video */}
            <div className="bg-light" style={{height:"768px"}}>
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
            <div>
                <Container>
                    <Row>
                        <Col sm={{span:6, offset:0}} md={{span:2, offset:2}}>
                            <div className="text-center" style={{height:"32px",backgroundColor:"#FBFBFD"}}>Why</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* [11] Clients & Partners */}
            <Container>
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
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor, urna viverra facilisis tristique, nisl diam eleifend massa, id lobortis tellus sem sed libero. Aenean tristique ultrices felis, placerat sollicitudin augue lobortis ac.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} d-flex align-items-center>
                        <div className="text-center">
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor, urna viverra facilisis tristique, nisl diam eleifend massa, id lobortis tellus sem sed libero. Aenean tristique ultrices felis, placerat sollicitudin augue lobortis ac.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} d-flex align-items-center>
                        <div className="text-center">
                            <h5>Lorem Ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor, urna viverra facilisis tristique, nisl diam eleifend massa, id lobortis tellus sem sed libero. Aenean tristique ultrices felis, placerat sollicitudin augue lobortis ac.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="bg-danger" style={{height:"820px"}}></div>
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
                                            <textarea name="comment" style={{width:"100%",marginBlockEnd:"16px",padding:"12px",borderRadius:"6px"}}>Enter Content Here</textarea>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}