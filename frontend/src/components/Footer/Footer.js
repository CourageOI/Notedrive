import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Row className="text-center py-3">
          <Col>
            <hr style={{ color: "#158cba" }} />
          </Col>
          <Col>Copyright &copy; Note Drive</Col>
          <Col>
            <hr style={{ color: "#158cba" }} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
