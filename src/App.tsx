import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination } from './components/Pagination';

const App: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('perPage') || '5');
  const totalItems = 42; // This would come from your data

  const handlePageChange = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', page.toString());
    setSearchParams(newSearchParams);
  };

  const handlePerPageChange = (newPerPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('perPage', newPerPage.toString());
    newSearchParams.set('page', '1'); // Reset to first page
    setSearchParams(newSearchParams);
  };

  return (
    <div>
      <Pagination
        total={totalItems}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />

      {/* Your content here */}
    </div>
  );
};

export default App;
