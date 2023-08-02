import React from 'react'

import './styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import {pipeDuration} from '../../helpers/pipeDuraction'
import {mockedAuthorsList} from '../../context/Context'
import {showAuthors} from '../../helpers/showAutors'

export const CourseInfo: React.FC = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/courses')
    }

    const {state} = useLocation()
   
    
    return (
        <div  className='main-course-info'>
            <div className='container-info'>
                <span onClick={handleBack}>{"< Back to courses"}</span>
                <h1>{state.title}</h1>
                <div className='info-course'>
                    <div className='left-side-course-info'>{state.description}</div>
                    <div className='right-side-course-info'>
                        <p><strong>ID</strong>: {state.id}</p>
                        <p><strong>Duraction</strong>: {pipeDuration(state.duration)}</p>
                        <p><strong>Created</strong>: {state.creationDate}</p>
                        <p><strong>Authors</strong>: {showAuthors(state.authors, mockedAuthorsList)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};