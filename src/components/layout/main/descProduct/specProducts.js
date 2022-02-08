import React from "react";
import { Li } from "../../../../elements";
import { StyledParametr,StyledValueParametr, StyleListPatametrs } from "./styled";

export default function SpecProduct ({specs}) {
    return specs && specs.length ? (
        <StyleListPatametrs>
            {specs.map((item) => (
                <Li key = {item.property}>
                    <StyledParametr>
                        {item.property}:{" "}
                        <StyledValueParametr>{item.value}</StyledValueParametr>
                    </StyledParametr>
                </Li>
            ))}
        </StyleListPatametrs>
    ): null
}