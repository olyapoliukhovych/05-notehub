import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export default function Pagination({
  pageCount,
  onPageChange,
  currentPage,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      disabledLinkClassName={css.disabled}
      previousLabel="←"
      nextLabel="→"
      breakLabel="..."
    />
  );
}
