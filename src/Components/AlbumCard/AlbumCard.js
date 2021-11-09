import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import "./AlbumCard.css";

const AlbumCardComponent = (props) => {
  return (
    <Col sm={6} style={{ padding: "10px" }} onClick={ () => props.cardClick(props.item)}>
      <Card style={{ width: "100%" }}>
        <Row>
        <Col sm={2}>
          <img width='100px' height="100px" src="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
        </Col>
        <Col sm={10}>
          <p>{props.item.title}</p>
          <p>(6 pictures.)</p>
        </Col>
        </Row>
      </Card>
    </Col>
  );
};

export const AlbumCard = AlbumCardComponent;