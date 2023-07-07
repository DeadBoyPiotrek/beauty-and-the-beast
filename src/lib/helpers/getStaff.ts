interface StaffMember {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  function: string;
  experience?: number;
}
export const getStaff = async (page: number, count: number) => {
  console.log('hello?');
  const response = await fetch(`/api/staff?page=${page}?count=${count}`);
  const data = await response.json();
  console.log(`🚀 ~ getStaff ~ data:`, data);
  return data;
};
