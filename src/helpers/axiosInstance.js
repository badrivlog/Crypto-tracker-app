import axios from "axios";
import { COINGECKO_API_URL } from "./constants";

const axiosIntances = axios.create({
  baseURL: COINGECKO_API_URL,
});

export default axiosIntances;
