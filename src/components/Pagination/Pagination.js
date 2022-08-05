import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";

import './style.pagination.css'

function Pagination({movies, pageNum, page}) {
    const {total_pages} = movies;
    const [initialPage, setInitialPage] = useState(0);

    useEffect(() => {
        setInitialPage(page)
    }, [page])

    const handlePageClick = (event) => {
        pageNum(event.selected + 1)
        window.scrollTo({left: 0, top: 0, behavior: "smooth"})
    };

    return (
        <div className={'Pagination'}>
            <ReactPaginate
                breakLabel="......"
                nextLabel="Next →"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                // todo :Movie API actually 500 active pages!!!
                pageCount={total_pages}
                previousLabel="← Previous"
                initialPage={0}
                renderOnZeroPageCount={null}
                forcePage={initialPage - 1}
            />
        </div>
    );
}

export {Pagination};