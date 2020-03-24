import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3338"
});

axios.defaults.headers.authorization =
  "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNzk3OWU3YmFkMDA1MWQ1Y2UyMDE0YyIsIm5hbWUiOiJkYW55ZWwgaGVucnFpdWUiLCJlbWFpbCI6ImRhbnllbEBnbWFpbC5jb20iLCJpYXQiOjE1ODUwMTk0MjYsImV4cCI6MTU4NTYyNDIyNn0.aHuJguIOXgNa8Vp5HrxulZm_oAtDN8sZaxWl8E2MO10";
export default axios;
