import React from 'react'
import { BsCart } from 'react-icons/bs';
import { useCart } from '../../context/CartContext';

const Cart = () => {

    const { getCartQuantity } = useCart()

    const quantity = getCartQuantity();

    return (
        <React.Fragment>
            <div className='flex-shrink-1 position-relative  ' >
                <span className='fs-6 fw-light'>My Orders</span>
            </div>
            <div className='flex-shrink-1 position-relative  '  >

                <button type="button" className="btn btn-icon btn-sm ">
                    <div className=' mb-3 text-white d-flex justify-content-center align-items-center bg-red position-absolute top-0 end-0 px-1' style={{ fontSize: '0.6em', borderRadius: "30px", width: 'auto', }}>{quantity}</div>
                    <BsCart style={{ color: "black", }} />
                </button>


            </div>
        </React.Fragment>
    )
}

export default Cart