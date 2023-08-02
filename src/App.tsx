
import './App.css';

// import { Registration } from './components/Registration/Registration';
// import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import MainLayout from './layouts/MainLayout';

import { Context } from './context/Context';



function App() {
  // const [coursesList, setCoursesList] = React.useState<OneTypeCard[]>(mockedCoursesList);

  // const Context = createContext(null)


  return (
    <Context>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Navigate to='/courses' />} />
          <Route path='/courses' index element={<Courses />} />
          <Route path='/courses/:courseId' element={<CourseInfo />} />
          <Route path='/courses/add' element={<CreateCourse/>} />
        </Route>
      </Routes>
    </Context>
  );
}
        
export default App;


// export const mockedCoursesList = [
//   {
//     id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
//     title: 'JavaScript',
//     description: `Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum 
//           has been the industry's standard dummy text ever since the
//           1500s, when an unknown 
//           printer took a galley of type and scrambled it to make a type
//           specimen book. It has survived 
//           not only five centuries, but also the leap into electronic
//           typesetting, remaining essentially u
//           nchanged.`,
//     creationDate: '8/3/2021',
//     duration: 160,
//     authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812b-ebde22838167'],
//   },
//   {
//     id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
//     title: 'Angular',
//     description: `Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum 
//           has been the industry's standard dummy text ever since the
//           1500s, when an unknown 
//           printer took a galley of type and scrambled it to make a type
//           specimen book.`,
//     creationDate: '10/11/2020',
//     duration: 210,
//     authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f', '095a1817-d45b-4ed7-9cf7-b2417bcbf748'],
//   },
// ]


// export const mockedAuthorsList = [
//   {
//     id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
//     name: 'Vasiliy Dobkin'
//   },
//   {
//     id: 'f762978b-61eb-4096-812b-ebde22838167',
//     name: 'Nicolas Kim'
//   },
//   {
//     id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
//     name: 'Anna Sidorenko'
//   },
//   {
//     id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
//     name: 'Valentina Larina'
//   },
// ]

  // const [isCourses, setIsCourses] = useState(true)
  // const handleChangeScreen = useCallback(() => {
  //   setIsCourses((prev) => !prev)
  // }, [setIsCourses])

  

        // {
        //   isCourses ?
        //     <Courses handleChangeScreen={handleChangeScreen}
        //       coursesList={coursesList}
        //       setCoursesList={setCoursesList}
        //     /> : <CreateCourse
        //       handleChangeScreen={handleChangeScreen}
        //       setCoursesList={setCoursesList}
        //     />
        // } 
