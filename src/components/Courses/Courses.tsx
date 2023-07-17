import React from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CourseCard } from "./components/CourseCard/CourseCard";
import { Button } from "../../common/Button/Button";
import './styles.css'
import {mockedCoursesList} from "../../App"
import { ICourses } from "./types";

export const Courses = ({handleChangeScreen, coursesList, setCoursesList}: ICourses) => {
    const [query, setQuery] = React.useState<string>('')

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
                <Button buttonText="Add new course" onClick={handleChangeScreen}/>
            </div>
            {coursesList.map(course => <CourseCard card={course} key={course.id} />)}
        </>
    )
};
