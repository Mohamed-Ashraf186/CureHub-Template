import Pagination from "../../components/ui/PaginationComponent";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

function AppointmentsRequestTable() {
  return (
    <>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
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
            {/* <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow className="" key={index}>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                Sarah Lawsson
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                Female
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                GIT
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                John Albert
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                1:00 PM
              </TableCell>
              <TableCell className="text-sm font-primary text-center py-[20.5px]">
                Date
              </TableCell>
              <TableCell className="flex gap-7.5 justify-center py-[20.5px]">
                <img src="/green-check.svg" alt="green-check" />
                <img src="/red-cross.svg" alt="red-cross" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination />
    </>
  );
}

export default AppointmentsRequestTable;
