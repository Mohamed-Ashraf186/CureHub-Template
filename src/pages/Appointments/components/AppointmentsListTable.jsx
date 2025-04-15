import React, { useState } from "react";
import Pagination from "../../../components/ui/PaginationComponent";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import uniqueNamesData from "../data/names.json";

const generateDate = (daysFromToday) => {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return date.toISOString().split("T")[0];
};

const uniqueNames = uniqueNamesData.names;

const appointmentsData = Array.from({ length: 60 }, (_, index) => ({
  patientName: uniqueNames[index % uniqueNames.length],
  gender: index % 2 === 0 ? "Female" : "Male",
  department: `Department ${(index % 3) + 1}`,
  doctor: `Doctor ${(index % 5) + 1}`,
  time: `${(index % 12) + 1}:00 PM`,
  date: generateDate(index),
  status: index % 2 === 0 ? "Confirmed" : "Cancelled",
}));

function AppointmentsListTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = appointmentsData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(appointmentsData.length / entriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="bg-primary rounded-[8px] py-2.5 px-6">
            <TableHead className="font-primary font-medium text-white text-center">
              Patient Name
            </TableHead>
            <TableHead className="font-primary font-medium text-white text-center">
              Gender
            </TableHead>
            <TableHead className="font-primary font-medium text-white text-center">
              Department
            </TableHead>
            <TableHead className="font-primary font-medium text-white text-center">
              Doctor
            </TableHead>
            <TableHead className="font-primary font-medium text-white text-center">
              Time
            </TableHead>
            <TableHead className="font-primary font-medium text-white text-center">
              Date
            </TableHead>
            <TableHead className="font-primary font-medium text-white text-center">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentEntries.map((entry, index) => (
            <TableRow className="" key={index}>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                {entry.patientName}
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                {entry.gender}
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                {entry.department}
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                {entry.doctor}
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                {entry.time}
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                {entry.date}
              </TableCell>
              <TableCell className="flex gap-7.5 justify-center py-[20.5px]">
                <img
                  src={
                    entry.status === "Confirmed"
                      ? "/green-check.svg"
                      : "/red-cross.svg"
                  }
                  alt={entry.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default AppointmentsListTable;
