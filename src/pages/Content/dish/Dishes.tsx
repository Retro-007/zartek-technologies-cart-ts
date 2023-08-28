import React from 'react'
import DishItems from './DishItems';
import { useActiveCategoryDishes } from '../../../customHooks/useActiveCategoryDishes';

const Dishes = () => {

    const { categoryDishes } = useActiveCategoryDishes();


    return (
        <React.Fragment>

            {/* dish items  */}
            <React.Fragment>

                {categoryDishes && categoryDishes?.length > 0 && categoryDishes?.map((dish, index) => (
                    <DishItems
                        key={index + 1}
                        dish_id={dish?.dish_id}
                        dish_name={dish?.dish_name}
                        dish_Type={dish?.dish_Type}
                        dish_currency={dish?.dish_currency}
                        dish_price={dish?.dish_price}
                        dish_calories={dish?.dish_calories}
                        dish_description={dish?.dish_description}
                        dish_image={dish?.dish_image}
                        dish_Availability={dish?.dish_Availability}
                        addonCat={dish?.addonCat}
                    />
                ))}
            </React.Fragment>



        </React.Fragment>
    )
}

export default Dishes