import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
            </Container>
            {/* [3] Service - Development Section 1 */}
            {/* [4] Service - Development Section 2 */}
            {/* [5] Service - Development Section 3 */}
            {/* [6] Service - Design Section 1 */}
            {/* [7] Service - Design Section 2 */}
            {/* [8] Service - Design Section 3 */}
            {/* [9] Team */}
            {/* [10] Pricing Table */}
            {/* [11] Form */}
        </>
    );
}