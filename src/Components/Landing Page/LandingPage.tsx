import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ExpensesTable } from "../ExpensesTable/ExpensesTable";

export const LandingPage: FC = () => {
  return (
    <Stack direction="column" spacing={2} sx={{ padding: {xs: '2rem', md: '5rem'}}}>
      <Typography variant="h1" fontWeight="500" sx={{ fontSize: {xs: '30px', md: '40px'}, alignSelf: 'center'}}>Expenses</Typography>
      <ExpensesTable />
    </Stack>
  )
};