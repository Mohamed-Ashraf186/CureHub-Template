import { Button } from "../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

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

function FileModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-overlay-2 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-2xl p-6 relative w-[425px] h-[382px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex-col gap-1">
            <h2 className="text-basic font-medium font-primary">Upload File</h2>
            <p className="text-sm text-[#999a9d] font-primary">
              Attach the file below
            </p>
          </div>
          <button
            onClick={onClose}
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
  );
}

export default FileModal;
