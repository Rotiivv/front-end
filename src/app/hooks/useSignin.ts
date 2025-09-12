import { useMutation } from "@tanstack/react-query";
import type { SigninBody } from "../services/signin";
import signin from "../services/signin";
import saveToken from "../utils/auth";
import { useNavigate } from "react-router-dom";

const useSignin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SigninBody) => {
      return signin(data);
    },
    onSuccess: (data) => {
      saveToken(data.accessToken);
      navigate("/dashboard");
    },
  });
};

export default useSignin;
