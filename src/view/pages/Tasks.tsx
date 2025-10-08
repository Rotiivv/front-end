import { useState } from "react";
import { SearchIcon } from "../../assets/icons";
import Input from "../components/Input";
import ViewSelector from "../components/ViewSelector";
import TasksFlexView from "../components/TasksFlexView";
import TasksGridView from "../components/TasksGridView";
import { Link, useSearchParams } from "react-router-dom";
import Menu from "../components/Menu";
import useTaskController from "../../hooks/useTaskController";
import TasksSelectInput from "../components/TasksSelectInput";
import { useForm } from "react-hook-form";
import useGetTasks from "../../app/hooks/useGetTask";

const Tasks = () => {
  const [modeView, setModeView] = useState("flex");
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit } = useTaskController(setSearchParams);
  const {
    watch,
    register: inputRegister,
    // formState: { isLoading },
  } = useForm();

  const { data: tasks, isError, refetch } = useGetTasks(searchParams);

  const search = watch("input");

  return (
    <div className="p-3 flex flex-col gap-4.5 w-full transition-all">
      <Menu />

      <div className="w-full space-y-5.5">
        <div>
          <h1 className="text-xl font-medium">Todas as Tarefas</h1>
          <p className="text-[13px] text-gray-600">
            Gerencie todas as suas tarefas em um só lugar
          </p>

          <Link
            className="bg-[#00ADB5] border-1 border-[#00d0d9] transition-all 
            w-full text-white font-semibold active:bg-[#00848b] rounded-lg flex gap-1 justify-center items-center disabled:cursor-not-allowed disabled:bg-[#74cdd1] py-0.5 mt-3"
            to={"/tasks/new"}
          >
            Nova Tarefa
          </Link>
          {/* <Button text="Nova Tarefa" className="mt-3" screen="tasks" /> */}
        </div>

        <div className="bg-white rounded-lg shadow-sm w-full p-3.5 space-y-3">
          <Input
            placeholder="Buscar tarefas..."
            icon={<SearchIcon className="w-4 h-4 text-[#8b8b8b]" />}
            screen="tasks"
            {...inputRegister("input")}
          />

          <div className="w-full flex gap-2 max-w-[260px]">
            <TasksSelectInput
              handleSubmit={handleSubmit}
              {...register("status")}
              placeholder={{ value: "Todos os status", enum: "" }}
              options={[
                { value: "Todos os status", enum: "" },
                { value: "Nao inciadas", enum: "NOT_STARTED" },
                { value: "Em progresso", enum: "IN_PROGRESS" },
                { value: "Concluidas", enum: "DONE" },
              ]}
            />
            <TasksSelectInput
              handleSubmit={handleSubmit}
              {...register("priority")}
              placeholder={{ value: "Todas", enum: "" }}
              options={[
                { value: "Todas", enum: "" },
                { value: "Baixa", enum: "LOW" },
                { value: "Media", enum: "MEDIUM" },
                { value: "Alta", enum: "HIGHT" },
              ]}
            />
          </div>

          <ViewSelector mode={modeView} funcChangeState={setModeView} />
        </div>

        {modeView === "flex" ? (
          <TasksFlexView
            searched={search}
            tasks={tasks}
            isError={isError}
            refetch={refetch}
          />
        ) : (
          <TasksGridView />
        )}
      </div>
    </div>
  );
};

export default Tasks;
