import { useMutation } from "@tanstack/react-query";
import type { SigninBody } from "../services/signin";
import signin from "../services/signin";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import token from "../utils/auth";

const useSignin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SigninBody) => {
      return signin(data);
    },
    onSuccess: (data) => {
      token.save(data.accessToken);
      navigate("/dashboard");
      toast.success("Você realizou login com sucesso!");
    },
    onError: () => {
      toast.error("Credenciais inválidas.");
    },
  });
};

export default useSignin;
