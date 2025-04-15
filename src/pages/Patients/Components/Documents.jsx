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

function Documents({ onOpen }) {
  return (
    <div className="col-span-1 bg-white rounded-lg  p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium text-lg text-basic">Documents</h3>
        <button
          className=" cursor-pointer text-primary font-primary font-medium text-sm flex items-center gap-1.5"
          onClick={onOpen}
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
            <span className="font-primary text-sm text-basic">X-Ray.pdf</span>
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
        <button className="text-sm text-[#999a9d] font-primary">See All</button>
      </div>
    </div>
  );
}

export default Documents;
