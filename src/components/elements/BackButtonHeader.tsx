import React from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useData } from '../../context/DataContext';
import { Button } from '@chakra-ui/react'



const BackButtonHeader = () => {
    const title = useData().getTitle();

    return (
        <React.Fragment>
            <div className='flex-shrink-0'>
                <Button leftIcon={<BsArrowLeft />} colorScheme='blackAlpha' variant='ghost'></Button>

            </div>
            <div className='flex-grow-1 '>
                <span className='fs-6 fw-light'> {title}</span>
            </div>
        </React.Fragment>
    )
}

export default BackButtonHeader