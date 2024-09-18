import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Card, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import QZone from "../../../QZone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle className="mx-1" />
        Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub className="mx-1" />
        Login With Github
      </Button>

      <div>
        <h4 className="mt-4">Find us on</h4>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <FaFacebook className="mx-2" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <FaTwitter className="mx-2" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <FaInstagramSquare className="mx-2" />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
      <h4 className="mt-4">Login With</h4>
        <Card className="bg-dark text-white">
          <Card.Img src={bg} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="mt-5 text-center font" style={{ fontSize: '30px' }} >Create an Amazing Newspaper</Card.Title>
            <Card.Text className="mt-5 " style={{ fontSize: '20px' }}>
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more
            </Card.Text>
            <div  className="d-grid gap-2">
            <Button className="mt-2 justify-content-center" variant="danger">Click Me</Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
};

export default RightNav;
