import { Pagination } from "@mui/material";
import React from "react";

const Paginate = ({ setPage, totalPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <>
      <Pagination
        count={totalPages}
        onChange={(e) => {
          handlePageChange(e.target.textContent);
        }}
        color="info"
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
      ></Pagination>
    </>
  );
};

export default Paginate;
