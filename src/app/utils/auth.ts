const saveToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

const getToken = () => {
  return localStorage.getItem("accessToken");
};

const removeToken = () => {
  return localStorage.removeItem("accessToken");
};

const token = {
  save: saveToken,
  get: getToken,
  remove: removeToken,
};

export default token;
