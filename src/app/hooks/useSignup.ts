import { useMutation } from "@tanstack/react-query";
import signup, { type SignupBody } from "../services/signup";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import token from "../utils/auth";

const useSignup = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: SignupBody) => {
      return signup(data);
    },
    onSuccess: (data) => {
      token.save(data.accessToken);
      navigate("/dashboard");
      toast.success("Você realizou registro com sucesso!");
    },
    onError: () => {
      toast.error("Credenciais inválidas.");
    },
  });
};

export default useSignup;
