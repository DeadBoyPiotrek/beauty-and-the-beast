import { StaffMember } from '@/types/types';

import { parse, format } from 'date-fns';

export function filterData(data: StaffMember[], filters: StaffMember) {
  return data.filter(item => {
    return Object.keys(filters).every(key => {
      if (key === 'dateOfBirth' && filters.dateOfBirth !== null) {
        const itemDate = parse(
          item.dateOfBirth,
          'dd.MM.yyyy HH:mm',
          new Date()
        );

        const filterDate = parse(filters.dateOfBirth, 'yyyy-MM-dd', new Date());

        return (
          format(itemDate, 'yyyy-MM-dd') === format(filterDate, 'yyyy-MM-dd')
        );
      }
      //@ts-ignore
      return filters[key] === null || item[key] === filters[key];
    });
  });
}
