import styled from "styled-components";
import StatsSummaryList from "./components/StatsSummaryList";
import AppointmentChart from "./components/AppointmentChart";
import DoctorSchedule from "./components/DoctorSchedule";
import DepartmentPieChart from "./components/DepartmentPieChart";

const DashboardEl = styled.div`
  padding: 2em;
  .flex-container {
    @media (max-width: 1350px) {
      flex-direction: column;
    }
  }
`;

function Dashboard() {
  return (
    <DashboardEl>
      <StatsSummaryList />

      <div className="flex gap-6 justify-between mt-6 flex-container">
        <div className="flex flex-col basis-[57.4%]">
          <AppointmentChart />
          <DoctorSchedule />
        </div>
        <DepartmentPieChart />
      </div>
    </DashboardEl>
  );
}

export default Dashboard;
