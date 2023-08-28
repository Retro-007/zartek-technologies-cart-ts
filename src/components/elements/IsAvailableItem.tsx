import React from 'react'
import { IsDishAvailable } from '../../helpers/category/propTypes'



const IsAvailableItem = ({ dish_Availability }: IsDishAvailable) => {

    return (
        <React.Fragment>

            {!dish_Availability &&
                <div>
                    <span className='text-danger fs-7'>
                        Not Available
                    </span>

                </div>
            }
        </React.Fragment>
    )
}

export default IsAvailableItem