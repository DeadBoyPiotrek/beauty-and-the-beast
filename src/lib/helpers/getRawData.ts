export const getRawData = async () => {
  const response = await fetch(`/api/staff`);
  const data = await response.json();
  return data;
};
