import Pagination from '@/components/pagination';
import { Staff } from '@/components/staff';

async function getData() {
  try {
    const res = await import('../api/staff/route');
    return await (await res.GET()).json();
  } catch (error) {
    console.log('error getting staff: ', error);
  }
}

export default async function Page() {
  const data = await getData();
  console.log(`🚀 ~ Page ~ data:`, data);

  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Pagination
        currentPage={1}
        renderPageLink={() => `staff/${1}`}
        itemsPerPage={5}
        totalItems={53}
      />
      {/* <Staff /> */}
    </main>
  );
}
