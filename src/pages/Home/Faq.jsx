import React from "react";
import Accordion from "../../components/Accordion";
import Heading from "../../components/Heading";

const Faq = () => {
  return (
    <div className="">
      <div className=" py-20 my-4 rounded-3xl flex justify-between flex-wrap gap-y-4 px-4 ask-question">
        <div className="basis-1/2 flex-grow text-center sm:text-start sm:px-4">
          <div className="">
            <Heading textSize="3xl" className="text-[#9E9D9D]">
              What’s on your mind
            </Heading>
            <span className="text-nowrap font-primary font-semibold text-4xl ">
              Ask Question
            </span>
          </div>
        </div>

        <div className="basis-1/2 min-w-96 flex-grow">
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
