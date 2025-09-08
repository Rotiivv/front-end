import { useState } from "react";

const useLoginController = () => {
  const [showPassword, setShowPassord] = useState(true);

  const togglePasswordVisibility = () => {
    if (!showPassword) return setShowPassord(true);

    return setShowPassord(false);
  };

  return { togglePasswordVisibility, showPassword };
};

export default useLoginController;
