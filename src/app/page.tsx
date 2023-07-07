import Link from 'next/link';

export default async function Page() {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <Link href={'/staff'}>Staff</Link>
    </main>
  );
}
