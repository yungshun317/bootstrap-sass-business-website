import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img from "../public/assets/asset-3.svg";

export default function App() {
    return (
        <>
            {/* [1] Hero Video */}
            <div className="bg-light" style={{height:"768px"}}>
            </div>
            {/* [2] About */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>ABOUT</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div>
                            <img src={img} />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [3] Service - Development Section 1 */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>PROFESSIONAL</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [4] Service - Development Section 2 */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>PROGRESSIVE</h6>
                            <h4>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [5] Service - Development Section 3 */}
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6>DATA-DRIVEN</h6>
                            <h4>Lorem Ipsum</h4>
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