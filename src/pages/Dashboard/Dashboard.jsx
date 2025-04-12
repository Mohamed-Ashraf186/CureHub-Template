import styled from "styled-components";
import StatsSummaryList from "./StatsSummaryList";
import AppointmentChart from "./AppointmentChart";
import DoctorSchedule from "./DoctorSchedule";
import DepartmentPieChart from "./DepartmentPieChart";

const DashboardEl = styled.div`
  padding: 2em;
`;

function Dashboard() {
  return (
    <DashboardEl>
      <StatsSummaryList />

      <div className="flex gap-6 justify-between mt-6">
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
