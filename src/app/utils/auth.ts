export const saveToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

const getToken = () => {
  localStorage.getItem("accessToken");
};

const token = {
  save: saveToken,
  get: getToken,
};

export default token;
