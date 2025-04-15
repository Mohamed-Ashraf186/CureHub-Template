// import styled from "styled-components";

// const Chart = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 1.5em;
//   width: 100%;
//   max-width: 634px;
//   background-color: white;
//   border-radius: 8px;
//   padding: 1.5em 1em 1.5em 1.5em;
// `;

// const H2 = styled.h2`
//   font-size: 1.125rem;
//   font-weight: 500;
// `;

// const DropdownButton = styled.button`
//   padding: 0.25rem 0.75rem;
//   border: 1px solid var(--primary);
//   border-radius: 0.25rem;
//   font-family: poppins;
//   font-weight: 400;
//   font-size: 0.875rem;
//   border-width: 1px;
//   gap: 4px;

//   &:hover {
//     border-color: var(--primary);
//     background-color: rgba(0, 168, 181, 0.05);
//   }

//   &:focus {
//     outline: none;
//   }
// `;

// const ColorKey = styled.div`
//   background-color: rgba(0, 168, 181, 0.5);
// `;

// const ChartContainer = styled.div``;

// export default function AppointmentsByGender() {
//   const days = ["Sat.", "Sun.", "Mon.", "Tues.", "Wed.", "Thurs.", "Friday"];
//   const womenData = [800, 580, 720, 620, 900, 720, 950];
//   const menData = [600, 660, 610, 660, 720, 900, 1020];

//   return (
//     <Chart className=" border border-gray-200">
//       <div className="flex flex-row items-center justify-between pb-2 pt-6 px-6 border-b border-gray-100">
//         <div className="flex items-center space-x-1">
//           <H2 className="text-basic">Appointments By Gender</H2>
//         </div>

//         <div className="flex items-center gap-[25px]">
//           <div className="flex items-center gap-1">
//             <div className="h-4 w-4 rounded-sm bg-[#FFA246]"></div>
//             <span className="text-sm text-basic font-primary">Women 67%</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <ColorKey className="h-4 w-4 rounded-sm "></ColorKey>
//             <span className="text-sm  text-basic font-primary">Men 33%</span>
//           </div>
//         </div>
//         <div className="flex items-center space-x-6">
//           <DropdownButton className=" text-primary hover:bg-teal-50 flex items-center">
//             Weekly
//             <div className="arrow-wrapper">
//               <img src="/src/assets/arrow-teal.svg" alt="down-arrow-teal" />
//             </div>
//           </DropdownButton>
//         </div>
//       </div>

//       <ChartContainer className="px-6 pb-6 pt-4">
//         <div className="h-64 relative">
//           <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-gray-400 text-sm">
//             <span>1000</span>
//             <span>900</span>
//             <span>800</span>
//             <span>700</span>
//             <span>600</span>
//             <span>500</span>
//           </div>

//           <div className="ml-12 h-full flex items-end">
//             <div className="flex-1 flex justify-around items-end h-[90%]">
//               {days.map((day, index) => (
//                 <div key={day} className="flex flex-col items-center group">
//                   <div className="w-full flex justify-center space-x-2">
//                     <div
//                       className="w-8 bg-teal-300 rounded-t-sm"
//                       style={{
//                         height: `${((menData[index] - 500) / 500) * 100}%`,
//                         minHeight: "4px",
//                       }}
//                     ></div>

//                     <div
//                       className="w-8 bg-amber-400 rounded-t-sm"
//                       style={{
//                         height: `${((womenData[index] - 500) / 500) * 100}%`,
//                         minHeight: "4px",
//                       }}
//                     ></div>
//                   </div>

//                   <div className="mt-2 text-sm text-gray-600">{day}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </ChartContainer>
//     </Chart>
//   );
// }

// <ChartContainer>
// <YAxis>
//   <span>1000</span>
//   <span>900</span>
//   <span>800</span>
//   <span>700</span>
//   <span>600</span>
//   <span>500</span>
// </YAxis>
// </ChartContainer>
// const YAxis = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 7px;

//   span {
//     color: #999a9d;
//     font-family: poppins;

//     font-weight: 500;

//     letter-spacing: -0.96px;
//   }
// `;
