import React, { useState } from "react";
import hero from "../../assets/image-1.png";
import rocket from "../../assets/rocket.png";
import rightArrow from "../../assets/arrow.png";
import Button from "../../components/Button";
import Carousel from "./Carousel";
import { FaPlus } from "react-icons/fa6";
import Footer from "../../components/Footer";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-10 space-y-12">
      <div className=" max-w-fit w-full mx-auto">
        <div className="flex flex-col justify-center space-y-2 text-center">
          <h2 className="text-4xl font-secondary text-heading-green">
            Success{" "}
          </h2>
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

          <div className="absolute top-10 -left-24 shadow-xl rounded-xl bg-white px-6 py-5 space-y-1">
            <h1 className="font-switzer text-5xl font-medium">40%</h1>
            <p className="text-xs text-['#828282'] font-medium">
              Achieved reduction in <br /> project execution time <br /> by
              optimising team <br />
              availability
            </p>
          </div>

          <div className="absolute shadow-xl rounded-full bottom-10 -left-10 bg-white px-3 py-2 flex items-center gap-x-2">
            <div className="bg-green-300/25 rounded-full w-8 h-8 p-2">
              <img src={rocket} className="w-6 aspect-square" />
            </div>
            <div className="flex flex-col pr-2">
              <h2 className="font-primary font-bold">10 DAYS</h2>
              <span className="text-xs font-medium text-['#828282']">
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

            <p className="text-gray-300 text-sm">
              Reduced client expenses <br /> by saving on hiring and <br />{" "}
              employee costs.
            </p>
          </div>
        </div>

        <div className="">
          <div className="mx-4 flex flex-col justify-between h-full">
            <Carousel />

            <div className="">
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

      <div className="">
        <div className=" py-20 my-4 rounded-3xl flex justify-between flex-wrap px-4 ask-question">
          <div>
            <div className="ml-20">
              <h2 className="text-3xl font-secondary text-[#9E9D9D]">
                What’s on your mind
              </h2>
              <span className="text-nowrap font-primary font-semibold text-5xl ">
                Ask Question
              </span>
            </div>
          </div>

          <div className="basis-1/2">
            <div className="my-4 space-y-3">
              <div className="flex justify-between items-center py-2 px-2 border-b border-black">
                <span className="font-primary font-semibold">
                  Do you offer freelancers?
                </span>
                <FaPlus />
              </div>

              <div className="flex justify-between items-center py-2 px-2 border-b border-black">
                <span className="font-primary font-semibold">
                  What’s the guarantee that I will be satisfied with the hired
                  talent?
                </span>
                <FaPlus />
              </div>

              <div>
                <div className={`flex justify-between items-center py-2 px-2 border-b transition-all duration-300 ${ isOpen ? 'border-b-black/0' : 'border-b-black/100' }`}>
                  <span className="font-primary font-semibold">
                    Can I hire multiple talents at once?
                  </span>
                  <span className="cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <FaPlus />
                  </span>
                </div>

                <div className={`transition-all duration-300 ${ isOpen ? 'max-h-96': 'max-h-0'} overflow-hidden my-1 `}>
                  <p className="text-sm">
                    If unhappy with a project, communicate with the freelancer,
                    allow for revisions, and refer to the agreement. Escalate to
                    platform support if needed, considering mediation. Review
                    policies, seek collaborative solutions for resolution.
                  </p>
                </div>
              </div>

              <div>
                <div className={`flex justify-between items-center py-2 px-2 border-b transition-all duration-300 ${ isOpen ? 'border-b-black/0' : 'border-b-black/100' }`}>
                  <span className="font-primary font-semibold">
                  Why should I not go to an agency directly?
                  </span>
                  <span className="cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <FaPlus />
                  </span>
                </div>

                <div className={`transition-all duration-300 ${ isOpen ? 'max-h-96': 'max-h-0'} overflow-hidden my-1 `}>
                  <p className="text-sm">
                    If unhappy with a project, communicate with the freelancer,
                    allow for revisions, and refer to the agreement. Escalate to
                    platform support if needed, considering mediation. Review
                    policies, seek collaborative solutions for resolution.
                  </p>
                </div>
              </div>

              
              <div>
                <div className={`flex justify-between items-center py-2 px-2 border-b transition-all duration-300 ${ isOpen ? 'border-b-black/0' : 'border-b-black/100' }`}>
                  <span className="font-primary font-semibold">
                  Who can help me pick a right skillset and duration for me?
                  </span>
                  <span className="cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <FaPlus />
                  </span>
                </div>

                <div className={`transition-all duration-300 ${ isOpen ? 'max-h-96': 'max-h-0'} overflow-hidden my-1 `}>
                  <p className="text-sm">
                    If unhappy with a project, communicate with the freelancer,
                    allow for revisions, and refer to the agreement. Escalate to
                    platform support if needed, considering mediation. Review
                    policies, seek collaborative solutions for resolution.
                  </p>
                </div>
              </div>


              


            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Hero;
