import axios from "axios";

const getFeedbacks = async () => {
  try {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = baseUrl;
    const response = await axios.get(url);
    const feedbacks = response.data;
    return feedbacks.productRequests;
  } catch (err) {
    err instanceof Error
      ? console.log(`The error: ${err.message}`)
      : console.log("Something went wrong");
  }
};
export default getFeedbacks;
