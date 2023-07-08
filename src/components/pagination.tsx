import { usePagination } from '../hooks/usePagination';

interface PaginationProps {
  staffCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  staffCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const { renderPaginationButtons } = usePagination(staffCount, currentPage, 5);

  return (
    <div>
      {renderPaginationButtons().map((pageNumber, index) => (
        <button
          key={index}
          className={`py-2 px-4 mr-2 rounded ${
            pageNumber === currentPage
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
          onClick={() => {
            if (typeof pageNumber === 'number') {
              onPageChange(pageNumber);
            }
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};
