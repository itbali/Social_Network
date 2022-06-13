import React, {useState} from 'react';
import s from "../../Users/Users.module.css"

type paginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  portionSize?: number
  onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({
                            totalItemsCount,
                            pageSize,
                            currentPage,
                            onPageChanged,
                            portionSize = 10
                          }: paginatorPropsType) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionsCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = (portionNumber * portionSize)

  return (
    <div>
      <button disabled={portionNumber === 1} onClick={() => setPortionNumber(1)}>{'<<'}</button>
      <button disabled={portionNumber === 1} onClick={() => setPortionNumber(portionNumber - 1)}>{'<'}</button>
      {pages
        .filter(el => (el <= rightPortionPageNumber && el >= leftPortionPageNumber))
        .map(el => {
          return <span key={el} onClick={() => onPageChanged(el)}
                       className={currentPage === el ? s.selectedPage : ''}>{el}</span>
        })
      }
      <button disabled={portionsCount === portionNumber} onClick={() => setPortionNumber(portionNumber + 1)}>{'>'}
      </button>
      <button disabled={portionsCount === portionNumber} onClick={() => setPortionNumber(portionsCount)}>{'>>'}
      </button>
    </div>
  );
};
