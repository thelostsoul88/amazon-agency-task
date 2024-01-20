import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Stack,
  Box,
  Input,
  InputAdornment,
} from "@mui/material";
import { BiSearchAlt } from "react-icons/bi";

interface AccountsTableProps {
  data: Account[];
}

interface Account {
  accountId: string;
  email: string;
  authToken: string;
  creationDate: string;
}

const AccountsTable: React.FC<AccountsTableProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortCfg, setSortCfg] = useState<{
    key: keyof Account;
    direction: "asc" | "desc";
  }>({ key: "accountId", direction: "asc" });

  const navigate = useNavigate();

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    nextPage: React.SetStateAction<number>
  ) => {
    setPage(nextPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string } }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (key: keyof Account) => {
    setSortCfg((prevSortCfg) => ({
      key,
      direction:
        prevSortCfg.key === key && prevSortCfg.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortedData = data.slice().sort((a, b) => {
    const sortOrder = sortCfg.direction === "asc" ? 1 : -1;
    return a[sortCfg.key].localeCompare(b[sortCfg.key]) * sortOrder;
  });

  const filteredData = sortedData.filter((account) =>
    Object.values(account).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="container mx-auto mt-20 min-h-[75vh]">
      <Stack direction="row" justifyContent="center" alignItems="baseline">
        <Box component="div">
          <Input
            placeholder="Search"
            type="text"
            name="name"
            autoComplete="off"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            sx={{
              color: "white",
            }}
            startAdornment={
              <InputAdornment position="start" sx={{ color: "#646cff" }}>
                <BiSearchAlt />
              </InputAdornment>
            }
          />
        </Box>
      </Stack>
      <TableContainer
        component={Paper}
        className="border rounded-lg overflow-hidden"
      >
        <Table className="min-w-full">
          <TableHead>
            <TableRow>
              <TableCell
                className={`py-2 px-4 font-bold border cursor-pointer ${
                  sortCfg.key === "accountId" && "bg-gray-300"
                }`}
                onClick={() => handleSort("accountId")}
              >
                Account ID
              </TableCell>
              <TableCell
                className={`py-2 px-4 font-bold border cursor-pointer ${
                  sortCfg.key === "email" && "bg-gray-300"
                }`}
                onClick={() => handleSort("email")}
              >
                Email
              </TableCell>
              <TableCell
                className={`py-2 px-4 border cursor-pointer ${
                  sortCfg.key === "authToken" && "bg-gray-300"
                }`}
                onClick={() => handleSort("authToken")}
              >
                Auth Token
              </TableCell>
              <TableCell
                className={`py-2 px-4 border cursor-pointer ${
                  sortCfg.key === "creationDate" && "bg-gray-300"
                }`}
                onClick={() => handleSort("creationDate")}
              >
                Creation Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((account) => (
              <TableRow
                key={account.accountId}
                onClick={() => navigate("/profiles")}
              >
                <TableCell className="py-2 px-4 border">
                  {account.accountId}
                </TableCell>
                <TableCell className="py-2 px-4 border">
                  {account.email}
                </TableCell>
                <TableCell className="py-2 px-4 border">
                  {account.authToken}
                </TableCell>
                <TableCell className="py-2 px-4 border">
                  {account.creationDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
};

export default AccountsTable;
