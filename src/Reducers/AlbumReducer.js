import {
  FETCHING_ALBUMS,
  FETCHING_ALBUMS_SUCCESS,
  FETCHING_ALBUMS_FAIL,
  FETCHING_PHOTOS_BY_ALBUM_ID,
  FETCHING_PHOTOS_BY_ALBUM_ID_SUCCESS,
  FETCHING_PHOTOS_BY_ALBUM_ID_FAIL,
} from "../Actions/AlbumsActionsTypes";

const initialState = {
  albumsFetching: false,
  photosFetching: false,
  albumList: [],
};

const Albums = (state = initialState, action) => {
  console.log("albums actions ", action);

  switch (action.type) {
    case FETCHING_ALBUMS:
      return {
        ...state,
        albumsFetching: true,
      };

    case FETCHING_ALBUMS_SUCCESS:
      return {
        ...state,
        albumsFetching: false,
        albumList: action.res.data,
      };

    case FETCHING_ALBUMS_FAIL:
      return {
        ...state,
        albumsFetching: false,
      };

    case FETCHING_PHOTOS_BY_ALBUM_ID:
      return {
        ...state,
        photosFetching: true,
      };

    case FETCHING_PHOTOS_BY_ALBUM_ID_SUCCESS:
      return {
        ...state,
        photosFetching: false,
      };

    case FETCHING_PHOTOS_BY_ALBUM_ID_FAIL:
      return {
        ...state,
        photosFetching: false,
      };

    default:
      return state;
  }
};

export default Albums;
