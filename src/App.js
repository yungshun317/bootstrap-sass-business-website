import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";

import aboutImg from "../public/assets/asset-3.svg";
import professionalImg from "../public/assets/asset-2.svg";
import progressiveImg from "../public/assets/asset-1.svg";
import dataDrivenImg from "../public/assets/wordcloud.png";
import teamImg from "../public/assets/Team.png";
import TypographicSystemImg from "../public/assets/TypographicSystem.png";
import ColorSystemImg from "../public/assets/ColorSystem.png";

export default function App() {
    const rowStyle = {
        marginTop: "40px",
        marginBottom: "20px"
    };

    const fontStyle = {
        marginBlockStart: "16px",
        marginBlockEnd: "16px"
    };

    const imgStyle = {
        width: "100%"
    };

    const images = [
        {
            original: TypographicSystemImg,
            thumbnail: TypographicSystemImg
        },
        {
            original: ColorSystemImg,
            thumbnail: ColorSystemImg
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
                    <Col lg={12}>
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
                            <ImageGallery items={images} autoplay={true} showBullets={true} />
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
            {/* [10] Pricing Table */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>SERVICES</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* [11] Form */}
            <Container>
                <Row style={rowStyle}>
                    <Col lg={12}>
                        <div className="text-center">
                            <h6 style={fontStyle}>CONTACT</h6>
                            <h4 style={fontStyle}>Lorem Ipsum</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}