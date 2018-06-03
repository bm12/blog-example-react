import React from 'react';
import './Pagination.css'

function Pagination(props) {
    return (
        <nav className="row pagination">
            <ul className="pagination__list">
                <li className="pagination__item">first</li>
                <li className="pagination__item">prev</li>
                <li className="pagination__item pagination__item_active">1</li>
                <li className="pagination__item">2</li>
                <li className="pagination__item">next</li>
                <li className="pagination__item">last</li>
            </ul>
        </nav>
    );
}

export default Pagination;