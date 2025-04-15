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

function AppointmentsListTable() {
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
              <TableCell className="flex py-[20.5px] gap-7.5 justify-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="rounded-[33px] py-1.5 px-3.5 bg-green-100">
                      <p className="font-primary text-xs text-[#29c36a]">
                        Confirmed
                      </p>
                    </div>
                    <img src="/src/assets/menu-dots.svg" alt="menu-dots" />
                  </>
                ) : (
                  <>
                    <div className="rounded-[33px] py-1.5 px-3.5 bg-[#f7f7f7]">
                      <p className="font-primary text-xs text-[#999a9d]">
                        Confirmed
                      </p>
                    </div>
                    <img src="/src/assets/menu-dots.svg" alt="menu-dots" />
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination />
    </>
  );
}

export default AppointmentsListTable;
