import 'react-paginate';

declare module 'react-paginate' {
    interface ReactPaginateProps {
        renderOnZeroPageCount?: null | JSX.Element | ((...args: any[]) => any) | string;
    }
}
