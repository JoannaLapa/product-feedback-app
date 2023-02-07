import axios from "axios";

const getFeedbacks = async () => {
  try {
    const baseUrl =
      "https://run.mocky.io/v3/bea655b8-25cc-4ee6-a057-65052e50e6ee";
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
