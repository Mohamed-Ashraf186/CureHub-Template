import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <button className="text-gray-400 hover:text-gray-600">
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button className="w-8 h-8 rounded-md bg-primary text-white text-sm font-medium">
        1
      </button>
      <button className="w-8 h-8 rounded-md text-sm text-black hover:bg-gray-100">
        2
      </button>
      <button className="w-8 h-8 rounded-md text-sm text-black hover:bg-gray-100">
        3
      </button>
      <button className="w-8 h-8 rounded-md text-sm text-black hover:bg-gray-100">
        4
      </button>
      <button className="w-8 h-8 rounded-md text-sm text-black hover:bg-gray-100">
        5
      </button>
      <button className="w-8 h-8 rounded-md text-sm text-black hover:bg-gray-100">
        6
      </button>

      <button className="text-black hover:text-gray-600">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
