import { FETCHING_ALBUMS, FETCHING_PHOTOS_BY_ALBUM_ID } from "./AlbumsActionsTypes";

export const fetchAlbums = () => {
  return {
    type: FETCHING_ALBUMS
  };
};

export const fetchPhotosByAlbumId = (albumId) => {
  return {
    type: FETCHING_PHOTOS_BY_ALBUM_ID,
    albumId
  };
};

