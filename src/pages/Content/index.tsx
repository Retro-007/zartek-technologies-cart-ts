import React from 'react'
import NavbarScroll from '../../components/elements/Nav/NavbarScroll'
import Dishes from './dish/Dishes'

const ContentIndex = () => {
    return (
        <React.Fragment>
            <div>
                <NavbarScroll />
            </div>
            <div>
                <Dishes />
            </div>
        </React.Fragment>
    )
}

export default ContentIndex