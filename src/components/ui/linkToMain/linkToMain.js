import { StyledLinkToMain } from "./styled";
import React from "react";

export default function LinkToMain ({link, children}) {
    return (
        <StyledLinkToMain to={link}>{children}</StyledLinkToMain>
    )
}