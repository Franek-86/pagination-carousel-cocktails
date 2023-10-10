import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { data } from "../utils/useFetch";

const PaginationList = (props) => {
  const {
    numOfPages,
    firstPage,
    prevPage,
    changePage,
    currentPage,
    nextPage,
    lastPage,
  } = props.value;

  let test = Array.apply(null, Array(numOfPages + 1));

  return (
    <Pagination>
      <Pagination.First onClick={() => firstPage()} />
      <Pagination.Prev onClick={() => prevPage()} />
      {test.map((item, index) => {
        if (index === 0) {
          return;
        }
        return (
          <Pagination.Item
            key={index}
            onClick={() => changePage(index)}
            className={currentPage === index ? "active" : null}
          >
            {index}
          </Pagination.Item>
        );
      })}
      {/* <Pagination.Ellipsis /> */}
      <Pagination.Next onClick={() => nextPage()} />
      <Pagination.Last onClick={() => lastPage()} />
    </Pagination>
  );
};

export default PaginationList;
