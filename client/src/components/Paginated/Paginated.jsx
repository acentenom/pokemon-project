import React from "react";
import "../Paginated/Paginated"

const Paginated = ({ projectsPerPage,
  projects,
  page,
  currentPage, }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(projects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center mt-5">
    <li class="page-item">
    {currentPage > 1 && (
            <button class="page-link"  onClick={() => page(currentPage - 1)}>&laquo;</button>
          )}
    </li>
    {pageNumbers &&
          pageNumbers.map((num) => {
            return (
    <li key={num}
    onClick={() => page(num)}
    class="page-item"><button className="page-link">{num}</button></li>
            )})}
    <li class="page-item">
    {currentPage < pageNumbers[pageNumbers.length - 1] && (
      <button class="page-link" onClick={() => page(currentPage + 1)}>&raquo;</button>
    )}
    </li>
  </ul>
</nav>
  );
};

export default Paginated;