async function getData() {
  const res = await fetch('http://localhost:3000/api/staff');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(`🚀 ~ Page ~ data:`, data);

  return <main></main>;
}
