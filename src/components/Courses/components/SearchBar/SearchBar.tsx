
import React from 'react';
import './styles.css'
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import {TypeSearchBar} from './types'

export const SearchBar: React.FC<TypeSearchBar> = ({ searchCourse, getQuery }: TypeSearchBar) => {
    return (
        <div className='main-search_bar-input'>
            <Input
                labelText='Search'
                placeholdetText='Enter course name...'
                onChange={getQuery}
            />
            <Button buttonText='Search' onClick={searchCourse} />
        </div>
    )
};


