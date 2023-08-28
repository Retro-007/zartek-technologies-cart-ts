import React from 'react'
import "./navbar.css"
import { useData } from '../../../context/DataContext';
import NavItems from './NavItems';
import { useState } from 'react';

const NavbarScroll = () => {

    const categories = useData().getCategories();

    const { handleActiveCategory } = useData();

    const [activeIndex, setActiveIndex] = useState<number>(0)

    const handleActiveIndex = (index: number) => {
        if (index) {
            setActiveIndex(index)
        }
        else {
            setActiveIndex(0)
        }
    }

    return (
        <React.Fragment>
            <div >

                <div className="navbar-scroll " style={{ width: "100%" }}>
                    {categories && categories?.length > 0 && categories?.map((category, index) => (

                        <NavItems
                            key={index + 1}
                            label={category?.menu_category}
                            isActive={index === activeIndex}
                            onClick={() => {
                                handleActiveIndex(index);
                                handleActiveCategory(category?.menu_category_id)
                            }}
                        />

                    ))}
                </div>
            </div>

        </React.Fragment >
    )
}

export default NavbarScroll