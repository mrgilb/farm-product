import styled from "styled-components";
import { H2, Section } from "../../../../elements";

const StyledExampleSection = styled(Section)`
padding: 100px 90px;
gap: 64px;
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
`;

const StyledExamplesTitle = styled(H2)`
    font-family: "inter", sans-serif;
    font-size: 36px;
    line-height: 41px;
    font-weight: 700;
    color: #333333;
`;

export {StyledExampleSection, StyledExamplesTitle};



