import React from 'react'
import BackButtonHeader from '../elements/BackButtonHeader'
import Cart from '../elements/Cart'

const Header = () => {



    return (
        <React.Fragment>
            <div className='d-flex flex-row justify-content-around align-items-center gap-2 pt-3 px-3'>

                <BackButtonHeader />

                <Cart />

            </div>
        </React.Fragment>
    )
}

export default Header