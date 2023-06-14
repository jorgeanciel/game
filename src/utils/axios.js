import deafultAxios from "axios";

const axios = () =>
  deafultAxios.create({
    baseURL: "https://ecomerce-app-03p7.onrender.com/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export default axios;
