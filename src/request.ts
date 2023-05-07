import axios from "axios";

export default axios.create({
  timeout: 15000,
});

export { isAxiosError } from "axios";
