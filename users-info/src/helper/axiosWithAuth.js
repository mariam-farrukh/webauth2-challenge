import axios from "axios";

export const axiosWithAuth = (username, password) => {
  return axios.create({
    headers: {
      username: `user3`,
      password: `password3`
    }
  });
};