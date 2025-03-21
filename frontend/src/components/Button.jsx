import { MoveRight } from "lucide-react";
import React from "react";

const Button = ({ text }) => {
  return (
    <button className="bg-[#62CFBF] rounded-full px-6 py-3 border border-black shadow-[6px_6px_0px_#000] 
                       hover:shadow-[0px_0px_0px_#000] hover:translate-x-[6px] hover:translate-y-[6px] 
                       flex items-center gap-3 transition-all duration-150">
      <span>{text}</span>
      <MoveRight />
    </button>
  );
};

export default Button;
