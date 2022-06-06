import React from 'react';
import s from "../../Users/Users.module.css"

type paginatorPropsType = {
  totalUserCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
}

export const Paginator = (props: paginatorPropsType) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(el => (

        //counting pages of total users

        <span key={Math.random()} onClick={(e) => props.onPageChanged(el)}
              className={props.currentPage === el ? s.selectedPage : ''}>{el}</span>
      ))}
    </div>
  );
};
