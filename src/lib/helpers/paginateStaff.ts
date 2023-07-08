import { StaffMember } from '@/types/types';
export const paginateStaff = (
  data: StaffMember[],
  page: number,
  count: number
) => {
  const startIndex = (page - 1) * count;
  const endIndex = startIndex + count;
  const paginatedData = data.slice(startIndex, endIndex);
  return paginatedData;
};
