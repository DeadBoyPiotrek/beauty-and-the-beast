import Link from 'next/link';

export default async function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <Link className="bg-slate-600 px-5 py-2 rounded-md" href={'/staff'}>
        Staff
      </Link>
    </main>
  );
}
