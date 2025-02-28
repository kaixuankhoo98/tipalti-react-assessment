import { useQuery } from "react-query";
import { z } from "zod";

const transaction = z.object({
  id: z.number(),
  date: z.string(),
  amount: z.number(),
  merchant: z.string(),
  category: z.string(),
})
const expensesResponse = z.object({
  totalPages: z.number(),
  currentPage: z.number(),
  next: z.object({
    page: z.number(),
    limit: z.number(),
  }).optional(),
  previous: z.object({
    page: z.number(),
    limit: z.number(),
  }).optional(),
  transactions: z.array(transaction),
});

export const useExpensesTable = (pageNumber: number) => {
  return useQuery({
    queryKey: ['expenses', { pageNumber }],
    queryFn: async () => {
      const response = await fetch(`https://tip-transactions.vercel.app/api/transactions?page=${pageNumber}`)
      const data = await response.json();
      return expensesResponse.parse(data);
    }
  });
} 