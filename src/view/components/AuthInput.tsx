import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import type React from "react";

interface AuthInputProps
  extends ComponentProps<"input">,
    VariantProps<typeof authInputStyles> {
  placeholder: string;
  id: string;
  icon?: React.ReactNode;
  eyeIcon?: React.ReactNode;
  errorMessage?: string;
}

const authInputStyles = tv({
  base: "bg-white border px-3 py-2.5 rounded-lg w-full pl-8 text-xs font-medium peer group focus:py-2.5 transition-all placeholder-shown:py-2 focus:outline-none",
  variants: {
    mode: {
      normal: "focus:border-[#00ADB5] border-[#ADB5BD]",
      invalid: "focus:border-[#FF5858] border-[#C92A3A]",
    },
  },
  defaultVariants: {
    mode: "normal",
  },
});

const AuthInput = ({
  placeholder,
  id,
  icon,
  eyeIcon,
  errorMessage,
  mode,
  ...props
}: AuthInputProps) => {
  return (
    <div className="w-full relative">
      <input
        placeholder=" "
        id={id}
        {...props}
        className={authInputStyles({ mode })}
      />
      {errorMessage && (
        <p className="text-left pl-2 pt-1 text-xs text-red-600">
          {errorMessage}
        </p>
      )}

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

export default AuthInput;
