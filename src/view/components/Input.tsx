import type React from "react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

interface InputProps extends ComponentProps<"input"> {
  icon?: React.ReactNode;
}

const inputStyle = tv({
  base: "w-full bg-[#F3F3F5] rounded-md text-sm px-2 py-1 focus:outline-none focus:ring-3 focus:ring-[#ccc]/90 focus:border focus:border-[#a1a1a1] transition-shadow pl-8",
});

const Input = ({ icon, ...props }: InputProps) => {
  return (
    <div className="w-full relative">
      <div className="w-fit h-fit absolute top-1.5 left-2">{icon}</div>
      <input {...props} className={inputStyle()} />
    </div>
  );
};

export default Input;
