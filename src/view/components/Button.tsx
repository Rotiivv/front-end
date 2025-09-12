import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { LoaderIcon } from "../../assets/icons";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  className?: string;
  isPending?: boolean;
}

const Button = ({ text, className, isPending, ...props }: ButtonProps) => {
  const buttonStyle = tv({
    base: `bg-[#00ADB5] border-1 border-[#00d0d9] transition-all hover:-translate-y-0.5
    w-full text-white font-semibold py-1.5 active:bg-[#00848b] rounded-lg flex gap-1 justify-center items-center ${className}`,
  });
  return (
    <>
      <div className="w-full">
        <button className={buttonStyle()} {...props}>
          {isPending && <LoaderIcon className="animate-spin" />}
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
