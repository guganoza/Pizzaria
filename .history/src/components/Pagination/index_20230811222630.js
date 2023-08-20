import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination() {
  return (
    <div>
      <ReactPaginate
        className=""
        breakLabel="..."
        nextLabel=" >"
        onPageChange={(event) => event}
        pageRangeDisplayed={5}
        pageCount={2}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
