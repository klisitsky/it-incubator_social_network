import React from "react";
import s from "components/UsersSearch/UsersSearch.module.css";
import {useAppSelector} from "redux/redux-store";
import {useDispatch} from "react-redux";
import {changePortionNumber} from "redux/actions/actionsUserSearch";

type PaginatorPropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onChangeCurrentPage: (newPage: number) => void
  portionSize: number
}

const Paginator: React.FC<PaginatorPropsType> = (props) => {

  const dispatch = useDispatch()
  let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

  let portionCount = Math.ceil(pagesCount / props.portionSize)
  let portionNumber_ = useAppSelector(state => state.usersSearchPage.portionNumber)
  let leftValuePortionSize = (portionNumber_ - 1) * props.portionSize + 1
  let rightValuePortionSize = portionNumber_ * props.portionSize

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className={s.pagination}
  >
    {/*<button disabled={portionNumber <= 1} onClick={() => setPortionNumber(current => current - 1)}>&lt;</button>*/}
    <button disabled={portionNumber_ <= 1} onClick={() => dispatch(changePortionNumber(portionNumber_ - 1))}>&lt;</button>
    {pages
      .filter((p) => p >= leftValuePortionSize && p <= rightValuePortionSize)
      .map((p, i) => {
        return <span key={i}
                     className={`${s.page} ${props.currentPage === p ? s.selectedPage : ''}`}
                     onClick={() => {
                       props.onChangeCurrentPage(p)
                     }}>{p} </span>
      })}
    {/*<button disabled={portionNumber > portionCount} onClick={() => setPortionNumber(current => current + 1)}>&gt;</button>*/}
    <button disabled={portionNumber_ > portionCount} onClick={() => dispatch(changePortionNumber(portionNumber_ + 1))}>&gt;</button>
  </div>
}

export default Paginator