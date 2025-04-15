import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
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

function Prescription({ onOpen }) {
  const [showPrescriptionModal, setShowPrescriptionModal] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  return (
    <div className="col-span-1 bg-white rounded-lg  p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className=" font-medium text-lg text-basic">Prescriptions</h3>
        <Button
          variant="ghost"
          className="font-primary text-[#00a8b5] hover:text-[#00a8b5]/90 p-0 gap-1 cursor-pointer"
          onClick={onOpen}
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
                <label className="block text-xl font-semibold mb-3.5">RX</label>
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
  );
}

export default Prescription;
