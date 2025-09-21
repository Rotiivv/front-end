import { useState } from "react";
import { tv } from "tailwind-variants";
import { ChavronIcon, CheckIcon } from "../../assets/icons";

interface SelectInputProps {
  placeholder?: string;
  options: { value: string }[];
}

const selectInputStyle = tv({
  base: "bg-[#F3F3F5] w-full rounded-md text-xs flex items-center justify-between px-2 py-1.5 ",
});

const SelectInput = ({ placeholder, options }: SelectInputProps) => {
  const [chosen, setChosen] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutClick = () => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 200);
  };

  return (
    <div className="w-full relative">
      <button
        onBlur={handleOutClick}
        onClick={handleClick}
        className={selectInputStyle()}
      >
        {chosen}
        {<ChavronIcon className="h-3 w-3 text-gray-400" />}
      </button>
      {isOpen && (
        <div className=" bg-white shadow-sm rounded-md w-full flex-col absolute top-8 z-10 border border-[#dbdbdb] p-1">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setChosen(option.value);
                console.log(chosen);
              }}
              className="text-left w-full text-xs hover:bg-[#E9EBEF] transition-all rounded-sm py-1 px-1 flex items-center justify-between"
            >
              {option.value}
              {chosen === option.value && <CheckIcon className="h-2 w-2" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
