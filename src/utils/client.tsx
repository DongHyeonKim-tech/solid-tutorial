import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  xsrfCookieName: "csrftoken",
  xsrfHeaderName: "X-CSRFToken",
});

export default client;
