import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8188/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default client;
