import React from "react";
import { Container, Row } from "react-bootstrap";

import "./AlbumList.css";

import { AlbumCard } from "../AlbumCard/AlbumCard";

const LayoutComponent = (props) => {
  const selectCard = (item) => {
    props.selectAlbum(item);
  };

  return (
    <Container fluid className="layout">
      <Row>
        {props.albumList.map((item, index) => {
          return <AlbumCard key={index} item={item} cardClick={() => selectCard(item)} />;
        })}
      </Row>
    </Container>
  );
};

export const AlbumList = LayoutComponent;
