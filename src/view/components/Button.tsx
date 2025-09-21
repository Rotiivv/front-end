import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { LoaderIcon, SaveIcon } from "../../assets/icons";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  icon?: React.ReactNode;
  className?: string;
  isPending?: boolean;
  screen: "auth" | "addTasks";
}

const Button = ({
  text,
  className,
  isPending,
  screen,
  ...props
}: ButtonProps) => {
  const buttonStyle = tv({
    base: `bg-[#00ADB5] transition-all 
    w-full text-white font-semibold active:bg-[#00848b]  flex gap-1 justify-center items-center disabled:cursor-not-allowed disabled:bg-[#74cdd1] ${className}`,
    variants: {
      screen: {
        auth: "py-1.5 hover:-translate-y-0.5 rounded-lg border-[#00d0d9 border-1",
        addTasks: "py-1.25 text-xs rounded-md px-2 w-fit",
      },
    },
  });

  return (
    <>
      <div className="w-full">
        <button
          className={buttonStyle({ screen })}
          {...props}
          disabled={isPending}
        >
          {isPending ? (
            <LoaderIcon className="animate-spin" />
          ) : (
            <SaveIcon className="h-3 ml-[-5px]" />
          )}
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
