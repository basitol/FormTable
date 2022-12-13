import Input from "./Input";
import { useState, useContext, useEffect } from "react";
import { useCountdown } from "./useCountDown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStudentContext } from "./StudentContex";
import { useNavigate } from "react-router-dom";

const SubmitFormComponent = () => {
  const navigate = useNavigate();
  const data = useStudentContext();

  // set target date to 15th of December 2022
  const targetDate = new Date("December 11, 2022 00:00:00").getTime();

  const {
    firstName,
    lastName,
    matricNumber,
    file,
    date,
    time,
    setFirstName,
    setLastName,
    setMatricNumber,
    setFile,
    setDate,
    setTime,
    addData,
    penaltyStatus,
    setPenaltyStatus,
  } = data;

  const CountdownTimer = ({}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
      return (
        <>
          <p>
            The deadline has passed. You have to state your reason for late
            submission
          </p>
          <textarea
            name="reason"
            id="reason"
            cols="30"
            rows="10"
            className="border border-gray-300 rounded-md h-10 px-2"
          ></textarea>
        </>
      );
    } else {
      return (
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter text-dark-grey">
        you have {days} day{days > 1 ? "s" : ""}, {hours} hours, {minutes}{" "}
        minutes and {seconds}
      </div>
    );
  };

  // set initial state for the count down

  const onChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "Name":
        setFirstName(value);
        break;
      case "Last Name":
        setLastName(value);
        break;
      case "Matric Number":
        setMatricNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    // set the file name to the file state

    setFile(file.name);
    setDate(new Date().toLocaleDateString());
    setTime(new Date().toLocaleTimeString());

    if (targetDate - new Date().getTime() <= 0) {
      setPenaltyStatus(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(date, time);

    // validation for the form
    if (!firstName || !lastName || !matricNumber || !file) {
      toast.error("Please fill in all fields");
      return;
    } else if (matricNumber.length !== 9) {
      toast.error("Please enter a valid matric number");
      return;
    } else if (file.split(".")[1] !== "pdf") {
      toast.error("Please upload a pdf file");
      return;
    } else {
      // console.log(data);

      toast.success("Assignment submitted successfully");
      localStorage.setItem("data", JSON.stringify(data));

      // set the penalty status to true if the deadline has passed

      setTimeout(() => {
        addData(data);
        navigate("/submitted");
      }, 1000);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container h-full flex justify-center items-center">
        <div className="form bg-white h-auto w-[496px] px-8 py-8">
          <h1 className="font-bold text-4xl text-dark-purple">
            Submit Assignment
          </h1>
          <form className="flex flex-col mt-8 gap-6" onSubmit={handleSubmit}>
            <Input label="Name" value={firstName} onChange={onChange} />
            <Input label="Last Name" value={lastName} onChange={onChange} />
            <Input
              label="Matric Number"
              value={matricNumber}
              onChange={onChange}
            />
            <Input
              type="file"
              label="Upload Assignment"
              onChange={handleFile}
            />

            <CountdownTimer targetDate={new Date("Dec 15 2022 23:59:59")} />
            <button
              type="submit"
              className="bg-purple text-white rounded-md mt-2 py-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SubmitFormComponent;
