
import './App.css';

import { CourseInfo } from './components/CourseInfo/CourseInfo';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import MainLayout from './layouts/MainLayout';

import { Context } from './context/Context';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';



function App() {
  return (
    <Context>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Navigate to='/registration' />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:courseId' element={<CourseInfo />} />
          <Route path='/courses/add' element={<CreateCourse/>} />
        </Route>
      </Routes>
    </Context>
  );
}
        
export default App;