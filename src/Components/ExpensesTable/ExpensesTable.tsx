import { FC, useState } from "react";
import { useExpensesTable } from "../../hooks/expensesTable";
import { Alert, Button, Skeleton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const ExpensesTable: FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { data, isLoading, isError } = useExpensesTable(pageNumber);

  if (isError) {
    return <Alert severity="error">Failed to fetch data</Alert>
  }

  if (isLoading || !data) {
    return <Skeleton variant="rectangular" height="100%" />
  }

  return (
    <TableContainer >
      <Table>
        <TableHead sx={{ backgroundColor: 'rgb(200, 200, 200)'}}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Merchant</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.merchant}</TableCell>
              <TableCell>{transaction.category}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ marginTop: '1rem' }}>
        {data.previous !== undefined && (
          <Button onClick={() => setPageNumber(pageNumber - 1)}>
            Previous Page
          </Button>
        )}
        {data.next !== undefined && (
          <Button onClick={() => setPageNumber(pageNumber + 1)}>
            Next Page
          </Button>
        )}
      </Stack>
    </TableContainer>
  );
}