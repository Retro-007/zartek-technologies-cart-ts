import React from 'react'
import { AddonCat } from '../../helpers/category/propTypes'

const IsCustomizableItem = ({ addonCat }: AddonCat) => {

    return (
        <React.Fragment>
            {addonCat ?
                <div>
                    <span className='text-danger fs-7'>Customaization Available</span>
                </div>
                :
                <React.Fragment></React.Fragment>
            }
        </React.Fragment>
    )
}

export default IsCustomizableItem