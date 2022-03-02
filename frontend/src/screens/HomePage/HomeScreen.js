import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

const homeScreen = () => {
  return (
    <div className="home-page">
      <Container>
        <Row>
          <div className="intro">
            <h1 className="intro-title">Welcome to Note Drive</h1>
            <p className="intro-subtitle">A safe Drive for all your notes</p>

            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="homeButton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  className="homeButton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default homeScreen;
