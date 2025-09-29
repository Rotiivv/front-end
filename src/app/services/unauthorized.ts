import token from "../utils/auth";

const unauthorized = (isError: boolean) => {
  if (isError) {
    token.remove();
    window.location.href = "/login";
  }
};

export default unauthorized;
