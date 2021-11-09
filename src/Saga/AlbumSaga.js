import { put, takeLatest, call } from "redux-saga/effects";

import {
  FETCHING_ALBUMS,
  FETCHING_ALBUMS_SUCCESS,
  FETCHING_ALBUMS_FAIL,
  FETCHING_PHOTOS_BY_ALBUM_ID,
  FETCHING_PHOTOS_BY_ALBUM_ID_SUCCESS,
  FETCHING_PHOTOS_BY_ALBUM_ID_FAIL,
} from "../Actions/AlbumsActionsTypes";

import { getAllAlbums, getPhotosByAlbum } from "../Services/AlbumServices";

export function* fetchAlbums(action) {
  try {
    let res = yield call(getAllAlbums);

    if (res.status === 200) {
      yield put({ type: FETCHING_ALBUMS_SUCCESS, res });
    } else {
      yield put({ type: FETCHING_ALBUMS_FAIL });
    }
  } catch (error) {
    yield put({ type: FETCHING_ALBUMS_FAIL, error: error });
  }
}
export function* watchFetchAlbums() {
  yield takeLatest(FETCHING_ALBUMS, fetchAlbums);
}

export function* fetchPhotosByAlbumId(action) {
  console.log("saga ok ...");
  const { albumId } = action;
  try {
    let res = yield call(getPhotosByAlbum, albumId);
    console.log("res. photos ..", res);

    if (res.status === 200) {
      yield put({ type: FETCHING_PHOTOS_BY_ALBUM_ID_SUCCESS, res });
    } else {
      yield put({ type: FETCHING_PHOTOS_BY_ALBUM_ID_FAIL });
    }
  } catch (error) {
    yield put({ type: FETCHING_PHOTOS_BY_ALBUM_ID_FAIL, error: error });
  }
}
export function* watchFetchPhotosByAlbumId() {
  yield takeLatest(FETCHING_PHOTOS_BY_ALBUM_ID, fetchAlbums);
}
