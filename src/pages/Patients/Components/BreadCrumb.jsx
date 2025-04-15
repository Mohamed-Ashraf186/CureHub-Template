import { Button } from "../../../components/ui/button";
import { ChevronRight, Edit, Printer } from "lucide-react";

function BreadCrumb() {
  return (
    <>
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
    </>
  );
}

export default BreadCrumb;
