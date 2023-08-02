import React from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CourseCard } from "./components/CourseCard/CourseCard";
import { Button } from "../../common/Button/Button";
import './styles.css'
import {mockedCoursesList} from "../../context/Context"
import { useContext } from "react";
import { TContext } from "../../context/types";
import {ContextCreate} from '../../context/Context'
import { useNavigate } from "react-router-dom";

export const Courses = () => {
    const [query, setQuery] = React.useState<string>('')
    const {coursesList, setCoursesList} = useContext<TContext>(ContextCreate)
    const navigate = useNavigate()

    const getQuery = (e: { target: { value: string }}) => {
        setQuery(e.target.value)        
    }

    const searchCourses = () => {
        if(!query) {
            setCoursesList(mockedCoursesList)
        }else {
            const updateList = coursesList.filter(item => 
                item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || 
                item.id.toLocaleLowerCase().includes(query.toLocaleLowerCase())
                
            )
            setCoursesList(updateList)
        }  
    }

    const moveToNewCourse = () => {
        navigate('/courses/add')        
    }

    return (
        <>
            <div className="nav-main-bar">
                <SearchBar searchCourse={searchCourses} getQuery={getQuery}/>
                <Button buttonText="Add new course" onClick={moveToNewCourse}/>
            </div>
            {coursesList.map(course => <CourseCard card={course} key={course.id} />)}
        </>
    )
};
