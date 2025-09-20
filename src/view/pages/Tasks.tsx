import { useState } from "react";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import Button from "../components/Button";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import ViewSelector from "../components/ViewSelector";
import TasksFlexView from "../components/TasksFlexView";
import TasksGridView from "../components/TasksGridView";

const Tasks = () => {
  const [state, setState] = useState("flex");

  return (
    <div className="p-3 flex flex-col gap-4.5 w-full transition-all">
      <div
        className="bg-white w-fit p-2 rounded-lg border border-[#e0e1e4] hover:bg-[#e7e7e7]
       transition-all"
      >
        <MenuIcon className="w-4 h-3" />
      </div>

      <div className="w-full space-y-5.5">
        <div>
          <h1 className="text-xl font-medium">Todas as Tarefas</h1>
          <p className="text-[13px] text-gray-600">
            Gerencie todas as suas tarefas em um só lugar
          </p>

          <Button text="Nova Tarefa" className="mt-3" screen="tasks" />
        </div>

        <div className="bg-white rounded-lg shadow-sm w-full p-3.5 space-y-3">
          <Input
            placeholder="Buscar tarefas..."
            icon={<SearchIcon className="w-4 h-4 text-[#8b8b8b]" />}
          />

          <div className="w-full flex gap-2 max-w-[260px]">
            <SelectInput
              placeholder="Todos os status"
              options={[
                { value: "Todos os status" },
                { value: "Nao inciadas" },
                { value: "Em progresso" },
                { value: "Concluidas" },
              ]}
            />
            <SelectInput
              placeholder="Todas"
              options={[
                { value: "Todas" },
                { value: "Alta" },
                { value: "Media" },
                { value: "Baixa" },
              ]}
            />
          </div>

          <ViewSelector mode={state} funcChangeState={setState} />
        </div>

        <TasksGridView />
        {/* <TasksFlexView /> */}
      </div>
    </div>
  );
};

export default Tasks;
