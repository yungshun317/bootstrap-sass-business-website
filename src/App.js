import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import aboutImg from "../public/assets/asset-3.svg";
import professionalImg from "../public/assets/asset-2.svg";
import progressiveImg from "../public/assets/asset-1.svg";
import dataDrivenImg from "../public/assets/wordcloud.png";

export default function App() {
    const rowStyle = {
        marginTop: "40px",
        marginBottom: "20px"
    }

    const fontStyle = {
        marginBlockStart:"16px",
        marginBlockEnd:"16px"
    }

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
                            <img src={aboutImg} />
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
                            <img src={professionalImg} />
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
                            <img src={progressiveImg} />
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
                    <Col lg={12}>
                        <div>
                            <img src={dataDrivenImg} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [6] Service - Design Section 1 */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>INNOVATIVE</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [7] Service - Design Section 2 */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>CREATIVE</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [8] Service - Design Section 3 */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>PROACTIVE</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [9] Team */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>TEAM</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [10] Pricing Table */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>SERVICES</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [11] Form */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>CONTACT</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}