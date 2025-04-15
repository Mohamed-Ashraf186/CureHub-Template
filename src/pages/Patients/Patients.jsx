import { Button } from "../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { Input } from "../../components/ui/input";
import { useState } from "react";

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

import PatientProfile from "./PatientProfile";

function Patients() {
  const [showModal, setShowModal] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <div className="breadcrumb flex items-center gap-1">
          <p className="font-medium font-primary text-primary">Patients List</p>
          <ChevronRight className="h-3 w-3 text-primary" />
          <p className="font-primary text-[#999a9d]">Sarah Lawsson</p>
        </div>
        <div className="btn-row flex gap-[9px]">
          <Button className="bg-white h-8.5 w-8.5 hover:bg-white border border-[#00a8b5] rounded-sm p-1 cursor-pointer">
            <Printer className="text-primary h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            className=" h-8.5 bg-primary hover:text-white text-white flex items-center gap-[9.5px] cursor-pointer font-primary"
          >
            <Edit className="h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>

      {/* Patient Profile */}
      {/* Patient Profile and Documents Row */}
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-3 gap-6">
          {/* Patient Profile */}
          <div className="col-span-2 rounded-lg  ">
            <div className="flex gap-0.75 h-full">
              <div className="rounded-left w-1/3 flex flex-col items-center p-6 bg-white">
                <div className="w-22 h-22 rounded-full overflow-hidden mb-[9px]">
                  <img
                    src="/sarah-pic.svg"
                    alt="Sarah Lawsson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-lg text-basic font-medium font-primary mb-1">
                  Sarah Lawsson
                </h2>
                <p className="text-xs font-primary text-[#999a9d]">
                  sarahlawsson123@gmail.com
                </p>

                <div className="flex w-full mt-6">
                  <div className="flex-1 text-center border-r border-[#999a9d]">
                    <div className="text-[#00a8b5] font-primary font-semibold text-lg">
                      12
                    </div>
                    <div className="text-xs text-[#999a9d] font-primary">
                      Post
                    </div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-[#00a8b5] font-semibold text-lg font-primary">
                      1
                    </div>
                    <div className="text-xs text-[#999a9d] font-primary">
                      Upcoming
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 bg-[#00a8b5] hover:bg-[#00a8b5]/90 text-white py-2 px-3 font-primary rounded-md">
                  Send Message
                </button>
              </div>

              <div className="p-6 rounded-right bg-white grow grid grid-cols-3 gap-y-15 gap-x-6">
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Gender
                  </div>
                  <div className="font-primary font-medium">Female</div>
                </div>
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Birthday
                  </div>
                  <div className="font-primary font-medium">23.7.1997</div>
                </div>
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Phone Number
                  </div>
                  <div className="font-primary font-medium">(555) 123-4567</div>
                </div>
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Insurance
                  </div>
                  <div className="font-primary font-medium">Med Right</div>
                </div>
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Register Date
                  </div>
                  <div className="font-primary font-medium">4 Nov. 2020</div>
                </div>
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Marital Status
                  </div>
                  <div className="font-primary font-medium">Single</div>
                </div>
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Address
                  </div>
                  <div className="font-primary font-medium">
                    12 Loran, Alex.
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#999a9d] mb-1 font-primary">
                    Postal Code
                  </div>
                  <div className="font-primary font-medium">5310002</div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="col-span-1 bg-white rounded-lg  p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-medium text-lg text-basic">Documents</h3>
              <button
                className=" cursor-pointer text-primary font-primary font-medium text-sm flex items-center gap-1.5"
                onClick={() => setShowFilesModal(true)}
              >
                <FilePlus className="h-[15px] w-3.5" />
                Add Files
              </button>
            </div>

            <div className="flex gap-4 flex-col max-h-48 overflow-auto custom-scrollbar">
              <div className="flex items-center justify-between pb-4 border-b border-[#ededed]">
                <div className="flex items-center gap-4 ">
                  <FileText className="w-3.5 h-4.5" />
                  <span className="font-primary text-sm text-basic">
                    H-Pylori Analysis.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15V3"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="16"
                      height="16"
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

              <div className="flex items-center justify-between pb-4 border-b border-[#ededed]">
                <div className="flex items-center gap-4 ">
                  <FileText className="w-3.5 h-4.5 " />
                  <span className="font-primary text-sm text-basic">
                    X-Ray.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15V3"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="16"
                      height="16"
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

              <div className="flex items-center justify-between pb-4 border-b border-[#ededed]">
                <div className="flex items-center gap-4 ">
                  <FileText className="w-3.5 h-4.5 " />
                  <span className="font-primary text-sm text-basic">
                    Calprotectin Analysis.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15V3"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="16"
                      height="16"
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

              <div className="flex items-center justify-between pb-4 border-b border-[#ededed]">
                <div className="flex items-center gap-4 ">
                  <FileText className="w-3.5 h-4.5  " />
                  <span className="font-primary text-sm text-basic">
                    Ultra Sound-Heart.pdf
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 15V3"
                        stroke="#999a9d"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="16"
                      height="16"
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

            <div className="mt-4 text-center">
              <button className="text-sm text-[#999a9d] font-primary">
                See All
              </button>
            </div>
          </div>
        </div>

        {/* Appointments and Prescriptions Row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Appointments */}
          <div className="col-span-2 bg-white rounded-lg  p-6">
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
              <div className="absolute left-[11.8%] max-h-[331px]   top-[15%] bottom-0 w-0.5 bg-[#999a9d] 2xl:left-[8.8%]"></div>

              <div className="mb-6 relative">
                <div className="flex items-center">
                  <div className="mr-6 text-center">
                    <div className="text-lg font-semibold font-primary">23</div>
                    <div className="text-xs text-[#999a9d] font-primary">
                      MON
                    </div>
                  </div>
                  <div className="absolute left-[8.1%] top-[34%] w-3 h-8 bg-[#f7f7f7] flex justify-center items-center 2xl:left-[5.5%]">
                    <div className=" w-3 h-3 rounded-full bg-[#00a8b5]  z-10"></div>
                  </div>
                  <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4">
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
                  <div className="absolute left-[8.1%] top-[34%] w-3 h-8 bg-[#f7f7f7] flex justify-center items-center 2xl:left-[5.5%] ">
                    <div className=" w-3 h-3 rounded-full bg-[#00a8b5]  z-10"></div>
                  </div>
                  <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <div className="text-[13px]/5 text-[#999a9d] mb-1">
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
                    <div className="text-xs text-[#999a9d] font-primary">
                      THU
                    </div>
                  </div>
                  {/* <div className="absolute left-[9%] top-[46%] w-3 h-3 rounded-full bg-[#00a8b5] -ml-1.5 z-10"></div> */}
                  <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4">
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
                    <div className="text-lg font-semibold font-primary ">
                      23
                    </div>
                    <div className="text-xs text-[#999a9d] font-primary">
                      MON
                    </div>
                  </div>
                  <div className="absolute left-[8.1%] top-[34%] w-3 h-8 bg-[#f7f7f7] flex justify-center items-center 2xl:left-[5.5%] opacity-0">
                    <div className=" w-3 h-3 rounded-full bg-[#00a8b5]  z-10"></div>
                  </div>
                  <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4">
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
                    <div className="text-xs text-[#999a9d] font-primary">
                      THU
                    </div>
                  </div>
                  {/* <div className="absolute left-[9%] top-[46%] w-3 h-3 rounded-full bg-[#00a8b5] -ml-1.5 z-10"></div> */}
                  <div className="flex-1 ml-8 bg-white border border-[#e0e0e0] rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4">
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
          </div>

          {/* Prescriptions */}
          <div className="col-span-1 bg-white rounded-lg  p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className=" font-medium text-lg text-basic">Prescriptions</h3>
              <Button
                variant="ghost"
                className="font-primary text-[#00a8b5] hover:text-[#00a8b5]/90 p-0 gap-1 cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                <ClipboardList />
                Add Prescription
              </Button>
            </div>

            <div className="flex gap-4 flex-col max-h-[458px] custom-scrollbar">
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#e0e0e0] last:border-0 flex-col flex gap-1 cursor-pointer"
                  onClick={() => {
                    setSelectedPrescription(item);
                    setShowPrescriptionModal(true);
                  }}
                >
                  <div className="grid grid-cols-3 gap-2 text-sm cursor-pointer">
                    <div className="text-[13px]/5 text-[#999a9d] font-primary">
                      Date
                    </div>
                    <div className="text-[13px]/5 text-[#999a9d] font-primary">
                      Symptoms
                    </div>
                    <div className="text-[13px]/5 text-[#999a9d] font-primary">
                      Specialty
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm pb-4  ">
                    <div className="font-medium text-[15px]/6 text-basic font-primary">
                      26.12.2020
                    </div>
                    <div className="font-medium text-[15px]/6 text-basic font-primary">
                      Dyspepsia
                    </div>
                    <div className="font-medium text-[15px]/6 text-basic font-primary">
                      GIT
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {showPrescriptionModal && (
              <>
                <div
                  className="fixed inset-0 bg-overlay-2 flex items-center justify-center z-50"
                  onClick={() => setShowPrescriptionModal(false)}
                >
                  <div
                    className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-10 relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-start justify-center">
                      <div className="flex-col">
                        <div className="flex flex-col items-center mb-4">
                          <div className="text-[#00a8b5]">
                            <img
                              src="/public/curehub-logo.svg"
                              alt="curehub-logo"
                            />
                          </div>
                          <h2 className="text-3xl font-bold">
                            <span className="text-primary text-5xl font-bold">
                              Cure
                            </span>
                            <span className="text-black text-5xl font-bold">
                              Hub
                            </span>
                          </h2>
                        </div>

                        <h3 className="text-[32px] font-semibold text-center mb-10 ">
                          Medical Prescription Form
                        </h3>
                      </div>
                      <button
                        onClick={() => setShowPrescriptionModal(false)}
                        className=" text-primary p-[1px] border border-[#00a8b5] rounded-sm hover:text-black cursor-pointer"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-6">
                      <div>
                        <label className="block text-xl font-semibold mb-3.5">
                          Patients Name
                        </label>
                        <Input
                          className="h-[47px] font-primary text-sm border-[#00a8b5] focus:ring-[#00a8b5] "
                          placeholder="write patient name here..."
                          defaultValue="Mohamed Ahmed"
                        />
                      </div>
                      <div>
                        <label className="block text-xl font-semibold mb-3.5">
                          Date
                        </label>
                        <Input
                          className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]"
                          placeholder="DD/MM/Y"
                          defaultValue="26/12/2024"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-4">
                      <div>
                        <label className="block text-xl font-semibold mb-3.5">
                          Speciality
                        </label>
                        <Input
                          className=" h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]"
                          defaultValue="GIT"
                        />
                      </div>
                      <div>
                        <label className="block text-xl font-semibold mb-3.5">
                          Age
                        </label>
                        <Input
                          className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]"
                          defaultValue="32"
                        />
                      </div>
                      <div>
                        <label className="block text-xl font-semibold mb-3.5">
                          Gender
                        </label>
                        <Input
                          className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]"
                          defaultValue="Male"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-xl font-semibold mb-3.5">
                        Symptoms
                      </label>
                      <Input
                        className="font-primary h-[47px] border-[#00a8b5] focus:ring-[#00a8b5]"
                        placeholder="write patient Symptoms here..."
                        defaultValue="Dyspepsia"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-xl font-semibold mb-3.5">
                        Diagnosis
                      </label>
                      <Input
                        className="font-primary h-[47px] border-[#00a8b5] focus:ring-[#00a8b5]"
                        placeholder="write diagnosis here..."
                        defaultValue="H-Pylori"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-xl font-semibold mb-3.5">
                        RX
                      </label>
                      <textarea
                        className=" font-primary h-[220px] w-full border border-[#00a8b5] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#00a8b5]"
                        rows={5}
                        placeholder="Prescription here...."
                        defaultValue={`Tavoniza 20mg                once daily
Curam 1000mg (1g)            x3 daily
                        `}
                      ></textarea>
                    </div>

                    <div className="flex justify-between gap-4 mb-4 items-end">
                      <div className="flex ">
                        <Button className="bg-[#00a8b5] font-primary h-11 hover:bg-[#00a8b5]/90 w-36">
                          Save
                        </Button>
                      </div>
                      <div>
                        <label className="block text-xl font-semibold mb-2">
                          Doctor Signature
                        </label>
                        <Input
                          className="border-[#00a8b5] w-[245px] focus:ring-[#00a8b5] h-[47px] font-primary"
                          defaultValue="Dr John"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-overlay-2 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-center">
              <div className="flex-col">
                <div className="flex flex-col items-center mb-4">
                  <div className="text-[#00a8b5]">
                    <img src="/public/curehub-logo.svg" alt="curehub-logo" />
                  </div>
                  <h2 className="text-3xl font-bold">
                    <span className="text-primary text-5xl font-bold">
                      Cure
                    </span>
                    <span className="text-black text-5xl font-bold">Hub</span>
                  </h2>
                </div>
                <h3 className="text-[32px] font-semibold text-center mb-10 ">
                  Medical Prescription Form
                </h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-primary p-[1px] border border-[#00a8b5] rounded-sm hover:text-black cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block text-xl font-semibold mb-3.5">
                  Patients Name
                </label>
                <Input
                  className="h-[47px] font-primary text-sm border-[#00a8b5] focus:ring-[#00a8b5] "
                  placeholder="write patient name here..."
                />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-3.5">
                  Date
                </label>
                <Input
                  className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]"
                  placeholder="DD/MM/Y"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-4">
              <div>
                <label className="block text-xl font-semibold mb-3.5">
                  Speciality
                </label>
                <Input className=" h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]" />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-3.5">
                  Age
                </label>
                <Input className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]" />
              </div>
              <div>
                <label className="block text-xl font-semibold mb-3.5">
                  Gender
                </label>
                <Input className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xl font-semibold mb-3.5">
                Symptoms
              </label>
              <Input
                className="font-primary h-[47px] border-[#00a8b5] focus:ring-[#00a8b5]"
                placeholder="write patient Symptoms here..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-semibold mb-3.5">
                Diagnosis
              </label>
              <Input
                className="font-primary h-[47px] border-[#00a8b5] focus:ring-[#00a8b5]"
                placeholder="write diagnosis here..."
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl font-semibold mb-3.5">RX</label>
              <textarea
                className=" font-primary h-[220px] w-full border border-[#00a8b5] rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#00a8b5]"
                rows={5}
                placeholder="Prescription here...."
              ></textarea>
            </div>

            <div className="flex justify-between gap-4 mb-4 items-end">
              <div className="flex ">
                <Button className="bg-[#00a8b5] font-primary h-11 hover:bg-[#00a8b5]/90 w-36">
                  Save
                </Button>
              </div>
              <div>
                <label className="block text-xl font-semibold mb-2">
                  Doctor Signature
                </label>
                <Input className="border-[#00a8b5] w-[245px] focus:ring-[#00a8b5] h-[47px]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {showFilesModal && (
        <div
          className="fixed inset-0 bg-overlay-2 flex items-center justify-center z-50"
          onClick={() => setShowFilesModal(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-2xl p-6 relative w-[425px] h-[382px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex-col gap-1">
                <h2 className="text-basic font-medium font-primary">
                  Upload File
                </h2>
                <p className="text-sm text-[#999a9d] font-primary">
                  Attach the file below
                </p>
              </div>
              <button
                onClick={() => setShowFilesModal(false)}
                className=" text-primary p-[1px] border border-[#00a8b5] rounded-sm hover:text-black cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="border-2 border-dashed border-[#00a8b5] rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className=" rounded-lg  flex items-center justify-center text-[#00a8b5]">
                  <FilePlus className="w-14 h-14" />
                </div>
              </div>
              <p className="text-sm text-basic font-medium mb-1 font-primary">
                Drag file(s) here to upload
              </p>
              <p className="text-sm text-[#999a9d] mb-1 font-primary">
                Alternatively you can select the file by
              </p>
              <Button
                variant="link"
                className="text-[#00a8b5] font-medium text-sm p-0 h-auto font-primary"
              >
                Clicking here
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Patients;
