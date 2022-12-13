import { useStudentContext } from "./StudentContex";
import { CSVLink } from "react-csv";

const Submitted = () => {
  // const data = useStudentContext();

  // load all data from local storage
  const allData = JSON.parse(localStorage.getItem("allData"));

  // const { firstName, lastName, matricNumber, file, date, time } = allData;

  return (
    <div className="submitted w-full h-full flex flex-col py-14 px-9">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-4xl text-dark-purple mb-7">Submitted</h1>
        <button className="bg-purple text-white font-semibold text-sm px-6 py-3 rounded-[12px]">
          <CSVLink
            data={allData}
            filename="submitted.csv"
            headers={[
              { label: "First Name", key: "firstName" },
              { label: "Last Name", key: "lastName" },
              { label: "Matric Number", key: "matricNumber" },
              { label: "File", key: "file" },
              { label: "Date", key: "date" },
              { label: "Time", key: "time" },
              { label: "Submission Status", key: "submissionStatus" },
            ]}
          >
            Download CSV
          </CSVLink>
        </button>
      </div>
      <table className="w-full border-spacing-4 border-transparent rounded-[24px]">
        <thead className="w-full border-spacing-4 border-transparent rounded-[24px]">
          <tr>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              S/N
            </th>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              First Name
            </th>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              Last Name
            </th>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              Matric Number
            </th>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              File
            </th>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              Date
            </th>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              Time
            </th>
            <th className="py-3 px-6 text-left text-primary text-sm leading-[22px] font-semibold">
              Submission Status
            </th>
          </tr>
        </thead>
        <tbody className="gap-4.5 w-full">
          {allData?.map((data, i) => {
            return (
              <tr
                className="bg-white w-full border-spacing-4 border-transparent rounded-[24px]"
                key={data?.matricNumber}
              >
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <p className="font-normal text-sm text-dark-grey">{i + 1}</p>
                </td>
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <p className="font-normal text-sm text-dark-grey">
                    {data?.firstName}
                  </p>
                </td>
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <p className="font-normal text-sm text-dark-grey">
                    {data?.lastName}
                  </p>
                </td>
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <p className="font-normal text-sm text-dark-grey">
                    {data?.matricNumber}
                  </p>
                </td>
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <p className="font-normal text-sm text-dark-grey">
                    {data?.file}
                  </p>
                </td>
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <p className="font-normal text-sm text-dark-grey">
                    {data?.date}
                  </p>
                </td>
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <p className="font-normal text-sm text-dark-grey">
                    {data?.time}
                  </p>
                </td>
                <td className="bg-white   !mb-3 !mt-3 px-6 py-[18px]">
                  <div
                    className={`${
                      data?.penaltyStatus ? "bg-light-green" : "bg-light-red"
                    } rounded-[8px] w-[80px] h-[24px] flex items-center justify-center`}
                  >
                    <p
                      className={`${
                        data?.penaltyStatus
                          ? "text-dark-green"
                          : "text-dark-red"
                      } text-[12px] leading-[15px] font-semibold px-4 py-[4px]`}
                    >
                      {data?.penaltyStatus ? "Early" : "Late"}
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Submitted;
