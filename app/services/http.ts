import axios from "axios";

const httpService = axios.create({
  baseURL: "http://103.75.196.169:7060",
});

export default httpService;
