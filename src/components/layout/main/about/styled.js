import styled from "styled-components";
import { Section, H1, P } from "../../../../elements";


const StyledSectionAbout = styled(Section)`
    background-color: #D8ECFE;
    display: flex;
    min-height: 600px;
    gap: 104px;
    box-sizing: border-box;
`;

const AboutTitle = styled(H1)`
    font-family: "inter", sans-serif;
    font-size: 44px;
    line-height: 50px;
    font-weight: 700;
    color: #333333;
    margin-top: 183px;
`;

const AboutText = styled(P)`
    font-family: "inter", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: #333333;
    margin-top: 24px; 
`;

export {StyledSectionAbout, AboutTitle, AboutText};
