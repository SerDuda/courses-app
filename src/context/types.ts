import { OneTypeCard } from "../components/Courses/components/CourseCard/types"


export type TContext = {
    coursesList: OneTypeCard[],
    setCoursesList: React.Dispatch<React.SetStateAction<OneTypeCard[]>>
}

export type ContextProps = {
    children: React.ReactNode
}