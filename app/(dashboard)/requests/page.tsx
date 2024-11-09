import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Toolbar from './toolbar';
import { fetchUser, fetchTransactions } from '@/lib/prisma';
import LatestTransactionsTable from '../latest-transactions-table';
import SpentStatusMonitorClient from '../SpentStatusMonitorClient';

export default async function RequestsPage() {
  const user = await fetchUser();
  if (!user) {
    return null;
  }
  const transactions = await fetchTransactions(user);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Requests</CardTitle>
        <CardDescription>Requests items.</CardDescription>
      </CardHeader>
      <CardContent>
        <Toolbar />
        <LatestTransactionsTable user={user} transactions={transactions} />
        <SpentStatusMonitorClient />
      </CardContent>
    </Card>
  );
}
