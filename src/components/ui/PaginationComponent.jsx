import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
  setCurrentPage,
}) {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <button
        className="text-gray-400 hover:text-gray-600"
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`w-8 h-8 rounded-md text-sm ${
            currentPage === number
              ? "bg-primary text-white"
              : "text-black hover:bg-gray-100"
          }`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="text-black hover:text-gray-600"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
