import { createContext, useContext, useState } from "react";

const StudentContext = createContext(null);

const useStudentContext = () => {
  const data = useContext(StudentContext);
  return data;
};

const StudentContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [file, setFile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [penaltyStatus, setPenaltyStatus] = useState(true);

  const [allData, setAllData] = useState([]);

  const addData = (data) => {
    console.log(data);

    setAllData([...allData, data]);

    // set allData to an array in local storage
    localStorage.setItem("allData", JSON.stringify([...allData, data]));
  };

  return (
    <StudentContext.Provider
      value={{
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
        penaltyStatus,
        setPenaltyStatus,
        addData,
        allData,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export { useStudentContext, StudentContextProvider };
