import React from 'react'

const Pagination = ({totalProducts, page, setPage, productsPerPage}) => {

    const pageNumbers = []

    for(let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++){
        pageNumbers.push(i);
    }

  return (
    <div className="pagination">
        {pageNumbers.map(number =>{
          if(page === number){
            return <button className="btn pageActive pageBtn" key={number} onClick={() =>setPage(number)}>{number}</button>
          }else{
            return <button className="btn pageBtn" key={number} onClick={() =>setPage(number)}>{number}</button>
          }

        }
        )}
    </div>
  )
}

export default Pagination