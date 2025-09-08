import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type React from "react";

interface InputProps extends ComponentProps<"input"> {
  placeholder: string;
  id: string;
  icon?: React.ReactNode;
  eyeIcon?: React.ReactNode;
}

const InputStyles = tv({
  base: "bg-white border border-[#ADB5BD] px-3 py-2.5 rounded-lg w-full pl-8 text-xs font-medium peer group focus:py-2.5 transition-all placeholder-shown:py-2 focus:outline-none focus:border focus:border-[#00ADB5]",
});

const Input = ({ placeholder, id, icon, eyeIcon, ...props }: InputProps) => {
  return (
    <div className="w-full relative">
      <input placeholder=" " id={id} {...props} className={InputStyles()} />
      <div className="absolute top-[5px] right-2">{eyeIcon}</div>
      <div className="absolute top-[12px] left-3  transition-all">{icon}</div>
      <label
        htmlFor={id}
        className="absolute top-[-10px] px-1 bg-white rounded-md left-2 flex text-[#495057] text-xs items-center gap-2.5 peer-focus:text-xs peer-focus:top-[-10px] peer-focus:left-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-6.5 transition-all "
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
