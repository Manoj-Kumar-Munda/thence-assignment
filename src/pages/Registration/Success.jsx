import React, { useEffect, useState } from "react";
import Tick from "../../assets/Tick.png";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
  }, [countdown]);
  return (
    <section className="relative flex justify-center items-center">
      <div className="max-w-screen-sm w-full flex flex-col gap-y-4 text-center">
        <div className="mx-auto">
          <img src={Tick} className="w-12 h-12" />
        </div>

        <Heading className="text-heading-green">Successfully Submitted</Heading>

        <h1 className="font-primary text-5xl font-semibold">Congratulations</h1>

        <p className="font-primary text-[#727272]">
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
      </div>

      <section className="absolute bottom-6">
        <p className="font-primary">
          Redirecting you to Homepage in {countdown} seconds
        </p>
      </section>
    </section>
  );
};

export default Success;
