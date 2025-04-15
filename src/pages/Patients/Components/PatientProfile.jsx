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

function PatientProfile() {
  return (
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
              <div className="text-xs text-[#999a9d] font-primary">Post</div>
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
            <div className="font-primary font-medium">12 Loran, Alex.</div>
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
  );
}

export default PatientProfile;
