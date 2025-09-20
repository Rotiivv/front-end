import TaskItem from "./TaskItem";

const TasksFlexView = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3.5 flex flex-col space-y-7">
      <span className="font-base text-xs">Tarefas (7)</span>

      <div className="flex flex-col gap-3">
        <TaskItem
          priority="low"
          status="inProgress"
          title="Preciso finalizar logo esse projeto"
          id={"aisbduabdauss"}
        />
        <TaskItem
          priority="medium"
          status="done"
          title="Preciso finalizar logo esse projeto"
          id={"aisbduabdauaa"}
        />
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

export default TasksFlexView;
