import { useState, useEffect } from "react";
import arrowUp from "../assets/arrowUp.png";
const GoUp = () => {
  const [isDown, setIsDown] = useState(false);
  useEffect(() => {
    const hundleScroll = () => {
      if (window.scrollY > 500) setIsDown(true);
      else setIsDown(false);
    };
    window.addEventListener("scroll", hundleScroll);
    // clean up
    return () => window.removeEventListener("scroll", hundleScroll);
  }, []);
  // functions
  const goUpHundle = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <img
      src={arrowUp}
      className={` rounded-full fixed bottom-5 right-5 font-bold z-50 cursor-pointer ${
        (isDown && "block") || "hidden"
      }`}
      onClick={goUpHundle}
      width={50}
      height={50}
    />
  );
};

export default GoUp;
