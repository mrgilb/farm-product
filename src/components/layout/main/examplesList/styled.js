import styled from "styled-components";
import { Ul, Li } from "../../../../elements";



const StyledExampleUl = styled(Ul)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const StyledExampleLi = styled(Li)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${(props) => props.IsFarmers ? "#E1EDCE" : "#F8DDD7"};
    width: 540px;
    min-height: 197px;
`;

export {StyledExampleLi, StyledExampleUl};