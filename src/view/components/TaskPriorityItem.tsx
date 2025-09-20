import { tv } from "tailwind-variants";
import { DangerIcon } from "../../assets/icons";

interface TaskStatusItemProps {
  priority: "low" | "medium" | "hight";
}

const TaskPriorityItemStyle = tv({
  base: "text-[10px] flex items-center w-fit rounded-md justify-center pl-[-10px] pr-[6px] border",
  variants: {
    mode: {
      low: "border-[#B9F8CF] bg-[#DBFCE7] text-[#3DA467]",
      medium: "border-[#FFF085] bg-[#FEF9C2] text-[#B2731A]",
      hight: "border-[#FFC9C9] bg-[#FFE2E2] text-[#D85559]",
    },
  },
});

const TaskPriorityItem = ({ priority }: TaskStatusItemProps) => {
  return (
    <span className={TaskPriorityItemStyle({ mode: priority })}>
      <DangerIcon className="h-2.5" />
      {priority}
    </span>
  );
};

export default TaskPriorityItem;
