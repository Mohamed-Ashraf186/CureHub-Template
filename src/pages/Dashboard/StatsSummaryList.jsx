import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SummaryList = styled.div`
  display: flex;
  gap: 1.5em;
`;

const AppointmentSummaryCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 8px;
  background: linear-gradient(
      104deg,
      rgba(255, 255, 255, 0.2) 1.58%,
      rgba(255, 250, 250, 0.04) 115.04%
    ),
    #00a8b5;
  flex-basis: calc((100% - 3 * 1.5em) / 4);
  padding: 1em 1.5em;
  cursor: pointer;
  .bg-icon {
    position: absolute;
    right: 0;
    top: 0;
    width: 93px;
    height: 93px;
  }
`;

const SummaryCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 8px;
  background: #fff;
  flex-basis: calc((100% - 3 * 1.5em) / 4);
  padding: 1em 1.5em;
`;

function StatsSummaryList() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/appointments?tab=appointments-list");
  };

  return (
    <SummaryList>
      <AppointmentSummaryCard onClick={handleCardClick}>
        <div className="bg-icon">
          <img src="/src/assets/medical-cardio.svg" alt="Cardio icon" />
        </div>
        <div className="card-icon-wrapper flex justify-center items-center w-[2em] h-[2em] rounded-full  bg-white">
          <img src="/src/assets/people-icon.svg" alt="people icon" />
        </div>
        <p className="text-white">Total Appointments</p>

        <div className="data-wrapper flex justify-between">
          <div className="value font-medium text-white font-primary">9,200</div>
          <div className="last-week-stats flex gap-1 items-center">
            <p className="text-white font-primary text-xs">Last week</p>
            <div className="text-[#0FDC67] text-xs flex items-center gap-0.5">
              <p>+ 32%</p>
              <div>
                <img
                  src="/src/assets/green-up-arrow.svg"
                  alt="up-green-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </AppointmentSummaryCard>

      <SummaryCard>
        <div className="card-icon-wrapper flex justify-center items-center w-[2em] h-[2em] rounded-full bg-primary ">
          <img src="/src/assets/new-user.svg" alt="people icon" />
        </div>
        <p className="text-primary">New Patients</p>

        <div className="data-wrapper flex justify-between">
          <div className="value font-medium  font-primary">1,200</div>
          <div className="last-week-stats flex gap-1 items-center">
            <p className=" font-primary text-xs">Last week</p>
            <div className="text-[#0FDC67] text-xs flex items-center gap-0.5 font-medium">
              <p>+ 20%</p>
              <div>
                <img
                  src="/src/assets/green-up-arrow.svg"
                  alt="up-green-arrow"
                />
              </div>
            </div>
          </div>
        </div>
      </SummaryCard>

      <SummaryCard>
        <div className="card-icon-wrapper flex justify-center items-center w-[2em] h-[2em] rounded-full bg-primary ">
          <img
            src="/src/assets/doctor-stethoscope.svg"
            alt="doctor-stethoscope"
          />
        </div>
        <p className="text-primary">Total Doctors</p>

        <div className="data-wrapper flex justify-between">
          <div className="value font-medium  font-primary">300</div>
          <div className="last-week-stats flex gap-1 items-center">
            <p className=" font-primary text-xs">Last week</p>
            <div className="text-[#D20013] text-xs flex items-center gap-0.5 font-medium">
              <p>+ 12%</p>
              <div>
                <img
                  src="/src/assets/arrow-down-red.svg"
                  alt="arrow-down-red"
                />
              </div>
            </div>
          </div>
        </div>
      </SummaryCard>
      <SummaryCard>
        <div className="card-icon-wrapper flex justify-center items-center w-[2em] h-[2em] rounded-full bg-primary ">
          <img src="/src/assets/wrong-user.svg" alt="wrong-user" />
        </div>
        <p className="text-primary">Canceled Appointments</p>

        <div className="data-wrapper flex justify-between">
          <div className="value font-medium  font-primary">12</div>
          <div className="last-week-stats flex gap-1 items-center">
            <p className=" font-primary text-xs">Last week</p>
            <div className="text-[#D20013] text-xs flex items-center font-medium gap-0.5">
              <p>+ 12%</p>
              <div>
                <img
                  src="/src/assets/arrow-down-red.svg"
                  alt="arrow-down-red"
                />
              </div>
            </div>
          </div>
        </div>
      </SummaryCard>
    </SummaryList>
  );
}

export default StatsSummaryList;
