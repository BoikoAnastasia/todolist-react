import React from "react";
import { getPagesArr } from "../../../utils/pages";
import MyButton from "../button/MyButton";

const Pagination = ({totalPages, page, pageChange}) => {
    let pagesArr = getPagesArr(totalPages);

    return (
        <div className="page">
            {pagesArr.map(p =>
                <MyButton
                    onClick={() => pageChange(p)}
                    key={p}
                    className={page === p ? 'page__btn page__current' : 'page__btn'}>
                    {p}
                </MyButton>
            )}
        </div>
    )
}
export default Pagination;