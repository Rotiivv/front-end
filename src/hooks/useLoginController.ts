import { useState } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";
import loginSchema from "../app/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useSignin from "../app/hooks/useSignin";

type FormData = z.infer<typeof loginSchema>;

const useLoginController = () => {
  const [showPassword, setShowPassord] = useState(true);

  const togglePasswordVisibility = () => {
    if (!showPassword) return setShowPassord(true);

    return setShowPassord(false);
  };

  const {
    register,
    handleSubmit: hookFormHandleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending, error: errorMutate } = useSignin();

  const handleSubmit = hookFormHandleSubmit((data) => {
    mutate(data);
  });

  return {
    togglePasswordVisibility,
    showPassword,
    register,
    handleSubmit,
    errors,
    errorMutate,
    isPending,
  };
};

export default useLoginController;
