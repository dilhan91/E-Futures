import { fork, all } from "redux-saga/effects";

import {
  watchFetchAlbums,
  watchFetchPhotosByAlbumId
} from "./AlbumSaga";

export default function* rootSaga() {
  yield all([
    fork(watchFetchAlbums),
    fork(watchFetchPhotosByAlbumId),
  ]);
}
