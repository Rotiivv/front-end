import { useForm } from "react-hook-form";
import type z from "zod";
import registerSchema from "../app/schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = z.infer<typeof registerSchema>;

const useRegisterController = () => {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    //
    console.log(data);
  });

  return { handleSubmit, register, errors };
};

export default useRegisterController;
