'use client';
import { Pagination } from '@/components/pagination';
import { useEffect, useState } from 'react';
import { paginateStaff } from '@/lib/helpers/paginateStaff';
import { Filter } from '@/src/components/filter';
import { getRawData } from '@/lib/helpers/getRawData';
import { filterData } from '@/lib/helpers/filterData';
import { Sort } from './sort';
import { sortData } from '@/lib/helpers/sortData';
import { StaffMember } from '@/types/types';

export const Staff = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [filters, setFilters] = useState({});
  const [filteredCount, setFilteredCount] = useState(1);
  const [sort, setSort] = useState({ sortBy: 'id', sortOrder: 'asc' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRawData();
      setFilteredCount(data.length);
      //@ts-ignore
      const filteredData = filterData(data, filters);
      setFilteredCount(filteredData.length);
      const sortedData = sortData(filteredData, sort.sortBy, sort.sortOrder);
      const paginatedStaf = paginateStaff(sortedData, currentPage, 5);
      setStaff(paginatedStaf);
    };

    fetchData();
  }, [currentPage, filters, sort]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilter = async (filters: StaffMember) => {
    setFilters(filters);
    setCurrentPage(1);
  };
  const handleReset = () => {
    setFilters('');
    setCurrentPage(1);
  };
  const handleSort = (sortBy: string, sortOrder: string) => {
    setSort({ sortBy, sortOrder });
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col gap-3 items-center">
      <Sort onSort={handleSort} />
      {/* @ts-ignore */}
      <Filter onFilter={handleFilter} onReset={handleReset} />
      <Pagination
        staffCount={filteredCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <div className="grid grid-cols-4 gap-4">
        {staff?.map(person => (
          <div key={person.id} className="p-4 bg-gray-600 rounded-lg ">
            <h2 className="text-lg font-bold">
              {person.firstName} {person.lastName}
            </h2>
            <p>Id: {person.id}</p>
            <p>Date of Birth: {person.dateOfBirth}</p>
            <p>Function: {person.function}</p>
            {person.experience && <p>Experience: {person.experience} years</p>}
          </div>
        ))}
      </div>
    </div>
  );
};
