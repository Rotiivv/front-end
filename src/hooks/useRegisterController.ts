import { useForm } from "react-hook-form";
import type z from "zod";
import registerSchema from "../app/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignup from "../app/hooks/useSignup";

type FormData = z.infer<typeof registerSchema>;

const useRegisterController = () => {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending, error: errorMutate } = useSignup();

  const handleSubmit = hookFormHandleSubmit((data) => {
    mutate(data);
  });

  return { handleSubmit, register, errors, errorMutate, isPending };
};

export default useRegisterController;
