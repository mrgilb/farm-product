import { StyledFooter } from "./styled";
import React from "react";
import Logo from "../../ui/logo/logo";
import Produced from "../../ui/produced/produced";

export default function Footer() {
    return (
        <StyledFooter>
            <Logo></Logo>
            <Produced>Создано 2021</Produced>
        </StyledFooter>
    )
}