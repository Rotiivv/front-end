import type React from "react";
import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";

interface InputProps extends ComponentProps<"input"> {
  icon?: React.ReactNode;
  label?: string;
  type?: string;
  screen: "tasks" | "addTasks" | "addTasksLarge";
}

const inputStyle = tv({
  base: "w-full bg-[#F3F3F5] rounded-md px-2  focus:outline-none focus:ring-3 focus:ring-[#ccc]/90 focus:border focus:border-[#a1a1a1] transition-shadow",
  variants: {
    screen: {
      tasks: "pl-8 py-1 text-sm",
      addTasks: "border border-[#e0e1e4] py-1.25 text-xs",
      addTasksLarge:
        "border border-[#e0e1e4] h-5 text-xs flex justify-start items-start",
    },
  },
});

const Input = ({ icon, label, type, screen, ...props }: InputProps) => {
  return (
    <div className="w-full relative">
      <label className="text-[11px] font-medium" htmlFor={type}>
        {label}
      </label>
      <div className="w-fit h-fit absolute top-1.5 left-2">{icon}</div>
      <input id={type} {...props} className={inputStyle({ screen })} />
    </div>
  );
};

export default Input;
