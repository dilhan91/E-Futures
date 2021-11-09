import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { NavBar } from "../Components/NavBar/NavBar";
import { AlbumList } from "../Components/AlbumList/AlbumList";
import { Album } from "../Components/Album/Album";
import { Footer } from "../Components/Footer/Footer";

import { fetchAlbums, fetchPhotosByAlbumId } from "../Actions/AlbumsActions";

function MainLayout(props) {
  console.log("albums State", props);

  const [isAlbumList, setIsAlbumList] = useState(true);
  const [selectedAlbum, setSelectedAlbum] = useState({});

  //fetch all albums
  useEffect(() => {
    props.fetchAlbums();
  }, []);

  const handleSelectWidget = (sortType) => {};

  const selectAlbumHandel = (album) => {
    setIsAlbumList(false);
    setSelectedAlbum(album)
    props.fetchPhotosByAlbumId(album.id);
  };

  const albumBackHandel = () => {
    setIsAlbumList(true);
  };

  return (
    <>
      <NavBar selectWidget={(sortType) => handleSelectWidget(sortType)} />

      {isAlbumList && (
        <AlbumList
          albumList={props.globelState.Albums.albumList}
          selectAlbum={(album) => selectAlbumHandel(album)}
        />
      )}

      {!isAlbumList && <Album detail={selectedAlbum} back={albumBackHandel} />}

      <Footer />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    globelState: state,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchAlbums,
      fetchPhotosByAlbumId
    },
    dispatch
  );

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainLayout);
