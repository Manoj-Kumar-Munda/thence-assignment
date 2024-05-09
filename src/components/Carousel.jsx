import React, { useEffect, useState } from "react";
import { heroTexts } from "../utils/constants";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      changeActiveIndex(activeIndex + 1);
    }, [2000]);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const changeActiveIndex = (index) => {
    if (index > heroTexts.length - 1) {
      setActiveIndex(0);
      return;
    } else if (index < 0) {
      setActiveIndex(heroTexts.length - 1);
      return;
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="flex flex-col gap-y-4">
      <div className=" relative w-60 overflow-hidden">
        <div
          style={{ left: `-${activeIndex*100}%`}}
          className={`relative flex transition-all duration-300`}
        >
          {heroTexts.map((item, index) => (
            <div className="shrink-0 w-full my-4" key={item}>
              <div className="w-full">
                <span className="font-primary font-semibold text-2xl">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {new Array(3).fill(0).map((item, index) => (
          <span
            key={index}
            onClick={() => changeActiveIndex(index)}
            className={`cursor-pointer w-2 h-2 rounded-full bg-[#E4E3E3]  ${
              activeIndex === index ? "bg-green-500" : "hover:bg-[#CAD0CB]"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
