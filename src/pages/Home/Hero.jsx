import React from "react";
import hero from "../../assets/image-1.png";
import rocket from "../../assets/rocket.png";
import rightArrow from "../../assets/arrow.png";
import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import Heading from "../../components/Heading";
const Hero = () => {
  return (
    <section className="py-10 space-y-12">
      <div className=" max-w-fit w-full mx-auto">
        <div className="flex flex-col justify-center space-y-2 text-center">
          <Heading className="text-heading-green">Success</Heading>
          <p className="text-5xl font-primary font-semibold">
            Every success journey
            <br />
            we’ve encountered.
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-20">
        <div className=" relative">
          <div className="w-80 overflow-hidden">
            <img
              src={hero}
              className="aspect-[1/1.1] object-cover object-top rounded-xl"
            />
          </div>

          <div className="absolute top-10 -left-24 shadow-xl rounded-xl w-40 bg-white px-6 py-5 space-y-1">
            <h1 className="font-switzer text-5xl font-medium">40%</h1>
            <p className="text-xs text-[#828282] font-medium">
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </div>

          <div className="absolute shadow-xl rounded-full bottom-10 -left-10 bg-white px-3 py-2 flex items-center gap-x-2">
            <div className="bg-green-300/25 rounded-full w-8 h-8 p-2">
              <img src={rocket} className="w-6 aspect-square" />
            </div>
            <div className="flex flex-col pr-2">
              <h2 className="font-primary font-bold">10 DAYS</h2>
              <span className="text-xs font-medium text-[#828282]">
                Staff Deployment
              </span>
            </div>
          </div>

          <div className="absolute shadow-xl -bottom-5 -right-10 rounded-xl bg-[#002E18] p-4 space-y-2">
            <h1 className="space-x-1">
              <span className="text-white text-4xl font-medium font-switzer">
                $0.5
              </span>
              <span className="text-gray-400 font-medium text-base font-switzer ">
                MILLION
              </span>
            </h1>

            <p className="text-xs text-[#CCCCCC]">
              Reduced client expenses <br /> by saving on hiring and <br />{" "}
              employee costs.
            </p>
          </div>
        </div>

        <div className="">
          <div className="mx-4 flex flex-col gap-y-8 justify-between h-full">
            <Carousel />

            <div>
              <Button btnType="primary-cta">
                <div className="flex items-center gap-x-3">
                  <span>Explore More</span>
                  <span>
                    <img src={rightArrow} alt="" />
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
