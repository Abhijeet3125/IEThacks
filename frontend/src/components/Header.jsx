import React, { useState, useEffect } from "react";
import Button from "./Button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Detect scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex flex-row justify-between transition-all duration-300 bg-white p-[1%]
        ${scrolled ? "pt-[1%] border-b border-gray-300 shadow-md" : "pt-[2%]"}`}
    >
      <div>Logo</div>
      <div className="mr-[4%]">
        <Button text={"Login/SignUp"} />
      </div>
    </div>
  );
};

export default Header;
