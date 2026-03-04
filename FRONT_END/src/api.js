import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-crud-app-z2jm.onrender.com"
});

export default API;