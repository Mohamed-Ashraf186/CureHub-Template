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

import PatientProfile from "./Components/PatientProfile";
import Documents from "./Components/Documents";
import AddAppointmentList from "./Components/AddApointmentsList";
import Prescription from "./Components/Prescription";
import FormModal from "./Components/FormModal";
import FileModal from "./Components/FileModal";
import BreadCrumb from "./Components/BreadCrumb";

function Patients() {
  const [showModal, setShowModal] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);

  return (
    <div>
      <div className="flex justify-between mb-6">
        <BreadCrumb />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <PatientProfile />
          <Documents onOpen={() => setShowFilesModal(true)} />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <AddAppointmentList />
          <Prescription onOpen={() => setShowModal(true)} />
        </div>
      </div>

      {showModal && <FormModal onClose={() => setShowModal(false)} />}

      {showFilesModal && <FileModal onClose={() => setShowFilesModal(false)} />}
    </div>
  );
}

export default Patients;
