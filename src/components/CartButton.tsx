import { Button, ButtonGroup } from 'react-bootstrap'
import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi';
import { CartItemProps } from '../helpers/cart/ProviderTypes';
import { useCart } from '../context/CartContext';

const CartButton = ({ dish_Availability, id }: CartItemProps) => {


    const {
        getCartItemQuantity,
        handleAddItemCart,
        handleMinusItemCart,
    } = useCart()


    const quantity = getCartItemQuantity(id);
    return (
        <React.Fragment>

            {dish_Availability ?
                <div className='pt-2' >

                    <React.Fragment>
                        {quantity > 0 ?


                            <div>
                                <ButtonGroup size='sm' className='b-r-group' aria-label="Basic example">
                                    <Button
                                        className='b-r-group-left'
                                        variant="success"
                                        onClick={() => handleMinusItemCart(id)}
                                    >
                                        <BiMinus />
                                    </Button>

                                    <Button className="disbaled-button pe-none" variant="success">{quantity}</Button>

                                    <Button
                                        className='b-r-group-right'
                                        variant="success"
                                        onClick={() => handleAddItemCart(id)}
                                    >
                                        <BsPlus />
                                    </Button>

                                </ButtonGroup>
                            </div>
                            :
                            <React.Fragment>
                                <Button
                                    className='b-r-10 fs-7'
                                    variant="success"
                                    onClick={() => handleAddItemCart(id)}
                                >
                                    + Add To Cart

                                </Button>
                            </React.Fragment>
                        }
                    </React.Fragment>
                </div>
                :
                <React.Fragment>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default CartButton