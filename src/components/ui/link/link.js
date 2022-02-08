import React from "react";
import { StyledLinkMain } from "./styled";

export default function LinkMain ({children, link}) {
    return (
        <StyledLinkMain to={link}>{children}</StyledLinkMain>
    )
}