'use client'

import { useEffect, useState } from 'react';
import { IProductPaginationProps } from './ProductPagination.type';
import ReactPaginate from 'react-paginate';
import './productPagination.scss';
import { ProductCard } from '../ProductCard';

const ProductPagination = ({ data }: IProductPaginationProps) => {
    const [currentItems, setCurrentItems] = useState<any[] | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState<number>(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='productList'>
                {currentItems && currentItems.map((item) => (
                    <ProductCard key={item.id}/>
                ))}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null} 
                marginPagesDisplayed={0}
                containerClassName='paginationContainer'
                pageLinkClassName='pageNumber'
                previousLinkClassName='pageNumber'
                nextLinkClassName='pageNumber'
                activeLinkClassName='active'
            />
        </>
    );
};

export default ProductPagination;
