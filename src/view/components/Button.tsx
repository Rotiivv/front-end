import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  className?: string;
}

const Button = ({ text, className, ...props }: ButtonProps) => {
  const buttonStyle = tv({
    base: `bg-[#00ADB5] border-1 border-[#00d0d9] transition-all hover:-translate-y-0.5
    w-full text-white font-semibold py-1.5 active:bg-[#00848b] rounded-lg ${className}`,
  });
  return (
    <>
      <div className="w-full">
        <button className={buttonStyle()} {...props}>
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
