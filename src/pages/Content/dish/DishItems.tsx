import React from 'react'
import { Dish } from '../../../helpers/category/propTypes'
import IsNonVeg from '../../../components/elements/IsNonVeg'
import IsVeg from '../../../components/elements/IsVeg'
import CartButton from '../../../components/CartButton'
import IsCustomizableItem from '../../../components/elements/IsCustomizableItem'
import IsAvailableItem from '../../../components/elements/IsAvailableItem'

const DishItems = ({
    dish_id,
    dish_name,
    dish_Type,
    dish_currency,
    dish_price,
    dish_calories,
    dish_description,
    dish_image,
    dish_Availability,
    addonCat,
}: Dish) => {
    return (

        <React.Fragment>

            <div
                className=' d-flex flex-row justify-content-around flex-nowrap  px-2 border-bottom-dish py-2'
            >
                <div className='flex-shrink-0 '>
                    {dish_Type == 1 ?
                        <IsNonVeg />
                        :
                        <IsVeg />
                    }
                </div>

                <div className='flex-grow-1 ps-1' >

                    <div className='d-flex flex-column align-items-start lh-1' style={{ width: '90%' }}>

                        <div>
                            <span className='fw-bold'>{dish_name}</span>
                        </div>

                        <div className='w-100'>

                            <div className='d-flex flex-row justify-content-between flex-nowrap'>

                                <div className='flex-shrink-1'>
                                    <span className='fs-7 fw-bold'>{dish_currency}</span>
                                    <span className='fs-7 fw-bold ps-1'>{dish_price}</span>
                                </div>

                                <div className='flex-grow-1 text-end'>
                                    <span className='fw-bold fs-calories' >{dish_calories} Calories</span>
                                </div>

                            </div>

                        </div>

                        <div className='pt-1' >
                            <span className='fs-7 text-muted' >
                                {dish_description}
                            </span>
                        </div>

                        <CartButton
                            id={dish_id}
                            dish_Availability={dish_Availability} />

                        <IsCustomizableItem
                            addonCat={addonCat?.length > 0 ? true : false}
                        />

                        <IsAvailableItem
                            dish_Availability={dish_Availability}
                        />

                    </div>
                </div>

                <div className='flex-shrink-0 '>
                    <img src={dish_image} className='dish-image' alt={dish_name} />
                </div>

            </div>


        </React.Fragment >
    )
}

export default DishItems