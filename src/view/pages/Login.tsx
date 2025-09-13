import {
  CheckIcon,
  EmailIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
} from "../../assets/icons";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import useLoginController from "../../hooks/useLoginController";

const Login = () => {
  const {
    showPassword,
    togglePasswordVisibility,
    register,
    handleSubmit,
    errors,
    errorMutate,
    isPending,
  } = useLoginController();

  return (
    <>
      <div className="bg-transparent flex flex-col justify-center items-center w-full h-full p-4 gap-6">
        <div className="flex items-center flex-col gap-3 text-center">
          <div className="bg-[#00ADB5] p-4 rounded-xl shadow-2xl">
            <CheckIcon className="text-white" />
          </div>
          <h1 className="font-semibold text-xl">Bem-vindo de volta!</h1>

          <p className="font-light text-[#3e4348] text-[15px]">
            Faca seu login para continuar no TaskManager
          </p>
        </div>
        <div className="bg-white max-w-[400px] w-full rounded-xl shadow-lg">
          <div className="px-6 py-6 w-full space-y-4 text-center">
            <p className="text-lg">Entrar na sua conta</p>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 "
            >
              <Input
                type="email"
                placeholder="Email"
                id="email"
                icon={<EmailIcon className="h-3 w-3 text-[#5e666f]" />}
                {...register("email")}
                errorMessage={errors?.email?.message}
                mode={
                  (errors?.email && "invalid") ||
                  (errorMutate ? "invalid" : undefined)
                }
              />
              <Input
                type={showPassword ? "password" : "none"}
                placeholder="Password"
                id="password"
                icon={<LockIcon className="h-3 w-3 text-[#5e666f]" />}
                {...register("password")}
                errorMessage={errors?.password?.message}
                mode={
                  (errors?.password && "invalid") ||
                  (errorMutate ? "invalid" : undefined)
                }
                eyeIcon={
                  showPassword ? (
                    <EyeOffIcon
                      onClick={togglePasswordVisibility}
                      className="h-6 w-6 transition-all hover:bg-[#f3f3f3] px-1 rounded-lg text-[#5e666f]"
                    />
                  ) : (
                    <EyeIcon
                      onClick={togglePasswordVisibility}
                      className="h-6 w-6 transition-all text-[#5e666f] hover:bg-[#f3f3f3] px-1 rounded-lg"
                    />
                  )
                }
              />

              {errorMutate && Object.keys(errors).length === 0 && (
                <p className="text-left text-red-500 pl-1.5 text-xs mt-[-10px] mb-[-15px]">
                  Credenciais inválidas.
                </p>
              )}

              <Button
                isPending={isPending}
                type="submit"
                text="Log In"
                className="mt-4"
              />
            </form>

            <p className="font-base text-sm text-[#51575d]">
              Nao tem conta?{" "}
              <Link to="/register" className="text-[#00ADB5] hover:underline">
                Crie uma conta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
