'use client';

import { useState } from 'react';

import style from './filterDropdown.module.scss';

const {
    dropdown,
    titleContainer,
    title,
    icon,
    dropdownContent,
    customCheckbox,
    activeDropdown,
    customCheckboxVisible
} = style;

const FilterDropdown = () => {
    const [isActive, setIsActive] = useState(false);

    const handleDropdown = () => {
        setIsActive(!isActive)
    }

    return(
        <div className={dropdown}>
            <div className={titleContainer} onClick={handleDropdown}>
                <span className={title}>available</span>
                <span className={icon}/>
            </div>
            <div className={isActive ?  `${dropdownContent} ${activeDropdown}` : dropdownContent}>
                <label className={isActive ? `${customCheckbox} ${customCheckboxVisible}` : customCheckbox}>
                    <input type="checkbox"/>
                    in stock (100)
                </label>
                <label className={isActive ? `${customCheckbox} ${customCheckboxVisible}` : customCheckbox}>
                    <input type="checkbox"/>
                    out of stock (20)
                </label>
            </div>
        </div>
    )
}

export default FilterDropdown;
