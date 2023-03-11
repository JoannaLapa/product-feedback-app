import axios from "axios";

const getUser = async () => {
  try {
    const url = "https://run.mocky.io/v3/bea655b8-25cc-4ee6-a057-65052e50e6ee";
    const response = await axios.get(url);
    const user = response.data;
    return user.currentUser;
  } catch (err) {
    err instanceof Error
      ? console.log(`The error: ${err.message}`)
      : console.log("Something went wrong");
  }
};
export default getUser;
