import axios from "axios";

const urlBase = "https://e-commerce-api-v2.academlo.tech/api/v1";

const useAuth = async (path, data) => {
  const url = `${urlBase}${path}`;
  await axios
    .post(url, data)
    .then((res) => {
      console.log(res.data);
      "token" in res.data && localStorage.setItem("token", res.data.token);
    })
    .catch((err) => console.log(err));
};

export default useAuth;
