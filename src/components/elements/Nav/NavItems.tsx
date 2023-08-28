import React from 'react'
import { NavProps } from '../../../helpers/category/propTypes';
import Ink from 'react-ink';




const NavItems = ({ label, isActive, onClick }: NavProps) => {
    return (
        <React.Fragment>

            <a
                className={isActive ? 'nav-item-nav position-relative scroll-ref flex-fill active' : "nav-item-nav scroll-ref position-relative flex-fill"}
                onClick={onClick}
            >
                {label}
                <Ink
                    style={{ borderRadius: "5px" }}
                    background={true}
                    radius={100}
                />
            </a>
        </React.Fragment>
    )
}

export default NavItems