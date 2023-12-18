import axios from "axios";

//future todo - move to firebase and hide API with env

const getUser = async () => {
  try {
    const url = "https://run.mocky.io/v3/0511782d-a93a-460c-b996-64f3a49b43e5";
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
