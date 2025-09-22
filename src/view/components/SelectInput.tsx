import { useState } from "react";
import { tv } from "tailwind-variants";
import { ChavronIcon, CheckIcon } from "../../assets/icons";
import type { UseFormRegisterReturn } from "react-hook-form";

interface SelectInputProps extends UseFormRegisterReturn {
  placeholder?: { value: string; enum: string | undefined };
  options: { value: string; enum: string | undefined }[];
}

const selectInputStyle = tv({
  base: "bg-[#F3F3F5] w-full rounded-md text-xs flex items-center justify-between px-2 py-1.5 ",
});

const SelectInput = ({
  placeholder,
  options,
  name,
  ref,
  onBlur,
  ...props
}: SelectInputProps) => {
  const [chosen, setChosen] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    options.map((option) => <h1>{option.enum}</h1>);
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
        <div className=" bg-white shadow-sm rounded-md w-full flex-col absolute top-8 z-10 border border-[#dbdbdb] p-1">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setChosen(option);
              }}
              className="text-left w-full text-xs hover:bg-[#E9EBEF] transition-all rounded-sm py-1 px-1 flex items-center justify-between"
            >
              {option.value}
              {chosen?.value === option.value && (
                <CheckIcon className="h-2 w-2" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
