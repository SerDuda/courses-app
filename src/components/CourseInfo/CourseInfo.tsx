import React from 'react'

import './styles.css'
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

export const CourseInfo: React.FC = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/courses')
    }
    
    return (
        <div  className='main-course-info'>
            <div className='container-info'>
                <span onClick={handleBack}>{"< Back to courses"}</span>
                <h1>Title</h1>
                <div className='info-course'>
                    <div className='left-side-course-info'>description</div>
                    <div className='right-side-course-info'>
                        <p><strong>ID</strong>: </p>
                        <p><strong>Duraction</strong>: </p>
                        <p><strong>Created</strong>: </p>
                        <p><strong>Authors</strong>: </p>
                    </div>
                </div>
            </div>
        </div>
    )
};