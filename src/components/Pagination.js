

import React from 'react'

function Pagination({gotoNextPage, gotoPrevPage}) {
  return (
    <div>
        {/* if gotoPrevPage is false (on first page)- stop next section*/}
        {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
        {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  )
}

export default Pagination;

