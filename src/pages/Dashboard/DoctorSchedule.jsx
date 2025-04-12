import styled from "styled-components";
import { Calendar } from "../../components/ui/calendar";
import { useState } from "react";

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5em;
  width: 100%;
  max-width: 634px;
  background-color: white;
  border-radius: 8px;
  padding: 1.5em 1em 1.5em 1.5em;
  gap: 1.5em;
`;

function DoctorSchedule() {
  const [date, setDate] = useState(new Date());
  return (
    <ParentDiv>
      <div className="flex justify-between">
        <p className="text-lg font-medium">Doctor Schedule</p>
        <p className="text-[#999A9D] font-medium">See more</p>
      </div>

      <div className="flex gap-[38px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md"
        />

        <div className="activity-details flex flex-col grow w-[228px]">
          <h3 className="text-primary font-[Inter] font-medium text-center">
            Activity Details
          </h3>

          <div className="doctors-activity mt-6 flex flex-col gap-2 h-[182px] overflow-auto">
            <div className="doc-profile flex gap-2.5 items-center grow">
              <div className="pfp-wrapper">
                <img src="/src/assets/doctor-pfp.png" alt="doctor pfp" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-5 ">
                  <p className="font-[poppins] text-sm">Dr. Mart Edisson </p>
                  <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 rounded-[37px] bg-[#FFA246]"></div>
                    <p className="text-[#FFA246] font-[poppins] text-xs font-medium">
                      GP
                    </p>
                  </div>
                </div>
                <p className="text-[#999A9D] text-xs font-[poppins]">
                  11:00 - 1:00 PM
                </p>
              </div>
            </div>

            <div className="doc-profile flex gap-2.5 items-center grow">
              <div className="pfp-wrapper">
                <img src="/src/assets/doctor-pfp.png" alt="doctor pfp" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-5 ">
                  <p className="font-[poppins] text-sm">Dr. Mart Edisson </p>
                  <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 rounded-[37px] bg-[#FFA246]"></div>
                    <p className="text-[#FFA246] font-[poppins] text-xs font-medium">
                      Ortho
                    </p>
                  </div>
                </div>
                <p className="text-[#999A9D] text-xs font-[poppins]">
                  5:00 - 7:00 PM
                </p>
              </div>
            </div>

            <div className="doc-profile flex gap-2.5 items-center grow">
              <div className="pfp-wrapper">
                <img src="/src/assets/doctor-pfp.png" alt="doctor pfp" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-5 ">
                  <p className="font-[poppins] text-sm">Dr. Mart Edisson </p>
                  <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 rounded-[37px] bg-[#FFA246]"></div>
                    <p className="text-[#FFA246] font-[poppins] text-xs font-medium">
                      ENT
                    </p>
                  </div>
                </div>
                <p className="text-[#999A9D] text-xs font-[poppins]">
                  9:00 - 11:00 AM
                </p>
              </div>
            </div>

            <div className="doc-profile flex gap-2.5 items-center grow">
              <div className="pfp-wrapper">
                <img src="/src/assets/doctor-pfp.png" alt="doctor pfp" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-5 ">
                  <p className="font-[poppins] text-sm">Dr. Mart Edisson </p>
                  <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 rounded-[37px] bg-[#FFA246]"></div>
                    <p className="text-[#FFA246] font-[poppins] text-xs font-medium">
                      GP
                    </p>
                  </div>
                </div>
                <p className="text-[#999A9D] text-xs font-[poppins]">
                  11:00 - 1:00 PM
                </p>
              </div>
            </div>

            <div className="doc-profile flex gap-2.5 items-center grow">
              <div className="pfp-wrapper">
                <img src="/src/assets/doctor-pfp.png" alt="doctor pfp" />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex gap-5 ">
                  <p className="font-[poppins] text-sm">Dr. Mart Edisson </p>
                  <div className="flex gap-1 items-center">
                    <div className="w-1 h-1 rounded-[37px] bg-[#FFA246]"></div>
                    <p className="text-[#FFA246] font-[poppins] text-xs font-medium">
                      GP
                    </p>
                  </div>
                </div>
                <p className="text-[#999A9D] text-xs font-[poppins]">
                  11:00 - 1:00 PM
                </p>
              </div>
            </div>
          </div>

          <button className="flex items-center mx-auto mt-10 border px-3 py-1.5 gap-3.5 font-[poppins] border-[#00A8B5] rounded-sm text-basic text-sm">
            <div className="add-square">
              <img src="/src/assets/add-square.svg" alt="add-square" />
            </div>
            Add New
          </button>
        </div>
      </div>
    </ParentDiv>
  );
}

export default DoctorSchedule;
