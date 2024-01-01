import axios from "axios";
export async function getAllUsers() {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getUserById(id) {
  try {
    const response = await axios.get("https://dummyjson.com/users/"+id);
    return response;
  } catch (e) {
    console.log(e);
  }
}
getUserById(1)