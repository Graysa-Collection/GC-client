import Image from 'next/image';

import { ProductCard, FilterDropdown } from '@/components';
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
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </section>
    );
};

export default ProductListSection;
