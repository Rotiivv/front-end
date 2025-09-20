import { CheckBoxIcon, DangerIcon, PlayIcon } from "../../assets/icons";
import TaskItem from "./TaskItem";

const TasksGridView = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-white rounded-lg p-3.5 shadow-sm space-y-6">
        <div className="flex gap-1 items-center">
          <DangerIcon className="h-3.5" />
          <span className="text-[13px]">Não Iniciadas (1)</span>
        </div>

        <TaskItem
          priority="low"
          status="inProgress"
          title="Preciso finalizar logo esse projeto"
          id={"aisbduabdauss"}
        />
      </div>

      <div className="bg-white rounded-lg p-3.5 shadow-sm space-y-6">
        <div className="flex gap-1 items-center">
          <PlayIcon className="h-3.5 text-[#ffbc37]" />
          <span className="text-[13px]"> Em Progresso(1)</span>
        </div>

        <TaskItem
          priority="medium"
          status="done"
          title="Preciso finalizar logo esse projeto"
          id={"aisbduabdauaa"}
        />
      </div>

      <div className="bg-white rounded-lg p-3.5 shadow-sm space-y-6">
        <div className="flex gap-1 items-center">
          <CheckBoxIcon className="h-3.5 text-[#00ADB5]" />
          <span className="text-[13px]">Concluídas (1)</span>
        </div>

        <TaskItem
          priority="hight"
          status="notStarted"
          title="Preciso finalizar logo esse projeto"
          id={"aisbduabdaudd"}
        />
      </div>
    </div>
  );
};

export default TasksGridView;
