import Axios from "axios";

const URL = "https://portifolio-backend.herokuapp.com/";
const axios = Axios.create({
  baseURL: URL,
});

export default axios;
