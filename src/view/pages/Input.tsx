interface InputProps {
  placeholder: string;
}

const Input = ({ placeholder, ...props }: InputProps) => {
  return (
    <div className="w-full">
      <input {...props} />
    </div>
  );
};

export default Input;
