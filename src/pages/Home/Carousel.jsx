import React, { useState } from "react";

const heroTexts = [
  "Enhance fortune 50 company’s insights teams research capabilities",
  "Enhance fortune 50 company’s insights teams research capabilities.....",
  "Enhance fortune 50 company’s insights teams research capabilities",
];

const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    console.log("activeIndex",activeIndex);
    const changeActiveIndex = (index) => {
      
        if(activeIndex > heroTexts.length-1){
            setActiveIndex(0);
            return;
        }
        else if(activeIndex < 0){
            setActiveIndex(heroTexts.length-1);
            return;
        }else{
            setActiveIndex(index);
        }
    }
  return (
    <div className="flex flex-col gap-y-4">
      <div className=" relative w-60 overflow-hidden">
        <div 
           className={`relative flex transition-all duration-300 -left-${activeIndex*100}`}
        >
          {heroTexts.map((item, index) => (
            <div className="shrink-0 w-60 my-4" key={index}>
              <div className="w-full">
                <span className="font-primary font-semibold text-2xl">
                  {item}
                </span>
              </div>

              <div></div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {new Array(3).fill(0).map((item, index) => (
          <span 
            key={index} 
            onClick={() => changeActiveIndex(index)}
            className={`cursor-pointer w-2 h-2 rounded-full bg-[#E4E3E3] hover:bg-[#CAD0CB] ${activeIndex===index && 'bg-green-500'}`}>
        
            </span>
        ))}

      </div>
    </div>
  );
};

export default Carousel;
