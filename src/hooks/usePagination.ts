export const usePagination = (
  totalItems: number,
  currentPage: number,
  itemsPerPage: number
) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPages = (length: number, inc: number = 1) =>
    Array.from({ length }, (_, i) => i + inc);

  const renderPaginationButtons = () => {
    if (totalPages <= 5) {
      return getPages(totalPages);
    } else if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    } else if (currentPage < totalPages - 2) {
      return [
        1,
        '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPages,
      ];
    } else {
      return [1, '...', ...getPages(4, totalPages - 3)];
    }
  };

  return { renderPaginationButtons };
};
