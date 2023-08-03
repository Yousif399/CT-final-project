import React from 'react'

const Pagination = (props) => {
  let pages = [];

  for (let i = 1; i <= 10; i++) {
      pages.push(i);
  }

  return (
      <div className='pagination'>
          {pages.map((page, index) => {
              return (
                  <button
                      key={index}
                      onClick={() => props.setCurrentPage(page)}
                      className={page == props.currentPage ? "active" : ""}>
                      {page}
                  </button>
              );
          })}
      </div>
  );
};

export default Pagination