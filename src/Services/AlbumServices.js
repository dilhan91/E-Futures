import axiosInstance from "./RootServices";


export const getAllAlbums = () => {
  return (
    axiosInstance.get(`/albums`)
  );
};

export const getAllAlbumsByUser = (uId) => {
  return (
    axiosInstance.get(`/albums/?userId=${uId}`)
  );
};

export const getPhotosByAlbum = (albimId) => {
  console.log("get Photos By Album service");
  return (
    axiosInstance.get(`/photos/?albumId=${albimId}`)
  );
};