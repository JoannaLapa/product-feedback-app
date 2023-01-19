import axios from "axios";

const getFeedbacks = async () => {
  try {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/productRequests`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    err instanceof Error
      ? console.log(`The error: ${err.message}`)
      : console.log("Something went wrong");
  }
};
export default getFeedbacks;
