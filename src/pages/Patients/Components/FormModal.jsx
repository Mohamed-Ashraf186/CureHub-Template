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

import React from "react";

function FormModal({ onClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-overlay-2 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-center">
          <div className="flex-col">
            <div className="flex flex-col items-center mb-4">
              <div className="text-[#00a8b5]">
                <img src="/curehub-logo.svg" alt="curehub-logo" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="text-primary text-5xl font-bold">Cure</span>
                <span className="text-black text-5xl font-bold">Hub</span>
              </h2>
            </div>
            <h3 className="text-[32px] font-semibold text-center mb-10 ">
              Medical Prescription Form
            </h3>
          </div>
          <button
            onClick={onClose}
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
            <label className="block text-xl font-semibold mb-3.5">Date</label>
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
            <label className="block text-xl font-semibold mb-3.5">Age</label>
            <Input className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]" />
          </div>
          <div>
            <label className="block text-xl font-semibold mb-3.5">Gender</label>
            <Input className="h-[47px] font-primary border-[#00a8b5] focus:ring-[#00a8b5]" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-xl font-semibold mb-3.5">Symptoms</label>
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
            <Button
              onClick={handleSubmit}
              className="bg-[#00a8b5] font-primary h-11 hover:bg-[#00a8b5]/90 w-36"
            >
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
  );
}

export default FormModal;
