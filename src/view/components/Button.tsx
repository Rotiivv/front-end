import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { LoaderIcon } from "../../assets/icons";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  className?: string;
  isPending?: boolean;
  screen?: "auth" | "tasks";
}

const Button = ({
  text,
  className,
  isPending,
  screen,
  ...props
}: ButtonProps) => {
  const buttonStyle = tv({
    base: `bg-[#00ADB5] border-1 border-[#00d0d9] transition-all hover:-translate-y-0.5
    w-full text-white font-semibold active:bg-[#00848b] rounded-lg flex gap-1 justify-center items-center disabled:cursor-not-allowed disabled:bg-[#74cdd1] ${className}`,
    variants: {
      screen: {
        auth: "py-1.5",
        tasks: "py-0.5",
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
          {isPending && <LoaderIcon className="animate-spin" />}
          {text}
        </button>
      </div>
    </>
  );
};

export default Button;
