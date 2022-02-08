import React from "react";
import ExampleList from "../examplesList/examplesList";
import { StyledExampleSection, StyledExamplesTitle } from "./styled";
import { examples } from "../../../../moke";
import LinkMain from "../../../ui/link/link";


export default function ExampleSection () {
    return (
        <StyledExampleSection>
            <StyledExamplesTitle>Почему фермерские продукты лучше?</StyledExamplesTitle>
            <ExampleList examples={examples}></ExampleList>
            <LinkMain link={"/catalog"}>Купить</LinkMain>
        </StyledExampleSection>
    )
}