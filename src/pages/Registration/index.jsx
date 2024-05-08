import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { validateEmail } from "../../utils/emailValidation";
import ErrorText from "../../components/ErrorText";
import Success from "./Success";

const RegistrationPage = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: null, email: null });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChangeName = (e) => {
    setUser((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const onChangeEmail = (e) => {
    setUser((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const isValid = validateEmail(user.email);
    if (!isValid) {
      setError((prev) => {
        return { ...prev, email: "Enter a valid email address" };
      });
      setIsBtnDisabled(true);
      return;
    } else {
      setError((prev) => {
        return { ...prev, email: null };
      });
    }

    setIsSubmitted(true);
  };

  useEffect(() => {
    console.log(user);
    if (!user.name || !user.email) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [user]);

  if (isSubmitted) {
    return <Success />;
  }

  return (
    <div className="py-10 flex justify-center">
      <div className="max-w-screen-sm w-full space-y-10">
        <div className="text-center px-4 space-y-2">
          <Heading className="text-heading-green">Registration Form</Heading>

          <h2 className="font-primary text-5xl font-semibold">
            Start your success Journey here!
          </h2>
        </div>

        <form
          className="max-w-[400px] mx-auto space-y-8"
          onSubmit={onSubmitHandler}
        >
          <div className="space-y-4">
            <div>
              <input
                onChange={onChangeName}
                className="w-full outline-none border transition-all py-3 rounded-3xl pl-4 bg-[#EFEFEF] focus:bg-[#F5F8FF] focus:border focus:border-[#537FF1] "
                placeholder="Enter your name"
              />
            </div>

            <div>
              <input
                onChange={onChangeEmail}
                className="w-full outline-none border transition-all py-3 rounded-3xl pl-4 bg-[#EFEFEF] focus:bg-[#F5F8FF] focus:border focus:border-[#537FF1]"
                placeholder="Enter your email"
              />

              {error?.email && (
                <ErrorText>{error.email}</ErrorText>
                // <div className=" mt-2 flex items-center gap-2">
                //     <img src={Inavlid} />

                //   <span className="text-[#FF0808] font-primary text-sm font-medium">
                //     {error.email}
                //   </span>
                // </div>
              )}
            </div>
          </div>

          <Button className="w-full" disabled={isBtnDisabled}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
