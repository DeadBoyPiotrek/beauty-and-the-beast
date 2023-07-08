import { StaffMember } from '@/types/types';
export const sortData = (
  data: StaffMember[],
  sortBy: string,
  sortOrder: string
) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (sortBy === 'experience') {
      if (sortOrder === 'asc') {
        return a.experience - b.experience;
      } else if (sortOrder === 'desc') {
        return b.experience - a.experience;
      }
    } else if (sortBy === 'id') {
      if (sortOrder === 'asc') {
        return a.id - b.id;
      } else if (sortOrder === 'desc') {
        return b.id - a.id;
      }
    }
    return 0;
  });

  return sortedData;
};
