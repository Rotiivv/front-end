import { tv } from "tailwind-variants";
import {
  CheckBoxIcon,
  ExitIcon,
  HomeIcon,
  MenuIcon,
  TasksIcon,
} from "../../assets/icons";
import type { ComponentProps } from "react";
import MenuButton from "./MenuButton";
import token from "../../app/utils/auth";
import useGetUser from "../../app/hooks/useGetUser";
import Profile from "./Profile";

interface MenuProps extends ComponentProps<"button"> {
  param: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuStyle = tv({
  base: "h-screen top-0 left-0 fixed z-50 bg-white p-5 transition-transform duration-300 ease-in-out",
  variants: {
    isOpen: {
      true: "flex  flex-col gap-8 w-[60%] translate-0",
      false: "opacity-0 -translate-x-full",
    },
  },
});

const Menu = ({ param, setIsOpen, ...props }: MenuProps) => {
  const { data: user } = useGetUser();

  return (
    <>
      <div className={`pl-3 pt-3 ${param ? "hidden" : "block"} `}>
        <button
          {...props}
          className="bg-white w-fit p-2 rounded-lg border border-[#e0e1e4] hover:bg-[#e7e7e7]
        transition-all"
        >
          <MenuIcon className="w-4 h-3" />
        </button>
      </div>
      <div>
        <div
          onClick={() => setIsOpen(false)}
          className={`${
            param
              ? "h-screen w-screen bg-black opacity-40 z-40 fixed"
              : "hidden"
          }`}
        ></div>

        <div className={MenuStyle({ isOpen: param })}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 font-semibold text-xl text-[#303030]">
              <div className="bg-[#00ADB5] rounded-lg h-fit p-1.5">
                <CheckBoxIcon className="text-white h-4.5 w-4.5" />
              </div>
              TaskManager
            </div>

            <p className="text-sm text-gray-600">
              Organize suas tarefas de forma inteligente
            </p>
          </div>

          <div className="flex flex-col gap-6 h-full justify-between">
            <div className="flex flex-col gap-2">
              <MenuButton
                screen="dashboard"
                text="Dashboard"
                icon={<HomeIcon className="mt-[1px] h-4 w-4" />}
              />

              <MenuButton
                screen="tasks"
                text="Todas as Tarefas"
                icon={<TasksIcon className="h-4 w-4" />}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <MenuButton
                screen="login"
                text="Sair"
                icon={<ExitIcon className="h-4 w-4 mt-[1px]" />}
                onCLick={() => token.remove()}
                mode="logout"
              />

              <Profile name={user?.name} email={user?.email} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
