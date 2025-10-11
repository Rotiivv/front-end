import { NavLink } from "react-router-dom";
import { tv } from "tailwind-variants";

interface MenuButtonProps {
  screen: string;
  text: string;
  icon: React.ReactNode;
  mode?: "selected" | "unselected" | "logout";
  onCLick?: () => void;
}

const MenuButtonStyles = tv({
  base: "flex gap-4 px-3 py-1.5 rounded-lg font-semibold text-sm items-center transition-all",
  variants: {
    mode: {
      selected:
        "bg-[#00ADB5]/10 text-[#006f75] px-3 py-1.5 rounded-lg border border-[#00ADB5]/30 hover:bg-[#00ADB5]/20 hover:text-[#003234]",
      unselected: "text-[#303030] hover:bg-[#F9FAFB]",
      logout: "text-[#d71b21] hover:bg-[#FEF2F2]",
    },
  },
  defaultVariants: {
    mode: "selected",
  },
});

const MenuButton = ({ mode, text, icon, screen, onCLick }: MenuButtonProps) => {
  return (
    <NavLink
      onClick={onCLick}
      to={`/${screen}`}
      className={
        mode
          ? MenuButtonStyles({ mode })
          : ({ isActive }) =>
              MenuButtonStyles({ mode: isActive ? "selected" : "unselected" })
      }
    >
      {icon} {text}
    </NavLink>
  );
};

export default MenuButton;
