import styled from "styled-components";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import AppointmentsRequestTable from "./components/AppointmentsRequestTable";
import AppointmentsListTable from "./components/AppointmentsListTable";
import DoctorScheduleCalendar from "./components/DoctorScheduleCalendar";
import { useLocation } from "react-router-dom";

const SortButton = styled.button`
  border: 1px solid #00a8b5;
  border-radius: 4px;
  padding: 5px 14px;
`;

const AddButton = styled.button`
  border-radius: 4px;
  padding: 5px 14px;
  background: #00a8b5;
`;

function Appointments() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get("tab") || "appointments-request";

  return (
    <div className="w-full">
      <Tabs defaultValue={defaultTab} className="w-full flex flex-col gap-2">
        <div className="flex bg-white p-6 items-center justify-between rounded-[8px] gap-4 flex-wrap">
          <TabsList className="flex gap-[42px] border-b-[#d5d5d5] border-b">
            <TabsTrigger value="appointments-request">
              Appointments Request
            </TabsTrigger>
            <TabsTrigger value="appointments-list">
              Appointments List
            </TabsTrigger>
            <TabsTrigger value="doctor-list">Doctor List</TabsTrigger>
            <TabsTrigger value="doctor-schedule">Doctor Schedule</TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <SortButton className="flex gap-2 items-center font-primary">
              Sort by
              <div className="sort-wrapper">
                <img src="/sort.svg" alt="add-square" />
              </div>
            </SortButton>
            <AddButton className="flex gap-2 items-center text-white font-primary">
              <div className="plus-wrapper">
                <img src="/add-square-svgrepo-com 1.svg" alt="add-square" />
              </div>
              Add New
            </AddButton>
          </div>
        </div>
        <TabsContent
          className="bg-white rounded-[8px]  p-6"
          value="appointments-request"
        >
          <AppointmentsRequestTable />
        </TabsContent>
        <TabsContent
          className="bg-white rounded-[8px]  p-6"
          value="appointments-list"
        >
          <AppointmentsListTable />
        </TabsContent>
        <TabsContent className=" rounded-[8px] mt-2" value="doctor-schedule">
          <DoctorScheduleCalendar />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Appointments;
