import React from 'react';
import {Menu} from "antd";
import '../styles/Pagination.css';
import Routes from "../constants/routes";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <>

            {/*<div className='paginationButtons'>
                {pageNumbers.map(number => (
                    <h1 key={number} className='page-item paginationButtons'>
                        <button>
                            <a onClick={() => paginate(number)} className='page-link'>
                                {number}
                            </a>
                        </button>
                    </h1>
                ))}
            </div>*/}


            <ul id="lista1">
                    <span className="separador"> </span>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item paginationButtons'>
                            <button onClick={() => paginate(number) }>

                                <p  className='page-link'>
                                   <span>{number}</span>
                                </p>
                            </button>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default Pagination;
