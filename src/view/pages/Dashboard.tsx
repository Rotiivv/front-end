import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import useGetUser from "../../app/hooks/useGetUser";
import Chart from "../components/Chart";
import unauthorized from "@/app/services/unauthorized";
import useGetOverview from "@/app/hooks/useGetOverview";
import { PlayIcon, TasksIcon } from "@/assets/icons";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: user, isError } = useGetUser();

  const { data: overview } = useGetOverview();

  const firstName = user?.name.split(" ")[0];

  useEffect(() => {
    unauthorized(isError);
  }, [isError]);

  return (
    <div className="p-3 flex flex-col gap-6">
      <div className="flex justify-between gap-8 items-start">
        <div className="mt-[-4px]">
          <Menu
            param={isOpen}
            setIsOpen={setIsOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="font-semibold text-xl">
            Bom dia,{" "}
            {firstName &&
              firstName.charAt(0).toUpperCase() + firstName.slice(1)}
          </h1>
          <p className="text-xs text-gray-600">
            Vamos ser produtivo hoje. Voce tem {overview?.totalTasks} tarefas
            pendentes
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-3">
        <Chart
          percentage={overview?.percentages.avaliables}
          from="#595959"
          to="#474747"
          num={overview?.tasks.avaliables.length}
          header="Tarefas disponiveis"
          icon={<TasksIcon className="h-4.5 w-4.5" />}
          footer="Tarefas para hoje"
          endAngle={overview?.endAngles.avaliables}
        />
        <Chart
          percentage={overview?.percentages.inProgress}
          from="#ffbc37"
          to="#F8A500"
          num={overview?.tasks.inProgress.length}
          header="Tarefas em andamento"
          icon={<PlayIcon className="h-4.5 w-4.5" />}
          footer="Em progresso"
          endAngle={overview?.endAngles.inProgress}
        />
        <Chart
          percentage={overview?.percentages.done}
          from="#00ADB5"
          to="#008A91"
          num={overview?.tasks.done.length}
          header="Tarefas concluídas"
          icon={<PlayIcon className="h-4.5 w-4.5" />}
          footer="Concluídas hoje"
          endAngle={overview?.endAngles.done}
        />
      </div>
    </div>
  );
};

export default Dashboard;
