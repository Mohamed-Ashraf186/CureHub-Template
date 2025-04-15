import {
  ChevronRight,
  Edit,
  Printer,
  User,
  Calendar,
  FileText,
  Plus,
  Bell,
  ChevronDown,
  Download,
  Mail,
  MoreVertical,
  Search,
  FilePlus,
  ClipboardList,
  Settings,
  Users,
  X,
  Pencil,
  Check,
  Sun,
  Moon,
} from "lucide-react";
import styled from "styled-components";

const Container = styled.div`
  .timeline {
    @media (min-width: 1700px) {
      left: 8%;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }

  .checkpoint-ball {
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

function AddAppointmentList() {
  return (
    <Container className="col-span-2 bg-white rounded-lg  p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex px-1.5 py-[6.5px] space-x-4 rounded-sm bg-[#f6f8fa] border-b border-[#e0e0e0] ">
          <button className="px-4 py-2 text-[#00a8b5] bg-white rounded-sm">
            Upcomming Appointments
          </button>
          <button className="px-4 py-2 text-[#999a9d]">
            Post Appointments
          </button>
        </div>
        <button className="text-primary font-primary font-medium text-sm flex items-center gap-1.5">
          <FilePlus className="h-[15px] w-3.5" />
          Add Appointment
        </button>
      </div>

      <div className="relative bg-[#f7f7f7] max-h-[460px] custom-scrollbar  p-6">
        <div className="absolute left-[8.5%] max-h-[331px]   top-[15%] bottom-0 w-0.5 bg-[#999a9d] xl:left-[11.8%] 2xl:left-[8.8%] timeline"></div>

        <div className="mb-6 relative">
          <div className="flex items-center">
            <div className="mr-6 text-center">
              <div className="text-lg font-semibold font-primary">23</div>
              <div className="text-xs text-[#999a9d] font-primary">MON</div>
            </div>
            <div className="absolute left-[5.5%] top-[34%] w-3 h-8 bg-[#f7f7f7] flex justify-center items-center xl:left-[8.1%] 2xl:left-[5.5%]">
              <div className=" w-3 h-3 rounded-full bg-[#00a8b5]  z-10 checkpoint-ball"></div>
            </div>
            <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
              <div className="flex justify-between flex-wrap gap-4">
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Date
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    26.12.2020
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Type
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    Examine
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Specialist
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    John Albert
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <span className="px-3.5 py-1.5 bg-custom-green text-[#29c36a] rounded-[33px] text-xs font-primary">
                    Confirmed
                  </span>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="1" fill="#999a9d" />
                      <circle cx="12" cy="6" r="1" fill="#999a9d" />
                      <circle cx="12" cy="18" r="1" fill="#999a9d" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <div className="flex items-center">
            <div className="mr-6 text-center">
              <div className="text-lg font-semibold">19</div>
              <div className="text-xs text-[#999a9d]">THU</div>
            </div>
            <div className="absolute left-[5.5%] top-[34%] w-3 h-8 bg-[#f7f7f7] flex justify-center items-center xl:left-[8.1%] 2xl:left-[5.5%] ">
              <div className=" w-3 h-3 rounded-full bg-[#00a8b5]  z-10 checkpoint-ball"></div>
            </div>
            <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
              <div className="flex justify-between flex-wrap gap-4">
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1">Date</div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    26.12.2020
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Type
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    Follow-Up
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Specialist
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    John Albert
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <span className="px-3.5 py-1.5 bg-[#ededed] text-[#999a9d] rounded-[33px] text-xs font-primary">
                    Canceled
                  </span>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="1" fill="#999a9d" />
                      <circle cx="12" cy="6" r="1" fill="#999a9d" />
                      <circle cx="12" cy="18" r="1" fill="#999a9d" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <div className="flex items-center">
            <div className="mr-6 text-center opacity-0">
              <div className="text-lg font-semibold font-primary">19</div>
              <div className="text-xs text-[#999a9d] font-primary">THU</div>
            </div>
            <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
              <div className="flex justify-between flex-wrap gap-4">
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Date
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    26.12.2020
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Type
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    Follow-Up
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Specialist
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    John Albert
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <div className="flex gap-[29px]  ">
                    <div className="w-8 h-8 rounded-full bg-[#d4f3e1] flex items-center justify-center text-[#29c36a]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#ffebeb] flex items-center justify-center text-[#ff0000]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="1" fill="#999a9d" />
                      <circle cx="12" cy="6" r="1" fill="#999a9d" />
                      <circle cx="12" cy="18" r="1" fill="#999a9d" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <div className="flex items-center">
            <div className="mr-6 text-center opacity-0">
              <div className="text-lg font-semibold font-primary ">23</div>
              <div className="text-xs text-[#999a9d] font-primary">MON</div>
            </div>
            <div className="absolute left-[8.1%] top-[34%] w-3 h-8 bg-[#f7f7f7] flex justify-center items-center 2xl:left-[5.5%] opacity-0">
              <div className=" w-3 h-3 rounded-full bg-[#00a8b5]  z-10 checkpoint-ball"></div>
            </div>
            <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
              <div className="flex justify-between flex-wrap gap-4">
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Date
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    26.12.2020
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Type
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    Examine
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Specialist
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    John Albert
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <span className="px-3.5 py-1.5 bg-custom-green text-[#29c36a] rounded-[33px] text-xs font-primary">
                    Confirmed
                  </span>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="1" fill="#999a9d" />
                      <circle cx="12" cy="6" r="1" fill="#999a9d" />
                      <circle cx="12" cy="18" r="1" fill="#999a9d" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <div className="flex items-center">
            <div className="mr-6 text-center opacity-0">
              <div className="text-lg font-semibold font-primary">19</div>
              <div className="text-xs text-[#999a9d] font-primary">THU</div>
            </div>
            <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
              <div className="flex justify-between flex-wrap gap-4">
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Date
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    26.12.2020
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Type
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    Follow-Up
                  </div>
                </div>
                <div>
                  <div className="text-[13px]/5 text-[#999a9d] mb-1 font-primary">
                    Specialist
                  </div>
                  <div className="font-medium text-[15px]/6 text-basic font-primary">
                    John Albert
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <div className="flex gap-[29px]  ">
                    <div className="w-8 h-8 rounded-full bg-[#d4f3e1] flex items-center justify-center text-[#29c36a]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12L10 17L20 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#ffebeb] flex items-center justify-center text-[#ff0000]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="1" fill="#999a9d" />
                      <circle cx="12" cy="6" r="1" fill="#999a9d" />
                      <circle cx="12" cy="18" r="1" fill="#999a9d" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AddAppointmentList;
