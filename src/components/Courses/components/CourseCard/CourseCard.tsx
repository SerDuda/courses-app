import React from "react";
import { Button } from "../../../../common/Button/Button";
import './styles.css'
import { getDate } from "../../../../helpers/dateGeneratop";
import { showAuthors } from "../../../../helpers/showAutors";
import { pipeDuration } from "../../../../helpers/pipeDuration";
import { mockedAuthorsList } from "../../../../context/Context"
import { TypeCard } from "./types";
import { useNavigate } from "react-router-dom";

export const CourseCard: React.FC<TypeCard> = ({ card }: TypeCard) => {
    const navigate = useNavigate()

    const showCourseInfo = () => {
        navigate(`/courses/${card.id}`, { state: card })
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
                    <div onClick={showCourseInfo}>
                        <Button buttonText="Show course" />
                    </div>
                </div>
            </div>
        </div>
    )
};

