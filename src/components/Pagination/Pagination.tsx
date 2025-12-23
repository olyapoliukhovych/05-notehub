import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  onPageChange,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      //   forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      disabledClassName={css.disabled}
      //   previousLabel="←"
      //   nextLabel="→"
      previousLabel="<"
      breakLabel="..."
      nextLabel=">"
    />
  );
}
