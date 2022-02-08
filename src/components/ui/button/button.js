import StyledButton from "./styled";
import React from "react";

export default function Button ({children, className, state, onClick}) {
    return (
        <StyledButton onClick={onClick} disabled = {state} className = {className}>{children}</StyledButton>
    )
}