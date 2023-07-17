import React from "react";
import './styles.css'
import { TypeButton } from "./types";

export const Button: React.FC<TypeButton> = ({buttonText, onClick}) => {
    return <button className="btn" onClick={onClick} >{buttonText}</button>
};