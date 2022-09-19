import { Pagination } from 'antd';
import React, { useState } from 'react';

const usePagination = ({ meta }) => {
  const [page, setPage] = useState(1);
  const handleSetPage = (pageNumber) => {
    setPage(pageNumber);
  };
  const renderPagination = () => (
    <Pagination
      pageSize={10}
      total={meta.count}
      current={page}
      onChange={handleSetPage}
    />
  );
  return { renderPagination, page };
};

export default usePagination;
