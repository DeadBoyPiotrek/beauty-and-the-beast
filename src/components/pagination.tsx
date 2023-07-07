interface PaginationProps {
  currentPage: number;
  allPages: number;
}

export const Pagination = ({
  currentPage,
  allPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div>
      <div>pagination</div>
      <div></div>
    </div>
  );
};
