import React from "react";
import './styles.css';
import { TInputProps } from "./types";

export const Input: React.FC<TInputProps> = ({labelText, placeholdetText, onChange, valueText, nameInput }: TInputProps) => {
    
    return (
        <div className="container-input">
            <label htmlFor="search" className="label__value">{labelText}</label>
            <input type="text" 
            name={nameInput} 
            className="input"
            placeholder={placeholdetText}
            onChange={onChange}
            value={valueText}
            />
        </div>
    )
};