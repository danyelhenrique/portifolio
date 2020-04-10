import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3338",
});

export default axios;
