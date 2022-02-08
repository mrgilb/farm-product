import React from "react";
import CardExample from "../../../ui/exampleCard/exampleCard";
import { StyledExampleLi, StyledExampleUl } from "./styled";



export default function ExampleList ({examples}) {
    return examples && examples.length ? (
        <StyledExampleUl>
            {examples.map((example) => (
                <StyledExampleLi key = {example.id} IsFarmers = {example.farmers}>
                    <CardExample {...example}></CardExample>
                </StyledExampleLi>
            ))}
        </StyledExampleUl>) : null};