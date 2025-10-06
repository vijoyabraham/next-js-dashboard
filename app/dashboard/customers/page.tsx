import { Metadata } from 'next';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { fetchCustomers } from '@/app/lib/data';
export const metadata: Metadata = {
  title: 'Customers',
};

export default  async function Page() {
 const customers = await fetchCustomers();
  return (
      <div className="w-full">
      
        <Suspense  fallback={<InvoicesTableSkeleton />}>
               <Table customers={customers} />
        </Suspense>
      </div>
  );
}