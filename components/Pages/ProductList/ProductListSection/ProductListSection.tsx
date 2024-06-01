import Image from 'next/image';

import { ProductCard, FilterDropdown, ProductPagination } from '@/components';
import { IProductListSectionProps } from './ProductListSection.type';

import downArrow from '@/assets/icon/downArrow.svg';

import style from './productListSection.module.scss';

const {
    productListSection,
    header,
    heading,
    dropdown,
    dropdownBtn,
    icon,
    filter,
    productList,
    bgColorGreen,
    bgColorYellow,
    bgColorPink
} = style;

const ProductListSection = ({ bgColor } : IProductListSectionProps) => {
    const PRODUCT = 100
    const PRODUCT_ARRAY = Array.from(Array(PRODUCT).keys())

    return(
        <section className={bgColor === 'pink' ? `${productListSection} ${bgColorPink}` : bgColor === 'green' ? `${productListSection} ${bgColorGreen}` : bgColor === 'yellow' ? `${productListSection} ${bgColorYellow}` : productListSection}>
            <div className={header}>
                <h4 className={heading}>popular</h4>
                <div className={dropdown}>
                    <button className={dropdownBtn}>sort <Image className={icon} src={downArrow} alt='arrow icon' priority/></button>
                </div>
            </div>
            <div className={filter}>
                <FilterDropdown/>
                <FilterDropdown/>
                <FilterDropdown/>
                <FilterDropdown/>
            </div>
            <div className={productList}>
                <ProductPagination data={PRODUCT_ARRAY}/>
            </div>
        </section>
    );
};

export default ProductListSection;
