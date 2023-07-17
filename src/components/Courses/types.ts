import { Dispatch, SetStateAction } from "react";
import { OneTypeCard } from "./components/CourseCard/types";


export interface ICourses {
    handleChangeScreen: () => void;
    coursesList: OneTypeCard[];
    setCoursesList: Dispatch<SetStateAction<OneTypeCard[]>>;
}