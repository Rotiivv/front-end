import { useState, type FormEvent } from "react";
import { tv } from "tailwind-variants";
import { ChavronIcon, CheckIcon } from "../../assets/icons";
import type { UseFormRegisterReturn } from "react-hook-form";

interface SelectInputProps extends UseFormRegisterReturn {
  placeholder?: { value: string; enum: string | undefined };
  options: { value: string; enum: string | undefined }[];
  handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

const selectInputStyle = tv({
  base: "bg-[#F3F3F5] w-full rounded-md text-xs flex items-center justify-between px-2 py-1.5 ",
});

const TasksSelectInput = ({
  placeholder,
  options,
  name,
  ref,
  onBlur,
  onChange,
  handleSubmit,
  ...props
}: SelectInputProps) => {
  const [chosen, setChosen] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: {
    value: string;
    enum: string | undefined;
  }) => {
    setChosen(option);
    setIsOpen(false);

    if (onChange) {
      onChange({
        target: {
          name: name,
          value: option.enum,
        },
      });
    }

    // Executa o submit com o novo valor
    if (handleSubmit) {
      // Simula o evento de submit
      const formEvent = {
        preventDefault: () => {},
        currentTarget: { [name]: { value: option.enum } },
      } as FormEvent<HTMLFormElement>;
      handleSubmit(formEvent);
    }
  };

  const handleOutClick = (e: React.FocusEvent<HTMLButtonElement>) => {
    setTimeout(() => {
      setIsOpen(!isOpen);
      onBlur(e);
    }, 200);
  };

  return (
    <div className="w-full relative">
      <button
        {...props}
        type="button"
        name={name}
        ref={ref}
        value={chosen?.enum}
        onBlur={(e) => handleOutClick(e)}
        onClick={handleClick}
        className={selectInputStyle()}
        {...props}
      >
        {chosen?.value}
        {<ChavronIcon className="h-3 w-3 text-gray-400" />}
      </button>
      {isOpen && (
        <form
          onSubmit={handleSubmit}
          className=" bg-white shadow-sm rounded-md w-full flex-col absolute top-8 z-10 border border-[#dbdbdb] p-1"
        >
          {options.map((option) => (
            <button
              type="submit"
              key={option.value}
              onClick={() => {
                handleOptionSelect(option);
              }}
              className="text-left w-full text-xs hover:bg-[#E9EBEF] transition-all rounded-sm py-1 px-1 flex items-center justify-between"
            >
              {option.value}
              {chosen?.value === option.value && (
                <CheckIcon className="h-2 w-2" />
              )}
            </button>
          ))}
        </form>
      )}
    </div>
  );
};

export default TasksSelectInput;
