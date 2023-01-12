import axios from "axios";

const getFeedbacks = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const url = `${baseUrl}/productRequests`;
  const response = await axios.get(url);
  return response.data;
};
export default getFeedbacks;
