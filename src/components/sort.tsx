import { useState } from 'react';

interface SortProps {
  onSort: (sortBy: string, sortOrder: string) => void;
}

export const Sort = ({ onSort }: SortProps) => {
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const handleSort = () => {
    onSort(sortBy, sortOrder);
  };

  return (
    <div className="bg-slate-300 text-black p-5 rounded-md">
      <label htmlFor="sortBy">Sort By:</label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={e => setSortBy(e.target.value)}
      >
        <option value="">None</option>
        <option value="experience">Experience</option>
        <option value="id">ID</option>
      </select>

      <label htmlFor="sortOrder">Sort Order:</label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
      >
        <option value="">None</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button
        className="bg-slate-500 w-min p-2 rounded-md"
        onClick={handleSort}
      >
        Sort
      </button>
    </div>
  );
};
