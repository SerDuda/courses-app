import React from "react";
import { Button } from "../../../../common/Button/Button";
import './styles.css'
import { getDate } from "../../../../helpers/dateGeneratop";
import { pipeDuration } from "../../../../helpers/pipeDuraction";
import {mockedAuthorsList} from "../../../../App"
import { Author, TypeCard } from "./types";

export const CourseCard: React.FC<TypeCard> = ({ card }: TypeCard) => {
    
    const showAuthors = (courseList: string[], authorsList: Author[]) => {
        // eslint-disable-next-line array-callback-return
        const authorsArr = authorsList.map((elem: { id: string, name: string }) => {
            if (courseList.includes(elem.id)) {
                return elem.name
            }
        }
        ).filter(el => el !== undefined)

        return authorsArr.join(', ')
    }
  

    return (
        <div className="card-container" key={card.id}>
            <div className="left__info">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
            </div>
            <div className="right__info">
                <p><strong>Authors</strong>: {showAuthors(card.authors, mockedAuthorsList)}</p>
                <p><strong>Duration</strong>: {pipeDuration(card.duration)} hours</p>
                <p><strong>Crated</strong>: {getDate()}</p>
                <div className="btn-show__course">
                    <Button buttonText="Show course" />
                </div>
            </div>
        </div>
    )
};

