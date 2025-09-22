import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { ArrowIcon, FormIcon, LabelIcon } from "../../assets/icons";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";
import useAddTaskController from "../../hooks/useAddTaskController";

const AddTask = () => {
  const { register, handleSubmit } = useAddTaskController();

  return (
    <form onSubmit={handleSubmit} className="p-3 flex flex-col gap-4.5 w-full">
      <div className="flex justify-between items-center">
        <Menu />
        <Link
          to="/tasks"
          className="bg-white rounded-md border border-[#e0e1e4] hover:bg-[#e7e7e7] px-2 py-1 text-xs flex gap-1 items-center justify-center"
        >
          <ArrowIcon className="h-3 w-3 mt-0.5" />
          Voltar
        </Link>
      </div>

      <div>
        <h1 className="font-medium text-xl">Nova Tarefa</h1>
        <p className="text-[13px] text-gray-600">
          Crie uma nova tarefa para organizar seu trabalho
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-3.5 flex flex-col gap-3">
        <div className="flex gap-1 items-center">
          <FormIcon className="h-4 text-[#00ADB5]" />
          <span className="text-xs mt-1">Informações Básicas</span>
        </div>

        <div className="flex flex-col gap-2">
          <Input
            {...register("title")}
            label="Título da Tarefa"
            placeholder="Digite o título da tarefa..."
            type="title"
            screen="addTasks"
          />
          <div className="flex flex-col gap-0.75">
            <label htmlFor="description" className="text-[11px] font-medium">
              Descrição
            </label>
            <textarea
              {...register("description")}
              id="description"
              className="w-full bg-[#F3F3F5] rounded-md px-2  focus:outline-none focus:ring-3 focus:ring-[#ccc]/90  focus:border-[#a1a1a1] transition-shadow border border-[#e0e1e4] text-xs h-15 pt-1"
              placeholder="Adicione um descrição (Opcional)..."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col p-3.5 bg-white shadow-sm rounded-lg gap-4">
        <div className="flex items-center">
          <LabelIcon className="text-[#00ADB5] h-4" />
          <span className="text-xs ">Configurações</span>
        </div>

        <div className="flex flex-col gap-2">
          <div>
            <span className="text-[11px] font-medium">Status</span>
            <SelectInput
              {...register("status")}
              placeholder={{ value: "Não iniciada", enum: "NOT_STARTED" }}
              options={[
                { value: "Não iniciada", enum: "NOT_STARTED" },
                { value: "Em progresso", enum: "IN_PROGRESS" },
                { value: "Concluida", enum: "DONE" },
              ]}
            />
          </div>

          <div>
            <span className="text-[11px] font-medium">Prioridade</span>
            <SelectInput
              {...register("priority")}
              placeholder={{ value: "Baixa", enum: "LOW" }}
              options={[
                { value: "Baixa", enum: "LOW" },
                { value: "Media", enum: "MEDIUM" },
                { value: "Alta", enum: "HIGHT" },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center p-3.5 rounded-lg shadow-sm bg-white w-full justify-end">
        <div className="flex gap-2 ">
          <button className="bg-white rounded-md border border-[#e0e1e4] hover:bg-[#e7e7e7] px-2 py-1 text-xs flex gap-1 items-center justify-center">
            Cancelar
          </button>
          <Button screen="addTasks" text="Criar tarefa" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default AddTask;
