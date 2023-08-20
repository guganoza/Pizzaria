import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

export default function Pagination({ onChangePage }) {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
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
