import { useEffect, useState } from 'react'
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import './CreateCourse.css'
import { mockedAuthorsList } from '../../App'
import { v4 } from 'uuid'
import { Author, OneTypeCard } from '../Courses/components/CourseCard/types';
import { pipeDuration } from '../../helpers/pipeDuraction'
import { getDate } from '../../helpers/dateGeneratop';
import { ICreateCourse } from './types';

export const CreateCourse = ({ handleChangeScreen, setCoursesList }: ICreateCourse) => {
    const [newCourse, setNewCourse] = useState({
        id: '',
        title: '',
        description: '',
        creationDate: '',
        duration: 0,
        authors: []
    } as OneTypeCard)

    const [allAuthors, setAllAuthors] = useState(mockedAuthorsList)
    const [createTitleNewAuthor, setCreateTitleNewAuthor] = useState('')
    const [createNewAuthor, setCreateNewAuthor] = useState({ id: '', name: '' })
    const [courseAuthors, setCourseAuthors] = useState<Author[]>([])

    const getNewTitle = (e: { target: { value: string } }) => {
        setNewCourse((el) => ({...el, title: e.target.value}))
    }

    const getNewDescription = (e: { target: { value: string } }) => {
        setNewCourse((el) => ({ ...el, description: e.target.value }))
    }

    const getNewAuthor = (e: { target: { value: string } }) => {
        setCreateTitleNewAuthor(e.target.value)
        setCreateNewAuthor((el) => ({ ...el,name: e.target.value, id: v4() }));
    }

    const getCourseDuration = (e: { target: { value: number } }) => {
        setNewCourse((el) => ({ ...el, duration: e.target.value }))
    }

    useEffect(() => {
        const arrAuthorsCourse = courseAuthors.map(el => el.id)
        if (courseAuthors) {
            setNewCourse((el) => ({ ...el, authors: arrAuthorsCourse }))
        }
    }, [courseAuthors])

    const addCeratedAuthorAllAuthors = () => {
        mockedAuthorsList.push(createNewAuthor)
        setCreateTitleNewAuthor('')
    }

    const addAuthorNewCourse = (elem: string) => {
        const findAuthor = allAuthors.find(el => el.id === elem)
        if (findAuthor) {
            setCourseAuthors((el) => ([...el, findAuthor]))
        }

        const filterAuthors = allAuthors.filter(el => el.id !== elem)
        setAllAuthors(filterAuthors)

        setNewCourse((el) => ({...el, id: v4()}))
    }


    const deleteAuthorNewCourse = (elem: string) => {
        if (courseAuthors) {
            const findAuthor = courseAuthors.find((el: Author) => el.id === elem)
            if (findAuthor) {
                setAllAuthors((el) => ([...el, findAuthor]))
            }

            const deleteAuthorFromList = courseAuthors.filter((el: Author) => el.id !== elem)
            setCourseAuthors(deleteAuthorFromList)
        }
    }


    const crateCourse = () => {
        if(newCourse.description.length <= 2) {
            alert("Please, fill in all fields")
        }else if (newCourse.duration <= 1) {
            alert("Please, fill in all fields")
        }else if (createNewAuthor.name.length <= 2) {
            alert("Please, fill in all fields")
        }else {
            setCoursesList((el) => ([...el, {...newCourse, id: v4(), creationDate: getDate()}]))
            handleChangeScreen()
        }
    }


    return (
        <div className='main-create-course'>
            <div className='create-course-title'>
                <div>
                    <Input labelText='Title' placeholdetText='Enter title...' onChange={getNewTitle} />
                </div>
                <Button buttonText='Create course' onClick={crateCourse} />
            </div>
            <div className='create-course-description'>
                <label className='label-description' htmlFor="description">Description</label>
                <textarea onChange={getNewDescription} className='textarea-description' name="description" id="" placeholder="Enter description"></textarea>
            </div>
            <div className='create-course-info'>
                <div className='create-course-info-left-side'>
                    <div className='left-side-author'>
                        <h3>Add author</h3>
                        <Input labelText='Author name' placeholdetText='Enter author name...' onChange={getNewAuthor} valueText={createTitleNewAuthor} />
                        <Button buttonText='Create author' onClick={addCeratedAuthorAllAuthors} />
                    </div>
                    <div className='left-side-duraction'>
                        <h3>Duraction</h3>
                        <Input labelText='Duraction' placeholdetText='Enter your duraction' onChange={getCourseDuration} />
                        <p>Duraction: <strong>{pipeDuration(newCourse.duration)}</strong> hours</p>
                    </div>
                </div>
                <div className='create-course-info-right-side'>
                    <div className='right-side-authors'>
                        <h3 className='right-side-authors__title'>Authors</h3>
                        {allAuthors.map(el => {
                            return (
                                <div key={el.id} className='right-side__author'>
                                    <p>{el.name}</p>
                                    <Button buttonText='Add author' onClick={() => addAuthorNewCourse(el.id)} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='right-side-authors'>
                        <h3 className='right-side-authors__title'>Course authors</h3>
                        {courseAuthors.length > 0 ? courseAuthors.map(el => {
                            return (
                                <div key={el.id} className='right-side__author'>
                                    <p>{el.name}</p>
                                    <Button buttonText='Delete author' onClick={() => deleteAuthorNewCourse(el.id)} />
                                </div>
                            )
                        }) : <div className='empty__info'>Author list is empty</div>}
                    </div>
                </div>
            </div>
        </div>
    )
};


