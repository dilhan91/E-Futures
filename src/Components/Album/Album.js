import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Album.css";

const AlbumComponent = (props) => {

  

  return (
    <Container fluid className="layout">
      <Row>
        <Col sm={1}>
          <p onClick={props.back}> {`< Back`}</p>
        </Col>
        <Col sm={11}>
          <h3>{props.detail.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <img
            width="100px"
            height="100px"
            src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export const Album = AlbumComponent;
