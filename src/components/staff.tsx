'use client';
import { Pagination } from '@/components/pagination';
import { useEffect, useState } from 'react';
import { getStaff } from '@/lib/helpers/getStaff';

interface StaffMember {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  function: string;
  experience?: number;
}

export const Staff = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [staffData, setStaff] = useState<StaffMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStaff(1, 5);
      setStaff(data);
    };

    fetchData();
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch staff data for the selected page
    getStaff(page, 2);
  };

  return (
    <>
      Staff
      {/* <Pagination
        currentPage={currentPage}
        allPages={3}
        onPageChange={handlePageChange}
      /> */}
      <div className="grid grid-cols-4 gap-4">
        {staffData?.map(person => (
          <div key={person.id} className="p-4 bg-gray-600 rounded-lg ">
            <h2 className="text-lg font-bold">
              {person.firstName} {person.lastName}
            </h2>
            <p>Date of Birth: {person.dateOfBirth}</p>
            <p>Function: {person.function}</p>
            {person.experience && <p>Experience: {person.experience} years</p>}
          </div>
        ))}
      </div>
    </>
  );
};
