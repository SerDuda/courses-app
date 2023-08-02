import React from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CourseCard } from "./components/CourseCard/CourseCard";
import { Button } from "../../common/Button/Button";
import './styles.css'
import {mockedCoursesList} from "../../context/Context"
import { useContext } from "react";
import { ContextCreate, TContext } from "../../context/Context";

export const Courses = () => {
    const [query, setQuery] = React.useState<string>('')
    const {coursesList, setCoursesList} = useContext<TContext>(ContextCreate)

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

    return (
        <>
            <div className="nav-main-bar">
                <SearchBar searchCourse={searchCourses} getQuery={getQuery}/>
                <Button buttonText="Add new course"/>
            </div>
            {coursesList.map(course => <CourseCard card={course} key={course.id} />)}
        </>
    )
};
