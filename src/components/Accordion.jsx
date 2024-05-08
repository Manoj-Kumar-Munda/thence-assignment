import React, { useState } from "react";
import { qnaContents } from "../utils/constants";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const changeActiveIndex = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div>
      {qnaContents.map((item, index) => (
        <div key={index} className="my-4 space-y-3">
          <div
            className={`flex justify-between items-center py-2 px-2 border-b transition-all duration-300 ${
              activeIndex === index
                ? "border-b-[#D7D7D7]/0"
                : "border-b-[#D7D7D7]/100"
            }`}
          >
            <span className="font-primary font-semibold">
              {item.question}
            </span>
            <span
              className="cursor-pointer"
              onClick={() => changeActiveIndex(index)}
            >
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>

          <div
            className={`transition-all duration-300 ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            } overflow-hidden my-1 `}
          >
            <p className="text-sm">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
