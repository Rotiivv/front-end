import { tv } from "tailwind-variants";
import { GridIcon, ListIcon } from "../../assets/icons";
import type { Dispatch, SetStateAction } from "react";

interface ViewSelectorProps {
  mode: string;
  funcChangeState: Dispatch<SetStateAction<string>>;
}

const viewSelectorStyle = tv({
  base: "px-0.5 py-1.25 rounded-md",
  variants: {
    mode: {
      selected: "bg-black text-white py-1.25 px-0.5 rounded-md",
      unselected: "hover:bg-[#E5E7EB] py-1.25 px-0.5 rounded-md text-[#4a4a4a]",
    },
  },
  defaultVariants: {
    mode: "unselected",
  },
});

const ViewSelector = ({ mode, funcChangeState }: ViewSelectorProps) => {
  const handleClick = () => {
    if (mode === "flex") {
      funcChangeState("grid");
      return "grid";
    }

    funcChangeState("flex");
    return "flex";
  };

  return (
    <div className="flex border-1 border-[#e0e0e0] rounded-lg w-fit py-1 px-1 items-center transition-all">
      <div
        onClick={handleClick}
        className={viewSelectorStyle({
          mode: mode === "flex" ? "selected" : "unselected",
        })}
      >
        <ListIcon className="h-3.5" />
      </div>
      <div
        onClick={handleClick}
        className={viewSelectorStyle({
          mode: mode === "grid" ? "selected" : "unselected",
        })}
      >
        <GridIcon className="h-3.5" />
      </div>
    </div>
  );
};

export default ViewSelector;
