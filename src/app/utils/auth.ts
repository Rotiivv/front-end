const saveToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

export default saveToken;
