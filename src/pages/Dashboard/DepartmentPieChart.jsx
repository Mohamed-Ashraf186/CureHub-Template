import styled from "styled-components";
import { DonutPieChart } from "../../components/ui/DonutPieChart";

const Img = styled.img`
  top: 39%;
  width: 85px;
  right: 35%;
  height: 85px;
`;

function DepartmentPieChart() {
  return (
    <div className="grow px-6 pt-6 pb-3 bg-white rounded-lg">
      <div className="title flex items-center justify-between mb-[32px]">
        <h3 className="font-medium text-basic text-lg">
          Top Patient Department
        </h3>
        <p className="font-medium text-[#999a9d]">See More</p>
      </div>

      <div>
        <DonutPieChart />
      </div>
    </div>
  );
}

export default DepartmentPieChart;
